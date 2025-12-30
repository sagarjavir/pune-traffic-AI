const alerts = [
  "🚧 Roadwork near JM Road – Expect delays",
  "🚨 Accident cleared near Wakad Flyover",
  "🌧️ Rain alert – Drive slow",
];

export default function PublicAlerts() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-2">
        Public Alerts
      </h2>
      <ul className="list-disc ml-5 text-sm">
        {alerts.map((alert, i) => (
          <li key={i}>{alert}</li>
        ))}
      </ul>
    </div>
  );
}
