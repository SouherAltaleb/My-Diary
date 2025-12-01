import { useState } from "react";
import { Outlet } from "react-router-dom";
import EntryForm from "../components/EntryForm";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import useLocalStorage from "../hooks/useLocalStorage";

const MainLayout = () => {
  // Steuert, ob das Add-Entry Modal sichtbar ist
  const [showModal, setShowModal] = useState(false);

  // Holt Einträge direkt aus localStorage beim ersten Rendern
  const [entries, setEntries] = useLocalStorage("entries", []);

  //   neuen Eintrag speichern
  const handleAddEntry = (entry) => {
    // Prüfen, ob an diesem Datum bereits ein Eintrag existiert
    const exists = entries.some((e) => e.date === entry.date);

    if (exists) {
      alert(
        "You already wrote an entry for this day. Please come back tomorrow!"
      );
      return; // Abruch – kein Eintrag speichern
    }

    //  Speicherung übernimmt der Hook automatisch
    setEntries([entry, ...entries]);
    setShowModal(false); // Modal schließen
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Kopfbereich mit "Add Entry" Button */}
      <Header onAddClick={() => setShowModal(true)} />

      {/* Hauptinhalt – Seiten werden hier gerendert */}
      <main className="grow px-4 sm:px-8 md:px-16 py-10">
        {/* Context über Outlet verfügbar: Home.jsx kann entries und setEntries empfangen */}
        <Outlet context={{ entries, setEntries }} />
      </main>

      <Footer />
      {/* MODAL Add Entry */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-50 animate-fadeIn">
          {/* Modal Box */}
          <div
            className="bg-(--color-green-dark) text-white 
        w-full max-w-2xl p-8 rounded-2xl shadow-2xl 
        border-(--color-green-middle) border-3 animate-slideUp"
          >
            {/* Title */}
            <h2 className="text-3xl font-bold mb-6 text-(--color-primary)">
              Create New Entry
            </h2>

            {/* Formular → sendet Daten an handleAddEntry */}
            <EntryForm onSubmit={handleAddEntry} />

            {/* Cancel Button */}
            <button
              className="btn w-full mt-6 bg-white text-(--color-green-dark) hover:bg-(--color-green-light)"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default MainLayout;
