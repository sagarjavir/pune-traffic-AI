"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";

interface EmergencyActionsProps {
  accidentId?: string;
  status?: "Active" | "Dispatched" | "Cleared";
  corridorOpen?: boolean;
  onNotifyAmbulance?: (id: string) => void;
  onNotifyPolice?: (id: string) => void;
  onOverrideSignal?: (id: string) => void;
  onMarkCleared?: (id: string) => void;
}

const EmergencyActions: React.FC<EmergencyActionsProps> = ({
  accidentId = "ACC-2026-0012",
  status = "Active",
  corridorOpen = false,
  onNotifyAmbulance,
  onNotifyPolice,
  onOverrideSignal,
  onMarkCleared,
}) => {
  const [log, setLog] = useState<string[]>([]);
  const disabled = status === "Cleared";

  const record = (message: string, handler?: (id: string) => void) => {
    setLog((prev) => [`${new Date().toLocaleTimeString()} · ${message}`, ...prev].slice(0, 4));
    handler?.(accidentId);
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-4">
      <div className="flex justify-between items-center mb-4 gap-3">
        <h3 className="text-sm font-semibold text-gray-800">Emergency Actions</h3>
        <span className="text-xs text-gray-500">
          {accidentId} · {status}
          {corridorOpen ? " · Corridor on" : ""}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Button
          className="h-auto flex-col py-3 bg-green-600 hover:bg-green-700"
          disabled={disabled}
          onClick={() =>
            record("Ambulance dispatched", onNotifyAmbulance ?? (() => undefined))
          }
        >
          Ambulance
          <span className="text-xs font-normal mt-1">Notify nearest unit</span>
        </Button>

        <Button
          className="h-auto flex-col py-3 bg-blue-600 hover:bg-blue-700"
          disabled={disabled}
          onClick={() => record("Police dispatched", onNotifyPolice ?? (() => undefined))}
        >
          Police
          <span className="text-xs font-normal mt-1">Dispatch patrol</span>
        </Button>

        <Button
          variant="destructive"
          className="h-auto flex-col py-3"
          disabled={disabled}
          onClick={() =>
            record("Green corridor activated", onOverrideSignal ?? (() => undefined))
          }
        >
          Override Signal
          <span className="text-xs font-normal mt-1">Open corridor</span>
        </Button>
      </div>

      {status !== "Cleared" && (
        <Button
          variant="outline"
          className="mt-3 w-full"
          onClick={() => record("Incident marked cleared", onMarkCleared ?? (() => undefined))}
        >
          Mark incident cleared
        </Button>
      )}

      {log.length > 0 && (
        <ul className="mt-4 space-y-1 text-xs text-green-700 bg-green-50 rounded-lg p-3">
          {log.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      )}

      <p className="text-xs text-gray-500 mt-3">
        Dispatch updates this incident and the Emergency page in this browser session.
      </p>
    </div>
  );
};

export default EmergencyActions;
