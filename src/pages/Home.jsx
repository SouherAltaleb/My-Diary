import { useState } from "react";
import Header from "../layout/Header.jsx";
// import EntryList from "../components/EntryList";
// import AddEntryModal from "../components/AddEntryModal";
// import ViewEntryModal from "../components/ViewEntryModal";

// import useLocalStorage from "../hooks/useLocalStorage";

export default function Home() {
  //   const [entries, setEntries] = useLocalStorage("entries", []);
  //   const [showAddModal, setShowAddModal] = useState(false);
  //   const [showViewModal, setShowViewModal] = useState(false);
  //   const [selectedEntry, setSelectedEntry] = useState(null);

  return (
    <div className="min-h-screen ">
      <h1> Das ist Headline</h1>
      <p> oldjwodjohfcw kihqwifdhiofq </p>
      <button className="btn " type="submit">
        {" "}
        send{" "}
      </button>
    </div>
  );
}
