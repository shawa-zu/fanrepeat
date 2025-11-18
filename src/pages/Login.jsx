import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email) {
      setError("メールアドレスを入力してください。");
      return;
    }

    // 今回はフェイク認証（名前を入力として扱う）
    localStorage.setItem("user", email);

    navigate("/events");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-80">

        <h1 className="text-2xl font-bold text-center mb-6">
          Community App Login
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="メールアドレス"
            className="border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            ログイン
          </button>
        </form>
      </div>
    </div>
  );
}