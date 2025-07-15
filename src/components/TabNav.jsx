import React from "react";

const TabNav = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "about", label: "About", icon: "👤" },
    { id: "research", label: "Research", icon: "🔬" },
    { id: "publications", label: "Publications", icon: "📚" },
    { id: "experience", label: "Experience", icon: "💼" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-0 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`
                px-4 py-3 sm:px-6 sm:py-4 font-medium text-sm 
                border-b-2 transition-all duration-200 ease-in-out
                flex items-center gap-2 whitespace-nowrap
                min-w-0 flex-shrink-0
                ${
                  activeTab === tab.id
                    ? "text-gray-900 border-gray-900 bg-gray-50"
                    : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                }
              `}
              onClick={() => onTabChange(tab.id)}
            >
              <span className="text-base sm:text-lg">{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden text-xs">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TabNav;
