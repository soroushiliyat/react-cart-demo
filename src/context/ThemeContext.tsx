// src/context/ThemeContext.tsx
import { createContext, useState, type ReactNode } from "react";

// تعریف نوع context برای TypeScript
type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

// مقدار اولیه فقط برای TypeScript
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}