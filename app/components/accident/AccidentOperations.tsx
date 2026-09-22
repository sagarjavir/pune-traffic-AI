"use client";

import { useMemo, useState } from "react";
import AccidentSummaryCard from "./AccidentSummaryCard";
import LiveSnapshot from "./LiveSnapshot";
import AccidentLocationMap from "./AccidentLocationMap";
import EmergencyActions from "./EmergencyActions";
import VehicleDetailsList from "./VehicleDetailsList";
import AccidentAIInfo from "./AccidentAIInfo";
import { updateIncident, useIncidents } from "../../hooks/useIncidents";

const statusStyles = {
  Active: "bg-red-100 text-red-700",
  Dispatched: "bg-amber-100 text-amber-800",
  Cleared: "bg-green-100 text-green-700",
} as const;

export default function AccidentOperations() {
  const incidents = useIncidents();
  const [selectedId, setSelectedId] = useState(incidents[0]?.id);
  const selected = useMemo(
    () => incidents.find((item) => item.id === selectedId) ?? incidents[0],
    [incidents, selectedId]
  );

  if (!selected) {
    return <p className="text-sm text-slate-500">No incidents in the queue.</p>;
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm overflow-x-auto">
        <h2 className="text-sm font-semibold text-gray-800 mb-3">Active Incidents</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {incidents.map((incident) => (
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
                {incident.corridorOpen ? " · Corridor" : ""}
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
          corridorOpen={selected.corridorOpen}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <VehicleDetailsList vehicles={selected.vehicles} />
        <EmergencyActions
          accidentId={selected.id}
          status={selected.status}
          corridorOpen={selected.corridorOpen}
          onNotifyAmbulance={() =>
            updateIncident(selected.id, { status: "Dispatched" })
          }
          onNotifyPolice={() => updateIncident(selected.id, { status: "Dispatched" })}
          onOverrideSignal={() =>
            updateIncident(selected.id, { status: "Dispatched", corridorOpen: true })
          }
          onMarkCleared={() =>
            updateIncident(selected.id, { status: "Cleared", corridorOpen: false })
          }
        />
      </div>

      <AccidentAIInfo summary={selected.aiSummary} />
    </div>
  );
}
