"use client";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [point, setPoint] = useState({ x: -400, y: -400 });
  useEffect(() => {
    const move = (e) => setPoint({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <div className="cursor-glow" style={{ transform: `translate3d(${point.x - 190}px, ${point.y - 190}px, 0)` }} />;
}
