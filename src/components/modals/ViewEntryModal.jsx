// src/components/ViewEntryModal.jsx
export default function ViewEntryModal({ entry, open, onClose }) {
  if (!open || !entry) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-base-100 rounded-xl max-w-lg w-full shadow-2xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src={entry.image}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />

        <h2 className="text-2xl font-bold mb-2">{entry.title}</h2>
        <p className="text-sm text-gray-500 mb-4">{entry.date}</p>

        <p className="text-gray-800 whitespace-pre-line">{entry.content}</p>
      </div>
    </div>
  );
}
