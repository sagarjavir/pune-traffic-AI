export default function AnalyticsSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card title="Avg Congestion" value="62%" color="bg-orange-600" />
      <Card title="Peak Hours" value="8–11 AM" color="bg-red-600" />
      <Card title="Avg Speed" value="28 km/h" color="bg-green-600" />
      <Card title="Accident Risk" value="Medium" color="bg-yellow-500" />
    </div>
  );
}

function Card({ title, value, color }: any) {
  return (
    <div className={`${color} text-white rounded-xl p-4`}>
      <p className="text-sm">{title}</p>
      <h2 className="text-xl font-bold">{value}</h2>
    </div>
  );
}
