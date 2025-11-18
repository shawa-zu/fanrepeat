import { useState } from "react";
import { useNavigate } from "react-router-dom";

import EventCard from "../components/EventCard";
import SearchBox from "../components/SearchBox";
import useEvents from "../hooks/useEvents";

export default function EventList() {
  const navigate = useNavigate();
  const { events } = useEvents();

  const [query, setQuery] = useState("");

  const filtered = events.filter((ev) =>
    ev.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">イベント一覧</h1>
        <button
          onClick={() => navigate("/events/new")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          追加する
        </button>
      </div>

      <SearchBox value={query} onChange={setQuery} />

      <div className="grid gap-4">
        {filtered.map((ev) => (
          <EventCard key={ev.id} event={ev} onClick={handleSelect} />
        ))}

        {filtered.length === 0 && (
          <p className="text-gray-500 text-center mt-6">
            イベントがありません。
          </p>
        )}
      </div>
    </div>
  );
}