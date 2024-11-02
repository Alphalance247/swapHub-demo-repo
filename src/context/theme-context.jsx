"use client";
import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState("white");
  const [loading, setLoading] = useState(true); // New state for loading

  useEffect(() => {
    // Load theme from localStorage if it exists
    const savedTheme = localStorage.getItem("themeColor");
    if (savedTheme) {
      setThemeColor(savedTheme);
    }
    setLoading(false); // Set loading to false after theme is retrieved
  }, []);

  useEffect(() => {
    // Save theme to localStorage whenever it changes
    if (!loading) {
      localStorage.setItem("themeColor", themeColor);
    }
  }, [themeColor, loading]);

  const toggleTheme = () => {
    setThemeColor(themeColor === "white" ? "black" : "white");
  };

  const bgShow = themeColor === "white" ? "bg-white" : "bg-black";

  if (loading) {
    return null; // You can add a loading spinner or return null to hide the content
  }

  return (
    <ThemeContext.Provider value={{ themeColor, toggleTheme }}>
      <div className={`${bgShow}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
