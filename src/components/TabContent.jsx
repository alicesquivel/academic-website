import React from "react";
import { Div, Text } from "atomize";

const TabContent = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <Div>
            <Text textSize="body" textColor="gray800" m={{ b: "2rem" }}>
              I am a motivated PhD candidate specializing in cloud/edge computing and cybersecurity. With a proven ability to lead research, publish papers, and teach core computer science courses, I am seeking a research or faculty role to apply my expertise in cybersecurity and resilient network design for autonomous systems. I am passionate about leveraging advanced networking, AI, and testbed-driven validation in cloud and edge environments.
            </Text>
            <Div>
              <Text 
                tag="h2" 
                textSize="title"
                textColor="gray900"
                textWeight="600"
                m={{ b: "1rem" }}
              >
                Research Interests:
              </Text>
              <Text textSize="body" textColor="gray800">
                AI-driven security for cloud, edge, IoT, and mobile networks, focusing on federated learning, Zero Trust Architecture, intrusion detection, threat modeling, and critical infrastructure resilience.
              </Text>
            </Div>
          </Div>
        );
      case "research":
        return (
          <Div>
            <Text>Research content coming soon...</Text>
          </Div>
        );
      case "publications":
        return (
          <Div>
            <Text>Publications content coming soon...</Text>
          </Div>
        );
      case "experience":
        return (
          <Div>
            <Text>Experience content coming soon...</Text>
          </Div>
        );
      default:
        return null;
    }
  };

  return <Div tag="main">{renderContent()}</Div>;
};

export default TabContent;
