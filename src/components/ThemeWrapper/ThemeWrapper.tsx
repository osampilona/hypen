"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

interface ThemeWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children, className }) => {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme,
  );

  // Apply theme to the body element for global CSS variables
  useEffect(() => {
    document.body.setAttribute("data-theme", currentTheme);

    // Also add the class for backward compatibility
    if (currentTheme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [currentTheme]);

  const themeClass = currentTheme === "dark" ? "dark-theme" : "";
  const combinedClassName = className
    ? `${className} ${themeClass}`.trim()
    : themeClass;

  return <div className={combinedClassName}>{children}</div>;
};

export default ThemeWrapper;
