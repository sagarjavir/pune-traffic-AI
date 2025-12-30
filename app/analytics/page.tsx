import AnalyticsSummary from "../components/analytics/AnalyticsSummary";
import TrafficTrendChart from "../components/analytics/TrafficTrendChart ";
import PeakPrediction from "../components/analytics/PeakPrediction ";
import CongestionHeatmap from "../components/analytics/CongestionHeatmap ";
import AnalyticsAIInfo from "../components/analytics/AnalyticsAIInfo ";

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        📊 Traffic Analytics & AI Predictions – Pune
      </h1>
      <AnalyticsSummary />
      <TrafficTrendChart />
      <PeakPrediction />
      <CongestionHeatmap />
      <AnalyticsAIInfo />
    </div>
  );
}
