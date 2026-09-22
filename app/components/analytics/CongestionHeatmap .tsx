import CityMap from "../maps/CityMap";
import { junctions } from "../../data/puneTraffic";

export default function CongestionHeatmap() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-4">City Congestion Heatmap</h2>
      <div className="relative h-72 rounded-xl overflow-hidden">
        <CityMap
          zoom={12}
          markers={junctions.map((junction) => ({
            id: junction.id,
            name: junction.name,
            lat: junction.lat,
            lng: junction.lng,
            level: junction.level,
            type: "traffic" as const,
            description: `${junction.level} congestion`,
          }))}
        />
      </div>
      <div className="flex justify-center gap-6 mt-4 text-xs flex-wrap">
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
