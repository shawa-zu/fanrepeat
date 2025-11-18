import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="w-full bg-white shadow px-6 py-3 flex justify-between items-center">
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => navigate("/events")}
      >
        Community App
      </h1>

      {/* ログイン中だけ表示 */}
      {user && (
        <div className="flex gap-4 items-center">
          <span classname="text-gray-600 hidden sm:block">
            {user} さん
          </span>

          <button
            onClick={handleLogout}
            className="text-sm text-red-500 hover:text-red-600 underline"
          >
            ログアウト
          </button>
        </div>
      )}
    </header>
  );
}