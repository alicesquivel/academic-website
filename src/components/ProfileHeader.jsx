import React from "react";
import { Div, Container, Text, Button } from "atomize";
import { Github, FileText, Mail, Linkedin } from 'lucide-react';

const ProfileHeader = () => {
  return (
    <Div tag="header" p={{ y: "1.5rem" }} bg="#F8FAFC">
      <Container d="flex" flexDir="column" align="flex-start" maxW="1200px">
        <Div
          d="flex"
          flexDir={{ xs: "column", md: "row" }}
          align="center"
          justify="space-between"
          w="100%"
        >
          <Div d="flex" align="center">
            <Div
              h="5rem"
              w="5rem"
              bg="#64748B"
              rounded="circle"
              d="flex"
              align="center"
              justify="center"
              m={{ r: "1.5rem" }}
              shadow="sm"
              pos="relative"
              overflow="hidden"
          >
            <Text
              textSize="display1"
              textWeight="700"
              textColor="white"
            >
              AEM
            </Text>
            <Div
              pos="absolute"
              top="0"
              bottom="0"
              right="0"
              left="0"
              bg="gradient"
              style={{
                background: "linear-gradient(45deg, rgba(66, 153, 225, 0.3), rgba(90, 103, 216, 0.3))",
                opacity: 0.5
              }}
            />
          </Div>
          <Div d="flex" flexDir="column" m={{ r: "auto" }}>
            <Text
              tag="h1"
              textSize="title"
              textWeight="700"
              textColor="#1E293B"
              m={{ b: "0.25rem" }}
            >
              Alicia Esquivel Morel
            </Text>
            <Text
              textSize="paragraph"
              textWeight="500"
              textColor="#475569"
              m={{ b: "0.75rem" }}
            >
              PhD Candidate in Computer Science
            </Text>
            <Div d="flex">
              <Button
                bg="transparent"
                hoverBg="#F1F5F9"
                textColor="#64748B"
                rounded="circle"
                p="0.5rem"
                m={{ r: "0.5rem" }}
                onClick={() => window.open("#", "_blank")}
              >
                <Github size={18} />
              </Button>
              <Button
                bg="transparent"
                hoverBg="#F1F5F9"
                textColor="#64748B"
                rounded="circle"
                p="0.5rem"
                m={{ r: "0.5rem" }}
                onClick={() => window.open("#", "_blank")}
              >
                <Linkedin size={18} />
              </Button>
              <Button
                bg="transparent"
                hoverBg="#F1F5F9"
                textColor="#64748B"
                rounded="circle"
                p="0.5rem"
                onClick={() => window.open("mailto:contact@example.com", "_blank")}
              >
                <Mail size={18} />
              </Button>
            </Div>
          </Div>
          <Div d="flex" align="center">
            <Button
              bg="#1E293B"
              hoverBg="#0F172A"
              textColor="white"
              rounded="lg"
              p={{ x: "1.25rem", y: "0.5rem" }}
              m={{ r: "0.75rem" }}
              shadow="sm"
              textSize="caption"
            >
              Resume
            </Button>
            <Button
              bg="#F8FAFC"
              hoverBg="#F1F5F9"
              textColor="#1E293B"
              rounded="lg"
              p={{ x: "1.25rem", y: "0.5rem" }}
              shadow="sm"
              border="1px solid"
              borderColor="#E2E8F0"
              textSize="caption"
            >
              CV
            </Button>
          </Div>
          </Div>
        </Div>
      </Container>
    </Div>
  );
};

export default ProfileHeader;
