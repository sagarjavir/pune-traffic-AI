import Link from "next/link";

const features = [
  {
    title: "🚦 AI Smart Traffic Signals",
    path: "/signals",
  },
  {
    title: "🚑 Emergency Vehicle Priority",
    path: "/emergency",
  },
  {
    title: "📸 Traffic Violation Detection",
    path: "/violations",
  },
  {
    title: "🅿️ Smart Parking System",
    path: "/parking",
  },
  {
    title: "📊 Predictive Traffic Analytics",
    path: "/analytics",
  },
  {
    title: "🧠 Accident Detection with AI",
    path: "/accident",
  },
];

export default function Features() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        AI Capabilities for Pune
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <Link
           key={i}
            href={feature.path}
            className="bg-white rounded-xl shadow p-5
                       hover:scale-105 transition
                       cursor-pointer hover:bg-indigo-50"
          >
          <h3 className="text-lg font-semibold">
            {feature.title}
          </h3>
          <p className="text-sm text-gray-500 mt-2">
              Click to explore
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
