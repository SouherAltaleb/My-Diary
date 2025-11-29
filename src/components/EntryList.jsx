// import EntryCard from "./EntryCard";

// export default function EntryList({ entries }) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//       {entries.map((entry, i) => (
//         <EntryCard key={i} entry={entry} />
//       ))}
//     </div>
//   );
// }
// src/components/EntryList.jsx
import EntryCard from "./EntryCard";

export default function EntryList({ entries, onSelect }) {
  if (!entries.length) {
    return <p className="text-gray-300">Keine Einträge vorhanden...</p>;
  }

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-6">
      {entries.map((entry, index) => (
        <EntryCard key={index} entry={entry} onClick={() => onSelect(entry)} />
      ))}
    </div>
  );
}
