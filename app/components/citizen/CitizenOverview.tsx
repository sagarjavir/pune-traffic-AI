export default function CitizenOverview() {
  return (
    <div className="bg-indigo-600 text-white p-5 rounded-xl">
      <h2 className="text-lg font-semibold">
         Welcome to Pune Smart Traffic
      </h2>
      <p className="text-sm mt-2">
        Get real-time traffic updates, AI-powered route suggestions,
        and public safety alerts to plan your journey better.
      </p>
    </div>
  );
}

// Traffic Cameras + GPS + Weather
//           ↓
//      AI Models (YOLO + ML)
//           ↓
//    Predictions & Alerts
//           ↓
//   Citizen Next.js Portal

// Next Steps (Your Choice)
// 🔐 Citizen Login & Personal Commute History
// 🗺️ Google Maps
// 🔔 Push Notifications
// 📱 Mobile-first UI
// 🧠 Backend AI APIs (FastAPI)