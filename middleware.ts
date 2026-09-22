import { NextResponse, type NextRequest } from "next/server";
import { canAccess } from "./app/lib/roles";
import { readSessionToken, SESSION_COOKIE } from "./app/lib/session";

const PUBLIC_PATHS = ["/", "/login", "/register", "/unauthorized"];

function isPublic(pathname: string) {
  return PUBLIC_PATHS.some((path) => pathname === path);
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const user = token ? await readSessionToken(token) : null;

  if (user && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (isPublic(pathname)) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  if (!user) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (!canAccess(user.role, pathname)) {
    const denied = new URL("/unauthorized", request.url);
    denied.searchParams.set("from", pathname);
    return NextResponse.redirect(denied);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
