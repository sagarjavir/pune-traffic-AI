"use client";

import CityMap from "../maps/CityMap";
import { useLiveTraffic } from "../../hooks/useLiveTraffic";

export default function LiveMap() {
  const live = useLiveTraffic();

  return (
    <div className="w-full rounded-xl border bg-white shadow p-4">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h2 className="text-lg font-semibold">Live Traffic Status</h2>
        <span className="text-xs text-slate-500">Updated {live.updatedAt}</span>
      </div>
      <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
        <CityMap
          zoom={12}
          markers={live.junctions.map((junction) => ({
            id: junction.id,
            name: junction.name,
            lat: junction.lat,
            lng: junction.lng,
            level: junction.level,
            type: "traffic" as const,
            description: `Congestion: ${junction.level}`,
          }))}
        />
      </div>
      <div className="flex gap-4 mt-4 text-sm flex-wrap">
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
