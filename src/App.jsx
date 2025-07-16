import React, { useState } from "react";
import ProfileHeader from "./components/ProfileHeader";
import TabNav from "./components/TabNav";
import TabContent from "./components/TabContent";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import "./index.css";

function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
      <div className="min-h-screen flex flex-col bg-background text-foreground pb-16">
        <main className="flex-1">
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <ProfileHeader />
        </div>
        <div className="mt-8">
          <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="container max-w-4xl mx-auto px-4 py-8">
            <TabContent activeTab={activeTab} />
          </div>
        </div>
      </main>
      <ThemeToggle />
      <Footer />
    </div>
  );
}

export default App;
