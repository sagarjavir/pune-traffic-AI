
//For on-ground enforcement
export default function PoliceDashboard() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">
        🚔 Traffic Police Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Live Violations" value="42" />
        <Card title="Pending Challans" value="128" />
        <Card title="Accident Alerts" value="5" />
      </div>

      <div className="mt-6 bg-white p-5 rounded-xl shadow">
        <h2 className="font-semibold mb-2">Live Alerts</h2>
        <ul className="text-sm space-y-2">
          <li>🔴 Signal jump – Shivajinagar</li>
          <li>🏍️ No helmet – Swargate</li>
          <li>🚗 Wrong lane – Baner Road</li>
        </ul>
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
