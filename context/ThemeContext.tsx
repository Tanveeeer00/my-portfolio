import React, { useState } from "react";

type Theme = "light" | "dark";

export default function ThemeContextProvider() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return <div></div>;
}
