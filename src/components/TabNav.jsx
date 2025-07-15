import React from "react";
import { Div, Text, Button } from "atomize";
import { User, Search, BookmarkCheck, Briefcase } from 'lucide-react';

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
      p={{ x: "1.5rem", y: "0.5rem" }}
      style={{ borderBottom: "1px solid #E2E8F0" }}
      d="flex"
      justify="flex-start"
      bg="#F8FAFC"
    >
      <Div d="flex">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            bg="transparent"
            hoverBg="white"
            textColor={activeTab === tab.id ? "#1E293B" : "#64748B"}
            p={{ x: "1.25rem", y: "0.75rem" }}
            m={{ r: "0.5rem" }}
            rounded="lg"
            d="flex"
            align="center"
            transition="all 0.2s"
            border="none"
            cursor="pointer"
            pos="relative"
          >
            <Div d="flex" align="center">
              <Div m={{ r: "0.5rem" }}>
                {React.createElement(tab.icon, {
                  size: 18,
                  color: activeTab === tab.id ? "#1E293B" : "#64748B"
                })}
              </Div>
              <Text
                textSize="caption"
                textWeight="500"
                letterSpacing="0.5px"
              >
                {tab.label}
              </Text>
            </Div>
            {activeTab === tab.id && (
              <Div
                pos="absolute"
                bottom="-1px"
                left="0"
                right="0"
                h="2px"
                bg="#334155"
              />
            )}
          </Button>
        ))}
      </Div>
    </Div>
  );
};

export default TabNav;
