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
                  I'm a{" "}
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    PhD candidate in Computer Science
                  </span>{" "}
                  focused on{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    cloud/edge computing
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    cybersecurity
                  </span>
                  . My research interests include{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    federated learning
                  </span>
                  ,{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    Zero Trust Architecture
                  </span>
                  ,{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    intrusion detection
                  </span>
                  , and{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    AI-driven security for IoT and mobile networks
                  </span>
                  . I work with real-world testbeds including GENI, POWDER, and
                  AERPAW to develop practical security solutions for distributed
                  systems.
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
                  title="UAV/Drone Systems Security and Privacy: A Comprehensive Survey"
                  venue="ACM Computing Surveys"
                  year="2025"
                  description="Comprehensive survey on security and privacy challenges in unmanned aerial vehicle systems and drone networks."
                />
                <Publication
                  title="Arculus: Zero Trust Architecture for Tactical Edge Computing"
                  venue="IEEE Conference"
                  year="2024"
                  description="Novel Zero Trust framework designed specifically for tactical edge computing environments with enhanced security protocols."
                />
                <Publication
                  title="FLOTO Framework: Federated Learning for Tactical Operations"
                  venue="International Conference on High Performance Computing"
                  year="2025"
                  description="Federated learning framework optimized for tactical operations and distributed edge computing scenarios."
                />
                <Publication
                  title="AI-Driven Intrusion Detection for Mobile Networks"
                  venue="IEEE INFOCOM"
                  year="2024"
                  description="Machine learning approaches for detecting network intrusions in mobile and wireless communication systems."
                />
                <Publication
                  title="Security Challenges in IoT Federated Learning"
                  venue="IEEE MILCOM"
                  year="2024"
                  description="Analysis of security vulnerabilities and mitigation strategies in federated learning for IoT environments."
                />
                <Publication
                  title="Network Management and Orchestration in Edge Computing"
                  venue="IEEE NOMS"
                  year="2023"
                  description="Comprehensive study on network management challenges and solutions for edge computing infrastructures."
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
                company="VIMAN Lab, University of Missouri"
                period="2018 - Present"
                responsibilities={[
                  "Conducting research on cloud computing, Zero Trust architectures, and federated learning",
                  "Working with real-world testbeds including GENI, POWDER, AERPAW for distributed systems research",
                  "Developing AI-driven security solutions for IoT and mobile networks",
                  "Published in top-tier venues including ACM Computing Surveys, INFOCOM, MILCOM, NOMS",
                ]}
                tags={[
                  "Cloud Computing",
                  "Zero Trust",
                  "Federated Learning",
                  "IoT Security",
                ]}
              />
              <ExperienceCard
                title="Teaching Assistant"
                company="University of Missouri Computer Science Department"
                period="2018 - Present"
                responsibilities={[
                  "Taught Cyber Defense, Cloud Computing, and Algorithm Design courses",
                  "Mentored 30+ students through REU cohorts and REU BigDataX programs",
                  "Supervised Chameleon Cloud projects and research initiatives",
                  "Served as UC Santa Cruz SoR Fellow mentor",
                ]}
                tags={["Teaching", "Mentoring", "Curriculum Development"]}
              />
              <ExperienceCard
                title="Awards & Recognition"
                company="Academic & Professional Achievements"
                period="2024"
                responsibilities={[
                  "Outstanding PhD Student Award (2024)",
                  "Fulbright-CAL Scholar",
                  "UC2 DoD White Paper winner",
                  "FAA Part 107 Drone License holder",
                ]}
                tags={["Awards", "Scholarships", "Certifications"]}
              />
            </div>
          </div>
        );

      case "fun":
        return (
          <div className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Beyond research, I'm actively involved in academic service,
                professional development, and technical skill advancement across
                multiple domains.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  🎓 Education
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    • PhD in Computer Science, University of Missouri (Expected
                    Summer 2025)
                  </li>
                  <li>
                    • MS in Computer Science, University of Missouri (2018–2020)
                  </li>
                  <li>
                    • BS in Computer Systems Analysis, Universidad Technológica
                    Intercontinental (2008–2013)
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  ⚡ Technical Skills
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Python, Bash, Docker, Kubernetes</li>
                  <li>
                    • Federated Learning, Threat Modeling, Intrusion Detection
                  </li>
                  <li>• AWS, GCP, Chameleon Cloud, SDN, Git</li>
                  <li>• Testbeds: GENI, FABRIC, POWDER, AERPAW</li>
                  <li>• FAA Part 107 Drone License, UX Research, LaTeX</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  🏆 Awards & Recognition
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Outstanding PhD Student Award (2024)</li>
                  <li>• Fulbright-CAL Scholar</li>
                  <li>• UC2 DoD White Paper winner</li>
                  <li>• REU mentor for 30+ students</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  🤝 Professional Service
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    • Peer reviewer for top IEEE/ACM conferences and journals
                  </li>
                  <li>• Member of IEEE, ACM SIGHPC, UPE Honor Society</li>
                  <li>
                    • Advisory Board member for student employees at Mizzou
                  </li>
                  <li>• UC Santa Cruz SoR Fellow</li>
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
