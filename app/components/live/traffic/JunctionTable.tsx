const junctions = [
  {
    name: "Hinjewadi Phase 1",
    density: "Medium",
    speed: "12 km/h",
    incidents: "Accident",
    status: "🔴",
  },
  {
    name: "Shivajinagar",
    density: "High",
    speed: "26 km/h",
    incidents: "None",
    status: "🟡",
  },
  {
    name: "Swargate",
    density: "High",
    speed: "14 km/h",
    incidents: "Signal Jump",
    status: "🔴",
  },
  {
    name: "Kothrod",
    density: "Low",
    speed: "40 km/h",
    incidents: "None",
    status: "🟢",
  },
];

export default function JunctionTable() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-4">
        Junction-wise Live Traffic Status
      </h2>

      <table className="w-full text-sm border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Junction</th>
            <th className="p-2 border">Traffic Density</th>
            <th className="p-2 border">Avg Speed</th>
            <th className="p-2 border">Incidents</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {junctions.map((j, i) => (
            <tr key={i} className="text-center">
              <td className="p-2 border">{j.name}</td>
              <td className="p-2 border">{j.density}</td>
              <td className="p-2 border">{j.speed}</td>
              <td className="p-2 border">{j.incidents}</td>
              <td className="p-2 border">{j.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
