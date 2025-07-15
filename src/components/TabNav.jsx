import React from "react";

const TabNav = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "about", label: "About", icon: "👤" },
    { id: "research", label: "Research", icon: "🔬" },
    { id: "publications", label: "Publications", icon: "📚" },
    { id: "experience", label: "Experience", icon: "💼" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 mb-6">
      <div className="flex justify-center">
        <div className="flex space-x-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`
                px-4 py-3 font-medium text-sm border-b-2 transition-all duration-200
                flex items-center gap-2 whitespace-nowrap
                ${
                  activeTab === tab.id
                    ? "text-gray-900 border-gray-900"
                    : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
                }
              `}
              onClick={() => onTabChange(tab.id)}
            >
              <span className="text-base">{tab.icon}</span>
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TabNav;
