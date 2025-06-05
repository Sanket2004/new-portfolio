import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

export default function DarkModeToggle({ className = "" }) {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      return (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = window.document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className={`text-black dark:text-white transition-colors cursor-pointer ${className}`}
    >
      <AnimatePresence mode="wait">
        {dark ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <LuMoon size={22} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <LuSun size={22} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
