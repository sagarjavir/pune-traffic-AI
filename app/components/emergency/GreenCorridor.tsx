export default function GreenCorridor() {
  return (
    <div className="bg-green-50 border border-green-300 rounded-xl p-5">
      <h2 className="font-semibold text-green-700 mb-2">
        🟢 Green Corridor Active
      </h2>

      <p className="text-sm mb-3">
        AI has synchronized traffic signals to allow uninterrupted
        emergency vehicle movement.
      </p>
      <ul className="text-sm list-disc ml-5">
        <li>Route: Sassoon Hospital → Shivajinagar</li>
        <li>Signals overridden: 12</li>
        <li>Estimated time saved: 9 minutes</li>
      </ul>
    </div>
  );
}
