import { useState, useEffect } from "react";

interface MousePosition {
  x: number | null;
  y1: number | null;
}

const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: null, y1: null });

  const updateMousePosition = (e: MouseEvent): void => {
    setMousePosition({ x: e.clientX, y1: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;