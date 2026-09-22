import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import LiveTicker from "./components/LiveTicker";
import Footer from "./components/Footer";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Pune Traffic AI | Smart Traffic Management",
  description:
    "AI-powered traffic management demo for Pune: live congestion, adaptive signals, accident detection, and emergency green corridors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Providers>
          <div className="sticky top-0 z-50">
            <Navbar />
            <LiveTicker />
          </div>
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
