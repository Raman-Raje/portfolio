import { useContext } from "react";
import ThemeContext from "@/contexts/ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  // Throw an error if the hook is used outside of a ThemeProvider
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};