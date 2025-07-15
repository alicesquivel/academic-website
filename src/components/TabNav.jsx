import React from "react";
import { Div, Text, Button } from "atomize";
import { User, Search, BookmarkCheck, Briefcase } from "lucide-react";

const TabNav = ({ activeTab, onTabChange }) => {
  const tabs = [
    {
      id: "about",
      label: "About",
      icon: User,
    },
    {
      id: "research",
      label: "Research",
      icon: Search,
    },
    {
      id: "publications",
      label: "Publications",
      icon: BookmarkCheck,
    },
    {
      id: "experience",
      label: "Experience",
      icon: Briefcase,
    },
  ];

  return (
    <Div
      tag="nav"
      p={{ x: { xs: "0.5rem", md: "1.5rem" }, y: "0.5rem" }}
      style={{
        borderBottom: "1px solid #E2E8F0",
        overflowX: "auto",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
      d="flex"
      justify="flex-start"
      bg="gray100"
    >
      <Div d="flex" w="100%" justify={{ xs: "flex-start", md: "center" }}>
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            bg={activeTab === tab.id ? "white" : "transparent"}
            shadow={activeTab === tab.id ? "2" : "none"}
            textColor={activeTab === tab.id ? "info700" : "gray600"}
            p={{
              x: { xs: "1rem", md: "1.5rem" },
              y: { xs: "0.5rem", md: "0.75rem" },
            }}
            m={{ r: { xs: "0.5rem", md: "0.75rem" } }}
            rounded="xl"
            d="flex"
            align="center"
            border="1px solid"
            borderColor={activeTab === tab.id ? "gray200" : "transparent"}
            transform={activeTab === tab.id ? "translateY(-2px)" : "none"}
            minW={{ xs: "auto", md: "auto" }}
            style={{
              transition: "all 0.2s ease",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <Div d="flex" align="center">
              <Div m={{ r: { xs: "0.25rem", md: "0.375rem" } }}>
                {React.createElement(tab.icon, {
                  size: { xs: 14, md: 16 },
                  color: activeTab === tab.id ? "#2563EB" : "#64748B",
                  strokeWidth: 1.5,
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
