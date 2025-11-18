import { useState } from "react";
import { useNavigate } from "react-router-dom";

import EventCard from "../components/EventCard";
import SearchBox from "../components/SearchBox";

const sampleEvents = [
  {
    id: 1,
    title: "春のお花見会",
    date: "2025-03-20",
    description: "地域の桜公園でお花見を楽しむ会です。お弁当持参で自由参加！",
  },
  {
    id: 2,
    title: "子ども向けプログラミング教室",
    date: "2025-04-10",
    description: "小中学生向けにプログラミングの基礎を体験するワークショップ。",
  },
  {
    id: 3,
    title: "大人の読書会",
    date: "2025-05-05",
    description: "好きな本を持ち寄って語り合う交流イベント。",
  },
];

export default function EventList() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const filtered = sampleEvents.filter((ev) =>
    ev.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">

      {/* 上部ヘッダー */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">イベント一覧</h1>
        <button
          onClick={() => navigate("/events/new")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          追加する
        </button>
      </div>

      {/* 検索 */}
      <SearchBox value={query} onChange={setQuery} />

      {/* 一覧 */}
      <div className="grid gap-4">
        {filtered.map((ev) => (
          <EventCard key={ev.id} event={ev} onClick={handleSelect} />
        ))}

        {filtered.length === 0 && (
          <p className="text-gray-500 text-center mt-6">
            イベントが見つかりませんでした。
          </p>
        )}
      </div>

    </div>
  );
}