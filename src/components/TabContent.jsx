import React from "react";
import TerminalCard from "./TerminalCard";
import ResearchGrid from "./ResearchGrid";

const Publication = ({ title, venue, year, description }) => (
  <div className="space-y-2">
    <h4 className="text-[15px] font-medium text-gray-900 dark:text-gray-100">
      {title}
    </h4>
    <p className="text-[15px] text-gray-600 dark:text-gray-400">
      {venue}, {year}
    </p>
    {description && (
      <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
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
  <div className="bg-card rounded-lg border shadow-sm p-4 hover:shadow-md transition-shadow duration-200">
    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
      <div>
        <h3 className="text-[15px] font-medium text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-[15px] text-gray-600 dark:text-gray-400 mt-0.5">
          {company}
        </p>
      </div>
      <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-[15px]">
        {period}
      </span>
    </div>
    <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
      {description}
    </p>
    {responsibilities && (
      <ul className="list-disc pl-4 space-y-1.5 text-[15px] text-gray-700 dark:text-gray-300">
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
            className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded-md text-xs font-medium text-zinc-600 dark:text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
    )}
  </div>
);

const TabContent = ({ activeTab, setActiveTab }) => {
  const observerRef = React.useRef({});
  const sectionsRef = React.useRef({});

  // Scroll to section helper function
  const scrollToSection = (sectionId) => {
    const section = sectionsRef.current[sectionId];
    if (section) {
      const yOffset = -80; // Adjust this value based on your header height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Effect to handle scroll when activeTab changes
  React.useEffect(() => {
    if (activeTab) {
      scrollToSection(activeTab);
    }
  }, [activeTab]);

  React.useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
      rootMargin: "-50px 0px -50px 0px",
    });

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => {
      observer.observe(section);
      observerRef.current[section.id] = observer;
    });

    return () => {
      sections.forEach((section) => {
        observerRef.current[section.id]?.unobserve(section);
      });
    };
  }, [setActiveTab]);
  return (
    <div className="py-4 sm:py-6 px-3 sm:px-4 max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-800 rounded-lg p-4 sm:p-6">
      {activeTab === "about" && (
        <div
          id="about"
          data-section
          className="space-y-4 sm:space-y-6"
          ref={el => sectionsRef.current.about = el}>
          <div className="space-y-3">
            <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              I am a motivated PhD candidate specializing in{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline underline-offset-2"
              >
                cloud/edge computing
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline underline-offset-2"
              >
                cybersecurity
              </a>
              . With a proven ability to lead research, publish papers, and
              teach core computer science courses, I am seeking a research or
              faculty role to apply my expertise in cybersecurity and resilient
              network design for autonomous systems.
            </p>
            <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              I am passionate about leveraging{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline underline-offset-2"
              >
                advanced networking
              </a>
              ,{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline underline-offset-2"
              >
                AI
              </a>
              , and{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline underline-offset-2"
              >
                testbed-driven validation
              </a>{" "}
              in cloud and edge environments to create more secure and resilient
              systems for the future.
            </p>
          </div>
          <div className="mt-6">
            <TerminalCard />
          </div>
        </div>
      )}

      {activeTab === "research" && (
        <div
          id="research"
          data-section
          className="space-y-6"
          ref={el => sectionsRef.current.research = el}>
          <div>
            <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Current Research
            </h2>
            <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              My research focuses on developing secure and scalable cloud
              computing systems, with an emphasis on zero-trust architectures
              and AI-driven security solutions. I work at the intersection of
              cloud computing, cybersecurity, and artificial intelligence,
              developing novel approaches to protect modern distributed systems.
            </p>
          </div>

          <ResearchGrid />

          <div className="space-y-4 divide-y divide-zinc-200 dark:divide-zinc-800">
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Current Projects
              </h3>
              <div className="grid gap-3">
                <ExperienceCard
                  title="Cloud Security Research Group"
                  company="Security Innovation Lab"
                  period="2023 - Present"
                  description="Leading research initiatives in cloud security, focusing on developing novel approaches to protect distributed systems. Key projects include implementing Zero Trust Architecture in cloud environments and developing AI-driven security monitoring systems."
                  tags={["Zero Trust", "Cloud Security", "AI Systems"]}
                />
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Additional Research
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2"></span>
                  <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    Developing advanced intrusion detection systems using
                    federated learning
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2"></span>
                  <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    Investigating resilient network architectures for autonomous
                    systems
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2"></span>
                  <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    Researching secure edge computing frameworks for IoT
                    environments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "publications" && (
        <div
          id="publications"
          data-section
          className="space-y-6"
          ref={el => sectionsRef.current.publications = el}>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">
            Selected Publications
          </h2>
          <div className="space-y-4 divide-y divide-zinc-200 dark:divide-zinc-800">
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                Conference Papers
              </h3>
              <div className="space-y-4">
                <Publication
                  title="Zero-Trust Security in Cloud-Native Applications"
                  venue="IEEE Conference on Cloud Computing"
                  year="2024"
                  description="Presented a novel approach to implementing zero-trust architecture in cloud-native applications, focusing on automated security policy enforcement and continuous validation."
                />
                <Publication
                  title="AI-Driven Network Intrusion Detection"
                  venue="ACM Workshop on Security and Privacy"
                  year="2024"
                  description="Developed a new machine learning approach for detecting network intrusions in real-time, achieving superior accuracy while maintaining low computational overhead."
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "experience" && (
        <div
          id="experience"
          data-section
          className="space-y-6"
          ref={el => sectionsRef.current.experience = el}>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">
            Professional Experience
          </h2>
          <div className="space-y-3">
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
      )}

      {activeTab === "fun" && (
        <div
          id="fun"
          data-section
          className="space-y-6"
          ref={el => sectionsRef.current.fun = el}>
          <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Beyond Research
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="text-[15px] font-medium text-gray-900 dark:text-gray-100 mb-2">
                Photography
              </h3>
              <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                Amateur photographer focusing on landscape and urban
                photography. Check out my work on Instagram.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="text-[15px] font-medium text-gray-900 dark:text-gray-100 mb-2">
                Rock Climbing
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
                Regular climber at local bouldering gyms. Always looking for
                climbing partners!
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="text-[15px] font-medium text-gray-900 dark:text-gray-100 mb-2">
                Open Source
              </h3>
              <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                Contributing to various open-source projects in my free time,
                mainly focused on developer tools and security.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="text-[15px] font-medium text-gray-900 dark:text-gray-100 mb-2">
                Reading List
              </h3>
              <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently reading books on cybersecurity, system design, and
                sci-fi novels.
              </p>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default TabContent;
