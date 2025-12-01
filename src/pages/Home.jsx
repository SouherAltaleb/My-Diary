import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import EntryList from "../components/EntryList";
import ViewEntryModal from "../components/modals/ViewEntryModal";

export default function Home() {
  // receives entries & setEntries vom MainLayout per <Outlet context={} />
  const { entries, setEntries } = useOutletContext();
  // Welcher Eintrag wird gerade angeschaut?
  const [selectedEntry, setSelectedEntry] = useState(null);
  // Steuert Sichtbarkeit der "View Entry" Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Wird aufgerufen, wenn eine Karte angeklickt wird
  const openEntry = (entry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };
  // Modal schließen
  const closeEntry = () => {
    setIsModalOpen(false);
    setSelectedEntry(null);
  };

  return (
    <div className="mt-30">
      <h1 className="text-3xl  mb-6">
        Because Every Moment Deserves to Be Remembered.
      </h1>

      <EntryList
        entries={entries}
        setEntries={setEntries}
        openEntry={openEntry}
      />

      <ViewEntryModal
        entry={selectedEntry}
        open={isModalOpen}
        onClose={closeEntry}
      />
    </div>
  );
}
