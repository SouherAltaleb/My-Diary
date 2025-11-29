import { useState, useEffect } from "react";
import Header from "../layout/Header";
import EntryList from "../components/EntryList";
import EntryForm from "../components/EntryForm";

function Home() {
  const [entries, setEntries] = useState([]);

  //   const [showAddModal, setShowAddModal] = useState(false);

  //   const handleAddEntry = (entry) => {
  //     setEntries([...entries, entry]);
  //     setShowAddModal(false);
  //   };
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

      {/* Cards */}
      <div className="p-6">
        <EntryList entries={entries} />
      </div>

      {/* Add Modal */}
      {/* {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-96 text-black">
            <h2 className="text-xl font-bold mb-4">Add Entry</h2>

            <EntryForm onSubmit={handleAddEntry} />

            <button
              className="btn btn-outline mt-4"
              onClick={() => setShowAddModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )} */}
      <button className="btn btn-primary mb-4" onClick={addEntry}>
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
      </ul>
    </div>
  );
}

export default Home;
