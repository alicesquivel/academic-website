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
      p="1rem"
      borderBottom="1px solid"
      borderColor="gray700"
      d="flex"
      justify="center"
    >
      <Div d="flex" justify="center">
        <Div d="flex" justify="center">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              bg={activeTab === tab.id ? "info700" : "transparent"}
              hoverBg={activeTab === tab.id ? "info800" : "info900"}
              textColor={activeTab === tab.id ? "white" : "blue300"}
              hoverTextColor="white"
              p={{ x: "1rem", y: "0.5rem" }}
              m={{ x: "0.5rem" }}
              rounded="lg"
              d="flex"
              align="center"
              transition="all 0.2s"
            >
              <Div
                d="flex"
                align="center"
                transform="scale(1)"
                transition="transform 0.2s"
                hoverTransform="scale(1.1)"
              >
                <Div m={{ r: "0.5rem" }}>
                {React.createElement(tab.icon, {
                  size: 20,
                  color: activeTab === tab.id ? "white" : "#93C5FD"
                })}
              </Div>
                <Text
                  textSize="body"
                  textWeight="500"
                  letterSpacing="0.5px"
                >
                  {tab.label}
                </Text>
              </Div>
              {activeTab === tab.id && (
                <Div
                  pos="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  h="2px"
                  bg="info400"
                />
              )}
            </Button>
          ))}
        </Div>
      </Div>
    </Div>
  );
};

export default TabNav;
