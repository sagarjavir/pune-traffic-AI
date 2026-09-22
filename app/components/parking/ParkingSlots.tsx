import { parkingLots } from "../../data/puneTraffic";

export default function ParkingSlots() {
  return (
    <div className="bg-white p-5 rounded-xl shadow overflow-hidden">
      <h2 className="font-semibold mb-4">Parking Availability by Area</h2>
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
          {parkingLots.map((lot) => (
            <tr key={lot.id}>
              <td data-label="Area">{lot.name}</td>
              <td data-label="Total Slots">{lot.total}</td>
              <td data-label="Available">{lot.available}</td>
              <td data-label="Status">{lot.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
