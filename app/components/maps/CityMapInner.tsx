"use client";

import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  Circle,
  Marker,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { PUNE_CENTER, congestionColor, type CongestionLevel } from "../../data/puneTraffic";
import MovingAmbulance from "./MovingAmbulance";

export type CityMapMarker = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  level?: CongestionLevel;
  type?: "traffic" | "accident" | "parking" | "emergency";
  description?: string;
};

export type CityMapInnerProps = {
  markers?: CityMapMarker[];
  center?: [number, number];
  zoom?: number;
  highlight?: { lat: number; lng: number; radius?: number };
  showDefaultMarker?: boolean;
  corridor?: [number, number][];
  animateAmbulance?: boolean;
};

export default function CityMapInner({
  markers = [],
  center = PUNE_CENTER,
  zoom = 12,
  highlight,
  showDefaultMarker = false,
  corridor,
  animateAmbulance = false,
}: CityMapInnerProps) {
  useEffect(() => {
    const iconProto = L.Icon.Default.prototype as L.Icon.Default & {
      _getIconUrl?: unknown;
    };
    delete iconProto._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
    });
  }, []);

  return (
    <MapContainer
      key={`${center[0]}-${center[1]}-${zoom}`}
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      className="h-full w-full"
      style={{ minHeight: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {corridor && corridor.length > 1 && (
        <Polyline
          positions={corridor}
          pathOptions={{ color: "#16a34a", weight: 6, opacity: 0.85 }}
        />
      )}
      {animateAmbulance && corridor && corridor.length > 1 && (
        <MovingAmbulance path={corridor} />
      )}

      {highlight && (
        <>
          <Circle
            center={[highlight.lat, highlight.lng]}
            radius={highlight.radius ?? 80}
            pathOptions={{
              color: "#dc2626",
              fillColor: "#f87171",
              fillOpacity: 0.28,
            }}
          />
          {showDefaultMarker && (
            <Marker position={[highlight.lat, highlight.lng]}>
              <Popup>Accident location</Popup>
            </Marker>
          )}
        </>
      )}

      {markers.map((marker) => {
        const color =
          marker.type === "accident"
            ? "#dc2626"
            : marker.type === "parking"
              ? "#2563eb"
              : marker.type === "emergency"
                ? "#7c3aed"
                : congestionColor[marker.level ?? "Medium"];

        return (
          <CircleMarker
            key={marker.id}
            center={[marker.lat, marker.lng]}
            radius={marker.type === "accident" ? 12 : 10}
            pathOptions={{
              color,
              fillColor: color,
              fillOpacity: 0.85,
            }}
          >
            <Popup>
              <strong>{marker.name}</strong>
              {marker.level ? (
                <>
                  <br />
                  {marker.level} congestion
                </>
              ) : null}
              {marker.description ? (
                <>
                  <br />
                  {marker.description}
                </>
              ) : null}
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
