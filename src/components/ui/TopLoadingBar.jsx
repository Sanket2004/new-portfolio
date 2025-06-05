import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const TopLoadingBar = () => {
  const loadingBarRef = useRef(null);
  const location = useLocation();
  const [color, setColor] = useState("#000000"); // default to light mode

  useEffect(() => {
    // Detect dark mode from <html class="dark">
    const isDark = document.documentElement.classList.contains("dark");
    setColor(isDark ? "#ffffff" : "#000000");

    loadingBarRef.current?.continuousStart();
    const timeout = setTimeout(() => {
      loadingBarRef.current?.complete();
    }, 500);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <LoadingBar
      color={color}
      className="dark:bg-white"
      height={2}
      shadow={true}
      ref={loadingBarRef}
    />
  );
};

export default TopLoadingBar;
