const areas = [
  { area: "Hinjewadi", status: "Heavy", color: "bg-red-500" },
  { area: "Baner", status: "Moderate", color: "bg-yellow-400" },
  { area: "Shivajinagar", status: "Free Flow", color: "bg-green-500" },
];

export default function LiveTrafficStatus() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-3">
        📍 Live Traffic Status
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {areas.map((a) => (
          <div
            key={a.area}
            className={`${a.color} text-white p-4 rounded-lg`}
          >
            <h3 className="font-bold">{a.area}</h3>
            <p>{a.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
