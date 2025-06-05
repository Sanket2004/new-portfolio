// components/TopLoadingBar.js
import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const TopLoadingBar = () => {
  const loadingBarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Start on location change
    loadingBarRef.current?.continuousStart();
    const timeout = setTimeout(() => {
      loadingBarRef.current?.complete();
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <LoadingBar
      color="#1d1d1d"
      height={2}
      shadow={true}
      ref={loadingBarRef}
    />
  );
};

export default TopLoadingBar;
