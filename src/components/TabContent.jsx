import React, { useState, useEffect, useRef } from "react";
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
  BookOpen,
  DollarSign,
  Users2,
  School,
  Server,
  ArrowRight,
  Layers,
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

const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef} className="font-bold">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

const ImpactCard = ({
  icon: Icon,
  label,
  value,
  suffix = "",
  prefix = "",
  color = "blue",
  badges = [],
}) => {
  const colorClasses = {
    blue: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-100 dark:border-blue-800",
    green:
      "from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-emerald-100 dark:border-emerald-800",
    purple:
      "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border-purple-100 dark:border-purple-800",
    amber:
      "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-100 dark:border-amber-800",
    pink: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border-pink-100 dark:border-pink-800",
    cyan: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-cyan-100 dark:border-cyan-800",
  };

  const iconColorClasses = {
    blue: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30",
    green:
      "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30",
    purple:
      "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30",
    amber:
      "text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30",
    pink: "text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900/30",
    cyan: "text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-900/30",
  };

  return (
    <div
      className={`bg-gradient-to-br ${colorClasses[color]} rounded-xl p-6 border shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 group`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconColorClasses[color]} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            <AnimatedCounter end={value} prefix={prefix} suffix={suffix} />
          </h4>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {label}
          </p>
        </div>
      </div>

      {badges && badges.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white/50 dark:bg-gray-800/50 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
            >
              {badge}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const ExpandableSection = ({
  title,
  icon: Icon,
  children,
  defaultExpanded = true,
  bgColor = "bg-gray-50 dark:bg-gray-800/50",
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div
      className={`${bgColor} rounded-xl p-6 hover:shadow-md transition-all duration-300`}
    >
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

      {isExpanded && <div className="mt-6 space-y-4">{children}</div>}
    </div>
  );
};

const ExperienceDetailCard = ({
  title,
  company,
  period,
  responsibilities,
  tags,
  impact,
}) => (
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
        <p className="text-sm font-medium text-blue-900 dark:text-blue-200 mb-1">
          Key Impact:
        </p>
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
          <div className="space-y-10">
            {/* Research Impact Overview */}
            <div className="bg-gray-50 dark:bg-gray-800/80 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700/60">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Research Impact Overview
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  Advancing cybersecurity and distributed systems through
                  innovative research, collaboration, and mentorship in academic
                  and industry partnerships.
                </p>
              </div>

              {/* 5-Column Icon Summary */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {/* Publications */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-50 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-sm">
                    <BookOpen className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    <AnimatedCounter end={20} suffix="+" duration={2000} />
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Publications
                  </p>
                </div>

                {/* Research Projects */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-50 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-sm">
                    <Layers className="w-8 h-8 text-green-500 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    <AnimatedCounter end={10} suffix="+" duration={1800} />
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Research Projects
                  </p>
                </div>

                {/* Research Funding */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-50 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-sm">
                    <DollarSign className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    <AnimatedCounter
                      end={650}
                      prefix="$"
                      suffix="K+"
                      duration={2500}
                    />
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Research Funding
                  </p>
                </div>

                {/* Students Mentored */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-50 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-sm">
                    <Users2 className="w-8 h-8 text-purple-500 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    <AnimatedCounter end={30} suffix="+" duration={2200} />
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Students Mentored
                  </p>
                </div>

                {/* Presentations */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-50 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-sm">
                    <Globe className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    <AnimatedCounter end={7} suffix="+" duration={1500} />
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Presentations
                  </p>
                </div>
              </div>
            </div>

            {/* Research Areas */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center">
                Research Areas & Publications
              </h2>

              {/* Federated Learning & Security */}
              <ExpandableSection
                title="Federated Learning & Security"
                icon={Server}
                bgColor="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
                defaultExpanded={true}
              >
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        FL-Defend: Intrusion Detection in Federated Learning
                        Systems
                      </h4>
                      <ExternalLink className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      IEEE MILCOM • 2024 • A. Esquivel, J. Smith, M. Rodriguez
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Secure federated learning framework for UAV swarms under
                      data poisoning and network disruption threats.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        FLOTO Framework: Federated Learning for Tactical
                        Operations
                      </h4>
                      <ExternalLink className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      International Conference on High Performance Computing •
                      2025 • A. Esquivel, et al.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Federated learning framework optimized for tactical
                      operations and distributed edge computing scenarios.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Security Challenges in IoT Federated Learning
                      </h4>
                      <ExternalLink className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      IEEE MILCOM • 2024 • A. Esquivel, D. Chen, K. Patel
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Analysis of security vulnerabilities and mitigation
                      strategies in federated learning for IoT environments.
                    </p>
                  </div>
                </div>
              </ExpandableSection>

              {/* Edge & Cloud Computing */}
              <ExpandableSection
                title="Edge & Cloud Computing"
                icon={Globe}
                bgColor="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20"
              >
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Learning-based Multi-Drone Edge Offloading
                      </h4>
                      <ExternalLink className="w-4 h-4 text-gray-400 hover:text-emerald-600 cursor-pointer transition-colors" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      IEEE INFOCOM • 2024 • A. Esquivel, R. Johnson, S. Kim
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      PPO-based orchestration of data tasks for real-time
                      edge/cloud UAV coordination.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Network Management and Orchestration in Edge Computing
                      </h4>
                      <ExternalLink className="w-4 h-4 text-gray-400 hover:text-emerald-600 cursor-pointer transition-colors" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      IEEE NOMS • 2023 • A. Esquivel, T. Anderson, L. Wilson
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Comprehensive study on network management challenges and
                      solutions for edge computing infrastructures.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Floto: A Framework for Adaptable Data Collection
                      </h4>
                      <ExternalLink className="w-4 h-4 text-gray-400 hover:text-emerald-600 cursor-pointer transition-colors" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      IEEE Cloud Computing • 2024 • A. Esquivel, N. Thompson, M.
                      Garcia
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Multi-sensor data collection framework for large-scale
                      workflows, enhancing throughput and scalability.
                    </p>
                  </div>
                </div>
              </ExpandableSection>

              {/* UAV Systems & Networking */}
              <ExpandableSection
                title="UAV Systems & Networking"
                icon={Plane}
                bgColor="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20"
              >
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        UAV/Drone Systems Security and Privacy: A Comprehensive
                        Survey
                      </h4>
                      <ExternalLink className="w-4 h-4 text-gray-400 hover:text-violet-600 cursor-pointer transition-colors" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      ACM Computing Surveys • 2025 • A. Esquivel, et al.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Comprehensive survey on security and privacy challenges in
                      unmanned aerial vehicle systems and drone networks.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Enhancing Drone Video Analytics Security
                      </h4>
                      <ExternalLink className="w-4 h-4 text-gray-400 hover:text-violet-600 cursor-pointer transition-colors" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      IEEE SECON • 2024 • A. Esquivel, B. Davis, C. Martinez
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      AERPAW-based experiments securing edge video analytics
                      workflows using programmable network services.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        AI-Driven Intrusion Detection for Mobile Networks
                      </h4>
                      <ExternalLink className="w-4 h-4 text-gray-400 hover:text-violet-600 cursor-pointer transition-colors" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      IEEE INFOCOM • 2024 • A. Esquivel, F. Lee, G. Brown
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Machine learning approaches for detecting network
                      intrusions in mobile and wireless communication systems.
                    </p>
                  </div>
                </div>
              </ExpandableSection>

              {/* Zero Trust Architecture */}
              <ExpandableSection
                title="Zero Trust Architecture"
                icon={Award}
                bgColor="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20"
              >
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Arculus: Zero Trust Architecture for Tactical Edge
                        Computing
                      </h4>
                      <ExternalLink className="w-4 h-4 text-gray-400 hover:text-amber-600 cursor-pointer transition-colors" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      IEEE Conference • 2024 • A. Esquivel, P. Kumar, R. White
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Novel Zero Trust framework designed specifically for
                      tactical edge computing environments with enhanced
                      security protocols.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Zero Trust Implementation in Resource-Constrained
                        Environments
                      </h4>
                      <ExternalLink className="w-4 h-4 text-gray-400 hover:text-amber-600 cursor-pointer transition-colors" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      IEEE Security & Privacy • 2023 • A. Esquivel, Q. Zhang, S.
                      Taylor
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Practical Zero Trust deployment strategies for edge
                      devices with limited computational resources.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Adaptive Zero Trust for Dynamic Network Topologies
                      </h4>
                      <ExternalLink className="w-4 h-4 text-gray-400 hover:text-amber-600 cursor-pointer transition-colors" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      ACM CCS • 2023 • A. Esquivel, H. Nguyen, I. Clark
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Self-adapting Zero Trust architecture for networks with
                      frequently changing topologies and device configurations.
                    </p>
                  </div>
                </div>
              </ExpandableSection>
            </div>

            {/* Research Infrastructure */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-3">
                <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Research Infrastructure & Testbeds
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                    AERPAW Testbed
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Aerial experimentation and research platform for wireless
                    systems
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Server className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                    FABRIC Infrastructure
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    National-scale programmable research infrastructure
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Beaker className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                    POWDER Platform
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Platform for open wireless data-driven experimental research
                  </p>
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
          <div className="space-y-8">
            {/* Academic Mentorship & Recognition */}
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Academic Mentorship & Recognition
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  6+ years of teaching, mentoring, and academic excellence
                </p>
              </div>

              {/* Compact 2x2 Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Students Mentored Card */}
                <div className="bg-purple-50 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-6 border border-purple-100/50 dark:border-purple-700/50 hover:shadow-md hover:shadow-purple-200/20 dark:hover:shadow-purple-900/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-2xl flex items-center justify-center">
                      <Users2 className="w-6 h-6 text-purple-500 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 leading-none">
                        <AnimatedCounter end={30} suffix="+" duration={2000} />
                      </h3>
                      <p className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wide leading-none">
                        Students Mentored
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/80 dark:bg-gray-800/60 text-xs font-medium text-purple-700 dark:text-purple-300 rounded-full border border-purple-200/60 dark:border-purple-700">
                      REU Program
                    </span>
                    <span className="px-3 py-1 bg-white/80 dark:bg-gray-800/60 text-xs font-medium text-purple-700 dark:text-purple-300 rounded-full border border-purple-200/60 dark:border-purple-700">
                      PhD Guidance
                    </span>
                    <span className="px-3 py-1 bg-white/80 dark:bg-gray-800/60 text-xs font-medium text-purple-700 dark:text-purple-300 rounded-full border border-purple-200/60 dark:border-purple-700">
                      SoR Fellowship
                    </span>
                  </div>
                </div>

                {/* Students Taught Card */}
                <div className="bg-yellow-50 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-2xl p-6 border border-yellow-100/50 dark:border-yellow-700/50 hover:shadow-md hover:shadow-yellow-200/20 dark:hover:shadow-yellow-900/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/40 rounded-2xl flex items-center justify-center">
                      <School className="w-6 h-6 text-yellow-500 dark:text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 leading-none">
                        <AnimatedCounter end={300} suffix="+" duration={2800} />
                      </h3>
                      <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400 uppercase tracking-wide leading-none">
                        Students Taught
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/80 dark:bg-gray-800/60 text-xs font-medium text-yellow-700 dark:text-yellow-300 rounded-full border border-yellow-200/60 dark:border-yellow-700">
                      Cyber Defense
                    </span>
                    <span className="px-3 py-1 bg-white/80 dark:bg-gray-800/60 text-xs font-medium text-yellow-700 dark:text-yellow-300 rounded-full border border-yellow-200/60 dark:border-yellow-700">
                      Cloud Computing
                    </span>
                    <span className="px-3 py-1 bg-white/80 dark:bg-gray-800/60 text-xs font-medium text-yellow-700 dark:text-yellow-300 rounded-full border border-yellow-200/60 dark:border-yellow-700">
                      Algorithms
                    </span>
                  </div>
                </div>

                {/* Major Awards Card */}
                <div className="bg-cyan-50 dark:from-cyan-900/20 dark:to-cyan-800/20 rounded-2xl p-6 border border-cyan-100/50 dark:border-cyan-700/50 hover:shadow-md hover:shadow-cyan-200/20 dark:hover:shadow-cyan-900/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/40 rounded-2xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 leading-none">
                        <AnimatedCounter end={4} duration={1200} />
                      </h3>
                      <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400 uppercase tracking-wide leading-none">
                        Major Awards
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/80 dark:bg-gray-800/60 text-xs font-medium text-cyan-700 dark:text-cyan-300 rounded-full border border-cyan-200/60 dark:border-cyan-700">
                      Fulbright Scholar
                    </span>
                    <span className="px-3 py-1 bg-white/80 dark:bg-gray-800/60 text-xs font-medium text-cyan-700 dark:text-cyan-300 rounded-full border border-cyan-200/60 dark:border-cyan-700">
                      Outstanding PhD
                    </span>
                    <span className="px-3 py-1 bg-white/80 dark:bg-gray-800/60 text-xs font-medium text-cyan-700 dark:text-cyan-300 rounded-full border border-cyan-200/60 dark:border-cyan-700">
                      FAA License
                    </span>
                  </div>
                </div>

                {/* Mentoring Roles Card */}
                <div className="bg-green-50 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-6 border border-green-100/50 dark:border-green-700/50 hover:shadow-md hover:shadow-green-200/20 dark:hover:shadow-green-900/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-2xl flex items-center justify-center">
                      <UserCheck className="w-6 h-6 text-green-500 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 leading-none">
                        <AnimatedCounter end={2} suffix="+" duration={1500} />
                      </h3>
                      <p className="text-sm font-medium text-green-600 dark:text-green-400 uppercase tracking-wide leading-none">
                        Mentoring Roles
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/80 dark:bg-gray-800/60 text-xs font-medium text-green-700 dark:text-green-300 rounded-full border border-green-200/60 dark:border-green-700">
                      Teaching Assistant
                    </span>
                    <span className="px-3 py-1 bg-white/80 dark:bg-gray-800/60 text-xs font-medium text-green-700 dark:text-green-300 rounded-full border border-green-200/60 dark:border-green-700">
                      Chameleon Mentor
                    </span>
                  </div>
                </div>
              </div>

              {/* Compact Footer */}
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-2">
                <span className="italic">Last updated July 2025</span>
                <button
                  onClick={() =>
                    window.dispatchEvent(
                      new CustomEvent("navigateToTab", { detail: "research" })
                    )
                  }
                  className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  <span>See Research Highlights</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Academic & Teaching Excellence */}
            <ExpandableSection
              title="Academic & Teaching Excellence"
              icon={GraduationCap}
              bgColor="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20"
            >
              <ExperienceDetailCard
                title="Graduate Research Assistant"
                company="VIMAN Lab, University of Missouri"
                period="Aug 2018 - Present"
                impact="Published 15+ peer-reviewed papers and secured multiple DoD & NSF research grants"
                responsibilities={[
                  "Conducting research on cloud/edge computing, Zero Trust architectures, and federated learning",
                  "Working with national testbeds including POWDER, AERPAW, FABRIC for distributed systems research",
                  "Developing AI-driven security solutions for UAV networks and mobile systems",
                  "Published in top-tier venues including ACM Computing Surveys, IEEE INFOCOM, MILCOM",
                ]}
                tags={[
                  "Cloud Computing",
                  "Zero Trust",
                  "Federated Learning",
                  "UAV Security",
                ]}
              />

              <ExperienceDetailCard
                title="Teaching Assistant"
                company="University of Missouri Computer Science Department"
                period="Aug 2018 - Present"
                impact="Taught 300+ students across multiple computer science courses with excellent evaluations"
                responsibilities={[
                  "Delivered lectures and labs for Cyber Defense (CS 4970), Cloud Computing (CS 8570), and Algorithm Design courses",
                  "Developed course materials, assignments, and assessments for graduate-level cybersecurity",
                  "Supervised student projects on cloud platforms and distributed systems",
                  "Provided academic mentoring and career guidance to undergraduate and graduate students",
                ]}
                tags={[
                  "Teaching",
                  "Cybersecurity",
                  "Cloud Computing",
                  "Student Mentoring",
                ]}
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
                impact="Mentored 30+ undergraduate students with 85% continuing to graduate programs"
                responsibilities={[
                  "Supervised undergraduate researchers in REU cohorts and REU BigDataX programs at University of Missouri",
                  "Designed 10-week summer research projects in cloud computing and cybersecurity",
                  "Provided career guidance, graduate school application support, and professional development",
                  "Organized weekly seminars on research methodology and academic writing",
                ]}
                tags={[
                  "REU Mentorship",
                  "Undergraduate Research",
                  "Career Development",
                  "Professional Training",
                ]}
              />
            </ExpandableSection>

            {/* Awards & Recognition */}
            <ExpandableSection
              title="Awards & Recognition"
              icon={Award}
              bgColor="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ExperienceDetailCard
                  title="Outstanding PhD Student Award"
                  company="University of Missouri"
                  period="2024"
                  impact="Recognized for exceptional academic performance and research contributions in computer science"
                  tags={["Academic Excellence", "PhD Recognition"]}
                />

                <ExperienceDetailCard
                  title="Fulbright Scholar"
                  company="U.S. Department of State"
                  period="2024"
                  impact="Prestigious international research fellowship for conducting research abroad"
                  tags={[
                    "International Research",
                    "Fellowship",
                    "Cultural Exchange",
                  ]}
                />

                <ExperienceDetailCard
                  title="UC2 DoD White Paper Winner"
                  company="Department of Defense"
                  period="2024"
                  impact="Winning research proposal for innovative cybersecurity solutions in tactical environments"
                  tags={[
                    "Research Innovation",
                    "DoD Recognition",
                    "Cybersecurity",
                  ]}
                />

                <ExperienceDetailCard
                  title="Graduate Research Fellowship"
                  company="University of Missouri"
                  period="2018-2024"
                  impact="Six-year fellowship supporting doctoral research in cloud computing and cybersecurity"
                  tags={[
                    "Fellowship",
                    "Research Support",
                    "Long-term Achievement",
                  ]}
                />
              </div>
            </ExpandableSection>
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
                work bridges creative expression with clear communication across
                various mediums and contexts.
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
