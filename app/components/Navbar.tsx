"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { liveServices } from "../config/liveServices";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Live Traffic", path: "/live-traffic" },
  { name: "Signal Control", path: "/signals" },
  { name: "Violations", path: "/violations" },
  { name: "Emergency", path: "/emergency" },
  { name: "Parking", path: "/parking" },
  { name: "Analytics", path: "/analytics" },
  { name: "Citizen", path: "/citizen" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-indigo-700 text-white px-6 py-3 shadow-md">
      <div className="flex items-center justify-between">

        {/* Logo / Title */}
        <Link href="/" className="flex items-center gap-2">
        <div className="text-xl font-bold tracking-wide">
          🚦 Pune AI Traffic
        </div>
        </Link>

        {/* Navigation Links */}
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
            // Live dropdown

          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden md:block text-sm">
           <li
            className="relative cursor-pointer"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="bg-green-500 px-3 py-1 rounded-full">
            LIVE
          </span>
           {/* {open && (
              <ul className="absolute top-6 right-10 bg-white text-black rounded shadow-lg w-56 z-50">
                {liveServices.map((service) => (
                  <li key={service.path}>
                    <Link
                      href={service.path}
                      className="block px-4 py-2 hover:bg-indigo-100"
                    >
                      {service.icon} {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )} */}
          </li>


        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden mt-3 grid grid-cols-2 gap-2 text-sm">
        {/* {liveServices.map((service) => (
                  <li key={service.path}>
                    <Link
                      href={service.path}
                      className={`px-3 py-2 rounded ${
              pathname === service.path
                ? "bg-yellow-400 text-black"
                : "bg-indigo-600"
            }`}
                    >
                      {service.icon} {service.name}
                    </Link>
                  </li>
                ))} */}
      </div>
    </nav>
  );
}
