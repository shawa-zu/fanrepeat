export default function EventCard({ event, onClick }) {
  return (
    <div
      className="p-4 bg-white shadow rounded hover:shadow-md transition cursor-pointer"
      onClick={() => onClick(event.id)}
    >
      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p className="text-gray-600 mt-1">{event.date}</p>
      <p className="text-gray-700 mt-2 line-clamp-2">{event.description}</p>
    </div>
  );
}