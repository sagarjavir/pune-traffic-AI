import { NextResponse } from "next/server";
import { registerUser } from "../../../lib/users";
import { createSessionToken, SESSION_COOKIE, sessionCookieOptions } from "../../../lib/session";
import { ROLE_HOME, REGISTER_ROLES, type Role } from "../../../lib/roles";

export const runtime = "nodejs";

function isRole(value: unknown): value is Role {
  return typeof value === "string" && (REGISTER_ROLES as readonly string[]).includes(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
      role?: string;
      badgeNumber?: string;
      department?: string;
      locality?: string;
    };

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const password = body.password ?? "";
    const confirmPassword = body.confirmPassword ?? "";

    if (name.length < 2) {
      return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters." },
        { status: 400 }
      );
    }
    if (password !== confirmPassword) {
      return NextResponse.json({ error: "Passwords do not match." }, { status: 400 });
    }
    if (!isRole(body.role)) {
      return NextResponse.json(
        { error: "Register as Police or Citizen. Admin access is demo-login only." },
        { status: 400 }
      );
    }

    const user = registerUser({
      name,
      email,
      password,
      role: body.role,
      badgeNumber: body.badgeNumber,
      department: body.department,
      locality: body.locality,
    });

    const token = await createSessionToken(user);
    const response = NextResponse.json({
      user,
      redirectTo: ROLE_HOME[user.role],
    });
    response.cookies.set(SESSION_COOKIE, token, sessionCookieOptions);
    return response;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to create the account.";
    const status = message.includes("already exists") ? 409 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
