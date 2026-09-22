"use client";

import { StatCard } from "../ui/stat-card";
import { useIncidents } from "../../hooks/useIncidents";

export default function EmergencySummary() {
  const incidents = useIncidents();
  const active = incidents.filter((item) => item.status !== "Cleared").length;
  const corridors = incidents.filter((item) => item.corridorOpen).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <StatCard title="Active Emergencies" value={String(active)} color="bg-red-600" />
      <StatCard title="Avg Response Time" value="6 min" color="bg-green-600" />
      <StatCard title="Green Corridors" value={String(corridors)} color="bg-indigo-600" />
      <StatCard title="Hospitals Alerted" value={active > 0 ? "1" : "0"} color="bg-yellow-500" />
    </div>
  );
}
