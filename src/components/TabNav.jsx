import React from "react";
import { Div, Text, Button } from "atomize";
import { PiIdentificationBadgeLight, PiCodeLight, PiArticleLight, PiBriefcaseLight } from "react-icons/pi";

const TabNav = ({ activeTab, onTabChange }) => {
  const tabs = [
    {
      id: "about",
      label: "About",
      icon: PiIdentificationBadgeLight,
    },
    {
      id: "research",
      label: "Research",
      icon: PiCodeLight,
    },
    {
      id: "publications",
      label: "Publications",
      icon: PiArticleLight,
    },
    {
      id: "experience",
      label: "Experience",
      icon: PiBriefcaseLight,
    },
  ];

  return (
    <Div
      tag="nav"
      p={{ x: { xs: "0.5rem", md: "1.5rem" }, y: "0" }}
      style={{
        borderBottom: "1px solid #E2E8F0",
        overflowX: "auto",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        backgroundColor: "#F8FAFC"
      }}
      d="flex"
      justify="flex-start"
    >
      <Div d="flex" w="100%" justify={{ xs: "flex-start", md: "center" }}>
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            bg="transparent"
            hoverBg={{ xs: "gray100", md: "white" }}
            textColor={activeTab === tab.id ? "info700" : "gray600"}
            p={{
              x: { xs: "0.75rem", md: "1rem" },
              y: { xs: "0.5rem", md: "0.75rem" },
            }}
            m={{ r: { xs: "0.25rem", md: "0.5rem" } }}
            rounded="lg"
            d="flex"
            align="center"
            border="none"
            transform={activeTab === tab.id ? "none" : "none"}
            minW={{ xs: "auto", md: "auto" }}
            style={{
              transition: "all 0.2s ease",
              cursor: "pointer",
              position: "relative",
              borderBottom: activeTab === tab.id ? "2px solid #2563EB" : "2px solid transparent"
            }}
          >
            <Div d="flex" align="center">
              <Div m={{ r: { xs: "0.25rem", md: "0.375rem" } }}>
                {React.createElement(tab.icon, {
                  size: { xs: 16, md: 18 },
                  color: activeTab === tab.id ? "#2563EB" : "#94A3B8",
                  weight: "thin"
                })}
              </Div>
              <Text
                textSize={{ xs: "caption", md: "body" }}
                textWeight={activeTab === tab.id ? "600" : "500"}
                style={{ whiteSpace: "nowrap" }}
              >
                {tab.label}
              </Text>
            </Div>
          </Button>
        ))}
      </Div>
    </Div>
  );
};

export default TabNav;
