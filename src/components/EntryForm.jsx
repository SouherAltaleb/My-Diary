import { useState } from "react";

export default function EntryForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date || !image || !content) return;

    onSubmit({
      title,
      date,
      image,
      content,
    });

    setTitle("");
    setDate("");
    setImage("");
    setContent("");
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        className="input input-bordered"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="date"
        className="input input-bordered"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        className="input input-bordered"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <textarea
        className="textarea textarea-bordered"
        placeholder="Write something..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button className="btn btn-primary">Save Entry</button>
    </form>
  );
}
