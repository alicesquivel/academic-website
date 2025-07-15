import React, { useState } from "react";
import ProfileHeader from "./components/ProfileHeader";
import TabNav from "./components/TabNav";
import TabContent from "./components/TabContent";
import Footer from "./components/Footer";
// We are not using the separate container component in this version for simplicity.
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  // --- EDITED CODE ---
  // The main div is now a flex container.
  // 'flex-col' stacks the children vertically.
  // 'items-center' will horizontally center the child container div.
  return (
    <div className="min-h-screen bg-[#f6f8fa] flex flex-col items-center py-8">
      {/* This div now acts as our container, defining the width and padding. */}
      {/* It will be centered by the parent flex container. */}
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <ProfileHeader />
        <TabNav activeTab={activeTab} onTabChange={handleTabChange} />
        <TabContent activeTab={activeTab} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
