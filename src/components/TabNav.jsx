import React from "react";

const TabNav = ({ activeTab, onTabChange }) => {
  const tabs = [
    {
      id: "about",
      label: "About",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      id: "research",
      label: "Research",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "publications",
      label: "Publications",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      id: "experience",
      label: "Experience",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <nav className="p-4 border-b border-gray-700/50">
      <div className="flex justify-center">
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`
                group relative px-4 py-2 font-medium rounded-lg transition-all duration-300
                flex items-center gap-3 overflow-hidden
                ${
                  activeTab === tab.id
                    ? "bg-blue-500/20 text-blue-300"
                    : "text-blue-200/60 hover:text-blue-200"
                }
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/0 before:via-blue-500/5 before:to-blue-500/0
                before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500
              `}
              onClick={() => onTabChange(tab.id)}
            >
              <span className="relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {tab.icon}
              </span>
              <span className="relative z-10 font-medium tracking-wide">
                {tab.label}
              </span>
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TabNav;
