// Objective
// Inform citizens about live traffic
// Suggest best travel time & routes
// Share alerts, advisories, incentives
// Improve public trust & compliance
import CitizenOverview from "../components/citizen/CitizenOverview";
import LiveTrafficStatus from "../components/citizen/LiveTrafficStatus";
import RouteSuggestion from "../components/citizen/RouteSuggestion";
import PublicAlerts from "../components/citizen/PublicAlerts";
import TravelTimeAdvisor from "../components/citizen/TravelTimeAdvisor";
import PollutionImpact from "../components/citizen/PollutionImpact";
import CitizenAIInfo from "../components/citizen/CitizenAIInfo";

export default function CitizenPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        👥 Citizen Traffic Portal – Pune
      </h1>

      <CitizenOverview />
      <LiveTrafficStatus />
      <RouteSuggestion />
      <TravelTimeAdvisor />
      <PublicAlerts />
      <PollutionImpact />
      <CitizenAIInfo />
    </div>
  );
}
