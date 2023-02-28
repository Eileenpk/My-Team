import { useEffect, useState } from "react";
export default function GetWindowWidth () {
    const [windowSize, setWindowSize] = useState(0)
    useEffect(() => {
      function changeWindowSize() {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      }
      window.addEventListener("resize", changeWindowSize);
      changeWindowSize()
      return () => {
        window.removeEventListener("resize", changeWindowSize);
      };
    }, []);
    return windowSize;
  }