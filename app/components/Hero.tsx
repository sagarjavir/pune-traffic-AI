export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-10">
      <h1 className="text-4xl font-bold">
        Pune AI Traffic Management System
      </h1>
      <p className="mt-3 text-lg">
        Smart Signals • Safer Roads • Faster Emergency Response
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <Stat title="Congestion" value="Medium" />
        <Stat title="Active Signals" value="1,240+" />
        <Stat title="Incidents Today" value="18" />
        <Stat title="Avg Speed" value="32 km/h" />
      </div>
    </section>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white/20 rounded-xl p-4 text-center">
      <p className="text-sm">{title}</p>
      <h2 className="text-xl font-bold">{value}</h2>
    </div>
  );
}
