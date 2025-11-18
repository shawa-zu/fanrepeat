import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EventForm() {
  const navigate = useNavigate();

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

    // 後で useEvents と連結して保存処理を書く
    console.log("作成されたイベント:", {
      title,
      date,
      description,
    });

    navigate("/events");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">

      <h1 className="text-2xl font-bold mb-6">イベント追加</h1>

      <form onSubmit={handleCreate} className="flex flex-col gap-4">

        {/* タイトル */}
        <div>
          <label className="block font-semibold mb-1">タイトル（必須）</label>
          <input
            type="text"
            className="border border-gray-300 rounded w-full px-3 py-2 focus:ring focus:ring-blue-200"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setError("");
            }}
            placeholder="例：夏祭り、読書会 など"
          />
        </div>

        {/* 日付 */}
        <div>
          <label className="block font-semibold mb-1">日付</label>
          <input
            type="date"
            className="border border-gray-300 rounded w-full px-3 py-2 focus:ring focus:ring-blue-200"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* 説明 */}
        <div>
          <label className="block font-semibold mb-1">説明</label>
          <textarea
            className="border border-gray-300 rounded w-full px-3 py-2 h-28 focus:ring focus:ring-blue-200"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="イベントの説明を書いてください。"
          ></textarea>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
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