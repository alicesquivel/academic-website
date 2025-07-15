import React from "react";
import { Div, Container, Text, Button } from "atomize";
import { Github, FileText, Mail, Linkedin } from 'lucide-react';

const ProfileHeader = () => {
  return (
    <Div tag="header" p={{ y: "2rem" }} bg="#F8FAFC">
      <Container d="flex" flexDir="column" align="flex-start" maxW="1200px">
        <Div
          d="flex"
          flexDir={{ xs: "column", md: "row" }}
          align="flex-start"
          justify="flex-start"
          m={{ b: "2rem" }}
          w="100%"
        >
          <Div
            h="8rem"
            w="8rem"
            bg="#64748B"
            rounded="circle"
            d="flex"
            align="center"
            justify="center"
            m={{ r: "2rem", b: { xs: "1.5rem", md: "0" } }}
            shadow="4"
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
          <Div>
            <Text
              tag="h1"
              textSize={{ xs: "display1", md: "display2" }}
              textWeight="700"
              textColor="white"
              m={{ b: "0.5rem" }}
            >
              Alicia Esquivel Morel
            </Text>
            <Text
              textSize="title"
              textWeight="500"
              textColor="blue300"
            >
              PhD Candidate in Computer Science
            </Text>
          </Div>
        </Div>

        <Div d="flex" flexDir={{ xs: "column", sm: "row" }} align="center">
          <Div
            d="flex"
            m={{ r: { sm: "1rem" }, b: { xs: "1rem", sm: "0" } }}
          >
            <Button
              bg="gray800"
              hoverBg="gray700"
              textColor="white"
              rounded="lg"
              p={{ x: "1rem", y: "0.75rem" }}
              m={{ r: "0.5rem" }}
              onClick={() => window.open("#", "_blank")}
            >
              <Div m={{ r: "0.5rem" }}>
                <Github size={20} color="white" />
              </Div>
              GitHub
            </Button>
            <Button
              bg="gray800"
              hoverBg="gray700"
              textColor="white"
              rounded="lg"
              p={{ x: "1rem", y: "0.75rem" }}
              onClick={() => window.open("#", "_blank")}
            >
              <Div m={{ r: "0.5rem" }}>
                <FileText size={20} color="white" />
              </Div>
              CV
            </Button>
          </Div>
          <Button
            bg="info700"
            hoverBg="info800"
            rounded="lg"
            p={{ x: "1rem", y: "0.75rem" }}
            onClick={() => window.open("#", "_blank")}
          >
            <Div m={{ r: "0.5rem" }}>
              <Download size={20} color="white" />
            </Div>
            Download Resume
          </Button>
        </Div>
      </Container>
    </Div>
  );
};

export default ProfileHeader;
