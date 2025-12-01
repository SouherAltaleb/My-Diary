// src/components/EntryList.jsx
import EntryCard from "./EntryCard";

export default function EntryList({ entries, setEntries, openEntry }) {
  if (!entries || entries.length === 0) {
    return (
      <div>
        <h3 className="text-white text-xl">
          Write the Life You Want to Remember
        </h3>
        ;{/* Giraffe Bild */}
        <div className="flex justify-center mt-6">
          <img src="/cute-giraffe-writing-a-journal.png" className="w-96" />
        </div>
      </div>
    );
  }
  // Einträge löschen, Array filtern und wieder das Ergebniss speichern
  const handleDelete = (id) => {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("entries", JSON.stringify(updated));
  };

  // Einträge nach Datum sortieren
  const sortedEntries = [...entries].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sortedEntries.map((entry) => (
        <EntryCard
          key={entry.id}
          entry={entry}
          onClick={() => openEntry && openEntry(entry)}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
