const violations = [
  {
    plate: "MH12AB1234",
    type: "Red Light Jump",
    location: "Shivajinagar",
    time: "10:42 AM",
    status: "Pending",
  },
  {
    plate: "MH14CD5678",
    type: "No Helmet",
    location: "Swargate",
    time: "11:05 AM",
    status: "Paid",
  },
  {
    plate: "MH12XY9988",
    type: "Wrong Lane",
    location: "Baner Road",
    time: "12:20 PM",
    status: "Pending",
  },
];

export default function ViolationTable() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-4">
        Detected Violations (ANPR + AI)
      </h2>

      {/* ✅ Desktop Table */}
      <div className="hidden md:block">
        <table className="w-full text-sm border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Vehicle No</th>
              <th className="p-2 border">Violation</th>
              <th className="p-2 border">Location</th>
              <th className="p-2 border">Time</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {violations.map((v, i) => (
              <tr key={i} className="text-center">
                <td className="p-2 border">{v.plate}</td>
                <td className="p-2 border">{v.type}</td>
                <td className="p-2 border">{v.location}</td>
                <td className="p-2 border">{v.time}</td>
                <td
                  className={`p-2 border font-medium ${
                    v.status === "Paid"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {v.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Mobile Card View */}
      <div className="md:hidden space-y-3">
        {violations.map((v, i) => (
          <div
            key={i}
            className="border rounded-lg p-3 text-sm shadow-sm"
          >
            <div className="flex justify-between">
              <span className="font-semibold">{v.plate}</span>
              <span
                className={`font-medium ${
                  v.status === "Paid"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {v.status}
              </span>
            </div>

            <div className="mt-2 space-y-1 text-gray-700">
              <p><strong>Violation:</strong> {v.type}</p>
              <p><strong>Location:</strong> {v.location}</p>
              <p><strong>Time:</strong> {v.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
