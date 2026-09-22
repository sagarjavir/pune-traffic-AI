import React from "react";
import type { Accident } from "../../data/puneTraffic";

const severityColorMap: Record<Accident["severity"], string> = {
  Low: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-800",
  High: "bg-red-100 text-red-700",
};

type AccidentSummaryCardProps = Partial<
  Pick<
    Accident,
    | "id"
    | "location"
    | "detectedAt"
    | "severity"
    | "source"
    | "status"
    | "confidence"
    | "cameraId"
  >
> & {
  accidentId?: string;
};

const AccidentSummaryCard: React.FC<AccidentSummaryCardProps> = ({
  accidentId,
  id,
  location = "Unknown location",
  detectedAt = "—",
  severity = "Medium",
  source = "AI System",
  status,
  confidence,
  cameraId,
}) => {
  const displayId = accidentId ?? id ?? "ACC-UNKNOWN";

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4 gap-3">
        <h2 className="text-lg font-semibold text-gray-800">
          Accident Detected
        </h2>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${severityColorMap[severity]}`}
        >
          {severity} Severity
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500">Accident ID</p>
          <p className="font-medium text-gray-800">{displayId}</p>
        </div>
        <div>
          <p className="text-gray-500">Detected At</p>
          <p className="font-medium text-gray-800">{detectedAt}</p>
        </div>
        <div>
          <p className="text-gray-500">Location</p>
          <p className="font-medium text-gray-800">{location}</p>
        </div>
        <div>
          <p className="text-gray-500">Detection Source</p>
          <p className="font-medium text-gray-800">{source}</p>
        </div>
        {cameraId && (
          <div>
            <p className="text-gray-500">Camera</p>
            <p className="font-medium text-gray-800">{cameraId}</p>
          </div>
        )}
        {status && (
          <div>
            <p className="text-gray-500">Response Status</p>
            <p className="font-medium text-gray-800">{status}</p>
          </div>
        )}
        {typeof confidence === "number" && (
          <div className="md:col-span-2">
            <p className="text-gray-500 mb-1">AI Confidence</p>
            <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
              <div
                className="h-full bg-indigo-600"
                style={{ width: `${confidence}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">{confidence}% match</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccidentSummaryCard;
