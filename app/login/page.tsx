import { Suspense } from "react";
import LoginForm from "../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-[70vh] px-4 py-10">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl border bg-white shadow-sm md:grid-cols-2">
        <div className="bg-indigo-700 p-8 text-white">
          <p className="text-sm uppercase tracking-wide text-indigo-200">Pune Traffic AI</p>
          <h1 className="mt-2 text-3xl font-bold">Sign in to the control room</h1>
          <p className="mt-3 text-sm text-indigo-100">
            Admin manages the city network, police handle incidents and challans, and
            citizens get live traffic and parking.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-indigo-100">
            <li>Admin — signals, analytics, full operations</li>
            <li>Police — accidents, violations, emergency</li>
            <li>Citizen — commute, parking, public alerts</li>
          </ul>
        </div>
        <div className="p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Welcome back</h2>
          <Suspense fallback={<p className="text-sm text-slate-500">Loading sign-in…</p>}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
