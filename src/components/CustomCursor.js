"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("hoverable")
      ) {
        cursor.classList.add("hovered");
      }
    };

    const onMouseOut = () => {
      cursor.classList.remove("hovered");
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      cursorPos.current.x = lerp(cursorPos.current.x, mousePos.current.x, 0.12);
      cursorPos.current.y = lerp(cursorPos.current.y, mousePos.current.y, 0.12);
      cursor.style.left = `${cursorPos.current.x - 18}px`;
      cursor.style.top = `${cursorPos.current.y - 18}px`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor hidden md:block" />;
}
