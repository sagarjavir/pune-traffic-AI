const signals = [ { junction: "Hinjewadi Phase 1", green: "45 sec", red: "75 sec", mode: "AI", congestion: "High", }, { junction: "Shivajinagar", green: "40 sec", red: "60 sec", mode: "AI", congestion: "Medium", }, { junction: "Swargate", green: "30 sec", red: "90 sec", mode: "Manual", congestion: "High", }, { junction: "Baner Road", green: "55 sec", red: "45 sec", mode: "AI", congestion: "Low", }, ];
export default function SignalTable() {
  return (
    <div className="bg-white p-5 rounded-xl shadow overflow-hidden">
      <h2 className="font-semibold mb-4">
        Junction-wise Signal Timings
      </h2>

      <table className="responsive-table w-full text-sm border">
        <thead>
          <tr>
            <th>Junction</th>
            <th>Green Time</th>
            <th>Red Time</th>
            <th>Control Mode</th>
            <th>Congestion</th>
          </tr>
        </thead>

        <tbody>
          {signals.map((s, i) => (
            <tr key={i}>
              <td data-label="Junction">{s.junction}</td>
              <td data-label="Green Time">{s.green}</td>
              <td data-label="Red Time">{s.red}</td>
              <td data-label="Control Mode">{s.mode}</td>
              <td data-label="Congestion">{s.congestion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
