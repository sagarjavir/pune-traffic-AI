import type { PublicUser, Role } from "./roles";

function bytesToBase64Url(bytes: ArrayBuffer | Uint8Array) {
  const arr = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let binary = "";
  for (let i = 0; i < arr.length; i += 1) {
    binary += String.fromCharCode(arr[i]);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function utf8ToBase64Url(value: string) {
  return bytesToBase64Url(new TextEncoder().encode(value));
}

function base64UrlToUtf8(value: string) {
  const pad = value.length % 4 === 0 ? "" : "=".repeat(4 - (value.length % 4));
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/") + pad;
  const binary = atob(base64);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

export const SESSION_COOKIE = "pune_traffic_session";
const SESSION_DAYS = 7;

function getSecret() {
  const secret = process.env.AUTH_SECRET;
  if (secret) return secret;
  if (process.env.NODE_ENV !== "production") {
    return "pune-traffic-ai-dev-secret";
  }
  throw new Error("AUTH_SECRET is required in production.");
}

async function hmac(input: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(input)
  );
  return bytesToBase64Url(signature);
}

export async function createSessionToken(user: PublicUser) {
  const payload = JSON.stringify({
    ...user,
    exp: Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000,
  });
  const encoded = utf8ToBase64Url(payload);
  const signature = await hmac(encoded);
  return `${encoded}.${signature}`;
}

export async function readSessionToken(token: string): Promise<PublicUser | null> {
  const [encoded, signature] = token.split(".");
  if (!encoded || !signature) return null;

  const expected = await hmac(encoded);
  if (expected.length !== signature.length) return null;

  let valid = true;
  for (let i = 0; i < expected.length; i += 1) {
    if (expected[i] !== signature[i]) valid = false;
  }
  if (!valid) return null;

  try {
    const parsed = JSON.parse(base64UrlToUtf8(encoded)) as PublicUser & { exp: number };
    if (!parsed?.id || !parsed.email || !parsed.role || parsed.exp < Date.now()) {
      return null;
    }
    return {
      id: parsed.id,
      name: parsed.name,
      email: parsed.email,
      role: parsed.role as Role,
      badgeNumber: parsed.badgeNumber,
      department: parsed.department,
      locality: parsed.locality,
    };
  } catch {
    return null;
  }
}

export const sessionCookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: SESSION_DAYS * 24 * 60 * 60,
};
