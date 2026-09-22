import { NextResponse } from "next/server";
import { authenticateUser } from "../../../lib/users";
import { createSessionToken, SESSION_COOKIE, sessionCookieOptions } from "../../../lib/session";
import { ROLE_HOME } from "../../../lib/roles";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string; password?: string };
    const email = body.email?.trim() ?? "";
    const password = body.password ?? "";

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    const user = authenticateUser(email, password);
    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    const token = await createSessionToken(user);
    const response = NextResponse.json({
      user,
      redirectTo: ROLE_HOME[user.role],
    });
    response.cookies.set(SESSION_COOKIE, token, sessionCookieOptions);
    return response;
  } catch {
    return NextResponse.json({ error: "Unable to sign in right now." }, { status: 500 });
  }
}
