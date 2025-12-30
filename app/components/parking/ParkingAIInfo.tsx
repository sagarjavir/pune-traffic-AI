export default function ParkingAIInfo() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-2">
        🧠 AI Behind Smart Parking
      </h2>
      <ul className="list-disc ml-5 text-sm space-y-1">
        <li>CCTV + YOLO for slot detection</li>
        <li>Computer vision for occupancy analysis</li>
        <li>Edge AI for faster detection</li>
        <li>GPS + Maps API for route guidance</li>
        <li>Illegal parking detection using ANPR</li>
      </ul>
    </div>
  );
}
