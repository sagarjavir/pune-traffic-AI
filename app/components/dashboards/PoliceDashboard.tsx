import Link from "next/link";
import { accidents, violations } from "../../data/puneTraffic";

export default function PoliceDashboard() {
  const pending = violations.filter((item) => item.status === "Pending").length;
  const activeAccidents = accidents.filter((item) => item.status !== "Cleared");

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Traffic Police Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Live Violations" value={String(violations.length)} />
        <Card title="Pending Challans" value={String(pending)} />
        <Card title="Accident Alerts" value={String(activeAccidents.length)} />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold mb-2">Live Alerts</h2>
          <ul className="text-sm space-y-2">
            {violations.map((item) => (
              <li key={item.plate}>
                {item.type} – {item.location} ({item.plate})
              </li>
            ))}
          </ul>
          <Link href="/violations" className="inline-block mt-3 text-sm text-indigo-600">
            Review evidence
          </Link>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold mb-2">Accident Alerts</h2>
          <ul className="text-sm space-y-2">
            {activeAccidents.map((item) => (
              <li key={item.id}>
                {item.id} · {item.location}
              </li>
            ))}
          </ul>
          <Link href="/accident" className="inline-block mt-3 text-sm text-indigo-600">
            Dispatch from accident desk
          </Link>
        </div>
      </div>
    </section>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-red-600 text-white rounded-xl p-4">
      <p className="text-sm">{title}</p>
      <h2 className="text-xl font-bold">{value}</h2>
    </div>
  );
}
