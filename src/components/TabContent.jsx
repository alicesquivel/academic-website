import React from "react";
import { Div, Text } from "atomize";

const TabContent = ({ activeTab }) => {
  const renderAboutContent = () => (
    <Div>
      <Div m={{ b: "2rem" }}>
        <Div m={{ b: "1rem" }}>
          <Text textSize="body" textColor="gray800" m={{ b: "1rem" }}>
            I am a motivated PhD candidate specializing in{" "}
            <Text tag="span" textWeight="600" textColor="info700">
              cloud/edge computing
            </Text>{" "}
            and{" "}
            <Text tag="span" textWeight="600" textColor="info700">
              cybersecurity
            </Text>
            . With a proven ability to lead research, publish papers, and teach
            core computer science courses, I am seeking a research or faculty
            role to apply my expertise in cybersecurity and resilient network
            design for autonomous systems.
          </Text>

          <Text textSize="body" textColor="gray800">
            I am passionate about leveraging{" "}
            <Text tag="span" textWeight="600" textColor="info700">
              advanced networking
            </Text>
            ,{" "}
            <Text tag="span" textWeight="600" textColor="info700">
              artificial intelligence
            </Text>
            , and{" "}
            <Text tag="span" textWeight="600" textColor="info700">
              testbed-driven validation
            </Text>{" "}
            in cloud and edge environments to create more secure and resilient
            systems for the future.
          </Text>
        </Div>

        {/* Expertise Grid - 2x2 layout */}
        <Div d="grid" gridTemplateColumns="repeat(2, 1fr)" gap="1rem">
          <Div
            bg="white"
            p="1rem"
            rounded="lg"
            border="1px solid"
            borderColor="gray300"
          >
            <Text
              tag="h4"
              textSize="subheader"
              textWeight="600"
              textColor="gray900"
              m={{ b: "0.5rem" }}
              d="flex"
              align="center"
            >
              <Text tag="span" m={{ r: "0.5rem" }}></Text>
              Cybersecurity
            </Text>
            <Text textSize="caption" textColor="gray600" textWeight="400">
              AI-driven security, Zero Trust Architecture, threat modeling,
              intrusion detection systems
            </Text>
          </Div>

          <Div
            bg="white"
            p="1rem"
            rounded="lg"
            border="1px solid"
            borderColor="gray300"
          >
            <Text
              tag="h4"
              textSize="subheader"
              textWeight="600"
              textColor="gray900"
              m={{ b: "0.5rem" }}
              d="flex"
              align="center"
            >
              <Text tag="span" m={{ r: "0.5rem" }}></Text>
              Cloud Computing
            </Text>
            <Text textSize="caption" textColor="gray600" textWeight="400">
              Edge computing, distributed systems, resilient architectures,
              containerization
            </Text>
          </Div>

          <Div
            bg="white"
            p="1rem"
            rounded="lg"
            border="1px solid"
            borderColor="gray300"
          >
            <Text
              tag="h4"
              textSize="subheader"
              textWeight="600"
              textColor="gray900"
              m={{ b: "0.5rem" }}
              d="flex"
              align="center"
            >
              <Text tag="span" m={{ r: "0.5rem" }}></Text>
              Machine Learning
            </Text>
            <Text textSize="caption" textColor="gray600" textWeight="400">
              Federated learning, neural networks, intelligent systems, anomaly
              detection
            </Text>
          </Div>

          <Div
            bg="white"
            p="1rem"
            rounded="lg"
            border="1px solid"
            borderColor="gray300"
          >
            <Text
              tag="h4"
              textSize="subheader"
              textWeight="600"
              textColor="gray900"
              m={{ b: "0.5rem" }}
              d="flex"
              align="center"
            >
              <Text tag="span" m={{ r: "0.5rem" }}></Text>
              Networking
            </Text>
            <Text textSize="caption" textColor="gray600" textWeight="400">
              IoT networks, mobile networks, protocol design, network security
            </Text>
          </Div>
        </Div>

        {/* Research Interests */}
        <Div
          bg="white"
          p="1rem"
          rounded="lg"
          border="1px solid"
          borderColor="gray300"
        >
          <Text
            tag="h3"
            textSize="subheader"
            textWeight="600"
            textColor="gray900"
            m={{ b: "0.75rem" }}
          >
            Research Interests
          </Text>
          <Text textSize="caption" textColor="gray700">
            AI-driven security for cloud, edge, IoT, and mobile networks,
            focusing on federated learning, Zero Trust Architecture, intrusion
            detection, threat modeling, and critical infrastructure resilience.
          </Text>
        </Div>
      </Div>

      {/* Terminal Section - below the main card */}
      <Div m={{ t: "2rem" }}>
        <Div maxW="800px" m={{ x: "auto" }}>
          <Div bg="gray900" rounded="lg" shadow="3" overflow="hidden">
            <Div
              d="flex"
              align="center"
              p={{ x: "0.75rem", y: "0.5rem" }}
              bg="gray800"
            >
              <Div d="flex" align="center">
                <Div
                  w="0.75rem"
                  h="0.75rem"
                  bg="red500"
                  rounded="circle"
                  m={{ r: "0.5rem" }}
                />
                <Div
                  w="0.75rem"
                  h="0.75rem"
                  bg="yellow500"
                  rounded="circle"
                  m={{ r: "0.5rem" }}
                />
                <Div w="0.75rem" h="0.75rem" bg="success500" rounded="circle" />
              </Div>
              <Text textSize="tiny" textColor="gray400" m={{ l: "auto" }}>
                terminal
              </Text>
            </Div>
            <Div
              p="1rem"
              fontFamily="mono"
              textSize="tiny"
              textColor="success400"
              d="flex"
              flexDir="column"
              textAlign="left"
              style={{ gap: "0.25rem" }}
            >
              <Div>
                <Text tag="span" textColor="success400">
                  $
                </Text>{" "}
                <Text tag="span" textColor="white">
                  whoami
                </Text>
              </Div>
              <Text textColor="gray300">
                alicia@cs-research:~$ PhD Candidate specializing in
                cybersecurity
              </Text>
              <Div>
                <Text tag="span" textColor="success400">
                  $
                </Text>{" "}
                <Text tag="span" textColor="white">
                  ls skills/
                </Text>
              </Div>
              <Text textColor="gray300">
                cybersecurity/ cloud-computing/ machine-learning/ networking/
              </Text>
              <Div>
                <Text tag="span" textColor="success400">
                  $
                </Text>{" "}
                <Text tag="span" textColor="white">
                  cat research_focus.txt
                </Text>
              </Div>
              <Text textColor="gray300">
                AI-driven security for distributed systems
              </Text>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );

  const renderResearchContent = () => (
    <Div d="flex" flexDir="column" style={{ gap: "1.5rem" }}>
      <Text
        tag="h2"
        textSize="title"
        textWeight="700"
        textColor="gray900"
        m={{ b: "1rem" }}
      >
        Research Projects
      </Text>

      <Div
        bg="white"
        p="1rem"
        rounded="lg"
        border="1px solid"
        borderColor="gray200"
      >
        <Div
          d="flex"
          flexDir={{ xs: "column", sm: "row" }}
          justify="space-between"
          align={{ xs: "start", sm: "start" }}
          m={{ b: "0.75rem" }}
        >
          <Div>
            <Text textSize="subheader" textWeight="600" textColor="gray900">
              TAMU Fractals Research Team
            </Text>
            <Text textSize="body" textWeight="500" textColor="info700">
              Texas A&M University
            </Text>
          </Div>
          <Text
            textSize="body"
            textColor="gray500"
            m={{ t: { xs: "0.25rem", sm: "0" } }}
          >
            Aug 2023 - May 2024
          </Text>
        </Div>
        <Text
          textSize="body"
          textColor="gray700"
          textWeight="400"
          style={{ lineHeight: "1.625" }}
        >
          During my time with the TAMU Fractals Research Team, I explored the
          fascinating world of fractals, with a particular focus on the
          Sierpiński gasket. The Sierpiński gasket (also called the Sierpiński
          triangle) is one of the most famous examples of a fractal, which is a
          type of mathematical object that has "self-similarity" at all scales.
          The Sierpiński gasket is named after Polish mathematician Wacław
          Sierpiński, and can be generated through several different methods.
        </Text>
      </Div>

      <Div
        bg="gray50"
        p="1rem"
        rounded="lg"
        border="1px solid"
        borderColor="gray200"
      >
        <Text
          tag="h3"
          textSize="subheader"
          textWeight="600"
          textColor="gray900"
          m={{ b: "0.75rem" }}
        >
          Additional Research Projects
        </Text>
        <Text textSize="body" textColor="gray600">
          Add your other research projects, current work, and academic
          collaborations here.
        </Text>
      </Div>
    </Div>
  );

  const renderPublicationsContent = () => (
    <Div d="flex" flexDir="column" style={{ gap: "1.5rem" }}>
      <Text
        tag="h2"
        textSize="title"
        textWeight="700"
        textColor="gray900"
        m={{ b: "1rem" }}
      >
        Publications
      </Text>
      <Div
        bg="gray50"
        p="1rem"
        rounded="lg"
        border="1px solid"
        borderColor="gray200"
      >
        <Text
          tag="h3"
          textSize="subheader"
          textWeight="600"
          textColor="gray900"
          m={{ b: "0.75rem" }}
        >
          Academic Publications
        </Text>
        <Text textSize="body" textColor="gray600">
          Your journal articles, conference papers, and other academic
          publications will be listed here.
        </Text>
      </Div>
    </Div>
  );

  const renderExperienceContent = () => (
    <Div d="flex" flexDir="column" style={{ gap: "1.5rem" }}>
      <Text
        tag="h2"
        textSize="title"
        textWeight="700"
        textColor="gray900"
        m={{ b: "1rem" }}
      >
        Experience
      </Text>
      <Div
        bg="gray50"
        p="1rem"
        rounded="lg"
        border="1px solid"
        borderColor="gray200"
      >
        <Text
          tag="h3"
          textSize="subheader"
          textWeight="600"
          textColor="gray900"
          m={{ b: "0.75rem" }}
        >
          Professional Experience
        </Text>
        <Text textSize="body" textColor="gray600">
          Your work experience, teaching positions, and academic appointments
          will be displayed here.
        </Text>
      </Div>
    </Div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return renderAboutContent();
      case "research":
        return renderResearchContent();
      case "publications":
        return renderPublicationsContent();
      case "experience":
        return renderExperienceContent();
      default:
        return renderAboutContent();
    }
  };

  return <Div tag="main">{renderContent()}</Div>;
};

export default TabContent;
