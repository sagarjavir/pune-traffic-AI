"use client";

import { useEffect, useMemo, useState } from "react";
import CityMap from "../maps/CityMap";
import { SASSOON_HOSPITAL, buildCorridor } from "../../data/puneTraffic";

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
  const corridor = useMemo(
    () => (corridorOpen ? buildCorridor([latitude, longitude]) : undefined),
    [corridorOpen, latitude, longitude]
  );
  const [eta, setEta] = useState(12);

  useEffect(() => {
    if (!corridorOpen) {
      setEta(12);
      return;
    }
    setEta(12);
    const id = setInterval(() => {
      setEta((value) => Math.max(0, value - 1));
    }, 1100);
    return () => clearInterval(id);
  }, [corridorOpen, latitude, longitude]);

  return (
    <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white">
      <div className="px-4 py-2 border-b bg-white flex justify-between items-center gap-3">
        <h3 className="text-sm font-semibold text-gray-800">Accident Location</h3>
        <span className="text-xs text-gray-500">{locationName}</span>
      </div>

      <div className="h-72">
        <CityMap
          center={[latitude, longitude]}
          zoom={corridorOpen ? 13 : 16}
          highlight={{ lat: latitude, lng: longitude, radius: 70 }}
          showDefaultMarker
          corridor={corridor}
          animateAmbulance={corridorOpen}
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
                    lat: SASSOON_HOSPITAL[0],
                    lng: SASSOON_HOSPITAL[1],
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
          ? eta > 0
            ? `Ambulance moving on the green corridor to Sassoon · ${eta} min ETA`
            : "Ambulance arrived at Sassoon General Hospital"
          : "Map centered on the accident. Override signals to open a green corridor."}
      </div>
    </div>
  );
};

export default AccidentLocationMap;
