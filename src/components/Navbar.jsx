import React from "react";
import { Home, GraduationCap, Lightbulb, BookOpen, Coffee, ChevronDown } from "lucide-react";

const Navbar = ({ activeTab, onTabChange }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsWorkDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const tabs = [
    { id: "about", label: "About", icon: Home },
    { id: "experience", label: "Experience", icon: GraduationCap },
    { id: "research", label: "Research", icon: Lightbulb },
    { id: "publications", label: "Publications", icon: BookOpen },
    { id: "fun", label: "Fun Stuff", icon: Coffee },
  ];

  const workTabs = [
    { id: "research", label: "Research", icon: Lightbulb },
    { id: "publications", label: "Publications", icon: BookOpen },
  ];

  const mainTabs = [
    { id: "about", label: "About", icon: Home },
    { id: "experience", label: "Experience", icon: GraduationCap },
    { id: "fun", label: "Fun Stuff", icon: Coffee },
  ];

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex flex-col">
            <a href="/" className="flex items-center">
              <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                Alicia Esquivel Morel
              </span>
            </a>
            <span className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
              PhD Candidate in Computer Science
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center gap-x-2 text-[15px] transition-all duration-200 border-b-2 pb-1 ${
                    activeTab === tab.id
                      ? "text-blue-600 dark:text-blue-400 font-medium border-blue-600 dark:border-blue-400"
                      : "text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 border-transparent hover:border-blue-300 dark:hover:border-blue-500"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
            <div className="h-4 w-px bg-gray-200 dark:bg-gray-700" />
            <a
              href="/cv.pdf"
              className="text-[15px] text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </nav>

          {/* Tablet Navigation with Work Dropdown */}
          <nav className="hidden md:flex lg:hidden items-center gap-4">
            {mainTabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center gap-x-2 text-[14px] transition-all duration-200 border-b-2 pb-1 ${
                    activeTab === tab.id
                      ? "text-blue-600 dark:text-blue-400 font-medium border-blue-600 dark:border-blue-400"
                      : "text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 border-transparent hover:border-blue-300 dark:hover:border-blue-500"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
            
            {/* Work Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsWorkDropdownOpen(!isWorkDropdownOpen)}
                className={`flex items-center gap-x-1 text-[14px] transition-all duration-200 border-b-2 pb-1 ${
                  activeTab === "research" || activeTab === "publications"
                    ? "text-blue-600 dark:text-blue-400 font-medium border-blue-600 dark:border-blue-400"
                    : "text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 border-transparent hover:border-blue-300 dark:hover:border-blue-500"
                }`}
              >
                Work
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isWorkDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isWorkDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-10">
                  {workTabs.map((tab) => {
                    const IconComponent = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => {
                          onTabChange(tab.id);
                          setIsWorkDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-x-2 px-4 py-2 text-[14px] text-left transition-colors ${
                          activeTab === tab.id
                            ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            
            <div className="h-4 w-px bg-gray-200 dark:bg-gray-700" />
            <a
              href="/cv.pdf"
              className="text-[14px] text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </nav>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600 dark:text-gray-400"
            >
              {isMenuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 12h16M4 6h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`md:hidden transition-all duration-200 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="py-4 border-t border-gray-200 dark:border-gray-800 space-y-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    onTabChange(tab.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-2 py-2 rounded-lg text-[15px] transition-colors flex items-center gap-x-2 ${
                    activeTab === tab.id
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium"
                      : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-500 dark:hover:text-blue-400"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
            <div className="h-px bg-gray-200 dark:bg-gray-800 my-2" />
            <a
              href="/cv.pdf"
              className="block px-2 py-2 text-[15px] text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              CV
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
