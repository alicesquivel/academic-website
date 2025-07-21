import React from "react";
import ResearchGrid from "./ResearchGrid";
import Terminal from "./Terminal";
import { Book, FileText, GraduationCap } from "lucide-react";

const Publication = ({ title, venue, year, description }) => (
  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 hover:shadow-md transition-all duration-200">
    <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">
      {title}
    </h4>
    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
      {venue}, {year}
    </p>
    {description && (
      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
        {description}
      </p>
    )}
  </div>
);

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  tags,
  responsibilities,
}) => (
  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
    <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 font-sans">
          {title}
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-400 mt-1 font-body">
          {company}
        </p>
      </div>
      <span className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium font-body">
        {period}
      </span>
    </div>
    {description && (
      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-body">
        {description}
      </p>
    )}
    {responsibilities && (
      <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 dark:text-gray-300 font-body">
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
            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-200 font-body"
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
          <div className="space-y-8">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-body">
                I am a{" "}
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  PhD candidate
                </span>{" "}
                specializing in{" "}
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  cloud/edge computing
                </span>{" "}
                and{" "}
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  cybersecurity
                </span>
                . My research interests include cloud security with zero-trust
                architectures, efficient resource allocation in edge computing
                environments, AI-driven security solutions, and building
                reliable distributed computing systems and protocols.
              </p>
            </div>

            <div className="mt-10">
              <Terminal />
            </div>
          </div>
        );

      case "research":
        return (
          <div className="space-y-6">
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              My research focuses on developing secure and scalable cloud
              computing systems, with an emphasis on zero-trust architectures
              and AI-driven security solutions.
            </p>
            <ResearchGrid />
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Current Projects
              </h3>
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Conference Papers
              </h3>
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
                  "Published papers in top-tier security conferences",
                ]}
              />
              <ExperienceCard
                title="Teaching Assistant"
                company="Computer Science Department"
                period="2021 - 2022"
                responsibilities={[
                  "Taught advanced cybersecurity courses",
                  "Mentored undergraduate research projects",
                  "Developed practical lab exercises for security courses",
                ]}
              />
            </div>
          </div>
        );

      case "fun":
        return (
          <div className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not researching or coding, I enjoy exploring creative and fun projects that combine technology with everyday life.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">🎮 Tech Hobbies</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Building and experimenting with IoT devices</li>
                  <li>• 3D printing and digital fabrication</li>
                  <li>• Home automation and smart systems</li>
                  <li>• Retro computing and vintage tech restoration</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">🌟 Personal Projects</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Cybersecurity awareness training games</li>
                  <li>• Open-source security tools and scripts</li>
                  <li>• Tech education content for social media</li>
                  <li>• Community workshops on digital privacy</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">📚 Learning & Growth</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Exploring emerging technologies and trends</li>
                  <li>• Participating in hackathons and tech challenges</li>
                  <li>• Contributing to open-source projects</li>
                  <li>• Mentoring students in STEM fields</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">🎯 Fun Facts</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Can solve a Rubik's cube in under 2 minutes</li>
                  <li>• Enjoys escape rooms and puzzle challenges</li>
                  <li>• Collects vintage computer equipment</li>
                  <li>• Passionate about digital art and design</li>
                </ul>
              </div>
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
