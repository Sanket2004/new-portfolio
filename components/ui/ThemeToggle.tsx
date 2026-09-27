"use client";

import { LaptopMinimal, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <div className="w-22 h-8 bg-foreground/10 rounded-full border border-foreground/20" />
    );
  }

  const activeTheme = theme ?? "system";

  return (
    <div className="inline-flex items-center h-8 gap-1 p-1 rounded-full border border-dashed border-border/70 bg-muted/30 backdrop-blur-sm select-none">
      <button
        onClick={() => setTheme("system")}
        className={`flex h-6 w-6 items-center justify-center rounded-full ${
          activeTheme === "system"
            ? "bg-background/10 text-foreground border"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        }`}
        aria-label="System theme"
        aria-pressed={activeTheme === "system"}
      >
        <LaptopMinimal size={15} strokeWidth={1.5} />
      </button>

      <button
        onClick={() => setTheme("light")}
        className={`flex h-6 w-6 items-center justify-center rounded-full ${
          activeTheme === "light"
            ? "bg-background/10 text-foreground border"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        }`}
        aria-label="Light theme"
        aria-pressed={activeTheme === "light"}
      >
        <Sun size={15} strokeWidth={1.5} />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`flex h-6 w-6 items-center justify-center rounded-full ${
          activeTheme === "dark"
            ? "bg-background/10 text-foreground border"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        }`}
        aria-label="Dark theme"
        aria-pressed={activeTheme === "dark"}
      >
        <Moon size={15} strokeWidth={1.5} />
      </button>
    </div>
  );
}
