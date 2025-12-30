import ViolationSummary from "../components/violations/ViolationSummary";
import ViolationTable from "../components/violations/ViolationTable";
import ViolationEvidence from "../components/violations/ViolationEvidence";
import ViolationAIInfo from "../components/violations/ViolationAIInfo";

export default function ViolationsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        🚨 AI Traffic Violations – Pune
      </h1>
      <ViolationSummary />
      <ViolationTable />
      <ViolationEvidence location={""} type={""} />
      <ViolationAIInfo />
    </div>
  );
}
// Purpose
// Show AI-detected traffic violations
// ANPR (number plate recognition)
// Automated challans
// Evidence-based enforcement
// Role: Traffic Police / Admin
