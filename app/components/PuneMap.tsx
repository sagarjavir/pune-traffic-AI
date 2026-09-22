import CityMap from "./maps/CityMap";
import { junctions } from "../data/puneTraffic";

export default function PuneMap() {
  return (
    <section className="p-10 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-slate-900">
          Pune Traffic Heat Zones
        </h2>
        <p className="text-sm text-slate-600 mb-4">
          Live congestion markers for Hinjewadi, Swargate, Shivajinagar, Hadapsar,
          Kothrud, and Baner.
        </p>
        <div className="bg-white rounded-xl shadow overflow-hidden h-[380px]">
          <CityMap
            zoom={12}
            markers={junctions.map((junction) => ({
              id: junction.id,
              name: junction.name,
              lat: junction.lat,
              lng: junction.lng,
              level: junction.level,
              type: "traffic" as const,
              description: `${junction.mode} signal · Green ${junction.green}`,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
