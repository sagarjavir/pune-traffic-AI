const hospitals = [
  { name: "Sassoon Hospital", status: "Ready" },
  { name: "Ruby Hall Clinic", status: "Ready" },
  { name: "Jehangir Hospital", status: "Busy" },
];

export default function HospitalStatus() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-3">
        🏥 Hospital Emergency Status
      </h2>
      <ul className="text-sm space-y-2">
        {hospitals.map((h, i) => (
          <li key={i} className="flex justify-between">
            <span>{h.name}</span>
            <span
              className={`font-semibold ${
                h.status === "Ready"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {h.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
