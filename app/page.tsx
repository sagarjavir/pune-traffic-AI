import Image from "next/image";
import Hero from "./components/Hero";
import Features from "./components/Features";
import PuneMap from "./components/PuneMap";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Features />
      <PuneMap />
      <CTA />
    </div>
  );
}
