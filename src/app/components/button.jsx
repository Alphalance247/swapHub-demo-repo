"use client";
import { ThemeContext } from "@/context/theme-context";
import { useState, useContext } from "react";

const Button = () => {
  const { themeColor, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        onClick={toggleTheme}
      >
        {themeColor === "white" ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default Button;
