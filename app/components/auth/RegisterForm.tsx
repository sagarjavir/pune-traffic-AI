"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Button } from "../ui/button";
import { ROLE_LABEL, ROLES, type Role } from "../../lib/roles";
import { useAuth } from "./AuthProvider";
import { AuthError, Field, TextInput } from "./AuthFields";

const ROLE_HELP: Record<Role, string> = {
  admin: "PMC control room, signals, and analytics",
  police: "Violations, accidents, and emergency dispatch",
  citizen: "Live traffic, parking, and public alerts",
};

export default function RegisterForm() {
  const router = useRouter();
  const { refresh } = useAuth();
  const [role, setRole] = useState<Role>("citizen");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    badgeNumber: "",
    department: "",
    locality: "",
  });

  function update(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, role }),
      });
      const data = (await response.json()) as {
        error?: string;
        redirectTo?: string;
      };
      if (!response.ok) {
        setError(data.error || "Unable to register.");
        return;
      }
      await refresh();
      router.push(data.redirectTo || "/dashboard");
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <AuthError message={error} />

      <Field label="Full name">
        <TextInput
          name="name"
          autoComplete="name"
          required
          value={form.name}
          onChange={(event) => update("name", event.target.value)}
        />
      </Field>

      <Field label="Email">
        <TextInput
          type="email"
          name="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={(event) => update("email", event.target.value)}
        />
      </Field>

      <div>
        <p className="text-sm font-medium text-slate-700 mb-2">Register as</p>
        <div className="grid gap-2">
          {ROLES.map((item) => (
            <label
              key={item}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 ${
                role === item ? "border-indigo-500 bg-indigo-50" : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="role"
                className="mt-1"
                checked={role === item}
                onChange={() => setRole(item)}
              />
              <span>
                <span className="block text-sm font-semibold text-slate-900">
                  {ROLE_LABEL[item]}
                </span>
                <span className="block text-xs text-slate-500">{ROLE_HELP[item]}</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      {role === "admin" && (
        <Field label="Department (optional)">
          <TextInput
            name="department"
            placeholder="PMC Traffic Control"
            value={form.department}
            onChange={(event) => update("department", event.target.value)}
          />
        </Field>
      )}
      {role === "police" && (
        <Field label="Badge number (optional)">
          <TextInput
            name="badgeNumber"
            placeholder="PUN-TRF-2048"
            value={form.badgeNumber}
            onChange={(event) => update("badgeNumber", event.target.value)}
          />
        </Field>
      )}
      {role === "citizen" && (
        <Field label="Locality in Pune (optional)">
          <TextInput
            name="locality"
            placeholder="Kothrud, Baner, Hadapsar…"
            value={form.locality}
            onChange={(event) => update("locality", event.target.value)}
          />
        </Field>
      )}

      <Field label="Password">
        <TextInput
          type="password"
          name="password"
          autoComplete="new-password"
          minLength={8}
          required
          value={form.password}
          onChange={(event) => update("password", event.target.value)}
        />
      </Field>
      <Field label="Confirm password">
        <TextInput
          type="password"
          name="confirmPassword"
          autoComplete="new-password"
          minLength={8}
          required
          value={form.confirmPassword}
          onChange={(event) => update("confirmPassword", event.target.value)}
        />
      </Field>

      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Creating account…" : "Create account"}
      </Button>

      <p className="text-sm text-slate-600">
        Already registered?{" "}
        <Link href="/login" className="font-medium text-indigo-600 hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}
