import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 px-6 py-8 mt-auto">
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <p className="font-semibold text-white">Pune Traffic AI</p>
          <p className="mt-2 text-slate-400">
            Demo control-room for adaptive signals, accident detection, and
            emergency green corridors across Pune.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Operations</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/live/traffic" className="hover:text-yellow-300">
                Live Traffic
              </Link>
            </li>
            <li>
              <Link href="/accident" className="hover:text-yellow-300">
                Accident Detection
              </Link>
            </li>
            <li>
              <Link href="/emergency" className="hover:text-yellow-300">
                Emergency Response
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Public</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/citizen" className="hover:text-yellow-300">
                Citizen Portal
              </Link>
            </li>
            <li>
              <Link href="/parking" className="hover:text-yellow-300">
                Smart Parking
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-yellow-300">
                Sign in
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-yellow-300">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="max-w-6xl mx-auto mt-6 text-xs text-slate-500">
        Mock operational data for demonstration. Not an official PMC system.
      </p>
    </footer>
  );
}
