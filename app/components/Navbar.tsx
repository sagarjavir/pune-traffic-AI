"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { liveServices } from "../config/liveServices";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Live Traffic", path: "/live/traffic" },
  { name: "Signal Control", path: "/signals" },
  { name: "Violations", path: "/violations" },
  { name: "Emergency", path: "/emergency" },
  { name: "Parking", path: "/parking" },
  { name: "Analytics", path: "/analytics" },
  { name: "Citizen", path: "/citizen" },

];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-indigo-700 text-white px-6 py-3 shadow-md">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          🚦 Pune AI Traffic
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`hover:text-yellow-300 transition ${
                  pathname === item.path
                    ? "text-yellow-300 font-semibold"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop LIVE badge */}
        <div className="hidden md:block">
          <span className="bg-green-500 px-3 py-1 rounded-full text-sm">
            LIVE
          </span>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-indigo-600 rounded-lg shadow-lg">
          {/* Main Navigation */}
          <ul className="flex flex-col divide-y divide-indigo-500">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 text-sm ${
                    pathname === item.path
                      ? "bg-yellow-400 text-black font-semibold"
                      : "hover:bg-indigo-500"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Live Services Section */}
          <div className="border-t border-indigo-500 mt-2">
            <p className="px-4 py-2 text-xs text-indigo-200 uppercase">
              Live Services
            </p>
            <ul className="grid grid-cols-2 gap-2 p-3 text-sm">
              {liveServices.map((service) => (
                <li key={service.path}>
                  <Link
                    href={service.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-3 py-2 rounded ${
                      pathname === service.path
                        ? "bg-yellow-400 text-black"
                        : "bg-indigo-700 hover:bg-indigo-500"
                    }`}
                  >
                    {service.icon} {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
