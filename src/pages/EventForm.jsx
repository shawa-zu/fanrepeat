import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useEvents from "../hooks/useEvents";

export default function EventForm() {
  const navigate = useNavigate();
  const { addEvent } = useEvents();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();

    if (!title) {
      setError("タイトルは必須です。");
      return;
    }

    addEvent(title, date, description);

    navigate("/events");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">イベント追加</h1>

      <form onSubmit={handleCreate} className="flex flex-col gap-4">

        <div>
          <label className="block font-semibold mb-1">タイトル（必須）</label>
          <input
            type="text"
            className="border border-gray-300 rounded w-full px-3 py-2"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setError("");
            }}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">日付</label>
          <input
            type="date"
            className="border border-gray-300 rounded w-full px-3 py-2"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">説明</label>
          <textarea
            className="border border-gray-300 rounded w-full px-3 py-2 h-28"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          作成する
        </button>
      </form>

      <button
        onClick={() => navigate("/events")}
        className="mt-4 text-blue-600 underline"
      >
        戻る
      </button>
    </div>
  );
}