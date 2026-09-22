export const PUNE_CENTER: [number, number] = [18.5204, 73.8567];
export const SASSOON_HOSPITAL: [number, number] = [18.5284, 73.8722];

export function buildCorridor(
  from: [number, number],
  to: [number, number] = SASSOON_HOSPITAL
): [number, number][] {
  const lerp = (t: number): [number, number] => [
    from[0] + (to[0] - from[0]) * t,
    from[1] + (to[1] - from[1]) * t,
  ];
  return [from, lerp(0.32), lerp(0.62), to];
}

export function interpolatePath(path: [number, number][], t: number): [number, number] {
  if (path.length === 0) return PUNE_CENTER;
  if (path.length === 1 || t <= 0) return path[0];
  if (t >= 1) return path[path.length - 1];

  const segments = path.length - 1;
  const scaled = t * segments;
  const index = Math.min(Math.floor(scaled), segments - 1);
  const local = scaled - index;
  const start = path[index];
  const end = path[index + 1];
  return [
    start[0] + (end[0] - start[0]) * local,
    start[1] + (end[1] - start[1]) * local,
  ];
}

export type CongestionLevel = "High" | "Medium" | "Low";
export type AccidentSeverity = "Low" | "Medium" | "High";
export type DetectionSource = "Camera" | "Sensor" | "AI System";

export type Junction = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  level: CongestionLevel;
  green: string;
  red: string;
  mode: "AI" | "Manual";
};

export type VehicleInvolved = {
  plate: string;
  type: string;
  color: string;
  damage: string;
  occupants: number;
  airbag: string;
};

export type Accident = {
  id: string;
  location: string;
  lat: number;
  lng: number;
  detectedAt: string;
  severity: AccidentSeverity;
  source: DetectionSource;
  cameraId: string;
  status: "Active" | "Dispatched" | "Cleared";
  confidence: number;
  vehicles: VehicleInvolved[];
  aiSummary: string;
};

export type ParkingLot = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  total: number;
  available: number;
  status: string;
  distance: string;
};

export type Violation = {
  plate: string;
  type: string;
  location: string;
  time: string;
  status: "Pending" | "Paid";
};

export const cityStats = {
  congestion: "Medium",
  signals: "1,240+",
  incidentsToday: 3,
  avgSpeed: "32 km/h",
  congestedJunctions: 3,
  accidentsDetected: 3,
  aiPrediction: "Peak at 7 PM",
};

export const junctions: Junction[] = [
  {
    id: "j1",
    name: "Shivajinagar",
    lat: 18.5308,
    lng: 73.847,
    level: "High",
    green: "40 sec",
    red: "60 sec",
    mode: "AI",
  },
  {
    id: "j2",
    name: "Hinjewadi Phase 1",
    lat: 18.5912,
    lng: 73.738,
    level: "High",
    green: "45 sec",
    red: "75 sec",
    mode: "AI",
  },
  {
    id: "j3",
    name: "Swargate",
    lat: 18.5018,
    lng: 73.8636,
    level: "High",
    green: "30 sec",
    red: "90 sec",
    mode: "Manual",
  },
  {
    id: "j4",
    name: "Hadapsar",
    lat: 18.5089,
    lng: 73.926,
    level: "Medium",
    green: "38 sec",
    red: "62 sec",
    mode: "AI",
  },
  {
    id: "j5",
    name: "Kothrud",
    lat: 18.5074,
    lng: 73.8077,
    level: "Low",
    green: "50 sec",
    red: "40 sec",
    mode: "AI",
  },
  {
    id: "j6",
    name: "Baner Road",
    lat: 18.559,
    lng: 73.7868,
    level: "Low",
    green: "55 sec",
    red: "45 sec",
    mode: "AI",
  },
];

export const accidents: Accident[] = [
  {
    id: "ACC-2026-0012",
    location: "Shivajinagar Junction, Pune",
    lat: 18.5308,
    lng: 73.847,
    detectedAt: "17 Sep 2026, 10:42 AM",
    severity: "High",
    source: "AI System",
    cameraId: "CAM-12",
    status: "Active",
    confidence: 94,
    vehicles: [
      {
        plate: "MH12 AB 4455",
        type: "Sedan",
        color: "White",
        damage: "Front bumper and hood",
        occupants: 2,
        airbag: "Deployed",
      },
      {
        plate: "MH14 CD 7788",
        type: "SUV",
        color: "Black",
        damage: "Driver-side panel",
        occupants: 1,
        airbag: "Not deployed",
      },
    ],
    aiSummary:
      "Rear-end collision inferred from sudden stop, overlapping bounding boxes, and debris pattern. Confidence 94%. Recommend ambulance + police dispatch and signal override on FC Road.",
  },
  {
    id: "ACC-2026-0011",
    location: "University Road, Pune",
    lat: 18.5289,
    lng: 73.8553,
    detectedAt: "17 Sep 2026, 09:18 AM",
    severity: "Medium",
    source: "Camera",
    cameraId: "CAM-07",
    status: "Dispatched",
    confidence: 87,
    vehicles: [
      {
        plate: "MH12 EF 2211",
        type: "Two-wheeler",
        color: "Blue",
        damage: "Fallen vehicle, possible rider injury",
        occupants: 1,
        airbag: "N/A",
      },
    ],
    aiSummary:
      "Two-wheeler down event detected near pedestrian crossing. Ambulance already notified. Keep green corridor on University Road.",
  },
  {
    id: "ACC-2026-0010",
    location: "Hadapsar Bypass, Pune",
    lat: 18.5089,
    lng: 73.926,
    detectedAt: "17 Sep 2026, 08:05 AM",
    severity: "Low",
    source: "Sensor",
    cameraId: "CAM-21",
    status: "Cleared",
    confidence: 81,
    vehicles: [
      {
        plate: "MH12 GH 9901",
        type: "Hatchback",
        color: "Silver",
        damage: "Minor bumper scratch",
        occupants: 1,
        airbag: "Not deployed",
      },
    ],
    aiSummary:
      "Low-impact sideswipe. Traffic restored. Incident logged for insurance and ANPR records.",
  },
];

export const parkingLots: ParkingLot[] = [
  {
    id: "p1",
    name: "Shivajinagar Multi-level",
    lat: 18.5315,
    lng: 73.8492,
    total: 1200,
    available: 320,
    status: "Moderate",
    distance: "250m",
  },
  {
    id: "p2",
    name: "Hinjewadi Phase 1 Lot A",
    lat: 18.5918,
    lng: 73.7395,
    total: 2200,
    available: 180,
    status: "High Load",
    distance: "400m",
  },
  {
    id: "p3",
    name: "Swargate Bus Stand Parking",
    lat: 18.5012,
    lng: 73.8648,
    total: 1500,
    available: 520,
    status: "Good",
    distance: "600m",
  },
];

export const violations: Violation[] = [
  {
    plate: "MH12AB1234",
    type: "Red Light Jump",
    location: "Shivajinagar",
    time: "10:42 AM",
    status: "Pending",
  },
  {
    plate: "MH14CD5678",
    type: "No Helmet",
    location: "Swargate",
    time: "11:05 AM",
    status: "Paid",
  },
  {
    plate: "MH12XY9988",
    type: "Wrong Lane",
    location: "Baner Road",
    time: "12:20 PM",
    status: "Pending",
  },
];

export const congestionColor: Record<CongestionLevel, string> = {
  High: "#ef4444",
  Medium: "#eab308",
  Low: "#22c55e",
};

export const parkingStats = {
  areas: parkingLots.length,
  totalSlots: parkingLots.reduce((sum, lot) => sum + lot.total, 0),
  available: parkingLots.reduce((sum, lot) => sum + lot.available, 0),
  occupied: parkingLots.reduce((sum, lot) => sum + (lot.total - lot.available), 0),
};

export const violationStats = {
  today: violations.length,
  pending: violations.filter((item) => item.status === "Pending").length,
  paid: violations.filter((item) => item.status === "Paid").length,
};

export const signalStats = {
  monitored: junctions.length,
  aiControlled: junctions.filter((item) => item.mode === "AI").length,
  manual: junctions.filter((item) => item.mode === "Manual").length,
  highCongestion: junctions.filter((item) => item.level === "High").length,
};
