
export default function EmergencyOverride() {
  return (
    <div className="bg-red-50 border border-red-300 rounded-xl p-5">
      <h2 className="font-semibold text-red-700 mb-2">
        🚑 Emergency Signal Priority
      </h2>

      <p className="text-sm text-red-600 mb-3">
        AI automatically turns signals GREEN on emergency routes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
        <div>Vehicle: Ambulance</div>
        <div>Route: Sassoon → Deccan</div>
        <div>Status: <b>ACTIVE</b></div>
      </div>
    </div>
  );
}
