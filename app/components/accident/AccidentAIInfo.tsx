export default function AccidentAIInfo({ summary }: { summary?: string }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow border border-gray-200">
      <h2 className="font-semibold mb-2 text-gray-800">AI Accident Analysis</h2>
      {summary && <p className="text-sm text-gray-700 mb-3">{summary}</p>}
      <ul className="list-disc ml-5 text-sm space-y-1 text-gray-700">
        <li>YOLO object detection on junction CCTV identifies crashed vehicles</li>
        <li>ANPR reads number plates for police and insurance follow-up</li>
        <li>Severity scored from speed drop, debris, and occupant estimates</li>
        <li>Nearest ambulance, police beat, and hospital are ranked by ETA</li>
        <li>Adaptive signals can open a green corridor automatically</li>
      </ul>
    </div>
  );
}
