export default function ParkingSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card title="Total Slots" value="18,240" color="bg-indigo-600" />
      <Card title="Available" value="5,120" color="bg-green-600" />
      <Card title="Occupied" value="12,480" color="bg-yellow-500" />
      <Card title="Illegal Parking" value="94" color="bg-red-600" />
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
