import { useEffect } from "react";
import { Theme, useThemeStore } from "../stores/theme";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
}: ThemeProviderProps) {
  const { theme, setTheme } = useThemeStore();

  // On mount, set theme from localStorage or use defaultTheme
  useEffect(() => {
    const storedTheme =
      (localStorage.getItem("vite-ui-theme") as Theme) || defaultTheme;
    setTheme(storedTheme);
  }, [defaultTheme, setTheme]);

  // Update localStorage when theme changes (if not system)
  useEffect(() => {
    if (theme !== "system") {
      localStorage.setItem("vite-ui-theme", theme);
    }
  }, [theme]);

  // Apply theme to the document element
  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const systemTheme = mediaQuery.matches ? "dark" : "light";
      document.documentElement.classList.toggle("dark", systemTheme === "dark");

      const handleChange = (e: MediaQueryListEvent) => {
        document.documentElement.classList.toggle("dark", e.matches);
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  return <>{children}</>;
}
