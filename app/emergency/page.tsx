import EmergencySummary from "../components/emergency/EmergencySummary";
import ActiveEmergencies from "../components/emergency/ActiveEmergencies";
import GreenCorridor from "../components/emergency/GreenCorridor";
import HospitalStatus from "../components/emergency/HospitalStatus";
import EmergencyAIInfo from "../components/emergency/EmergencyAIInfo";

export default function EmergencyPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        🚑 Emergency Traffic Response – Pune
      </h1>
      <EmergencySummary />
      <ActiveEmergencies />
      <GreenCorridor />
      <HospitalStatus />
      <EmergencyAIInfo />
    </div>
  );
}
