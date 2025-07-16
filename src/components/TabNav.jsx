import React, { useEffect, useState } from "react";
import { Menu, User, BookOpen, FileText, Briefcase, Coffee } from "lucide-react";
import { cn } from "../lib/utils";

const TabNav = ({ activeTab, onTabChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const tabs = [
    { name: "About", icon: User },
    { name: "Research", icon: BookOpen },
    { name: "Publications", icon: FileText },
    { name: "Experience", icon: Briefcase },
    { name: "Fun", icon: Coffee }
  ];

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
        "sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 transition-all duration-200",
        "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm",
        isScrolled && "shadow-sm"
      )}
    >
      <nav className="container px-4 py-0">
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
              const isActive = activeTab === tab.name.toLowerCase();
              return (
                <button
                  key={tab.name}
                  onClick={() => {
                    onTabChange(tab.name.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "w-full px-4 py-2 text-left text-sm font-medium transition-colors flex items-center gap-3",
                    isActive
                      ? "text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800/50"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  )}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center gap-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.name.toLowerCase();
            return (
              <button
                key={tab.name}
                onClick={() => onTabChange(tab.name.toLowerCase())}
                className={cn(
                  "group px-4 py-2 text-sm font-medium transition-all flex items-center gap-2",
                  isActive
                    ? "text-gray-900 dark:text-gray-100 border-b-2 border-gray-500 dark:border-gray-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                )}
              >
                <tab.icon className="h-4 w-4" />
                <span className="relative">
                  {tab.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-300 dark:bg-gray-600 scale-x-0 group-hover:scale-x-100 transition-transform" />
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default TabNav;
