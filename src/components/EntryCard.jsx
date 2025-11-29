export default function EntryCard({ entry, onClick }) {
  const moodIcons = {
    happy: "😄",
    good: "😊",
    neutral: "😐",
    sad: "😢",
    excited: "🔥",
  };

  return (
    // card
    <div
      onClick={onClick}
      className="
        bg-(--color-green-light)
        rounded-3xl overflow-hidden cursor-pointer
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        hover:-translate-y-1 hover:scale-[1.03]
        border-2 border-(--color-green-middle)
      "
    >
      {/* IMAGE */}
      <div className="h-56 w-full overflow-hidden">
        <img
          src={entry.image}
          alt={entry.title}
          className="
            w-full h-full object-cover 
            transition-transform duration-300 
            hover:scale-110
          "
        />
      </div>

      {/* TEXT AREA */}
      <div className="p-5 relative">
        {/* Mood Icon */}
        <div
          className="
            absolute -top-6 right-4 
            bg-white shadow-md w-12 h-12 
            rounded-full flex items-center justify-center 
            text-3xl
          "
        >
          {moodIcons[entry.mood] || "🙂"}
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-(--color-green-dark) mt-2">
          {entry.title}
        </h2>

        {/* Date */}
        <p className="text-sm opacity-70 text-(--color-green-dark) mt-1">
          {entry.date}
        </p>

        {/* Content Preview (3 lines max) */}
        <p className="mt-3 text-(--color-green-dark) opacity-90 line-clamp-3">
          {entry.content}
        </p>
      </div>
    </div>
  );
}
