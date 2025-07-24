import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/Button";

const ThemeToggle = () => {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    
    // Update DOM
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 z-50 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:scale-105"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0 text-amber-500 dark:text-amber-400" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100 text-blue-600 dark:text-blue-400" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
