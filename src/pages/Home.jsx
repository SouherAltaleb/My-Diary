import { useState, useEffect } from "react";

function Home() {
  const [entries, setEntries] = useState([]);

  // Einträge beim Start laden
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("entries")) || [];
    setEntries(stored);
  }, []);

  // Speichern in localStorage
  const addEntry = () => {
    const newEntry = {
      title: "Neuer Eintrag",
      date: new Date().toISOString().slice(0, 10),
      content: "Dies ist ein Beispieltext.",
    };

    const updated = [newEntry, ...entries];
    setEntries(updated);
    localStorage.setItem("entries", JSON.stringify(updated));
  };

  return (
    <div className="mt-40">
      <h1 className="text-3xl font-bold mb-6">My Diary</h1>

      {/* <button className="btn btn-primary mb-4" onClick={addEntry}>
        + Add Entry (Test)
      </button>

      <ul className="space-y-3">
        {entries.map((entry, i) => (
          <li key={i} className="p-4 bg-base-200 rounded-lg">
            <strong>{entry.title}</strong>
            <div className="text-sm opacity-70">{entry.date}</div>
            <p>{entry.content}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Home;
