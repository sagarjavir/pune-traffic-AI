import TrafficSummary from "@/app/components/live/traffic/TrafficSummary";
import JunctionTable from "@/app/components/live/traffic/JunctionTable";
import TechStack from "@/app/components/live/traffic/TechStack";
import LiveMap from "@/app/components/maps/LiveMap";

export default function LiveTrafficPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        🚦 Live Traffic Monitoring – Pune
      </h1>
      <TrafficSummary />
      <LiveMap />
      <JunctionTable />
      <TechStack />
    </div>
  );
}
