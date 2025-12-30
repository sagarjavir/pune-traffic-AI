export default function CongestionHeatmap() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-4">
        City Congestion Heatmap
      </h2>

      {/* Heatmap Grid */}
      <div className="relative h-72 bg-gray-100 rounded-xl p-4">
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-full">

          {/* High Congestion */}
          <div className="bg-red-500 rounded-lg text-white text-xs flex items-center justify-center">
            High
          </div>
          <div className="bg-red-400 rounded-lg text-white text-xs flex items-center justify-center">
            High
          </div>

          {/* Moderate */}
          <div className="bg-yellow-400 rounded-lg text-gray-800 text-xs flex items-center justify-center">
            Moderate
          </div>

          <div className="bg-yellow-300 rounded-lg text-gray-800 text-xs flex items-center justify-center">
            Moderate
          </div>

          {/* Free Flow */}
          <div className="bg-green-400 rounded-lg text-white text-xs flex items-center justify-center">
            Free
          </div>
          <div className="bg-green-500 rounded-lg text-white text-xs flex items-center justify-center">
            Free
          </div>

          {/* Mixed Areas */}
          <div className="bg-yellow-500 rounded-lg text-white text-xs flex items-center justify-center">
            Moderate
          </div>
          <div className="bg-red-600 rounded-lg text-white text-xs flex items-center justify-center">
            High
          </div>
          <div className="bg-green-300 rounded-lg text-gray-800 text-xs flex items-center justify-center">
            Free
          </div>
        </div>

        {/* City Label */}
        <div className="absolute bottom-2 right-3 text-xs text-gray-500">
          City Zones Overview
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-red-500 rounded" />
          High Congestion
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-yellow-400 rounded" />
          Moderate
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-green-500 rounded" />
          Free Flow
        </div>
      </div>
    </div>
  );
}
