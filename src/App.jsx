import React, { useState } from "react";
import { Div, Text } from "atomize";
import ProfileHeader from "./components/ProfileHeader";
import TabNav from "./components/TabNav";
import TabContent from "./components/TabContent";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Div minH="100vh" bg="#F8FAFC" d="flex" flexDir="column">
      <ProfileHeader />
      <Div tag="main" flex="1" w="100%" maxW="1200px" m={{ x: "auto" }} p={{ x: "1rem", y: "2rem" }}>
        <Div 
          bg="white" 
          rounded="2xl"
          shadow="sm"
          style={{ border: "1px solid #E2E8F0" }}
          overflow="hidden"
          transform="translateY(0)"
          transition="all 0.2s"
          m={{ b: "1.5rem" }}
        >
          <TabNav activeTab={activeTab} onTabChange={handleTabChange} />
          <Div p="2rem">
            <TabContent activeTab={activeTab} />
          </Div>
        </Div>
        {activeTab === "about" && (
            <Div>
              {/* About content goes here */}
            </Div>
        )}
      </Div>
      <Footer />
    </Div>
  );
}

export default App;
