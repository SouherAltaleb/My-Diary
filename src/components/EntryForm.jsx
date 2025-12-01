import { useState } from "react";

const moods = [
  { icon: "😄", value: "happy" },
  { icon: "😊", value: "good" },
  { icon: "😐", value: "neutral" },
  { icon: "😢", value: "sad" },
  { icon: "🔥", value: "excited" },
];
export default function EntryForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date || !image || !content) return;

    onSubmit({
      id: Date.now(),
      title,
      date,
      image,
      content,
      mood,
    });

    setTitle("");
    setDate("");
    setImage("");
    setContent("");
    setMood("");
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        className="input  border-(--color-green-middle) border-2 shadow-2xl w-full"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="date"
        className="input border-(--color-green-middle) border-2 shadow-2xl w-full "
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        className="input border-(--color-green-middle) border-2 shadow-2xl w-full"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <textarea
        className="textarea border-(--color-green-middle) border-2 shadow-2x w-full"
        placeholder="Write something..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      {/* Mood Picker */}
      <div>
        <label className="font-semibold block mb-2">Mood</label>
        <div className="flex gap-3">
          {moods.map((m) => (
            <button
              type="button"
              key={m.value}
              onClick={() => setMood(m.value)}
              className={`text-3xl p-2 rounded-4xl transition 
                ${
                  mood === m.value
                    ? "bg-(--color-primary)"
                    : "bg-white text-black hover:bg-(--color-primary-light)"
                }`}
            >
              {m.icon}
            </button>
          ))}
        </div>
      </div>
      <button className="btn btn-primary mt-6 hover:bg-(--color-green-light) ">
        Save Entry
      </button>
    </form>
  );
}
