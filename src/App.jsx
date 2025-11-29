// import { useEffect, useState } from "react";
// // import MainLayout from './layouts/MainLayout.jsx';
// import Home from "./pages/Home.jsx";
// import Header from "./components/layout/Header.jsx";
// import EntryList from "./components/EntryList.jsx";
// import AddEntryModal from "./components/modals/AddEntryModal.jsx";
// import ViewEntryModal from "./components/modals/ViewEntryModal.jsx";
// import useLocalStorage from "./hooks/useLocalStorage.js";

// export default function App() {
//   const [entries, setEntries] = useLocalStorage("diaryEntries", []);
//   const [selectedEntry, setSelectedEntry] = useState(null);

//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isViewModalOpen, setIsViewModalOpen] = useState(false);

//   const openAddModal = () => setIsAddModalOpen(true);
//   const closeAddModal = () => setIsAddModalOpen(false);

//   const openViewModal = (entry) => {
//     setSelectedEntry(entry);
//     setIsViewModalOpen(true);
//   };

//   const closeViewModal = () => {
//     setSelectedEntry(null);
//     setIsViewModalOpen(false);
//   };

//   return (
//     <div className="min-h-screen bg-[#143335] text-white">
//       <Home />
//       <Header onAddEntry={openAddModal} />
//       <main className="max-w-6xl mx-auto p-6">
//         <EntryList entries={entries} onSelectEntry={openViewModal} />
//       </main>
//       <AddEntryModal
//         isOpen={isAddModalOpen}
//         onClose={closeAddModal}
//         entries={entries}
//         setEntries={setEntries}
//       />
//       <ViewEntryModal
//         isOpen={isViewModalOpen}
//         onClose={closeViewModal}
//         entry={selectedEntry}
//       />
//     </div>
//   );
// }
// import { useState } from "react";

// import MainLayout from "./layout/MainLayout.jsx";
// import Home from "./pages/Home.jsx";

// import AddEntryModal from "./components/modals/AddEntryModal.jsx";
// import ViewEntryModal from "./components/modals/ViewEntryModal.jsx";

// import useLocalStorage from "./hooks/useLocalStorage.js";

// export default function App() {
//   return (
//     <div className=" bg-blue-950">
//       <MainLayout>
//         <Home />
//       </MainLayout>

//       <AddEntryModa />

//       <ViewEntryModal />
//     </div>
//   );
// }
// import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
