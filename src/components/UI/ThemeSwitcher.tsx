"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { FiMoon, FiSun } from "react-icons/fi";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className="text-2xl md:3xl  p-2  md:p-0"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <FiMoon /> : <FiSun />}
    </button>
  );
};
