
export default function SignalSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card title="Total Signals" value="1240" color="bg-indigo-600" />
      <Card title="AI-Controlled" value="890" color="bg-green-600" />
      <Card title="Manual Override" value="35" color="bg-yellow-500" />
      <Card title="Emergency Active" value="4" color="bg-red-600" />
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
