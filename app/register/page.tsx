import RegisterForm from "../components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-[70vh] px-4 py-10">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl border bg-white shadow-sm md:grid-cols-2">
        <div className="bg-slate-900 p-8 text-white">
          <p className="text-sm uppercase tracking-wide text-slate-400">Create access</p>
          <h1 className="mt-2 text-3xl font-bold">Register for Pune Traffic AI</h1>
          <p className="mt-3 text-sm text-slate-300">
            Choose your role during registration. You will be signed in immediately and
            sent to the matching dashboard.
          </p>
        </div>
        <div className="p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">New account</h2>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
