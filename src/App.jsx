import React, { useState } from "react";
import ProfileHeader from "./components/ProfileHeader";
import TabNav from "./components/TabNav";
import TabContent from "./components/TabContent";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container py-8">
          <ProfileHeader />
          <div className="mt-8">
            <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
            <TabContent activeTab={activeTab} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
