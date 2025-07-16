import React, { useState } from "react";
import ProfileHeader from "./components/ProfileHeader";
import TabContent from "./components/TabContent";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <ProfileHeader />
          <TabContent activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </main>
      <ThemeToggle />
      <Footer />
    </div>
  );
}

export default App;
