const parkingAreas = [
  {
    area: "Shivajinagar",
    total: 1200,
    available: 320,
    status: "Moderate",
  },
  {
    area: "Hinjewadi Phase 1",
    total: 2200,
    available: 180,
    status: "High Load",
  },
  {
    area: "Swargate",
    total: 1500,
    available: 520,
    status: "Good",
  },
];

export default function ParkingSlots() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-4">
        Parking Availability by Area
      </h2>
      <table className="w-full text-sm border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Area</th>
            <th className="p-2 border">Total Slots</th>
            <th className="p-2 border">Available</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {parkingAreas.map((p, i) => (
            <tr key={i} className="text-center">
              <td className="p-2 border">{p.area}</td>
              <td className="p-2 border">{p.total}</td>
              <td className="p-2 border">{p.available}</td>
              <td className="p-2 border">{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
