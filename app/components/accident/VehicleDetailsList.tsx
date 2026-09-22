import type { VehicleInvolved } from "../../data/puneTraffic";

type VehicleDetailsListProps = {
  vehicles?: VehicleInvolved[];
};

export default function VehicleDetailsList({
  vehicles = [],
}: VehicleDetailsListProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Vehicles Involved</h3>
        <span className="text-xs text-gray-500">{vehicles.length} detected by ANPR</span>
      </div>

      {vehicles.length === 0 ? (
        <p className="text-sm text-gray-500">No vehicle plates recognized yet.</p>
      ) : (
        <div className="grid gap-3">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.plate}
              className="rounded-lg border border-gray-100 bg-slate-50 p-3"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold tracking-wide text-gray-900">
                  {vehicle.plate}
                </p>
                <span className="text-xs bg-white border px-2 py-0.5 rounded-full">
                  {vehicle.type}
                </span>
              </div>
              <dl className="mt-2 grid grid-cols-2 gap-2 text-xs text-gray-600">
                <div>
                  <dt className="text-gray-400">Color</dt>
                  <dd className="font-medium text-gray-800">{vehicle.color}</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Occupants</dt>
                  <dd className="font-medium text-gray-800">{vehicle.occupants}</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Airbag</dt>
                  <dd className="font-medium text-gray-800">{vehicle.airbag}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-gray-400">Visible damage</dt>
                  <dd className="font-medium text-gray-800">{vehicle.damage}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
