"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { canAccess, DEMO_ACCOUNTS, ROLE_LABEL, type Role } from "../../lib/roles";
import { useAuth } from "./AuthProvider";
import { AuthError, Field, TextInput } from "./AuthFields";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { refresh } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function submit(nextEmail = email, nextPassword = password) {
    setPending(true);
    setError(null);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: nextEmail, password: nextPassword }),
      });
      const data = (await response.json()) as {
        error?: string;
        redirectTo?: string;
        user?: { role: Role };
      };
      if (!response.ok) {
        setError(data.error || "Unable to sign in.");
        return;
      }
      await refresh();
      const from = searchParams.get("from");
      const destination =
        from && data.user && canAccess(data.user.role, from)
          ? from
          : data.redirectTo || "/dashboard";
      router.push(destination);
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="space-y-5">
      <AuthError message={error} />
      <form
        className="space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          void submit();
        }}
      >
        <Field label="Email">
          <TextInput
            type="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Field>
        <Field label="Password">
          <TextInput
            type="password"
            name="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Field>
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Signing in…" : "Sign in"}
        </Button>
      </form>

      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500 mb-2">
          Demo accounts
        </p>
        <div className="grid gap-2">
          {DEMO_ACCOUNTS.map((account) => (
            <button
              key={account.email}
              type="button"
              className="flex items-center justify-between rounded-lg border bg-slate-50 px-3 py-2 text-left text-sm hover:bg-indigo-50"
              onClick={() => {
                setEmail(account.email);
                setPassword(account.password);
                void submit(account.email, account.password);
              }}
            >
              <span>
                <span className="font-medium">{ROLE_LABEL[account.role as Role]}</span>
                <span className="block text-xs text-slate-500">{account.email}</span>
              </span>
              <span className="text-xs text-slate-400">Use</span>
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-slate-600">
        New to the control room?{" "}
        <Link href="/register" className="font-medium text-indigo-600 hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
}
