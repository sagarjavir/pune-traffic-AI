

export default function JunctionSignalTimings() {
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
          <tr>
            <td data-label="Junction">Hinjewadi Phase 1</td>
            <td data-label="Green Time">45 sec</td>
            <td data-label="Red Time">75 sec</td>
            <td data-label="Control Mode">AI</td>
            <td data-label="Congestion">High</td>
          </tr>

          <tr>
            <td data-label="Junction">Shivajinagar</td>
            <td data-label="Green Time">40 sec</td>
            <td data-label="Red Time">60 sec</td>
            <td data-label="Control Mode">AI</td>
            <td data-label="Congestion">Medium</td>
          </tr>

          <tr>
            <td data-label="Junction">Swargate</td>
            <td data-label="Green Time">30 sec</td>
            <td data-label="Red Time">90 sec</td>
            <td data-label="Control Mode">Manual</td>
            <td data-label="Congestion">High</td>
          </tr>

          <tr>
            <td data-label="Junction">Baner Road</td>
            <td data-label="Green Time">55 sec</td>
            <td data-label="Red Time">45 sec</td>
            <td data-label="Control Mode">AI</td>
            <td data-label="Congestion">Low</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
