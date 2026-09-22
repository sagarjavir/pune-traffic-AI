import { violations } from "../../data/puneTraffic";

export default function ViolationTable() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-4">Detected Violations (ANPR + AI)</h2>

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
            {violations.map((item) => (
              <tr key={item.plate} className="text-center">
                <td className="p-2 border">{item.plate}</td>
                <td className="p-2 border">{item.type}</td>
                <td className="p-2 border">{item.location}</td>
                <td className="p-2 border">{item.time}</td>
                <td
                  className={`p-2 border font-medium ${
                    item.status === "Paid" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-3">
        {violations.map((item) => (
          <div key={item.plate} className="border rounded-lg p-3 text-sm shadow-sm">
            <div className="flex justify-between">
              <span className="font-semibold">{item.plate}</span>
              <span
                className={`font-medium ${
                  item.status === "Paid" ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.status}
              </span>
            </div>
            <div className="mt-2 space-y-1 text-gray-700">
              <p>
                <strong>Violation:</strong> {item.type}
              </p>
              <p>
                <strong>Location:</strong> {item.location}
              </p>
              <p>
                <strong>Time:</strong> {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
