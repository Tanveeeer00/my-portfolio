"use client";

import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[2rem] h-8 text-2xl bg-opacity-80 backdrop-blur-[0.5rem] 
      border border-black border-opacity-40 shadow-2xl rounded-full 
      flex items-center justify-center 
      hover:scale-[1.15] active:scale-105 transition-all
      dark:bg-gray-950 dark:text-white dark:border-white/40"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
