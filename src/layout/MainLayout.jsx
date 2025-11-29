import React from "react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import EntryForm from "../components/EntryForm";

const MainLayout = () => {
  const [entries, setEntries] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Lade Daten beim Start
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("entries")) || [];
    setEntries(stored);
  }, []);

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
        <Outlet context={{ entries }} /> {/* Hier werden Home geladen */}
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
              Add New Entry
            </h2>

            {/* Form */}
            <EntryForm onSubmit={handleAddEntry} />

            {/* Close Button */}
            <button
              className="btn w-full mt-6 bg-white text-(--color-green-dark) hover:bg-(--color-green-light)"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default MainLayout;
