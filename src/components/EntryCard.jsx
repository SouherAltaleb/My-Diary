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
           transition-all duration-500 ease-[cubic-bezier(.25,1.5,.5,1)]"
        aria-label="Delete entry"
      >
        {/* müll icon */}
        <svg
          className=" w-6 h-6"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g fill="none" fill-rule="evenodd">
              {" "}
              <path d="m0 0h32v32h-32z"></path>{" "}
              <path
                d="m31 6c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1l-3-.001v18.001c0 3.3137085-2.6862915 6-6 6h-12c-3.3137085 0-6-2.6862915-6-6v-18h-3c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm-18 8c-.5522847 0-1 .4477153-1 1v7c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-7c0-.5522847-.4477153-1-1-1zm6 0c-.5522847 0-1 .4477153-1 1v7c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-7c0-.5522847-.4477153-1-1-1zm4.5-13c.8284271 0 1.5.67157288 1.5 1.5s-.6715729 1.5-1.5 1.5h-15c-.82842712 0-1.5-.67157288-1.5-1.5s.67157288-1.5 1.5-1.5z"
                fill="#ffffff"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
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
