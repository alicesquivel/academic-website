import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "../lib/utils";

const TabNav = ({ activeTab, onTabChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const tabs = ["About", "Research", "Publications", "Experience", "Fun"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-200",
        "bg-white/80 backdrop-blur-sm",
        isScrolled && "shadow-sm"
      )}
    >
      <nav className="container px-4 py-1.5">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-64" : "max-h-0"
          )}
        >
          <div className="py-2 space-y-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.toLowerCase();
              return (
                <button
                  key={tab}
                  onClick={() => {
                    onTabChange(tab.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "w-full px-3 py-1.5 text-left text-sm font-medium transition-colors rounded-md",
                    isActive
                      ? "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800/50"
                  )}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center space-x-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.toLowerCase();
            return (
              <button
                key={tab}
                onClick={() => onTabChange(tab.toLowerCase())}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800/50"
                )}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default TabNav;
