import React, { useState } from "react";

export function useMousePosition() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  // 更新状态
  window.addEventListener("mousemove", (e) => {
    const currentX = e.clientX;
    const currentY = e.clientY;
    setX(currentX);
    setY(currentY);
  });
  return [x, y];
}
