import { useOutletContext } from "react-router-dom";
import EntryList from "../components/EntryList";

export default function Home() {
  const { entries } = useOutletContext();

  return (
    <div className="mt-40">
      <h1 className="text-3xl font-bold mb-6">My Diary</h1>
      <EntryList entries={entries} />
    </div>
  );
}
