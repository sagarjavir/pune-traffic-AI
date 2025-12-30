import SignalSummary from "../components/signals/SignalSummary";
import SignalTable from "../components/signals/SignalTable";
import EmergencyOverride from "../components/signals/EmergencyOverride";
import SignalAIInfo from "../components/signals/SignalAIInfo";

export default function SignalsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        🚦 Adaptive Traffic Signal Control – Pune
      </h1>

      <SignalSummary />
      <EmergencyOverride />
      <SignalTable />
      <SignalAIInfo />
    </div>
  );
}
