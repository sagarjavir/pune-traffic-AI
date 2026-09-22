import CityMap from "../maps/CityMap";
import { parkingLots } from "../../data/puneTraffic";

export default function ParkingMap() {
  const recommended = parkingLots[0];

  return (
    <div className="bg-gray-100 p-6 rounded-xl">
      <h2 className="font-semibold mb-3">Nearest Parking Guidance</h2>
      <div className="relative h-64 bg-white rounded-xl shadow overflow-hidden">
        <CityMap
          center={[recommended.lat, recommended.lng]}
          zoom={13}
          markers={parkingLots.map((lot) => ({
            id: lot.id,
            name: lot.name,
            lat: lot.lat,
            lng: lot.lng,
            type: "parking" as const,
            description: `${lot.available} open of ${lot.total} · ${lot.distance}`,
          }))}
        />
      </div>
      <p className="text-xs text-gray-500 text-center mt-3">
        AI recommendation: {recommended.name} ({recommended.distance}, {recommended.available} slots).
      </p>
    </div>
  );
}
