"use client";

import { useEffect, useMemo, useState } from "react";
import { cityStats, junctions } from "../data/puneTraffic";
import { useIncidents } from "../hooks/useIncidents";

function shortLocation(location: string) {
  return location.split(",")[0];
}

export default function LiveTicker() {
  const incidents = useIncidents();
  const [index, setIndex] = useState(0);

  const items = useMemo(() => {
    const live: string[] = [];

    for (const incident of incidents) {
      const place = shortLocation(incident.location);
      if (incident.corridorOpen) {
        live.push(`Green corridor OPEN · ${place} → Sassoon Hospital`);
      }
      if (incident.status === "Active") {
        live.push(`Accident at ${place} · ${incident.severity} severity · ${incident.confidence}% AI`);
      }
      if (incident.status === "Dispatched") {
        live.push(`Units dispatched to ${place} · ambulance / police en route`);
      }
    }

    const busy = junctions.filter((item) => item.level === "High");
    for (const junction of busy) {
      live.push(`${junction.name} · ${junction.level} congestion · green ${junction.green}`);
    }

    live.push(`City average speed ${cityStats.avgSpeed} · peak ${cityStats.aiPrediction}`);
    live.push(`${cityStats.incidentsToday} incidents on the board today`);

    return live;
  }, [incidents]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((value) => (value + 1) % Math.max(items.length, 1));
    }, 3500);
    return () => clearInterval(id);
  }, [items.length]);

  const current = items[index % items.length] ?? "Pune Traffic AI is live";

  return (
    <div className="bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="flex items-center gap-3 px-4 md:px-6 py-1.5 text-xs md:text-sm overflow-hidden">
        <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-red-600 px-2 py-0.5 font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-white ticker-pulse" />
          LIVE
        </span>
        <p key={current} className="ticker-fade min-w-0 truncate">
          {current}
        </p>
      </div>
    </div>
  );
}
