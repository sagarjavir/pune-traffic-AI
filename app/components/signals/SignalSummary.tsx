import { StatCard } from "../ui/stat-card";
import { signalStats } from "../../data/puneTraffic";

export default function SignalSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <StatCard title="Monitored Junctions" value={String(signalStats.monitored)} color="bg-indigo-600" />
      <StatCard title="AI-Controlled" value={String(signalStats.aiControlled)} color="bg-green-600" />
      <StatCard title="Manual Override" value={String(signalStats.manual)} color="bg-yellow-500" />
      <StatCard title="High Congestion" value={String(signalStats.highCongestion)} color="bg-red-600" />
    </div>
  );
}
