import Link from "next/link";

export default function CTA() {
  return (
    <section className="p-10 text-center bg-indigo-600 text-white">
      <h2 className="text-2xl font-bold">Making Pune a Smart Traffic City</h2>
      <p className="mt-2 text-indigo-100 text-sm">
        Open the control room or review predicted congestion before peak hours.
      </p>
      <div className="mt-6 flex justify-center gap-4 flex-wrap">
        <Link
          href="/dashboard"
          className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-yellow-200"
        >
          View Live Dashboard
        </Link>
        <Link
          href="/analytics"
          className="border border-white px-6 py-2 rounded-lg hover:bg-white/10"
        >
          Traffic Analytics
        </Link>
      </div>
    </section>
  );
}
