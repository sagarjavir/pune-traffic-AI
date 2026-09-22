import Link from "next/link";
import { accidents, cityStats, junctions } from "../../data/puneTraffic";

export default function AdminDashboard() {
  const activeAccidents = accidents.filter((item) => item.status !== "Cleared");
  const highCongestion = junctions.filter((item) => item.level === "High").length;

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">City Traffic Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card title="Active Signals" value={cityStats.signals} />
        <Card title="Congestion Zones" value={String(highCongestion)} />
        <Card title="Accidents Today" value={String(accidents.length)} />
        <Card title="Emergency Requests" value="9" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold mb-2">AI Insights</h2>
          <ul className="list-disc ml-5 text-sm space-y-1">
            <li>Signal optimization improved traffic flow by 21%</li>
            <li>Peak congestion predicted at 7:30–9:30 PM</li>
            <li>Hinjewadi needs signal recalibration</li>
            <li>Shivajinagar accident is blocking the FC Road approach</li>
          </ul>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold">Live Accident Queue</h2>
            <Link href="/accident" className="text-sm text-indigo-600">
              Open module
            </Link>
          </div>
          <ul className="text-sm space-y-2">
            {activeAccidents.map((incident) => (
              <li key={incident.id} className="flex justify-between gap-3">
                <span>
                  {incident.id} · {incident.location}
                </span>
                <span className="text-red-600 font-medium">{incident.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-indigo-600 text-white rounded-xl p-4">
      <p className="text-sm">{title}</p>
      <h2 className="text-xl font-bold">{value}</h2>
    </div>
  );
}
