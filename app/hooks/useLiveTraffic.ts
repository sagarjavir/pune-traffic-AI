"use client";
import { useEffect, useState } from "react";

export function useLiveTraffic() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/ws/traffic");

    ws.onmessage = (event) => {
      setData(JSON.parse(event.data));
    };
    ws.onerror = () => console.error("WebSocket error");
    return () => ws.close();
  }, []);
  return data;
}
