const emergencies = [
  {
    id: "EM-1023",
    type: "Road Accident",
    location: "University Road",
    vehicle: "Ambulance",
    status: "On Route",
  },
  {
    id: "EM-1024",
    type: "Fire Incident",
    location: "Hadapsar",
    vehicle: "Fire Truck",
    status: "Signal Priority Active",
  },
];

export default function ActiveEmergencies() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-4">
        🚨 Active Emergency Requests
      </h2>

      <table className="w-full text-sm border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Type</th>
            <th className="p-2 border">Location</th>
            <th className="p-2 border">Vehicle</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {emergencies.map((e) => (
            <tr key={e.id} className="text-center">
              <td className="p-2 border">{e.id}</td>
              <td className="p-2 border">{e.type}</td>
              <td className="p-2 border">{e.location}</td>
              <td className="p-2 border">{e.vehicle}</td>
              <td className="p-2 border">{e.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
