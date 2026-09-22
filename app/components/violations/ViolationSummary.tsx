import { StatCard } from "../ui/stat-card";
import { violationStats } from "../../data/puneTraffic";

export default function ViolationSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <StatCard title="Violations Today" value={String(violationStats.today)} color="bg-red-600" />
      <StatCard title="Pending Challans" value={String(violationStats.pending)} color="bg-yellow-500" />
      <StatCard title="Paid Challans" value={String(violationStats.paid)} color="bg-green-600" />
      <StatCard title="Cameras in Feed" value="3" color="bg-indigo-600" />
    </div>
  );
}
