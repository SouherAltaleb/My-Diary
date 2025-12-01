export default function ViewEntryModal({ entry, open, onClose }) {
  if (!open || !entry) return null;

  return (
    // Modal Hintergrund
    <div
      className="
        fixed inset-0 z-50 
           bg-(--color-green-dark)/30 backdrop-blur-md
        flex items-center justify-center
        animate-fadeIn
      "
    >
      {/* Modal Karte */}
      <div
        className="
          relative w-full max-w-4xl  
          rounded-3xl overflow-hidden
          shadow-[0_0_40px_rgba(0,0,0,0.45)]
          bg-(--color-green-light) backdrop-blur-xl
          animate-zoomIn min-h-[500px] max-h-[80vh]
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4 z-30
              bg-(--color-primary-light) backdrop-blur-md
            hover:bg-(--color-primary)
            text-gray-700 hover:text-black
            w-10 h-10 rounded-full
            flex items-center justify-center
            shadow-lg
            transition-all cursor-pointer
          "
        >
          {/* ✕ icon */}
          <svg
            className=" w-7 h-7"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="#143335"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill="#143335"
                fill-rule="evenodd"
                d="M11.2929,3.29289 C11.6834,2.90237 12.3166,2.90237 12.7071,3.29289 C13.0976,3.68342 13.0976,4.31658 12.7071,4.70711 L9.41421,8 L12.7071,11.2929 C13.0976,11.6834 13.0976,12.3166 12.7071,12.7071 C12.3166,13.0976 11.6834,13.0976 11.2929,12.7071 L8,9.41421 L4.70711,12.7071 C4.31658,13.0976 3.68342,13.0976 3.29289,12.7071 C2.90237,12.3166 2.90237,11.6834 3.29289,11.2929 L6.58579,8 L3.29289,4.70711 C2.90237,4.31658 2.90237,3.68342 3.29289,3.29289 C3.68342,2.90237 4.31658,2.90237 4.70711,3.29289 L8,6.58579 L11.2929,3.29289 Z"
              ></path>{" "}
            </g>
          </svg>
        </button>

        {/* IMAGE */}
        <div className="relative h-72 w-full overflow-hidden  ">
          <img
            src={entry.image}
            alt={entry.title}
            className="
              w-full h-full object-cover  
              brightness-90
              transition-all duration-700
              hover:scale-105
            "
          />

          {/* Gradient overlay */}
          <div
            className="
              absolute inset-0 
              bg-linear-to-t from-black/60 via-black/10 to-transparent
            "
          />
        </div>

        {/* CONTENT */}
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-2">{entry.title}</h2>
          <p className="opacity-70 text-sm mb-5">{entry.date}</p>

          <p className="leading-relaxed text-lg whitespace-pre-line">
            {entry.content}
          </p>
        </div>
      </div>
    </div>
  );
}
