const parkingAreas = [ { area: "Shivajinagar", total: 1200, available: 320, status: "Moderate", }, { area: "Hinjewadi Phase 1", total: 2200, available: 180, status: "High Load", }, { area: "Swargate", total: 1500, available: 520, status: "Good", }, ];
export default function ParkingSlots() {
  return (
    <div className="bg-white p-5 rounded-xl shadow overflow-hidden">
      <h2 className="font-semibold mb-4">
        Parking Availability by Area
      </h2>

      <table className="responsive-table w-full text-sm border">
        <thead>
          <tr>
            <th>Area</th>
            <th>Total Slots</th>
            <th>Available</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {parkingAreas.map((p, i) => (
            <tr key={i}>
              <td data-label="Area">{p.area}</td>
              <td data-label="Total Slots">{p.total}</td>
              <td data-label="Available">{p.available}</td>
              <td data-label="Status">{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
