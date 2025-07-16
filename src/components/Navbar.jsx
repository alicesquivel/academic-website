import React from "react";

const Navbar = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "publications", label: "Publications" },
    { id: "experience", label: "Experience" },
    { id: "fun", label: "Fun" },
  ];

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
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

          <nav className="flex items-center gap-6">
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;
