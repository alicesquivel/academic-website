import React from "react";
import { Div, Text } from "atomize";

const TabContent = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <Div
            bg="white"
            p={{ x: { xs: "1rem", md: "2rem" }, y: "2rem" }}
            rounded="xl"
          >
            <Text 
              textSize="body" 
              textColor="gray900"
              m={{ b: "2rem" }} 
              textWeight="400"
            >
              I am a motivated PhD candidate specializing in cloud/edge computing and cybersecurity. With a proven ability to lead research, publish papers, and teach core computer science courses, I am seeking a research or faculty role to apply my expertise in cybersecurity and resilient network design for autonomous systems. I am passionate about leveraging advanced networking, AI, and testbed-driven validation in cloud and edge environments.
            </Text>
            <Div m={{ b: "2rem" }}>
              <Text 
                tag="h2" 
                textSize="title"
                textColor="gray900"
                textWeight="600"
                m={{ b: "1rem" }}
              >
                Research Interests:
              </Text>
              <Text 
                textSize="body" 
                textColor="gray900"
                textWeight="400"
              >
                AI-driven security for cloud, edge, IoT, and mobile networks, focusing on federated learning, Zero Trust Architecture, intrusion detection, threat modeling, and critical infrastructure resilience.
              </Text>
            </Div>

            {/* Terminal Section */}
            <Div maxW="800px" m={{ t: "2rem" }}>
              <Div 
                rounded="lg" 
                overflow="hidden"
                style={{
                  background: "var(--terminal-bg)",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
                  border: "1px solid var(--border-color)"
                }}
              >
                <Div
                  d="flex"
                  align="center"
                  p={{ x: "1rem", y: "0.5rem" }}
                  style={{
                    background: "var(--terminal-header)",
                    borderBottom: "1px solid var(--border-color)"
                  }}
                >
                  <Div d="flex" align="center" style={{ gap: "6px" }}>
                    <Div
                      w="0.75rem"
                      h="0.75rem"
                      style={{ background: "#ef4444" }}
                      rounded="circle"
                    />
                    <Div
                      w="0.75rem"
                      h="0.75rem"
                      style={{ background: "#f59e0b" }}
                      rounded="circle"
                    />
                    <Div
                      w="0.75rem"
                      h="0.75rem"
                      style={{ background: "#22c55e" }}
                      rounded="circle"
                    />
                  </Div>
                  <Text
                    textSize="caption"
                    style={{ color: "rgb(226, 232, 240)" }}
                    m={{ l: "auto" }}
                    textWeight="500"
                    fontFamily="mono"
                  >
                    terminal
                  </Text>
                </Div>
                <Div
                  p={{ x: "1.5rem", y: "1.25rem" }}
                  fontFamily="mono"
                  textSize="caption"
                  d="flex"
                  flexDir="column"
                  style={{ gap: "0.75rem" }}
                >
                  <Div>
                    <Text tag="span" style={{ color: "var(--terminal-command)" }}>
                      $ whoami
                    </Text>
                  </Div>
                  <Text style={{ color: "var(--terminal-text)" }}>
                    alicia@cs-research:~$ PhD Candidate specializing in cybersecurity
                  </Text>
                  <Div>
                    <Text tag="span" style={{ color: "var(--terminal-command)" }}>
                      $ ls skills/
                    </Text>
                  </Div>
                  <Text style={{ color: "var(--terminal-text)", letterSpacing: "0.025em" }}>
                    cybersecurity/ cloud-computing/ machine-learning/ networking/
                  </Text>
                  <Div>
                    <Text tag="span" style={{ color: "rgb(203, 213, 225)" }}>
                      $ cat research_focus.txt
                    </Text>
                  </Div>
                  <Text style={{ color: "rgb(226, 232, 240)" }}>
                    AI-driven security for distributed systems
                  </Text>
                </Div>
              </Div>
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
