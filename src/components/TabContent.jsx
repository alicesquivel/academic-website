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
  Calendar,
  Clock,
  Image,
  Code,
  FileSpreadsheet,
  Presentation,
  Quote,
  Video,
  Trophy,
  Star,
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
  defaultExpanded = false,
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

// Enhanced Publication Card Component
const EnhancedPublicationCard = ({ 
  title, 
  venue, 
  year, 
  authors, 
  description, 
  thumbnail,
  tags = [],
  links = {}
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 enhanced-pub-card group cursor-pointer">
    <div className="flex gap-4">
      {/* Thumbnail */}
      <div className="flex-shrink-0">
        <div className="w-24 h-24 rounded-lg pub-thumbnail bg-gray-100 dark:bg-gray-700">
          {thumbnail ? (
            <img 
              src={thumbnail} 
              alt={title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div className={`w-full h-full flex items-center justify-center ${thumbnail ? 'hidden' : 'flex'}`}>
            <FileText className="w-8 h-8 text-gray-400 dark:text-gray-500" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Header with external link */}
        <div className="flex items-start justify-between mb-2">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {title}
          </h4>
          {links.paper && (
            <a 
              href={links.paper}
              className="ml-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Publication details */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {venue} • {year} • {authors}
        </p>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          {links.paper && (
            <a 
              href={links.paper}
              className="action-btn inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <FileText className="w-3 h-3" />
              Paper
            </a>
          )}
          {links.code && (
            <a 
              href={links.code}
              className="action-btn inline-flex items-center gap-1 px-3 py-1.5 bg-gray-600 hover:bg-gray-700 text-white text-xs font-medium rounded-lg transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Code className="w-3 h-3" />
              Code
            </a>
          )}
          {links.slides && (
            <a 
              href={links.slides}
              className="action-btn inline-flex items-center gap-1 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-medium rounded-lg transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Presentation className="w-3 h-3" />
              Slides
            </a>
          )}
          {links.bibtex && (
            <a 
              href={links.bibtex}
              className="action-btn inline-flex items-center gap-1 px-3 py-1.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-medium rounded-lg transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Quote className="w-3 h-3" />
              BibTeX
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

// Talk Entry Component - Compact Version
const TalkEntry = ({ date, title, host, location, links = {} }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-sm transition-all duration-200">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      {/* Main Content */}
      <div className="flex-1">
        <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {host} {location && `• ${location}`}
        </p>
      </div>

      {/* Date and Links */}
      <div className="flex items-center gap-3 text-sm">
        <span className="text-gray-500 dark:text-gray-400 font-medium">
          {date}
        </span>
        {(links.slides || links.video) && (
          <div className="flex gap-2">
            {links.slides && (
              <a
                href={links.slides}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                title="View Slides"
              >
                <Presentation className="w-4 h-4" />
              </a>
            )}
            {links.video && (
              <a
                href={links.video}
                className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors duration-200"
                title="Watch Video"
              >
                <Video className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
);

// Award Entry Component
const AwardEntry = ({
  date,
  title,
  organization,
  description,
  icon = "🏆",
}) => (
  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-lg p-5 border border-yellow-200 dark:border-yellow-800/50 award-glow hover:shadow-md transition-all duration-200">
    <div className="flex items-start gap-4">
      {/* Icon */}
      <div className="text-2xl transform hover:scale-110 transition-transform duration-200">{icon}</div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h4>
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {date}
          </span>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-sm mb-2 font-medium">
          {organization}
        </p>

        {description && (
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  </div>
);

const TabContent = ({ activeTab }) => {
  // Recent talks and presentations
  const talks = [
    {
      date: "Nov 2024",
      title: "Zero Trust Security for Edge Computing Systems",
      host: "IEEE MILCOM",
      location: "Washington, D.C.",
      links: {
        slides: "#",
      },
    },
    {
      date: "Oct 2024",
      title: "Federated Learning in Tactical Networks",
      host: "DoD Research Symposium",
      location: "Virtual",
      links: {
        slides: "#",
      },
    },
    {
      date: "Jun 2024",
      title: "UAV Systems Security Challenges",
      host: "AERPAW Workshop",
      location: "NC State",
      links: {
        slides: "#",
        video: "#",
      },
    },
    {
      date: "Mar 2024",
      title: "Edge Computing for Mobile Networks",
      host: "University of Missouri Research Day",
      location: "Columbia, MO",
      links: {
        slides: "#",
      },
    },
    {
      date: "Dec 2023",
      title: "ML-based Network Intrusion Detection",
      host: "IEEE INFOCOM Workshop",
      location: "Virtual",
      links: {
        slides: "#",
      },
    },
  ];

  // Sample awards data
  const awards = [
    {
      date: "2024",
      title: "Outstanding PhD Student Award",
      organization: "University of Missouri Computer Science Department",
      description:
        "Recognized for exceptional academic performance and research contributions in cybersecurity and distributed systems",
      icon: "🏆",
    },
    {
      date: "2024",
      title: "Fulbright Scholar",
      organization: "U.S. Department of State",
      description:
        "Prestigious international research fellowship for conducting advanced cybersecurity research abroad",
      icon: "🌟",
    },
    {
      date: "2024",
      title: "UC2 DoD White Paper Winner",
      organization: "Department of Defense",
      description:
        "Winning research proposal for innovative cybersecurity solutions in tactical edge computing environments",
      icon: "🎖️",
    },
    {
      date: "2023",
      title: "Best Student Paper Award",
      organization: "IEEE SECON Conference",
      description:
        "Recognition for outstanding research contribution in secure edge video analytics",
      icon: "📄",
    },
    {
      date: "2018-2024",
      title: "Graduate Research Fellowship",
      organization: "University of Missouri",
      description:
        "Six-year fellowship supporting doctoral research in cloud computing and cybersecurity",
      icon: "💡",
    },
  ];

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
            {/* Research Impact Overview */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Research Impact Overview
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Advancing cybersecurity and distributed systems through
                    innovative research, collaboration, and mentorship in
                    academic and industry partnerships.
                  </p>
                </div>

                {/* 4-column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {/* Publications Card */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      <AnimatedCounter end={20} suffix="+" duration={2000} />
                    </h3>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Publications
                    </p>
                  </div>

                  {/* Research Projects Card */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Layers className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      <AnimatedCounter end={10} suffix="+" duration={1800} />
                    </h3>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Research Projects
                    </p>
                  </div>

                  {/* Research Funding Card */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      <AnimatedCounter
                        end={650}
                        prefix="$"
                        suffix="K+"
                        duration={2500}
                      />
                    </h3>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Research Funding
                    </p>
                  </div>

                  {/* Presentations Card */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      <AnimatedCounter end={7} suffix="+" duration={1500} />
                    </h3>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Presentations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Areas */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center">
                Research Areas & Publications
              </h2>

              {/* Zero Trust Architecture */}
              <ExpandableSection
                title="Zero Trust Architecture"
                icon={Award}
                bgColor="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20"
              >
                <div className="space-y-4">
                  <EnhancedPublicationCard
                    title="Arculus: Zero Trust Architecture for Tactical Edge Computing"
                    venue="IEEE Conference"
                    year="2024"
                    authors="A. Esquivel, P. Kumar, R. White"
                    description="Novel Zero Trust framework designed specifically for tactical edge computing environments with enhanced security protocols."
                    thumbnail="/images/research/arculus-thumb.jpg"
                    tags={["Zero Trust", "Edge Computing", "Security"]}
                    links={{
                      paper: "#",
                      code: "#",
                      slides: "#",
                      bibtex: "#"
                    }}
                  />

                  <EnhancedPublicationCard
                    title="Zero Trust Implementation in Resource-Constrained Environments"
                    venue="IEEE Security & Privacy"
                    year="2023"
                    authors="A. Esquivel, Q. Zhang, S. Taylor"
                    description="Practical Zero Trust deployment strategies for edge devices with limited computational resources."
                    thumbnail="/images/research/zero-trust-iot-thumb.jpg"
                    tags={["Zero Trust", "IoT", "Security"]}
                    links={{
                      paper: "#",
                      bibtex: "#"
                    }}
                  />

                  <EnhancedPublicationCard
                    title="Adaptive Zero Trust for Dynamic Network Topologies"
                    venue="ACM CCS"
                    year="2023"
                    authors="A. Esquivel, H. Nguyen, I. Clark"
                    description="Self-adapting Zero Trust architecture for networks with frequently changing topologies and device configurations."
                    thumbnail="/images/research/adaptive-zero-trust-thumb.jpg"
                    tags={["Zero Trust", "Network Security", "Adaptive Systems"]}
                    links={{
                      paper: "#",
                      slides: "#",
                      bibtex: "#"
                    }}
                  />
                </div>
              </ExpandableSection>

              {/* Edge & Cloud Computing */}
              <ExpandableSection
                title="Edge & Cloud Computing"
                icon={Globe}
                bgColor="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20"
              >
                <div className="space-y-4">
                  <EnhancedPublicationCard
                    title="Learning-based Multi-Drone Edge Offloading"
                    venue="IEEE INFOCOM"
                    year="2024"
                    authors="A. Esquivel, R. Johnson, S. Kim"
                    description="PPO-based orchestration of data tasks for real-time edge/cloud UAV coordination."
                    thumbnail="/images/research/drone-offloading-thumb.jpg"
                    tags={["Edge Computing", "UAV Systems", "Machine Learning"]}
                    links={{
                      paper: "#",
                      slides: "#",
                      bibtex: "#"
                    }}
                  />

                  <EnhancedPublicationCard
                    title="Network Management and Orchestration in Edge Computing"
                    venue="IEEE NOMS"
                    year="2023"
                    authors="A. Esquivel, T. Anderson, L. Wilson"
                    description="Comprehensive study on network management challenges and solutions for edge computing infrastructures."
                    thumbnail="/images/research/network-mgmt-thumb.jpg"
                    tags={["Edge Computing", "Network Management", "Orchestration"]}
                    links={{
                      paper: "#",
                      bibtex: "#"
                    }}
                  />

                  <EnhancedPublicationCard
                    title="Floto: A Framework for Adaptable Data Collection"
                    venue="IEEE Cloud Computing"
                    year="2024"
                    authors="A. Esquivel, N. Thompson, M. Garcia"
                    description="Multi-sensor data collection framework for large-scale workflows, enhancing throughput and scalability."
                    thumbnail="/images/research/floto-thumb.jpg"
                    tags={["Cloud Computing", "Data Collection", "Scalability"]}
                    links={{
                      paper: "#",
                      code: "#",
                      slides: "#",
                      bibtex: "#"
                    }}
                  />
                </div>
              </ExpandableSection>

              {/* UAV Systems & Networking */}
              <ExpandableSection
                title="UAV Systems & Networking"
                icon={Plane}
                bgColor="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20"
              >
                <div className="space-y-4">
                  <EnhancedPublicationCard
                    title="UAV/Drone Systems Security and Privacy: A Comprehensive Survey"
                    venue="ACM Computing Surveys"
                    year="2025"
                    authors="A. Esquivel, et al."
                    description="Comprehensive survey on security and privacy challenges in unmanned aerial vehicle systems and drone networks."
                    thumbnail="/images/research/uav-survey-thumb.jpg"
                    tags={["UAV Systems", "Security", "Privacy", "Survey"]}
                    links={{
                      paper: "#",
                      bibtex: "#"
                    }}
                  />

                  <EnhancedPublicationCard
                    title="Enhancing Drone Video Analytics Security"
                    venue="IEEE SECON"
                    year="2024"
                    authors="A. Esquivel, B. Davis, C. Martinez"
                    description="AERPAW-based experiments securing edge video analytics workflows using programmable network services."
                    thumbnail="/images/research/drone-video-thumb.jpg"
                    tags={["UAV Systems", "Video Analytics", "Security"]}
                    links={{
                      paper: "#",
                      slides: "#",
                      bibtex: "#"
                    }}
                  />

                  <EnhancedPublicationCard
                    title="AI-Driven Intrusion Detection for Mobile Networks"
                    venue="IEEE INFOCOM"
                    year="2024"
                    authors="A. Esquivel, F. Lee, G. Brown"
                    description="Machine learning approaches for detecting network intrusions in mobile and wireless communication systems."
                    thumbnail="/images/research/intrusion-detection-thumb.jpg"
                    tags={["Machine Learning", "Network Security", "Mobile Networks"]}
                    links={{
                      paper: "#",
                      slides: "#",
                      bibtex: "#"
                    }}
                  />
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

            {/* Talks & Presentations Timeline */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <div className="space-y-5">
                <div className="flex items-center gap-3 mb-4">
                  <Presentation className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Talks & Presentations
                  </h2>
                </div>

                <div className="space-y-3">{talks.map((talk, index) => (
                    <div key={index} className="timeline-item">
                      <TalkEntry
                        date={talk.date}
                        title={talk.title}
                        host={talk.host}
                        location={talk.location}
                        links={talk.links}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Awards & Recognition Timeline */}
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center justify-center gap-3">
                  <Trophy className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  Awards & Recognition
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Academic honors and professional recognition
                </p>
              </div>

              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="timeline-item">
                    <AwardEntry
                      date={award.date}
                      title={award.title}
                      organization={award.organization}
                      description={award.description}
                      icon={award.icon}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "publications":
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
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
          </div>
        );

      case "experience":
        return (
          <div className="space-y-8">
            {/* Academic Mentorship & Recognition */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Academic Mentorship & Recognition
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    6+ years of teaching, mentoring, and academic excellence
                  </p>
                </div>

                {/* 4-column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {/* Students Taught Card */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <School className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      <AnimatedCounter end={300} suffix="+" duration={2800} />
                    </h3>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Students Taught
                    </p>
                  </div>

                  {/* Students Mentored Card */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      <AnimatedCounter end={30} suffix="+" duration={2000} />
                    </h3>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Students Mentored
                    </p>
                  </div>

                  {/* Major Awards Card */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      <AnimatedCounter end={4} duration={1200} />
                    </h3>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Major Awards
                    </p>
                  </div>

                  {/* Mentoring Roles Card */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <UserCheck className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      <AnimatedCounter end={2} suffix="+" duration={1500} />
                    </h3>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Mentoring Roles
                    </p>
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
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  Beyond research, I'm passionate about exploring the world,
                  creating art, learning languages, and connecting with my
                  community. Here's a glimpse into what makes me tick outside
                  the lab!
                </p>
              </div>
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
