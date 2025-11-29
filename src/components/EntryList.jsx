import EntryCard from "./EntryCard";

export default function EntryList({ entries }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {entries.map((entry, i) => (
        <EntryCard key={i} entry={entry} />
      ))}
    </div>
  );
}
