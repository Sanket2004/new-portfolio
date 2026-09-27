"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";

const links: { name: string; href: string; badge?: string | number }[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-dashed border-border/60 transition-all bg-background/50 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 text-lg font-light tracking-normal text-foreground sm:text-xl hover:opacity-80 transition-opacity"
        >
          @sanket
        </Link>

        <div>
          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-9 h-9 flex sm:hidden items-center justify-center p-2 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted/50 transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col gap-1.25 w-4">
              <span
                className={`h-[1.5px] bg-muted-foreground rounded-full transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
              />
              <span
                className={`h-[1.5px] bg-muted-foreground rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[1.5px] bg-muted-foreground rounded-full transition-all duration-300 ${
                  isOpen ? "-rotate-45 translate-y-[-6.5px]" : ""
                }`}
              />
            </div>
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-4">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}
            <div
              className="hidden sm:block h-6 w-px shrink-0 bg-border/80 mx-2"
              aria-hidden="true"
            />

            <ThemeToggle />
          </ul>

          {/* Mobile Menu - Full Width */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="md:hidden absolute top-16 left-0 w-full border-b border-dashed border-border/60 bg-background px-4 py-4 flex flex-col gap-4 shadow-sm"
              >
                <ul className="flex flex-col gap-1">
                  {links.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`rounded-md px-3 py-2.5 text-base font-light tracking-tight ${isActive ? "bg-accent/60 text-foreground" : "text-muted-foreground"}`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </ul>
                <div className="h-px w-full bg-border/80" aria-hidden="true" />
                <div className="flex items-center justify-between px-1">
                  <span className="text-base font-light tracking-tight text-muted-foreground">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
