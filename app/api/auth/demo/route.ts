import { NextResponse } from "next/server";
import { DEMO_ACCOUNTS } from "../../../lib/demoAccounts";
import { authenticateUser } from "../../../lib/users";
import { createSessionToken, SESSION_COOKIE, sessionCookieOptions } from "../../../lib/session";
import { ROLE_HOME, ROLES, type Role } from "../../../lib/roles";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { role?: string };
    if (!body.role || !(ROLES as readonly string[]).includes(body.role)) {
      return NextResponse.json({ error: "Choose a demo role." }, { status: 400 });
    }

    const account = DEMO_ACCOUNTS.find((item) => item.role === (body.role as Role));
    if (!account) {
      return NextResponse.json({ error: "Demo account not found." }, { status: 404 });
    }

    const user = authenticateUser(account.email, account.password);
    if (!user) {
      return NextResponse.json({ error: "Demo sign-in failed." }, { status: 401 });
    }

    const token = await createSessionToken(user);
    const response = NextResponse.json({
      user,
      redirectTo: ROLE_HOME[user.role],
    });
    response.cookies.set(SESSION_COOKIE, token, sessionCookieOptions);
    return response;
  } catch {
    return NextResponse.json({ error: "Unable to sign in with the demo account." }, { status: 500 });
  }
}
