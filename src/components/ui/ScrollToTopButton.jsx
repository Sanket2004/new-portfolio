import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={scrollToTop}
        className="bg-black dark:bg-white text-white dark:text-black fixed bottom-6 right-6 z-50 shadow-xl p-3 rounded-full cursor-pointer"
        aria-label="Scroll to top"
      >
        <FiChevronUp size={20} />
      </motion.button>
    )
  );
}
