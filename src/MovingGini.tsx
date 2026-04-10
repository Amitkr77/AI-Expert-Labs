import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import run from "./assets/logo/run.png";
const MovingGini = () => {
  const [x, setX] = useState(20);
  const [direction, setDirection] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const ref = useRef(null);

  // 🔥 AUTO MOVE LEFT ↔ RIGHT
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setX((prev) => {
          let next = prev + direction * 2;

          if (next > window.innerWidth - 90) {
            setDirection(-1);
            return prev;
          }

          if (next < 0) {
            setDirection(1);
            return prev;
          }

          return next;
        });
      }
    }, 20);

    return () => clearInterval(interval);
  }, [direction, isDragging]);

  // 🔥 DRAG START
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  // 🔥 DRAG END
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // 🔥 DRAG MOVE
  const handleMouseMove = (e) => {
    if (isDragging) {
      setX(e.clientX - 40);
    }
  };

  // 🔥 EVENT LISTENERS
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <Link
      to="/hellogini"
      className="fixed bottom-6 z-[9999]"
      style={{ left: x }}
    >
      <img
        ref={ref}
        src={run}   // ✅ FIXED IMAGE
        alt="Gini"
        onMouseDown={handleMouseDown}
        draggable={false}
        className="w-20 h-20 cursor-grab active:cursor-grabbing 
        hover:scale-110 transition duration-300 
        drop-shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
      />
    </Link>
  );
};

export default MovingGini;