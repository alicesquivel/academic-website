import React from "react";

const Navbar = ({ activeTab, onTabChange }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const tabs = [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "publications", label: "Publications" },
    { id: "experience", label: "Experience" },
    { id: "fun", label: "Fun" },
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
          <nav className="hidden md:flex items-center gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`text-[15px] transition-colors ${
                  activeTab === tab.id
                    ? "text-gray-900 dark:text-gray-100 font-medium"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
            <div className="h-4 w-px bg-gray-200 dark:bg-gray-700" />
            <a
              href="/cv.pdf"
              className="text-[15px] text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
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
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  onTabChange(tab.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-2 py-2 rounded-lg text-[15px] transition-colors ${
                  activeTab === tab.id
                    ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-medium"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
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
