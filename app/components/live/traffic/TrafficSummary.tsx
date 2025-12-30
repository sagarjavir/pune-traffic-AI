
export default function TrafficSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card title="Overall Traffic" value="Moderate" color="bg-green-600" />
      <Card title="Congested Junctions" value="7" color="bg-yellow-500" />
      <Card title="Accidents Detected" value="3" color="bg-red-600" />
      <Card title="AI Prediction" value="Peak at 7 PM" color="bg-indigo-600" />
    </div>
  );
}

function Card({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div className={`${color} text-white rounded-xl p-4`}>
      <p className="text-sm">{title}</p>
      <h2 className="text-xl font-bold">{value}</h2>
    </div>
  );
}