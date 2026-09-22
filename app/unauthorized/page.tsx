import Link from "next/link";
import { Button } from "../components/ui/button";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <div className="max-w-md rounded-2xl border bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Access restricted</h1>
        <p className="mt-3 text-sm text-slate-600">
          Your role does not include this module. Return to your dashboard or sign in
          with an Admin or Police account for operations pages.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild>
            <Link href="/dashboard">Go to dashboard</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
