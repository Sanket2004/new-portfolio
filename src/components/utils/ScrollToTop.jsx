// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log(`ScrollToTop triggered for ${pathname}`);

    window.scrollTo(0, 0, {
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}
