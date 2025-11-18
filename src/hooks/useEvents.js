import { useState, useEffect } from "react";

export default function useEvents() {
  const STORAGE_KEY = "events";

  // ① 初期化（localStorage → state）
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  // ② state が変わったら localStorage に自動保存
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  }, [events]);

  // ③ イベント追加
  const addEvent = (title, date, description) => {
    const newEvent = {
      id: Date.now(),
      title,
      date,
      description,
    };
    setEvents((prev) => [...prev, newEvent]);
  };

  // ④ 個別取得
  const getEventById = (id) => {
    return events.find((ev) => ev.id === Number(id));
  };

  return {
    events,
    addEvent,
    getEventById,
  };
}