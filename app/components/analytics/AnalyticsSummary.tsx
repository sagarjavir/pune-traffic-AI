import { StatCard } from "../ui/stat-card";
import { cityStats, signalStats } from "../../data/puneTraffic";

export default function AnalyticsSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <StatCard
        title="High Congestion Zones"
        value={String(signalStats.highCongestion)}
        color="bg-orange-600"
      />
      <StatCard title="Peak Hours" value="8–11 AM" color="bg-red-600" />
      <StatCard title="Avg Speed" value={cityStats.avgSpeed} color="bg-green-600" />
      <StatCard title="Accident Risk" value={cityStats.congestion} color="bg-yellow-500" />
    </div>
  );
}
