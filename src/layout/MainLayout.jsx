import { useState } from "react";
import { Outlet } from "react-router-dom";
import EntryForm from "../components/EntryForm";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

const MainLayout = () => {
  const [showModal, setShowModal] = useState(false);

  // Daten aus localStorage holen
  const [entries, setEntries] = useState(() => {
    return JSON.parse(localStorage.getItem("entries")) || [];
  });

  //   useEffect(() => {
  //   const stored = JSON.parse(localStorage.getItem("entries")) || [];
  //   setEntries(stored);
  // }, []);

  //   Speichern eines neuen Eintrags
  const handleAddEntry = (entry) => {
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("entries", JSON.stringify(updated));
    setShowModal(false);
  };

  return (
    // Gesamtes Layout über die ganze Bildschirmhöhe
    <div className="min-h-screen flex flex-col">
      <Header onAddClick={() => setShowModal(true)} />

      {/* Dynamischer Seiteninhalt */}
      <main className="grow px-4 sm:px-8 md:px-16 py-10">
        <Outlet context={{ entries, setEntries }} />
        {/* Hier werden Home geladen */}
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

            {/* Form */}
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
