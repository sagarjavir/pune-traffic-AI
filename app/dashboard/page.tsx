"use client";
import { useState } from "react";
import AdminDashboard from "../components/dashboards/AdminDashboard";
import PoliceDashboard from "../components/dashboards/PoliceDashboard";
import CitizenDashboard from "../components/dashboards/CitizenDashboard";

export default function DashboardPage() {
  // Simulated role (replace with auth later)
  const [role, setRole] = useState<"admin" | "police" | "citizen">("admin");

  return (
    <div className="p-6">
      {/* Role Switcher (Demo Purpose) */}
      <div className="mb-6 flex gap-3">
        <button onClick={() => setRole("admin")} className="btn">
          Admin
        </button>
        <button onClick={() => setRole("police")} className="btn">
          Police
        </button>
        <button onClick={() => setRole("citizen")} className="btn">
          Citizen
        </button>
      </div>

      {role === "admin" && <AdminDashboard />}
      {role === "police" && <PoliceDashboard />}
      {role === "citizen" && <CitizenDashboard />}
    </div>
  );
}
