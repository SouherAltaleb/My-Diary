export default function EntryCard({ entry, onClick, onDelete }) {
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
      className="  group relative cursor-pointer 
    rounded-3xl overflow-hidden 
    shadow-lg hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
    border-2 border-(--color-green-middle)
    bg-(--color-green-light)
    
    transition-all duration-500 
    hover:-translate-y-2 hover:scale-[1.03]
    hover:rotate-[0.4deg]
      "
    >
      {/* DELETE BUTTON  */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // verhindert, dass das Card-onClick ausgelöst wird
          if (onDelete) onDelete(entry.id);
        }}
        className=" cursor-pointer
   absolute top-3 right-3 z-30
          bg-red-500 text-white w-10 h-10 rounded-full
          flex items-center justify-center
          shadow-md hover:bg-red-800
          scale-50 
          opacity-0                     /* Default: unsichtbar */
          group-hover:opacity-100       /* Bei Hover sichtbar */
           group-hover:scale-100
           transition-all duration-500 ease-[cubic-bezier(.25,1.5,.5,1)]
          
  "
        aria-label="Delete entry"
      >
        ✕
      </button>
      {/* IMAGE */}
      {/* absolute inset-0 
    bg-gradient-to-t from-black/40 via-transparent to-transparent 
    opacity-0 group-hover:opacity-100 
    transition-all duration-700 */}
      <div className="h-56 w-full overflow-hidden">
        <img
          src={entry.image}
          alt={entry.title}
          className="
             w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75 group-hover:blur-[1px] "
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
