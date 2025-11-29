export default function EntryCard({ entry }) {
  return (
    <div className="rounded-xl overflow-hidden bg-primary-light shadow-md w-56">
      {/* Bild */}
      <div className="h-32 bg-white"></div>

      {/* Text */}
      <div className="p-3">
        <h3 className="font-semibold">{entry.title}</h3>
        <p className="text-xs opacity-70">{entry.date}</p>
      </div>
    </div>
  );
}
