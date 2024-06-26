"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { FiMoon, FiSun } from "react-icons/fi";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="text-xl pt-1 rounded-md shadow-md p-1"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <FiMoon /> : <FiSun />}
    </button>
  );
};
