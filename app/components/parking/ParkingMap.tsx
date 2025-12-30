export default function ParkingMap() {

    return (
    <div className="bg-gray-100 p-6 rounded-xl">
      <h2 className="font-semibold mb-3 flex items-center gap-2">
        🗺️ Nearest Parking Guidance
      </h2>

      {/* Static Map Container */}
      <div className="relative h-64 bg-white rounded-xl shadow overflow-hidden">

        {/* Fake Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-yellow-50 to-blue-100" />

        {/* Roads */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 right-0 h-1 bg-gray-300" />
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300" />
        </div>

        {/* You are here */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow">
          🚗 You are here
        </div>

        {/* Nearby Parking Spots */}
        <div className="absolute top-10 left-10 bg-blue-600 text-white text-xs px-2 py-1 rounded shadow">
          🅿️ 250m
        </div>

        <div className="absolute top-16 right-14 bg-blue-600 text-white text-xs px-2 py-1 rounded shadow">
          🅿️ 400m
        </div>

        <div className="absolute bottom-20 left-16 bg-blue-600 text-white text-xs px-2 py-1 rounded shadow">
          🅿️ 600m
        </div>

        {/* Best Parking Highlight (AI) */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-4 py-2 rounded-xl shadow-lg border-2 border-white">
          ⭐ Best Spot <br />
          <span className="text-[10px]">
            Open · 250m · 10 slots
          </span>
        </div>

        {/* Route Line */}
        <div className="absolute bottom-12 left-1/2 w-24 h-1 border-t-2 border-dashed border-green-600 rotate-[-20deg]" />
      </div>

      {/* Footer Text */}
      <p className="text-xs text-gray-500 text-center mt-3">
        Static AI-based parking visualization (No Google Maps)
      </p>
    </div>
  );
}
