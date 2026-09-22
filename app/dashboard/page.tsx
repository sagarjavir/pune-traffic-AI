import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminDashboard from "../components/dashboards/AdminDashboard";
import PoliceDashboard from "../components/dashboards/PoliceDashboard";
import CitizenDashboard from "../components/dashboards/CitizenDashboard";
import { ROLE_LABEL } from "../lib/roles";
import { readSessionToken, SESSION_COOKIE } from "../lib/session";

export default async function DashboardPage() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const user = token ? await readSessionToken(token) : null;

  if (!user) {
    redirect("/login?from=/dashboard");
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <p className="mb-4 text-sm text-slate-600">
        Signed in as <span className="font-medium text-slate-900">{user.name}</span> ·{" "}
        {ROLE_LABEL[user.role]}
        {user.locality ? ` · ${user.locality}` : ""}
        {user.badgeNumber ? ` · Badge ${user.badgeNumber}` : ""}
        {user.department ? ` · ${user.department}` : ""}
      </p>
      {user.role === "admin" && <AdminDashboard />}
      {user.role === "police" && <PoliceDashboard />}
      {user.role === "citizen" && <CitizenDashboard />}
    </div>
  );
}
