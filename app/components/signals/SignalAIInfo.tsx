export default function SignalAIInfo() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-2">
        🧠 AI Behind Adaptive Signals
      </h2>

      <ul className="list-disc ml-5 text-sm space-y-1">
        <li>Vehicle detection using YOLO + CCTV cameras</li>
        <li>Traffic density calculated per lane</li>
        <li>Reinforcement Learning optimizes signal timing</li>
        <li>Emergency vehicles get automatic green corridor</li>
        <li>Historical data used for peak prediction</li>
      </ul>
    </div>
  );
}
