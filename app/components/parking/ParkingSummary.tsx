import { StatCard } from "../ui/stat-card";
import { parkingStats } from "../../data/puneTraffic";

export default function ParkingSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <StatCard title="Parking Areas" value={String(parkingStats.areas)} color="bg-indigo-600" />
      <StatCard
        title="Total Slots"
        value={parkingStats.totalSlots.toLocaleString("en-IN")}
        color="bg-indigo-500"
      />
      <StatCard
        title="Available"
        value={parkingStats.available.toLocaleString("en-IN")}
        color="bg-green-600"
      />
      <StatCard
        title="Occupied"
        value={parkingStats.occupied.toLocaleString("en-IN")}
        color="bg-yellow-500"
      />
    </div>
  );
}
