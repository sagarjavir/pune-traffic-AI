import { violations } from "../../data/puneTraffic";

export default function ViolationEvidence() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-4">Evidence Frames</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {violations.map((item) => (
          <div key={item.plate} className="rounded-lg border p-3">
            <div className="h-28 rounded-md bg-slate-800 text-white text-xs flex items-center justify-center">
              CCTV still · {item.location}
            </div>
            <h3 className="font-semibold mt-3">{item.type}</h3>
            <p className="text-sm text-gray-600">{item.plate}</p>
            <p className="text-xs text-gray-500 mt-1">Detected by AI camera at {item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
