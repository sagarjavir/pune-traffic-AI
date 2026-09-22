"use client";

import { useEffect, useState } from "react";
import { cityStats, junctions } from "../data/puneTraffic";

export function useLiveTraffic() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((value) => value + 1), 8000);
    return () => clearInterval(id);
  }, []);

  return {
    tick,
    congestion: cityStats.congestion,
    junctions,
    updatedAt: new Date().toLocaleTimeString(),
  };
}
