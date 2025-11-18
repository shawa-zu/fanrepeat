import { useParams, useNavigate } from "react-router-dom";
import useEvents from "../hooks/useEvents";

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getEventById } = useEvents();

  const event = getEventById(id);

  if (!event) {
    return (
      <div className="p-6 text-center">
        <p>イベントが見つかりません。</p>
        <button
          onClick={() => navigate("/events")}
          className="mt-4 text-blue-600 underline"
        >
          一覧へ戻る
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{event.title}</h1>
      <p className="text-gray-600 mb-4">{event.date}</p>
      <p className="text-gray-800 leading-relaxed">{event.description}</p>

      <button
        onClick={() => navigate("/events")}
        className="mt-6 text-blue-600 underline"
      >
        一覧に戻る
      </button>
    </div>
  );
}