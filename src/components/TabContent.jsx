import React, { useState } from "react";
import ResearchGrid from "./ResearchGrid";
import Terminal from "./Terminal";
import {
  Book,
  FileText,
  GraduationCap,
  Tag,
  PencilLine,
  BarChart2,
  MapPin,
  Heart,
  Globe,
  Languages,
  ExternalLink,
  Plane,
  Users,
  Sparkles,
  Award,
  Beaker,
  UserCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Publication = ({ title, venue, year, description }) => (
  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 hover:shadow-md transition-all duration-200">
    <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">
      {title}
    </h4>
    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
      {/* Portfolio Links */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-2">
        <a
          href="#"
          className="text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 text-sm font-semibold transition-colors duration-200"
        >
          View Full Gallery
        </a>
        <a
          href="#"
          className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-sm italic transition-colors duration-200"
        >
          Design Portfolio Site Coming Soon
        </a>
      </div>
      {year}
    </p>
    {description && (
      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
        {description}
      </p>
    )}
  </div>
);

const ExpandableSection = ({ title, icon: Icon, children, defaultExpanded = true, bgColor = "bg-gray-50 dark:bg-gray-800/50" }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className={`${bgColor} rounded-xl p-6 hover:shadow-md transition-all duration-300`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center shadow-sm">
            <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        )}
      </button>
      
      {isExpanded && (
        <div className="mt-6 space-y-4">
          {children}
        </div>
      )}
    </div>
  );
};

const ExperienceDetailCard = ({ title, company, period, responsibilities, tags, impact }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-200">
    <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h4>
        <p className="text-base text-gray-600 dark:text-gray-400 mt-1">
          {company}
        </p>
      </div>
      <span className="px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium shrink-0">
        {period}
      </span>
    </div>

    {impact && (
      <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-400 dark:border-blue-500">
        <p className="text-sm font-medium text-blue-900 dark:text-blue-200 mb-1">Key Impact:</p>
        <p className="text-sm text-blue-800 dark:text-blue-300">{impact}</p>
      </div>
    )}

    {responsibilities && (
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}

    {tags && (
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 transition-all duration-200"
          >
            {tag}
          </span>
        ))}
      </div>
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
          <div className="space-y-8">
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              My research focuses on enhancing security and performance in
              distributed computing environments. I work on cloud/edge computing
              architectures, zero trust cybersecurity frameworks, and machine
              learning applications for drone analytics and security.
            </p>

            {/* Research Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Zero Trust Research */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-28 h-28 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <div className="text-emerald-700 dark:text-emerald-300 font-semibold text-sm">
                        Zero Trust
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Arculus: Zero Trust for Tactical Edge Networks
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Novel Zero Trust design for tactical environments,
                      improving situational awareness and resilience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Collection Research */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-28 h-28 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <div className="text-blue-700 dark:text-blue-300 font-semibold text-sm">
                        Data Collection
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Floto: A Framework for Adaptable Data Collection
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Multi-sensor data collection for large-scale workflows,
                      enhancing throughput and scalability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Drone Security Research */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-28 h-28 bg-violet-100 dark:bg-violet-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <div className="text-violet-700 dark:text-violet-300 font-semibold text-sm">
                        Drone Security
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Enhancing Drone Video Analytics Security
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      AERPAW-based experiments securing edge video analytics
                      workflows using programmable network services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Federated Learning Research */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-28 h-28 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <div className="text-pink-700 dark:text-pink-300 font-semibold text-sm">
                        Federated Learning
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      FL-Defend: Intrusion Detection in Federated Learning
                      Systems
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      A secure FL framework for UAV swarms under data poisoning
                      and network disruption threats.
                    </p>
                  </div>
                </div>
              </div>

              {/* Edge Orchestration Research */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-28 h-28 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <div className="text-amber-700 dark:text-amber-300 font-semibold text-sm">
                        Edge Orchestration
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Learning-based Multi-Drone Edge Offloading
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      PPO-based orchestration of data tasks for real-time
                      edge/cloud UAV coordination.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legacy Research Grid - Keep for additional research areas */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Research Areas & Collaborations
              </h3>
              <ResearchGrid />
              <div className="mt-8">
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
            {/* Impact Summary Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 shadow-sm border border-blue-100 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Impact Snapshot
                </h3>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <li>15+ publications, including <em>ACM Computing Surveys</em></li>
                <li>$650K+ in awarded DoD research grants</li>
                <li>Mentored 30+ students across 4 REU cohorts</li>
                <li>Designed & taught university courses with 300+ students</li>
                <li>Led testbed deployments on AERPAW, FABRIC, and more</li>
              </ul>
            </div>

            {/* Academic & Teaching Roles */}
            <ExpandableSection 
              title="Academic & Teaching Roles" 
              icon={GraduationCap}
              bgColor="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20"
            >
              <ExperienceDetailCard
                title="Graduate Research Assistant"
                company="VIMAN Lab, University of Missouri"
                period="2018 - Present"
                impact="Published 15+ peer-reviewed papers and secured multiple DoD research grants"
                responsibilities={[
                  "Conducting cutting-edge research on cloud computing, Zero Trust architectures, and federated learning",
                  "Working with real-world testbeds including GENI, POWDER, AERPAW for distributed systems research",
                  "Developing AI-driven security solutions for IoT and mobile networks",
                  "Published in top-tier venues including ACM Computing Surveys, IEEE INFOCOM, MILCOM, NOMS"
                ]}
                tags={["Cloud Computing", "Zero Trust", "Federated Learning", "IoT Security", "Research"]}
              />
              
              <ExperienceDetailCard
                title="Teaching Assistant"
                company="University of Missouri Computer Science Department"
                period="2018 - Present"
                impact="Taught 300+ students across multiple high-enrollment computer science courses"
                responsibilities={[
                  "Designed and delivered lectures for Cyber Defense, Cloud Computing, and Algorithm Design courses",
                  "Developed course materials, assignments, and assessments for graduate-level cybersecurity courses",
                  "Provided one-on-one mentoring and academic support to undergraduate and graduate students",
                  "Collaborated with faculty to improve curriculum and teaching methodologies"
                ]}
                tags={["Teaching", "Curriculum Development", "Cybersecurity Education", "Mentoring"]}
              />
            </ExpandableSection>

            {/* Research & Projects */}
            <ExpandableSection 
              title="Research & Projects" 
              icon={Beaker}
              bgColor="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20"
            >
              <ExperienceDetailCard
                title="Arculus: Zero Trust for Tactical Edge Networks"
                company="DoD-Funded Research Project"
                period="2022 - Present"
                impact="Developed novel Zero Trust framework improving tactical network security by 40%"
                responsibilities={[
                  "Designed and implemented Zero Trust architecture for resource-constrained edge environments",
                  "Conducted extensive testing on AERPAW and POWDER testbeds with real UAV deployments",
                  "Published research findings in IEEE conferences and DoD technical reports",
                  "Collaborated with military partners to ensure practical applicability"
                ]}
                tags={["Zero Trust", "Edge Computing", "DoD Research", "UAV Security", "AERPAW"]}
              />
              
              <ExperienceDetailCard
                title="FLOTO: Federated Learning Framework"
                company="NSF-Supported Research"
                period="2021 - Present"
                impact="Created scalable FL framework deployed across 50+ edge nodes"
                responsibilities={[
                  "Developed federated learning framework for tactical operations and edge computing",
                  "Implemented privacy-preserving machine learning algorithms for distributed systems",
                  "Conducted performance evaluations on FABRIC and CloudLab testbeds",
                  "Presented findings at International Conference on High Performance Computing"
                ]}
                tags={["Federated Learning", "Privacy", "Distributed Systems", "FABRIC", "HPC"]}
              />
              
              <ExperienceDetailCard
                title="Drone Analytics & Security Research"
                company="Multi-Agency Collaboration"
                period="2020 - Present"
                impact="Enhanced drone communication security protocols adopted by industry partners"
                responsibilities={[
                  "Developed machine learning models for drone communication security and analytics",
                  "Implemented intrusion detection systems for UAV swarms under adversarial conditions",
                  "Conducted field experiments using real drone platforms and edge computing infrastructure",
                  "Published comprehensive survey on UAV security for ACM Computing Surveys"
                ]}
                tags={["Drone Security", "Machine Learning", "Intrusion Detection", "UAV Analytics"]}
              />
            </ExpandableSection>

            {/* Mentorship & Fellowships */}
            <ExpandableSection 
              title="Mentorship & Fellowships" 
              icon={UserCheck}
              bgColor="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20"
            >
              <ExperienceDetailCard
                title="REU Program Mentor"
                company="NSF Research Experience for Undergraduates"
                period="2019 - Present"
                impact="Mentored 30+ students with 85% continuing to graduate programs"
                responsibilities={[
                  "Supervised undergraduate researchers in REU cohorts and REU BigDataX programs",
                  "Designed research projects suitable for 10-week summer research experiences",
                  "Provided career guidance and graduate school application support",
                  "Organized weekly seminars and professional development workshops"
                ]}
                tags={["Mentoring", "REU", "Undergraduate Research", "Career Development"]}
              />
              
              <ExperienceDetailCard
                title="UC Santa Cruz SoR Fellow Mentor"
                company="University of California System"
                period="2023 - Present"
                impact="Guided 5 PhD students in research methodology and publication strategies"
                responsibilities={[
                  "Provided research mentorship to PhD students in the UC system",
                  "Facilitated collaboration between students and industry research partners",
                  "Conducted workshops on research methodology and academic writing",
                  "Supported students in developing independent research projects"
                ]}
                tags={["PhD Mentoring", "Research Methodology", "Academic Writing", "UC System"]}
              />
              
              <ExperienceDetailCard
                title="Chameleon Cloud Project Supervisor"
                company="NSF Cloud Computing Testbed"
                period="2020 - Present"
                impact="Supervised 15+ cloud computing projects with real-world deployments"
                responsibilities={[
                  "Supervised student projects on Chameleon Cloud infrastructure",
                  "Designed hands-on cloud computing experiments and tutorials",
                  "Provided technical support for complex distributed system deployments",
                  "Evaluated project outcomes and provided detailed feedback for improvement"
                ]}
                tags={["Cloud Computing", "Project Management", "Chameleon Cloud", "Student Supervision"]}
              />
            </ExpandableSection>

            {/* Awards & Recognition */}
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Awards & Recognition
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Outstanding PhD Student Award</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">University of Missouri • 2024</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full">Academic Excellence</span>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Fulbright-CAL Scholar</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">International Research Fellowship • 2024</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs rounded-full">International Collaboration</span>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">UC2 DoD White Paper Winner</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Department of Defense • 2024</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-xs rounded-full">Research Innovation</span>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">FAA Part 107 Drone License</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Federal Aviation Administration • 2023</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 text-xs rounded-full">Professional Certification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "fun":
        return (
          <div className="space-y-8">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Beyond research, I'm passionate about exploring the world,
                creating art, learning languages, and connecting with my
                community. Here's a glimpse into what makes me tick outside the
                lab!
              </p>
            </div>

            {/* Travel Adventures & Language Culture - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Travel Adventures Card */}
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 rounded-xl p-6 shadow-md h-full">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-x-2">
                  <MapPin className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  Travel Adventures
                </h3>

                {/* Travel Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Europe Tour Card */}
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div
                      className="h-32 bg-cover bg-center transition-all duration-300 group-hover:brightness-110"
                      style={{
                        backgroundImage: "url('/images/europe.jpg')",
                        backgroundColor: "#6B7280", // fallback color
                      }}
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h4 className="text-white text-sm font-semibold text-center px-2">
                          Europe Tour
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Costa Rica Card */}
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div
                      className="h-32 bg-cover bg-center transition-all duration-300 group-hover:brightness-110"
                      style={{
                        backgroundImage: "url('/images/costarica.jpg')",
                        backgroundColor: "#059669", // fallback color
                      }}
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h4 className="text-white text-sm font-semibold text-center px-2">
                          Costa Rica
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Road Trip USA Card */}
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div
                      className="h-32 bg-cover bg-center transition-all duration-300 group-hover:brightness-110"
                      style={{
                        backgroundImage: "url('/images/roadtrip-usa.jpg')",
                        backgroundColor: "#DC2626", // fallback color
                      }}
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h4 className="text-white text-sm font-semibold text-center px-2">
                          Road Trip USA
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Google My Maps Card */}
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40">
                    <div className="h-32 flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-8 h-8 bg-blue-200 dark:bg-blue-800 rounded-lg flex items-center justify-center mb-2 transform group-hover:scale-110 transition-transform duration-300 shadow-sm">
                        <MapPin className="w-4 h-4 text-blue-700 dark:text-blue-300" />
                      </div>
                      <h4 className="text-gray-800 dark:text-gray-200 font-semibold text-xs mb-1">
                        Google My Maps
                      </h4>
                      <a
                        href="https://www.google.com/maps/d/u/0/edit?mid=1vYr6qmcH_pIK4e3gMH8rAZ4vLMR9tP1o&usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded transition-colors duration-200 shadow-sm hover:shadow-md"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Map
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Language & Culture Card */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6 shadow-md h-full">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-x-2">
                  <Languages className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  Language & Culture
                </h3>
                
                <div className="space-y-6">
                  {/* Languages I Speak */}
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      Languages I Speak
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full px-3 py-1 text-sm font-medium inline-flex items-center gap-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 border border-orange-200 dark:border-orange-800">
                        🇵🇾 Spanish
                      </span>
                      <span className="rounded-full px-3 py-1 text-sm font-medium inline-flex items-center gap-x-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800">
                        🇵🇾 Guarani
                      </span>
                      <span className="rounded-full px-3 py-1 text-sm font-medium inline-flex items-center gap-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800">
                        🇺🇸 English
                      </span>
                    </div>
                  </div>

                  {/* Languages I'm Learning */}
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      Languages I'm Learning
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="rounded-full px-3 py-1 text-sm font-medium inline-flex items-center gap-x-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800">
                        🇯🇵 Japanese
                      </span>
                      <span className="rounded-full px-3 py-1 text-sm font-medium inline-flex items-center gap-x-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800">
                        🇧🇷 Portuguese
                      </span>
                      <span className="rounded-full px-3 py-1 text-sm font-medium inline-flex items-center gap-x-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-800">
                        🇮🇹 Italian
                      </span>
                    </div>
                    
                    {/* Duolingo Learning Tool */}
                    <a
                      href="https://www.duolingo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800 hover:bg-green-200 dark:hover:bg-green-800/40 transition-colors duration-200"
                    >
                      <Globe className="w-4 h-4" />
                      Learning with Duolingo
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Art & Design Portfolio - Full Width */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-x-2">
                <PencilLine className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                Art & Design Portfolio
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I create logos, digital art, poster designs, and academic
                visuals for research presentations and manuscripts. My design
                work bridges creative expression with clear communication
                across various mediums and contexts.
              </p>

              {/* Design Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Logo & Brand Design Card */}
                <div className="group bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-xl flex items-center justify-center group-hover:bg-sky-200 dark:group-hover:bg-sky-800/40 transition-colors duration-300">
                      <Tag className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">
                        Logo & Brand Design
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Identity and branding systems
                      </p>
                    </div>
                  </div>
                </div>

                {/* Poster & Flyer Design Card */}
                <div className="group bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/40 transition-colors duration-300">
                      <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">
                        Poster & Flyer Design
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Event & promotional materials
                      </p>
                    </div>
                  </div>
                </div>

                {/* Illustration & Digital Sketches Card */}
                <div className="group bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-xl flex items-center justify-center group-hover:bg-violet-200 dark:group-hover:bg-violet-800/40 transition-colors duration-300">
                      <PencilLine className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">
                        Illustration & Digital Sketches
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Digital art and illustrations
                      </p>
                    </div>
                  </div>
                </div>

                {/* Research Visuals Card */}
                <div className="group bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center group-hover:bg-amber-200 dark:group-hover:bg-amber-800/40 transition-colors duration-300">
                      <BarChart2 className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">
                        Research Visuals
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Diagrams, charts, and graphics for academic papers and
                        grant proposals
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Faith & Community - Full Width */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                Faith & Community
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-32 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                  Mission Trip Photo
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Active in church community, participating in mission trips and
                  local outreach programs.
                </p>
                <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-lg p-3">
                  <p className="text-sm italic text-emerald-800 dark:text-emerald-200">
                    "For I know the plans I have for you," declares the Lord,
                    "plans to prosper you and not to harm you, to give you hope
                    and a future." - Jeremiah 29:11
                  </p>
                </div>
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
