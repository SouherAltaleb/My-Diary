// import AddEntryButton from "./AddEntryButton.jsx";

export default function Header({ onAdd }) {
  return (
    <header className="p-6 flex justify-between items-center bg-[var(--color-bg-light)] text-black">
      <h1 className="text-3xl font-fuzzy">My Diary</h1>
      <AddEntryButton onClick={onAdd} />
    </header>
  );
}
