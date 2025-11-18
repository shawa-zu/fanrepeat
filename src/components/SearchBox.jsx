export default function SearchBox({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="イベント名で検索"
      className="border border-gray-300 rounded px-3 py-2 w-full mb-4 focus:ring focus:ring-blue-200"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}