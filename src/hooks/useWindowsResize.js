import { useEffect, useRef, useState } from "react";

export default function useWindowResize(maxWidth) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= maxWidth);
  const prevWidth = useRef(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      const currWidth = window.innerWidth;

      if (currWidth <= maxWidth && prevWidth.current > maxWidth) {
        setIsMobile(true);
      } else if (currWidth > maxWidth && prevWidth.current <= maxWidth) {
        setIsMobile(false);
      }

      prevWidth.current = currWidth;
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}
