export default function ViolationAIInfo() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-2">
        🧠 AI Models Used for Violation Detection
      </h2>

      <ul className="list-disc ml-5 text-sm space-y-1">
        <li>YOLO – Vehicle & helmet detection</li>
        <li>OpenCV – Frame extraction & tracking</li>
        <li>ANPR – Number plate recognition</li>
        <li>CNN – Signal jump & lane violation</li>
        <li>Rule Engine – Violation classification</li>
        <li>Automated challan generation system</li>
      </ul>
    </div>
  );
}
