import React from "react";

type Severity = "Low" | "Medium" | "High";

interface AccidentSummaryCardProps {
  accidentId?: string;
  location?: string;
  detectedAt?: string;
  severity?: Severity;
  source?: "Camera" | "Sensor" | "AI System";
}

const severityColorMap: Record<Severity, string> = {
  Low: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  High: "bg-red-100 text-red-700",
};

const AccidentSummaryCard: React.FC<AccidentSummaryCardProps> = ({
  accidentId,
  location,
  detectedAt,
  severity,
  source,
}) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          🚨 Accident Detected
        </h2>

        {/* <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${severityColorMap[severity]}`}
        >
          {severity} Severity
        </span> */}
      </div>

      {/* Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500">Accident ID</p>
          <p className="font-medium text-gray-800">{accidentId}</p>
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
      </div>
    </div>
  );
};

export default AccidentSummaryCard;
