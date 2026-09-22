"use client";

import CityMap from "../maps/CityMap";

interface AccidentLocationMapProps {
  latitude?: number;
  longitude?: number;
  locationName?: string;
}

const AccidentLocationMap: React.FC<AccidentLocationMapProps> = ({
  latitude = 18.5204,
  longitude = 73.8567,
  locationName = "Shivajinagar Junction, Pune",
}) => {
  return (
    <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white">
      <div className="px-4 py-2 border-b bg-white flex justify-between items-center gap-3">
        <h3 className="text-sm font-semibold text-gray-800">Accident Location</h3>
        <span className="text-xs text-gray-500">{locationName}</span>
      </div>

      <div className="h-64">
        <CityMap
          center={[latitude, longitude]}
          zoom={16}
          highlight={{ lat: latitude, lng: longitude, radius: 70 }}
          showDefaultMarker
          markers={[
            {
              id: "accident-point",
              name: locationName,
              lat: latitude,
              lng: longitude,
              type: "accident",
              description: "AI-detected collision zone",
            },
          ]}
        />
      </div>

      <div className="px-4 py-2 text-xs text-gray-600 bg-white">
        Map centered on the accident. Nearby signals can be overridden from Emergency Actions.
      </div>
    </div>
  );
};

export default AccidentLocationMap;
