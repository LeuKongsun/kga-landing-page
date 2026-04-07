"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { m } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-9 w-9 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-secondary focus-visible:ring-2 focus-visible:ring-primary outline-none"
      aria-label="Toggle theme"
    >
      <m.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : 90,
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <Moon className="w-5 h-5 text-blue-400" />
      </m.div>
      <m.div
        initial={false}
        animate={{
          rotate: isDark ? -90 : 0,
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <Sun className="w-5 h-5 text-orange-500" />
      </m.div>
    </button>
  );
};

export default ThemeSwitcher;
