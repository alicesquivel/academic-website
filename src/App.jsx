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
    <Div minH="100vh" bg="gray900" d="flex" flexDir="column">
      <ProfileHeader />
      <Div tag="main" flex="1" w="100%" maxW="1200px" m={{ x: "auto" }} p={{ x: "1rem", y: "3rem" }}>
        <Div bg="gray800" rounded="xl" shadow="4" border="1px solid" borderColor="gray700" overflow="hidden">
          <TabNav activeTab={activeTab} onTabChange={handleTabChange} />
          <Div p="1.5rem">
            <TabContent activeTab={activeTab} />
          </Div>
        </Div>
        {activeTab === "about" && (
          <Div
            m={{ t: "2rem", x: "auto" }}
            maxW="800px"
            bg="gray800"
            opacity="0.9"
            rounded="xl"
            shadow="4"
            border="1px solid"
            borderColor="gray700"
            overflow="hidden"
          >
            <Div
              d="flex"
              align="center"
              p={{ x: "1rem", y: "0.5rem" }}
              bg="gray900"
              borderBottom="1px solid"
              borderColor="gray700"
            >
              <Div d="flex" align="center">
                <Div
                  h="0.75rem"
                  w="0.75rem"
                  bg="red500"
                  rounded="circle"
                  m={{ r: "0.5rem" }}
                  opacity="0.8"
                />
                <Div
                  h="0.75rem"
                  w="0.75rem"
                  bg="yellow500"
                  rounded="circle"
                  m={{ r: "0.5rem" }}
                  opacity="0.8"
                />
                <Div
                  h="0.75rem"
                  w="0.75rem"
                  bg="success500"
                  rounded="circle"
                  opacity="0.8"
                />
              </Div>
              <Text
                textColor="blue200"
                textSize="tiny"
                opacity="0.7"
                m={{ l: "auto" }}
              >
                terminal
              </Text>
            </Div>
            <Div
              p="1rem"
              fontFamily="mono"
              textSize="body"
              textColor="gray100"
            >
              <Div m={{ b: "1rem" }}>
                <Text textColor="info400">$ </Text>
                <Text textColor="blue200">whoami</Text>
                <Text textColor="blue200" opacity="0.7" d="block" m={{ t: "0.5rem", b: "1rem" }}>
                  alicia@cs-research:~$ PhD Candidate specializing in cybersecurity
                </Text>
              </Div>
              <Div m={{ b: "1rem" }}>
                <Text textColor="info400">$ </Text>
                <Text textColor="blue200">ls skills/</Text>
                <Text textColor="blue200" opacity="0.7" d="block" m={{ t: "0.5rem", b: "1rem" }}>
                  cybersecurity/ cloud-computing/ machine-learning/ networking/
                </Text>
              </Div>
              <Div>
                <Text textColor="info400">$ </Text>
                <Text textColor="blue200">cat research_focus.txt</Text>
                <Text textColor="blue200" opacity="0.7" d="block" m={{ t: "0.5rem" }}>
                  AI-driven security for distributed systems
                </Text>
              </Div>
            </Div>
          </Div>
        )}
      </Div>
      <Footer />
    </Div>
  );
}

export default App;
