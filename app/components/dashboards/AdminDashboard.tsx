
// For PMC / Traffic Control Room
export default function AdminDashboard() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">
        🏛️ City Traffic Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card title="Active Signals" value="1240" />
        <Card title="Congestion Zones" value="18" />
        <Card title="Accidents Today" value="12" />
        <Card title="Emergency Requests" value="9" />
      </div>

      <div className="mt-6 bg-white p-5 rounded-xl shadow">
        <h2 className="font-semibold mb-2">AI Insights</h2>
        <ul className="list-disc ml-5 text-sm">
          <li>Signal optimization improved traffic flow by 21%</li>
          <li>Peak congestion predicted at 7:30–9:30 PM</li>
          <li>Hinjewadi needs signal recalibration</li>
        </ul>
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
