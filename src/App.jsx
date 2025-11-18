import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";

import Login from "./pages/Login";
import EventList from "./pages/EventList";
import EventForm from "./pages/EventForm";
import EventDetail from "./pages/EventDetail";

export default function App() {
  return (
    <BrowserRouter>

      {/* ログインページ以外にヘッダーを表示 */}
      {window.location.pathname !== "/login" && <Header />}

      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />

        <Route path="/events" element={<EventList />} />
        <Route path="/events/new" element={<EventForm />} />
        <Route path="/events/:id" element={<EventDetail />} />
      </Routes>

    </BrowserRouter>
  );
}