
export default function EmergencySummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card title="Active Emergencies" value="4" color="bg-red-600" />
      <Card title="Avg Response Time" value="6 min" color="bg-green-600" />
      <Card title="Green Corridors" value="3" color="bg-indigo-600" />
      <Card title="Hospitals Alerted" value="7" color="bg-yellow-500" />
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
