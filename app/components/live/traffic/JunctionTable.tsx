import { junctions } from "../../../data/puneTraffic";

export default function JunctionTable() {
  return (
    <div className="bg-white p-5 rounded-xl shadow overflow-hidden">
      <h2 className="font-semibold mb-4">Junction-wise Signal Timings</h2>
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
          {junctions.map((row) => (
            <tr key={row.id}>
              <td data-label="Junction">{row.name}</td>
              <td data-label="Green Time">{row.green}</td>
              <td data-label="Red Time">{row.red}</td>
              <td data-label="Control Mode">{row.mode}</td>
              <td data-label="Congestion">{row.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
