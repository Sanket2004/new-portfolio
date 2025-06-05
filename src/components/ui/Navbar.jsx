import { LuMenu, LuX } from "react-icons/lu";
import data from "../../assets/data.json";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    isMenuOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.08,
        ease: "easeOut",
        duration: 0.2,
      },
    },
    exit: { opacity: 0, x: -20, transition: { ease: "easeIn", duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeOut", duration: 0.2 },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { ease: "easeIn", duration: 0.15 },
    },
  };

  useEffect(() => {
    const activeItem = menuItems.find((item) => item.href === currentPath);
    if (activeItem) {
      document.title = `${activeItem.name} | ${data.name}`;
    } else {
      document.title = `Home | ${data.name}`;
    }
  }, [currentPath]);

  return (
    <header className="bg-white/80 text-black py-4 px-6 sticky top-0 backdrop-blur-md z-50">
      <nav className="flex justify-between items-center">
        {/* logo */}
        <Link to="/" className="text-2xl font-bold">
          {data.short_name}
        </Link>

        {/* desktop menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={`border-b-2 ${
                  currentPath === item.href
                    ? "text-black border-black font-bold"
                    : "text-gray-500 border-transparent hover:text-black hover:border-black font-semibold"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* menu button (mobile) */}
        <motion.button
          whileTap={{ scale: 0.8 }}
          className="md:hidden z-50"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <LuX className="w-6 h-6" />
          ) : (
            <LuMenu className="w-6 h-6" />
          )}
        </motion.button>

        {/* mobile menu */}
        {isMenuOpen && (
          <motion.ul
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden h-screen fixed top-0 left-0 w-full bg-white shadow-lg p-4 pt-32 space-y-6 z-30"
          >
            {menuItems.map((item) => (
              <motion.li
                key={item.name}
                variants={itemVariants}
                className={`border-b pb-2  ${
                  currentPath === item.href ? "border-black" : "border-gray-200"
                }`}
              >
                <Link
                  to={item.href}
                  onClick={toggleMenu}
                  className={`block text-lg ${
                    currentPath === item.href
                      ? "text-black font-bold"
                      : "text-gray-500 hover:text-black font-semibold"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </nav>
    </header>
  );
}
