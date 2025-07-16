import React from "react";
import TerminalCard from "./TerminalCard";
import ResearchGrid from "./ResearchGrid";
import { Book, FileText, GraduationCap } from "lucide-react";

const Publication = ({ title, venue, year, description }) => (
  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 hover:shadow-md transition-all duration-200">
    <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">{title}</h4>
    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{venue}, {year}</p>
    {description && (
      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mt-2">{description}</p>
    )}
  </div>
);

const ExperienceCard = ({ title, company, period, description, tags, responsibilities }) => (
  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 hover:shadow-md transition-all duration-200">
    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{company}</p>
      </div>
      <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
        {period}
      </span>
    </div>
    {description && (
      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-3">{description}</p>
    )}
    {responsibilities && (
      <ul className="list-disc pl-4 space-y-2 text-base text-gray-700 dark:text-gray-300">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
    {tags && (
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-200"
          >
            {tag}
          </span>
        ))}
      </div>
    )}
  </div>
);

const TabContent = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a <span className="font-medium text-gray-900 dark:text-gray-100">PhD candidate</span>{" "}
                specializing in{" "}
                <span className="text-blue-600 dark:text-blue-400 font-medium">cloud/edge computing</span>{" "}
                and{" "}
                <span className="text-blue-600 dark:text-blue-400 font-medium">cybersecurity</span>.
                My research focuses on developing secure and scalable distributed systems.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Research Interests
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Cloud Security</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Developing secure and scalable cloud computing systems with a focus on zero-trust architectures.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Edge Computing</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Investigating efficient resource allocation and security in edge computing environments.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">AI Security</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Exploring the intersection of artificial intelligence and cybersecurity.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Distributed Systems</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Building reliable and secure distributed computing systems and protocols.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <TerminalCard />
            </div>
          </div>
        );

      case "research":
        return (
          <div className="space-y-6">
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              My research focuses on developing secure and scalable cloud computing systems,
              with an emphasis on zero-trust architectures and AI-driven security solutions.
            </p>
            <ResearchGrid />
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Current Projects</h3>
              <div className="space-y-4">
                <ExperienceCard
                  title="Cloud Security Research Group"
                  company="Security Innovation Lab"
                  period="2023 - Present"
                  description="Leading research initiatives in cloud security, focusing on developing novel approaches to protect distributed systems."
                  tags={["Zero Trust", "Cloud Security", "AI Systems"]}
                />
              </div>
            </div>
          </div>
        );

      case "publications":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Conference Papers</h3>
              <div className="grid gap-4">
                <Publication
                  title="Zero-Trust Security in Cloud-Native Applications"
                  venue="IEEE Conference on Cloud Computing"
                  year="2024"
                  description="Presented a novel approach to implementing zero-trust architecture in cloud-native applications."
                />
                <Publication
                  title="AI-Driven Network Intrusion Detection"
                  venue="ACM Workshop on Security and Privacy"
                  year="2024"
                  description="Developed a new machine learning approach for detecting network intrusions in real-time."
                />
              </div>
            </div>
          </div>
        );

      case "experience":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <ExperienceCard
                title="Graduate Research Assistant"
                company="Cloud Security Lab"
                period="2022 - Present"
                responsibilities={[
                  "Lead research in cloud security and zero-trust architectures",
                  "Developed novel intrusion detection systems using machine learning",
                  "Published papers in top-tier security conferences"
                ]}
              />
              <ExperienceCard
                title="Teaching Assistant"
                company="Computer Science Department"
                period="2021 - 2022"
                responsibilities={[
                  "Taught advanced cybersecurity courses",
                  "Mentored undergraduate research projects",
                  "Developed practical lab exercises for security courses"
                ]}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return <div className="space-y-6">{renderContent()}</div>;
};

export default TabContent;
