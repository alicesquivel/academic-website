import React from "react";
import { Div, Container, Text, Button } from "atomize";
import { Github, Mail, Linkedin } from "lucide-react";

const ProfileHeader = () => {
  return (
    <Div tag="header" p={{ y: "2rem" }} bg="white" shadow="sm">
      <Container d="flex" justify="space-between" align="center" maxW="1200px">
        <Div d="flex" align="center">
          <Div
            h="4.5rem"
            w="4.5rem"
            bg="#64748B"
            rounded="circle"
            d="flex"
            align="center"
            justify="center"
            m={{ r: "1.5rem" }}
            shadow="sm"
          >
            <Text textSize="heading" textWeight="700" textColor="white">
              AEM
            </Text>
          </Div>
          <Div d="flex" flexDir="column">
            <Text
              tag="h1"
              textSize="display2"
              textWeight="600"
              textColor="#1E293B"
              m={{ b: "0.5rem" }}
              style={{ letterSpacing: "-0.02em" }}
            >
              Alicia Esquivel Morel
            </Text>
            <Text
              textSize="subtitle"
              textWeight="500"
              textColor="#64748B"
              m={{ b: "0.75rem" }}
              style={{ letterSpacing: "0.01em" }}
            >
              PhD Candidate in Computer Science
            </Text>
            <Div d="flex" align="center">
              <Button
                bg="transparent"
                textColor="#64748B"
                hoverTextColor="#1E293B"
                p={{ x: "0.375rem", y: "0.375rem" }}
                m={{ r: "0.75rem" }}
                onClick={() =>
                  window.open("https://github.com/yourusername", "_blank")
                }
              >
                <Github size={32} />
              </Button>
              <Button
                bg="transparent"
                textColor="#64748B"
                hoverTextColor="#1E293B"
                p={{ x: "0.5rem", y: "0.5rem" }}
                m={{ r: "1rem" }}
                onClick={() =>
                  window.open("https://linkedin.com/in/yourusername", "_blank")
                }
              >
                <Linkedin size={32} />
              </Button>
              <Button
                bg="transparent"
                textColor="#64748B"
                hoverTextColor="#1E293B"
                p={{ x: "0.5rem", y: "0.5rem" }}
                onClick={() =>
                  window.open("mailto:your.email@example.com", "_blank")
                }
              >
                <Mail size={32} />
              </Button>
            </Div>
          </Div>
        </Div>
        <Div d="flex" align="center">
          <Button
            bg="#1E293B"
            hoverBg="#0F172A"
            textColor="white"
            rounded="lg"
            p={{ x: "1rem", y: "0.375rem" }}
            m={{ r: "0.5rem" }}
            shadow="sm"
            textSize="body"
            textWeight="500"
          >
            Resume
          </Button>
          <Button
            bg="#F8FAFC"
            hoverBg="#F1F5F9"
            textColor="#1E293B"
            rounded="lg"
            p={{ x: "1rem", y: "0.375rem" }}
            shadow="sm"
            border="1px solid"
            borderColor="#E2E8F0"
            textSize="body"
            textWeight="500"
          >
            CV
          </Button>
        </Div>
      </Container>
    </Div>
  );
};

export default ProfileHeader;
