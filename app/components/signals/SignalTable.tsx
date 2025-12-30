const signals = [
  {
    junction: "Hinjewadi Phase 1",
    green: "45 sec",
    red: "75 sec",
    mode: "AI",
    congestion: "High",
  },
  {
    junction: "Shivajinagar",
    green: "40 sec",
    red: "60 sec",
    mode: "AI",
    congestion: "Medium",
  },
  {
    junction: "Swargate",
    green: "30 sec",
    red: "90 sec",
    mode: "Manual",
    congestion: "High",
  },
  {
    junction: "Baner Road",
    green: "55 sec",
    red: "45 sec",
    mode: "AI",
    congestion: "Low",
  },
];

export default function SignalTable() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-4">
        Junction-wise Signal Timings
      </h2>

      <table className="w-full text-sm border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Junction</th>
            <th className="p-2 border">Green Time</th>
            <th className="p-2 border">Red Time</th>
            <th className="p-2 border">Control Mode</th>
            <th className="p-2 border">Congestion</th>
          </tr>
        </thead>
        <tbody>
          {signals.map((s, i) => (
            <tr key={i} className="text-center">
              <td className="p-2 border">{s.junction}</td>
              <td className="p-2 border">{s.green}</td>
              <td className="p-2 border">{s.red}</td>
              <td className="p-2 border">{s.mode}</td>
              <td className="p-2 border">{s.congestion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
