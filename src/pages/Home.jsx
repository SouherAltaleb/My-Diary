import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import EntryList from "../components/EntryList";
import ViewEntryModal from "../components/modals/ViewEntryModal";

export default function Home() {
  const { entries, setEntries } = useOutletContext();
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEntry = (entry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const closeEntry = () => {
    setIsModalOpen(false);
    setSelectedEntry(null);
  };

  return (
    <div className="mt-40">
      <h1 className="text-3xl font-bold mb-6">My Diary</h1>

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
