
//Public-facing dashboard
export default function CitizenDashboard() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">
        🧑‍🤝‍🧑 Citizen Traffic Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Traffic Status" value="Moderate" />
        <Card title="Avg Speed" value="32 km/h" />
        <Card title="Parking Availability" value="Good" />
      </div>

      <div className="mt-6 bg-white p-5 rounded-xl shadow">
        <h2 className="font-semibold mb-2">Travel Advisory</h2>
        <p className="text-sm">
          Avoid University Road between 6–8 PM.
          Use Baner–Pashan bypass.
        </p>
      </div>
    </section>
  );
}
function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-green-600 text-white rounded-xl p-4">
      <p className="text-sm">{title}</p>
      <h2 className="text-xl font-bold">{value}</h2>
    </div>
  );
}
