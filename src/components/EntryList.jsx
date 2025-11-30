// src/components/EntryList.jsx
import EntryCard from "./EntryCard";

export default function EntryList({ entries, setEntries, openEntry }) {
  if (!entries || entries.length === 0) {
    return <p className="text-gray-300">Keine Einträge vorhanden...</p>;
  }

  const handleDelete = (id) => {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("entries", JSON.stringify(updated));
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry) => (
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
