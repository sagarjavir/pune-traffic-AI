"use client";

const trafficPoints = [
  { name: "Shivajinagar", level: "High", color: "bg-red-500" },
  { name: "Hinjewadi", level: "Medium", color: "bg-yellow-400" },
  { name: "Kothrud", level: "Low", color: "bg-green-500" },
  { name: "Swargate", level: "High", color: "bg-red-500" },
  { name: "Hadapsar", level: "Medium", color: "bg-yellow-400" },
];
export default function LiveMap() {
  return (
    <div className="w-full rounded-xl border bg-white shadow p-4">
      <h2 className="text-lg font-semibold mb-4">
        🚦 Live Traffic Status (Mock Data)
      </h2>
      {/* Map Placeholder */}
      <div className="relative w-full h-[350px] bg-gray-100 rounded-lg flex items-center justify-center">
        <span className="text-gray-500 text-sm">
          Pune City Map (Static Representation)
        </span>
        {/* Traffic Points */}
        <div className="absolute top-8 left-10 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs">Shivajinagar</span>
        </div>

        <div className="absolute top-20 right-14 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-xs">Hinjewadi</span>
        </div>

        <div className="absolute bottom-20 left-24 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs">Kothrud</span>
        </div>

        <div className="absolute bottom-10 right-24 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs">Swargate</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-4 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          High Congestion
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-yellow-400 rounded-full" />
          Medium
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-green-500 rounded-full" />
          Low
        </div>
      </div>
    </div>
  );
}

