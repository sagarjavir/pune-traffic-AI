"use client";

import { useMemo, useState } from "react";
import { accidents } from "../../data/puneTraffic";
import AccidentSummaryCard from "./AccidentSummaryCard";
import LiveSnapshot from "./LiveSnapshot";
import AccidentLocationMap from "./AccidentLocationMap";
import EmergencyActions from "./EmergencyActions";
import VehicleDetailsList from "./VehicleDetailsList";
import AccidentAIInfo from "./AccidentAIInfo";

const statusStyles: Record<(typeof accidents)[number]["status"], string> = {
  Active: "bg-red-100 text-red-700",
  Dispatched: "bg-amber-100 text-amber-800",
  Cleared: "bg-green-100 text-green-700",
};

export default function AccidentOperations() {
  const [selectedId, setSelectedId] = useState(accidents[0].id);
  const selected = useMemo(
    () => accidents.find((item) => item.id === selectedId) ?? accidents[0],
    [selectedId]
  );

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm overflow-x-auto">
        <h2 className="text-sm font-semibold text-gray-800 mb-3">Active Incidents</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {accidents.map((incident) => (
            <button
              key={incident.id}
              type="button"
              onClick={() => setSelectedId(incident.id)}
              className={`text-left rounded-lg border p-3 transition ${
                selected.id === incident.id
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-gray-200 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-medium text-sm">{incident.id}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full ${statusStyles[incident.status]}`}
                >
                  {incident.status}
                </span>
              </div>
              <p className="text-xs text-gray-600 mt-1">{incident.location}</p>
              <p className="text-xs text-gray-500 mt-1">
                {incident.severity} · {incident.confidence}% confidence
              </p>
            </button>
          ))}
        </div>
      </div>

      <AccidentSummaryCard
        accidentId={selected.id}
        location={selected.location}
        detectedAt={selected.detectedAt}
        severity={selected.severity}
        source={selected.source}
        status={selected.status}
        confidence={selected.confidence}
        cameraId={selected.cameraId}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <LiveSnapshot
          cameraId={selected.cameraId}
          timestamp={selected.detectedAt}
          location={selected.location}
        />
        <AccidentLocationMap
          latitude={selected.lat}
          longitude={selected.lng}
          locationName={selected.location}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <VehicleDetailsList vehicles={selected.vehicles} />
        <EmergencyActions accidentId={selected.id} />
      </div>

      <AccidentAIInfo summary={selected.aiSummary} />
    </div>
  );
}
