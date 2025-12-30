const predictions = [
  {
    area: "Hinjewadi",
    peakTime: "8:30 – 10:30 AM",
    congestion: "High",
  },
  {
    area: "Shivajinagar",
    peakTime: "6:00 – 8:00 PM",
    congestion: "Medium",
  },
  {
    area: "Swargate",
    peakTime: "9:00 – 11:00 AM",
    congestion: "High",
  },
];

export default function PeakPrediction() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-3">
         AI Peak Traffic Predictions
      </h2>
      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Area</th>
            <th className="p-2 border">Peak Time</th>
            <th className="p-2 border">Congestion</th>
          </tr>
        </thead>
        <tbody>
          {predictions.map((p, i) => (
            <tr key={i} className="text-center">
              <td className="p-2 border">{p.area}</td>
              <td className="p-2 border">{p.peakTime}</td>
              <td className="p-2 border">{p.congestion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
