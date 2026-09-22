"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth } from "./auth/AuthProvider";
import { navItemsForRole, ROLE_LABEL } from "../lib/roles";
import { RoleBadge } from "./auth/AuthFields";
import { Button } from "./ui/button";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, loading, logout } = useAuth();
  const navItems = navItemsForRole(user?.role ?? null);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <nav className="bg-indigo-700 text-white px-4 md:px-6 py-3 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="text-lg md:text-xl font-bold tracking-wide shrink-0">
          Pune Traffic AI
        </Link>

        <ul className="hidden lg:flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`hover:text-yellow-300 transition ${
                  isActive(item.path) ? "text-yellow-300 font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm">
                {user.name.split(" ")[0]}
              </span>
              <RoleBadge role={user.role} />
              <Button
                size="sm"
                variant="secondary"
                className="h-8"
                onClick={() => void logout()}
              >
                Logout
              </Button>
            </>
          ) : loading ? (
            <span className="text-xs text-indigo-100">Checking session…</span>
          ) : (
            <>
              <Link href="/login" className="text-sm hover:text-yellow-300">
                Sign in
              </Link>
              <Link
                href="/register"
                className="rounded-md bg-yellow-400 px-3 py-1 text-sm font-semibold text-slate-900 hover:bg-yellow-300"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-4 bg-indigo-600 rounded-lg shadow-lg">
          <ul className="flex flex-col divide-y divide-indigo-500">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 text-sm ${
                    isActive(item.path)
                      ? "bg-yellow-400 text-black font-semibold"
                      : "hover:bg-indigo-500"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="px-4 py-3">
              {user ? (
                <button
                  className="text-sm font-medium"
                  onClick={() => {
                    setMenuOpen(false);
                    void logout();
                  }}
                >
                  Logout ({ROLE_LABEL[user.role]})
                </button>
              ) : (
                <div className="flex gap-4 text-sm">
                  <Link href="/login" onClick={() => setMenuOpen(false)}>
                    Sign in
                  </Link>
                  <Link href="/register" onClick={() => setMenuOpen(false)}>
                    Register
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
