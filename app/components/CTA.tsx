export default function CTA() {
  return (
    <section className="p-10 text-center bg-indigo-600 text-white">
      <h2 className="text-2xl font-bold">
        Making Pune a Smart Traffic City
      </h2>
      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg">
          View Live Dashboard
        </button>
        <button className="border border-white px-6 py-2 rounded-lg">
          Traffic Analytics
        </button>
      </div>
    </section>
  );
}
