"use client";

import { accidents as seedAccidents, type Accident } from "../data/puneTraffic";
import { useSyncExternalStore } from "react";

export type LiveAccident = Accident & {
  corridorOpen: boolean;
};

let incidents: LiveAccident[] = seedAccidents.map((item) => ({
  ...item,
  corridorOpen: false,
}));

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

export function getIncidents() {
  return incidents;
}

export function subscribeIncidents(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function updateIncident(id: string, patch: Partial<LiveAccident>) {
  incidents = incidents.map((item) =>
    item.id === id ? { ...item, ...patch } : item
  );
  emit();
}

export function useIncidents() {
  return useSyncExternalStore(subscribeIncidents, getIncidents, getIncidents);
}
