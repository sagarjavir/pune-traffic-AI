import type { InputHTMLAttributes, ReactNode } from "react";
import { ROLE_LABEL, type Role } from "../../lib/roles";

const inputClass =
  "mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200";

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      {children}
    </label>
  );
}

export function TextInput(
  props: InputHTMLAttributes<HTMLInputElement>
) {
  return <input className={inputClass} {...props} />;
}

export function AuthError({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
      {message}
    </p>
  );
}

export function RoleBadge({ role }: { role: Role }) {
  const colors: Record<Role, string> = {
    admin: "bg-indigo-100 text-indigo-800",
    police: "bg-red-100 text-red-800",
    citizen: "bg-green-100 text-green-800",
  };
  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${colors[role]}`}>
      {ROLE_LABEL[role]}
    </span>
  );
}
