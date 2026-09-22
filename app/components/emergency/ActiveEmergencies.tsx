"use client";

import { useIncidents } from "../../hooks/useIncidents";

export default function ActiveEmergencies() {
  const incidents = useIncidents().filter((item) => item.status !== "Cleared");

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-4">Active Emergency Requests</h2>
      {incidents.length === 0 ? (
        <p className="text-sm text-slate-500">No active accidents in the queue.</p>
      ) : (
        <>
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
                {incidents.map((item) => (
                  <tr key={item.id} className="text-center">
                    <td className="p-2 border">{item.id}</td>
                    <td className="p-2 border">Road Accident</td>
                    <td className="p-2 border">{item.location}</td>
                    <td className="p-2 border">
                      {item.corridorOpen ? "Ambulance + corridor" : "Pending unit"}
                    </td>
                    <td className="p-2 border font-medium text-indigo-600">
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden space-y-3">
            {incidents.map((item) => (
              <div key={item.id} className="border rounded-lg p-3 shadow-sm text-sm">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold">{item.id}</span>
                  <span className="text-indigo-600 font-medium">{item.status}</span>
                </div>
                <p>
                  <strong>Location:</strong> {item.location}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
