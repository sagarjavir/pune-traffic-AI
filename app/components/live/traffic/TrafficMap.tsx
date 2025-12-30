import LiveMap from "../../maps/LiveMap";

export default function TrafficMap() {
  return (
    <div className="bg-gray-100 p-6 rounded-xl text-center">
      <h2 className="font-semibold mb-2">
        Pune Live Traffic Map
      </h2>

      <div className="h-64 bg-white rounded-xl flex items-center justify-center shadow">
        <p className="text-gray-500">
          Map Integration (Google Maps / Mapbox) <br />
          Heat zones + Live markers
        </p>
        <LiveMap />
      </div>
    </div>
  );
}
