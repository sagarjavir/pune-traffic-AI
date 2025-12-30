import Image from "next/image";

type Props = {
  location: string;
  type: string;
};

const violationImages: Record<string, string> = {
  "Red Light Jump": "/violations/wrong-lane.png",
  "No Helmet": "/violations/wrong-lane.png",
  "Wrong Lane": "/violations/wrong-lane.png",
  "Over Speeding": "/violations/wrong-lane.png",
};

export default function EvidenceCard({ location, type }: Props) {
  const imageSrc = violationImages[type] || "/violations/wrong-lane.png";

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      <Image
        src={imageSrc}
        alt="wrong-lane"
        width={400}
        height={220}
        className="rounded-lg object-cover"
      />

      <div className="mt-3">
        <h3 className="font-semibold text-lg">{type}</h3>
        <p className="text-sm text-gray-600">📍 {location}</p>
        <p className="text-xs text-gray-500 mt-1">
          Detected by AI Camera
        </p>
      </div>
    </div>
  );
}