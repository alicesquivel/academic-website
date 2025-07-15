import React, { useState } from "react";
import ProfileHeader from "./components/ProfileHeader";
import TabNav from "./components/TabNav";
import TabContent from "./components/TabContent";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ProfileHeader />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 md:px-6">
        <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden transition-all duration-200 mb-6">
          <TabNav activeTab={activeTab} onTabChange={handleTabChange} />
          <div className="p-4 md:p-8">
            <TabContent activeTab={activeTab} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
