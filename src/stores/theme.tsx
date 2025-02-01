import { create } from "zustand";
export type Theme = "light" | "dark" | "system";
type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
export const useThemeStore = create<ThemeState>((set) => ({
  theme: "system",
  setTheme: (theme: Theme) => {
    localStorage.setItem("vite-ui-theme", theme);
    set({ theme });
  },
}));
