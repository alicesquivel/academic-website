import React from "react";
import { Div, Container, Text, Button } from "atomize";
import { Github, Mail, Linkedin } from "lucide-react";

const ProfileHeader = () => {
  return (
    <Div
      tag="header"
      p={{ y: { xs: "1rem", md: "2rem" } }}
      bg="white"
      shadow="sm"
    >
      <Container
        d="flex"
        flexDir={{ xs: "column", md: "row" }}
        justify="space-between"
        align={{ xs: "center", md: "center" }}
        maxW="1200px"
      >
        <Div
          d="flex"
          flexDir={{ xs: "column", md: "row" }}
          align="center"
          w={{ xs: "100%", md: "auto" }}
        >
          <Div
            h={{ xs: "4rem", md: "4.5rem" }}
            w={{ xs: "4rem", md: "4.5rem" }}
            bg="#64748B"
            rounded="circle"
            d="flex"
            align="center"
            justify="center"
            m={{ r: { xs: "0", md: "1.5rem" }, b: { xs: "1rem", md: "0" } }}
            shadow="sm"
          >
            <Text
              textSize={{ xs: "title", md: "heading" }}
              textWeight="700"
              textColor="white"
            >
              AEM
            </Text>
          </Div>
          <Div d="flex" flexDir="column" align={{ xs: "center", md: "start" }}>
            <Text
              tag="h1"
              textSize={{ xs: "title", md: "display1" }}
              textWeight="600"
              textColor="#1E293B"
              m={{ b: "0.1rem" }}
              style={{ letterSpacing: "-0.02em" }}
              textAlign={{ xs: "center", md: "left" }}
            >
              Alicia Esquivel Morel
            </Text>
            <Text
              textSize={{ xs: "subtitle", md: "paragraph" }}
              textWeight="500"
              textColor="#64748B"
              m={{ b: "0.1rem" }}
              style={{ letterSpacing: "0.01em" }}
              textAlign={{ xs: "center", md: "left" }}
            >
              PhD Candidate in Computer Science
            </Text>
            <Div
              d="flex"
              align="center"
              justify={{ xs: "center", md: "flex-start" }}
              m={{ t: { xs: "1rem", md: "0.5rem" } }}
            >
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
                <Github size={{ xs: 20, md: 24 }} />
              </Button>
              <Button
                bg="transparent"
                textColor="#64748B"
                hoverTextColor="#1E293B"
                p={{ x: "0.375rem", y: "0.375rem" }}
                m={{ r: "0.75rem" }}
                onClick={() =>
                  window.open("https://linkedin.com/in/yourusername", "_blank")
                }
              >
                <Linkedin size={{ xs: 20, md: 24 }} />
              </Button>
              <Button
                bg="transparent"
                textColor="#64748B"
                hoverTextColor="#1E293B"
                p={{ x: "0.375rem", y: "0.375rem" }}
                onClick={() =>
                  window.open("mailto:your.email@example.com", "_blank")
                }
              >
                <Mail size={{ xs: 20, md: 24 }} />
              </Button>
            </Div>
          </Div>
        </Div>
        <Div
          d="flex"
          flexDir={{ xs: "column", md: "row" }}
          align="center"
          w={{ xs: "100%", md: "auto" }}
          m={{ t: { xs: "1.5rem", md: "0" } }}
        >
          <Button
            bg="#1E293B"
            hoverBg="#0F172A"
            textColor="white"
            rounded="lg"
            p={{ x: "1rem", y: "0.375rem" }}
            m={{ r: { xs: "0", md: "0.5rem" }, b: { xs: "0.5rem", md: "0" } }}
            shadow="sm"
            textSize={{ xs: "caption", md: "body" }}
            textWeight="500"
            w={{ xs: "100%", md: "auto" }}
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
            textSize={{ xs: "caption", md: "body" }}
            textWeight="500"
            w={{ xs: "100%", md: "auto" }}
          >
            CV
          </Button>
        </Div>
      </Container>
    </Div>
  );
};

export default ProfileHeader;
