import ParkingSummary from "../components/parking/ParkingSummary";
import ParkingSlots from "../components/parking/ParkingSlots";
import ParkingMap from "../components/parking/ParkingMap";
import ParkingAIInfo from "../components/parking/ParkingAIInfo";

export default function ParkingPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        🅿️ Smart Parking Management – Pune
      </h1>

      <ParkingSummary />
      <ParkingMap />
      <ParkingSlots />
      <ParkingAIInfo />
    </div>
  );
}
