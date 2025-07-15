import React, { useState } from "react";
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
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <ProfileHeader />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-12">
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50">
          <TabNav activeTab={activeTab} onTabChange={handleTabChange} />
          <div className="p-6">
            <TabContent activeTab={activeTab} />
          </div>
        </div>
        {activeTab === "about" && (
          <div className="mt-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700/50 overflow-hidden max-w-3xl mx-auto">
            <div className="flex items-center px-4 py-2 bg-gray-800/50 border-b border-gray-700/50">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500/80 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500/80 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500/80 rounded-full"></div>
              </div>
              <div className="ml-auto text-xs text-blue-200/70">terminal</div>
            </div>
            <div className="p-4 font-mono text-sm space-y-2">
              <div>
                <span className="text-blue-400">$</span>{" "}
                <span className="text-blue-200">whoami</span>
              </div>
              <div className="text-blue-200/70 mb-2">
                alicia@cs-research:~$ PhD Candidate specializing in
                cybersecurity
              </div>
              <div>
                <span className="text-blue-400">$</span>{" "}
                <span className="text-blue-200">ls skills/</span>
              </div>
              <div className="text-blue-200/70 mb-2">
                cybersecurity/ cloud-computing/ machine-learning/ networking/
              </div>
              <div>
                <span className="text-blue-400">$</span>{" "}
                <span className="text-blue-200">cat research_focus.txt</span>
              </div>
              <div className="text-blue-200/70">
                AI-driven security for distributed systems
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
