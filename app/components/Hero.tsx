import Link from "next/link";
import { Button } from "./ui/button";
import { cityStats } from "../data/puneTraffic";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-8 md:p-12">
      <h1 className="text-4xl font-bold max-w-3xl">
        Pune AI Traffic Management System
      </h1>
      <p className="mt-3 text-lg max-w-2xl">
        Smart signals, faster emergency response, and AI accident detection for a
        safer Pune commute.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild className="bg-white text-indigo-700 hover:bg-yellow-200">
          <Link href="/login">Sign in</Link>
        </Button>
        <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
          <Link href="/register">Register</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/dashboard">Open Dashboard</Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <Stat title="Congestion" value={cityStats.congestion} />
        <Stat title="Active Signals" value={cityStats.signals} />
        <Stat title="Incidents Today" value={String(cityStats.incidentsToday)} />
        <Stat title="Avg Speed" value={cityStats.avgSpeed} />
      </div>
    </section>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white/20 rounded-xl p-4 text-center">
      <p className="text-sm">{title}</p>
      <h2 className="text-xl font-bold">{value}</h2>
    </div>
  );
}
