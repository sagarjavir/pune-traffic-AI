"use client";

import Link from "next/link";
import { useAuth } from "./auth/AuthProvider";
import { canAccess } from "../lib/roles";

export default function Footer() {
  const { user } = useAuth();

  const linkClass = "hover:text-yellow-300";
  const ops = [
    { href: "/live/traffic", label: "Live Traffic" },
    { href: "/accident", label: "Accident Detection" },
    { href: "/emergency", label: "Emergency Response" },
  ];
  const publicLinks = [
    { href: "/citizen", label: "Citizen Portal" },
    { href: "/parking", label: "Smart Parking" },
  ];

  function hrefFor(path: string) {
    if (!user) return `/login?from=${encodeURIComponent(path)}`;
    if (canAccess(user.role, path)) return path;
    return "/unauthorized";
  }

  return (
    <footer className="bg-slate-900 text-slate-200 px-6 py-8 mt-auto">
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <p className="font-semibold text-white">Pune Traffic AI</p>
          <p className="mt-2 text-slate-400">
            Demo control-room for adaptive signals, accident detection, and
            emergency green corridors across Pune.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Operations</p>
          <ul className="mt-2 space-y-1">
            {ops.map((item) => (
              <li key={item.href}>
                <Link href={hrefFor(item.href)} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Public</p>
          <ul className="mt-2 space-y-1">
            {publicLinks.map((item) => (
              <li key={item.href}>
                <Link href={hrefFor(item.href)} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
            {!user && (
              <>
                <li>
                  <Link href="/login" className={linkClass}>
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link href="/register" className={linkClass}>
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <p className="max-w-6xl mx-auto mt-6 text-xs text-slate-500">
        Mock operational data for demonstration. Not an official PMC system.
      </p>
    </footer>
  );
}
