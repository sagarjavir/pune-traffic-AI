"use client";

interface LiveSnapshotProps {
  timestamp?: string;
  cameraId?: string;
  location?: string;
}

const LiveSnapshot: React.FC<LiveSnapshotProps> = ({
  timestamp = "17 Sep 2026, 10:42 AM",
  cameraId = "CAM-12",
  location = "Shivajinagar Junction",
}) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <h3 className="text-sm font-semibold text-gray-800">Live Snapshot</h3>
        <span className="text-xs text-gray-500">Camera ID: {cameraId}</span>
      </div>

      <div className="relative w-full h-[320px] bg-slate-900 overflow-hidden">
        <svg viewBox="0 0 640 320" className="w-full h-full" aria-hidden>
          <rect width="640" height="320" fill="#1e293b" />
          <rect x="0" y="210" width="640" height="110" fill="#334155" />
          <rect x="300" y="210" width="16" height="110" fill="#facc15" opacity="0.7" />
          <rect x="0" y="258" width="640" height="6" fill="#f8fafc" opacity="0.25" />
          <rect x="80" y="40" width="180" height="90" fill="#475569" />
          <rect x="390" y="30" width="200" height="110" fill="#475569" />
          <circle cx="120" cy="70" r="8" fill="#fbbf24" />
          <circle cx="430" cy="60" r="8" fill="#fbbf24" />
          <rect x="210" y="228" width="70" height="32" rx="4" fill="#e2e8f0" />
          <rect x="330" y="232" width="86" height="38" rx="5" fill="#0f172a" />
          <rect x="205" y="220" width="80" height="18" rx="3" fill="#ef4444" opacity="0.85" />
          <rect x="140" y="80" width="12" height="130" fill="#64748b" />
          <circle cx="146" cy="78" r="10" fill="#22c55e" />
        </svg>

        <div className="absolute inset-0 border-2 border-red-500 pointer-events-none">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            Accident Detected
          </span>
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
            {location}
          </span>
        </div>
      </div>

      <div className="px-4 py-2 text-xs text-gray-600 flex justify-between">
        <span>{timestamp}</span>
        <span className="text-red-600 font-medium animate-pulse">LIVE</span>
      </div>
    </div>
  );
};

export default LiveSnapshot;
