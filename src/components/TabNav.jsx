import React from "react";

const TabNav = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "about", label: "About", icon: "👤" },
    { id: "research", label: "Research", icon: "🔬" },
    { id: "publications", label: "Publications", icon: "📚" },
    { id: "experience", label: "Experience", icon: "💼" },
  ];

  return (
    <nav className="navigation">
      <div className="nav-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => onTabChange(tab.id)}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default TabNav;
