"use client";

import CityMap from "../maps/CityMap";

const SASSOON: [number, number] = [18.5284, 73.8722];

interface AccidentLocationMapProps {
  latitude?: number;
  longitude?: number;
  locationName?: string;
  corridorOpen?: boolean;
}

const AccidentLocationMap: React.FC<AccidentLocationMapProps> = ({
  latitude = 18.5204,
  longitude = 73.8567,
  locationName = "Shivajinagar Junction, Pune",
  corridorOpen = false,
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
          zoom={corridorOpen ? 13 : 16}
          highlight={{ lat: latitude, lng: longitude, radius: 70 }}
          showDefaultMarker
          corridor={corridorOpen ? [[latitude, longitude], SASSOON] : undefined}
          markers={[
            {
              id: "accident-point",
              name: locationName,
              lat: latitude,
              lng: longitude,
              type: "accident",
              description: "AI-detected collision zone",
            },
            ...(corridorOpen
              ? [
                  {
                    id: "hospital",
                    name: "Sassoon General Hospital",
                    lat: SASSOON[0],
                    lng: SASSOON[1],
                    type: "emergency" as const,
                    description: "Green corridor destination",
                  },
                ]
              : []),
          ]}
        />
      </div>

      <div className="px-4 py-2 text-xs text-gray-600 bg-white">
        {corridorOpen
          ? "Green corridor open toward Sassoon General Hospital."
          : "Map centered on the accident. Override signals to open a green corridor."}
      </div>
    </div>
  );
};

export default AccidentLocationMap;
