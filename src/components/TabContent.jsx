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
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-x-12">
            {/* Left Column - Text Content */}
            <div className="flex-1 max-w-xl">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-body text-left">
                  I am a{" "}
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Fulbright Scholar
                  </span>{" "}
                  and PhD candidate in Computer Science at the University of
                  Missouri-Columbia, working with the{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    VIMAN Lab
                  </span>
                  . My research focuses on{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    cloud and edge computing
                  </span>
                  ,{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    cybersecurity
                  </span>
                  , and{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    drone analytics
                  </span>
                  . I have hands-on experience with cloud cybersecurity, zero
                  trust architectures, machine learning algorithms, drone
                  communication security, and container orchestration using
                  Kubernetes and Docker.
                </p>
              </div>
            </div>

            {/* Right Column - Terminal */}
            <div className="w-full sm:max-w-[420px] lg:w-[420px] flex-shrink-0 mt-8 lg:mt-0 mx-auto lg:mx-0">
              <Terminal />
            </div>
          </div>
        );

      case "research":
        return (
          <div className="space-y-6">
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              My research focuses on enhancing security and performance in
              distributed computing environments. I work on cloud/edge computing
              architectures, zero trust cybersecurity frameworks, and machine
              learning applications for drone analytics and security.
            </p>
            <ResearchGrid />
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Research Areas & Collaborations
              </h3>
              <div className="space-y-4">
                <ExperienceCard
                  title="VIMAN Lab - University of Missouri"
                  company="Cloud Computing & Cybersecurity Research"
                  period="2021 - Present"
                  description="Conducting research on cloud security, zero trust architectures, and edge computing. Working with NSF-funded testbeds including FABRIC, GENI, and CloudLab."
                  tags={[
                    "Zero Trust",
                    "Cloud Security",
                    "Edge Computing",
                    "NSF Testbeds",
                  ]}
                />
                <ExperienceCard
                  title="Drone Analytics & Security"
                  company="Machine Learning Applications"
                  period="2022 - Present"
                  description="Developing machine learning models for drone communication security and analytics in edge computing environments."
                  tags={["Drone Analytics", "ML", "Communication Security"]}
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
                Selected Publications
              </h3>
              <div className="grid gap-4">
                <Publication
                  title="Towards Data-Driven Cybersecurity for Cloud and Edge Computing Environments"
                  venue="IEEE CLOUD 2024"
                  year="2024"
                  description="Comprehensive survey on data-driven cybersecurity approaches for modern distributed computing environments."
                />
                <Publication
                  title="A Survey on Zero Trust Network Access Solutions"
                  venue="ACM Computing Surveys"
                  year="2024"
                  description="Systematic review of zero trust network access implementations and their security implications."
                />
                <Publication
                  title="Security Challenges in Multi-Cloud Environments"
                  venue="IEEE Security & Privacy Magazine"
                  year="2023"
                  description="Analysis of security challenges and solutions for multi-cloud deployment strategies."
                />
                <Publication
                  title="Machine Learning for Drone Communication Security"
                  venue="IEEE INFOCOM Workshop"
                  year="2023"
                  description="Novel ML approaches for securing drone-to-ground and drone-to-drone communications."
                />
                <Publication
                  title="Container Security in Edge Computing"
                  venue="ACM EdgeSys"
                  year="2022"
                  description="Security analysis and mitigation strategies for containerized applications in edge environments."
                />
                <Publication
                  title="Performance Evaluation of Zero Trust Architectures"
                  venue="IEEE Network"
                  year="2022"
                  description="Comprehensive performance analysis of different zero trust implementation approaches."
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
                title="Fulbright Scholar & PhD Candidate"
                company="University of Missouri-Columbia, VIMAN Lab"
                period="2021 - Present"
                responsibilities={[
                  "Conducting research on cloud/edge computing and cybersecurity",
                  "Working with NSF-funded testbeds: FABRIC, GENI, CloudLab, and POWDER",
                  "Developing zero trust architectures and machine learning security solutions",
                  "Published 6+ papers in top-tier venues including IEEE CLOUD, ACM Computing Surveys",
                ]}
              />
              <ExperienceCard
                title="Research Assistant"
                company="Cloud Computing & Cybersecurity"
                period="2021 - Present"
                responsibilities={[
                  "Leading drone analytics and security research initiatives",
                  "Developing ML algorithms for communication security",
                  "Container orchestration using Kubernetes and Docker",
                  "Collaborating with RENCI, FABRIC, and other research institutions",
                ]}
              />
              <ExperienceCard
                title="Academic Achievements"
                company="International Recognition"
                period="2021"
                responsibilities={[
                  "Selected as Fulbright Scholar for advanced research",
                  "International collaboration on distributed computing systems",
                  "Cross-cultural research experience and academic exchange",
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
                When I'm not researching or coding, I enjoy exploring creative
                and fun projects that combine technology with everyday life.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  🔬 Research Interests
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Kubernetes and Docker container orchestration</li>
                  <li>
                    • NSF testbed experimentation (FABRIC, GENI, CloudLab)
                  </li>
                  <li>• Zero trust architecture implementation</li>
                  <li>• Drone communication security protocols</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  � International Experience
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Fulbright Scholar program participant</li>
                  <li>• Cross-cultural research collaboration</li>
                  <li>• International academic exchange</li>
                  <li>• Global perspective on cybersecurity challenges</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  📚 Academic Collaboration
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• VIMAN Lab research team member</li>
                  <li>• RENCI partnership projects</li>
                  <li>• Multi-institutional research initiatives</li>
                  <li>• Conference presentations and workshops</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  ⚡ Technical Skills
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Machine learning for security applications</li>
                  <li>• Cloud-native application development</li>
                  <li>• Distributed systems architecture</li>
                  <li>• Edge computing optimization</li>
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
