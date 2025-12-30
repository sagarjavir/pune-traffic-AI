export default function ViolationSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card title="Violations Today" value="184" color="bg-red-600" />
      <Card title="Pending Challans" value="96" color="bg-yellow-500" />
      <Card title="Paid Challans" value="88" color="bg-green-600" />
      <Card title="Cameras Active" value="620" color="bg-indigo-600" />
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
