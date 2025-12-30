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

      {/* ✅ Desktop Table */}
      <div className="hidden md:block">
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
                <td className="p-2 border font-medium text-indigo-600">
                  {e.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Mobile Card View */}
      <div className="md:hidden space-y-3">
        {emergencies.map((e) => (
          <div
            key={e.id}
            className="border rounded-lg p-3 shadow-sm text-sm"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold">{e.id}</span>
              <span className="text-indigo-600 font-medium">
                {e.status}
              </span>
            </div>

            <div className="space-y-1 text-gray-700">
              <p>
                <strong>Type:</strong> {e.type}
              </p>
              <p>
                <strong>Location:</strong> {e.location}
              </p>
              <p>
                <strong>Vehicle:</strong> {e.vehicle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
