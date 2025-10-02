"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/store/useThemeStore";

export default function ThemeSync() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) setTheme(savedTheme);
  }, [setTheme]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
// console.log(document.documentElement.classList);
  return null;
}
