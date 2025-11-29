import logo from "../assets/logo.svg";
import AddEntryButton from "../components/AddEntryButton";

export default function Header({ onAdd }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-green-dark backdrop-blur-md px-6 py-4 flex justify-between items-center shadow-lg">
      {/* Logo + Title */}
      <div className="flex items-center gap-3">
        <div className="bg-primary-light p-2 rounded-lg shadow">
          <img src={logo} alt="My Diary logo" className="w-25 object-contain" />
        </div>

        <h1 className="drop-shadow font-bold">MyDiary App</h1>
      </div>

      <AddEntryButton onClick={onAdd} />
    </header>
  );
}
