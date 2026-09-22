import AccidentOperations from "../components/accident/AccidentOperations";

export default function AccidentPage() {
  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Accident Detection with AI
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Junction cameras flag collisions in real time, identify vehicles, and
          help dispatch ambulance, police, and a green corridor.
        </p>
      </div>
      <AccidentOperations />
    </div>
  );
}
