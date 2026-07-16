"use client";

import { useEffect } from "react";

export default function MouseStalker() {
  useEffect(() => {
    const stalker = document.getElementById("js-stalker");

    if (!stalker) return;

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      stalker.style.opacity = "1";


      const target = e.target as HTMLElement;

      if (target.closest("a")) {
        stalker.classList.add("hover");
      } else {
        stalker.classList.remove("hover");
      }
    };
    document.addEventListener("mousemove", handleMouseMove);




    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      stalker.style.transform =
        `translate(${currentX}px, ${currentY}px)`;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener(
        "mousemove",
        handleMouseMove
      );

    };
  }, []);

  return (
    <div
      id="js-stalker"
      className="stalker"
    />
  );
}
