"use client";

import { useEffect, useMemo, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { interpolatePath } from "../../data/puneTraffic";

const DURATION_MS = 14000;

export default function MovingAmbulance({
  path,
}: {
  path: [number, number][];
}) {
  const [progress, setProgress] = useState(0);
  const pathKey = path.map((point) => point.join(",")).join("|");

  const icon = useMemo(
    () =>
      L.divIcon({
        className: "ambulance-marker",
        html: '<div class="ambulance-pulse" aria-hidden="true">🚑</div>',
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      }),
    []
  );

  useEffect(() => {
    setProgress(0);
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const next = Math.min(1, (now - start) / DURATION_MS);
      setProgress(next);
      if (next < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [pathKey]);

  const position = interpolatePath(path, progress);
  const eta = Math.max(0, Math.round((1 - progress) * 12));

  return (
    <Marker position={position} icon={icon} zIndexOffset={500}>
      <Popup>
        {progress < 1
          ? `Ambulance on green corridor · ${eta} min ETA`
          : "Ambulance arrived at Sassoon Hospital"}
      </Popup>
    </Marker>
  );
}
