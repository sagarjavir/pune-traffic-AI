"use client";

import { useIncidents } from "../../hooks/useIncidents";

export default function GreenCorridor() {
  const open = useIncidents().filter((item) => item.corridorOpen);

  if (open.length === 0) {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
        <h2 className="font-semibold text-slate-800 mb-2">Green Corridor</h2>
        <p className="text-sm text-slate-600">
          No corridor is open. From Accidents, use Override Signal to synchronize lights
          toward Sassoon Hospital.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-green-50 border border-green-300 rounded-xl p-5">
      <h2 className="font-semibold text-green-700 mb-2">Green Corridor Active</h2>
      <p className="text-sm mb-3">
        Signals are held green for emergency movement on the selected accident route.
      </p>
      <ul className="text-sm list-disc ml-5">
        {open.map((item) => (
          <li key={item.id}>
            {item.id}: ambulance moving {item.location} → Sassoon General Hospital
          </li>
        ))}
      </ul>
    </div>
  );
}
