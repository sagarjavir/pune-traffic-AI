import { cityStats } from "../../../data/puneTraffic";

export default function TrafficSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card title="Overall Traffic" value={cityStats.congestion} color="bg-green-600" />
      <Card
        title="Congested Junctions"
        value={String(cityStats.congestedJunctions)}
        color="bg-yellow-500"
      />
      <Card
        title="Accidents Detected"
        value={String(cityStats.accidentsDetected)}
        color="bg-red-600"
      />
      <Card title="AI Prediction" value={cityStats.aiPrediction} color="bg-indigo-600" />
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
