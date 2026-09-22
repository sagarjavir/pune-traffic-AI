"use client";

import Link from "next/link";
import { useAuth } from "./auth/AuthProvider";
import { canAccess } from "../lib/roles";

const features = [
  {
    title: "AI Smart Traffic Signals",
    path: "/signals",
    description: "Adaptive green times based on live density at each junction.",
  },
  {
    title: "Emergency Vehicle Priority",
    path: "/emergency",
    description: "Green corridors for ambulances and fire trucks across Pune.",
  },
  {
    title: "Traffic Violation Detection",
    path: "/violations",
    description: "ANPR cameras catch red-light jumps, helmet, and lane offences.",
  },
  {
    title: "Smart Parking System",
    path: "/parking",
    description: "Find open lots near Shivajinagar, Hinjewadi, and Swargate.",
  },
  {
    title: "Predictive Traffic Analytics",
    path: "/analytics",
    description: "Forecast peak hours and congestion risk before they form.",
  },
  {
    title: "Accident Detection with AI",
    path: "/accident",
    description: "Instant collision alerts with vehicle details and dispatch actions.",
  },
];

export default function Features() {
  const { user } = useAuth();

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-slate-900">
        AI Capabilities for Pune
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature) => {
          const allowed = user ? canAccess(user.role, feature.path) : false;
          const href = !user
            ? `/login?from=${encodeURIComponent(feature.path)}`
            : allowed
              ? feature.path
              : "/unauthorized";

          return (
            <Link
              key={feature.path}
              href={href}
              className="bg-white rounded-xl shadow p-5 hover:scale-[1.02] transition cursor-pointer hover:bg-indigo-50 border border-transparent hover:border-indigo-200"
            >
              <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{feature.description}</p>
              <p className="text-xs text-indigo-600 mt-3">
                {allowed ? "Open module" : user ? "Admin or Police only" : "Sign in to explore"}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
