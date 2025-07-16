import React from "react";
import TerminalCard from "./TerminalCard";
import ResearchGrid from "./ResearchGrid";

const Publication = ({ title, venue, year, description }) => (
  <div className="space-y-2">
    <h4 className="text-base font-medium text-zinc-900 dark:text-zinc-100">{title}</h4>
    <p className="text-sm text-muted-foreground">
      {venue}, {year}
    </p>
    {description && (
      <p className="text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed">{description}</p>
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
  <div className="bg-card rounded-lg border shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
    <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
      <div>
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
        <p className="text-zinc-600 dark:text-zinc-400 font-medium mt-1">{company}</p>
      </div>
      <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium">
        {period}
      </span>
    </div>
    <p className="text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
      {description}
    </p>
    {responsibilities && (
      <ul className="list-disc pl-4 space-y-2 text-zinc-600 dark:text-zinc-400">
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

const TabContent = ({ activeTab }) => {
  return (
    <div className="py-6 max-w-4xl mx-auto">
      {activeTab === "about" && (
        <div className="space-y-8">
          <div className="max-w-2xl mx-auto prose prose-zinc dark:prose-invert">
            <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              I am a motivated PhD candidate specializing in{" "}
              <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-1.5 rounded-sm">
                cloud/edge computing
              </span>{" "}
              and{" "}
              <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-1.5 rounded-sm">
                cybersecurity
              </span>
              . With a proven ability to lead research, publish papers, and
              teach core computer science courses, I am seeking a research or
              faculty role to apply my expertise in cybersecurity and resilient
              network design for autonomous systems.
            </p>
            <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              I am passionate about leveraging{" "}
              <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-1.5 rounded-sm">
                advanced networking
              </span>
              ,{" "}
              <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-1.5 rounded-sm">
                AI
              </span>
              , and{" "}
              <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-1.5 rounded-sm">
                testbed-driven validation
              </span>{" "}
              in cloud and edge environments to create more secure and resilient
              systems for the future.
            </p>
          </div>
          <div className="mt-12 max-w-2xl mx-auto">
            <TerminalCard />
          </div>
        </div>
      )}

      {activeTab === "research" && (
        <div className="space-y-12">
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">
              Current Research
            </h2>
            <p className="text-lg leading-relaxed">
              My research focuses on developing secure and scalable cloud
              computing systems, with an emphasis on zero-trust architectures
              and AI-driven security solutions. I work at the intersection of
              cloud computing, cybersecurity, and artificial intelligence,
              developing novel approaches to protect modern distributed systems.
            </p>
          </div>

          <ResearchGrid />

          <div className="space-y-8 divide-y divide-zinc-200 dark:divide-zinc-800">
            <div>
              <h3 className="text-xl font-semibold mb-6">Current Projects</h3>
              <div className="grid gap-6">
                <ExperienceCard
                  title="Cloud Security Research Group"
                  company="Security Innovation Lab"
                  period="2023 - Present"
                  description="Leading research initiatives in cloud security, focusing on developing novel approaches to protect distributed systems. Key projects include implementing Zero Trust Architecture in cloud environments and developing AI-driven security monitoring systems."
                  tags={["Zero Trust", "Cloud Security", "AI Systems"]}
                />
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-6">
                Additional Research
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2"></span>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Developing advanced intrusion detection systems using
                    federated learning
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2"></span>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Investigating resilient network architectures for autonomous
                    systems
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2"></span>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
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
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Selected Publications
          </h2>
          <div className="space-y-8 divide-y divide-zinc-200 dark:divide-zinc-800">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Conference Papers</h3>
              <div className="space-y-6">
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
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Professional Experience
          </h2>
          <div className="space-y-6">
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
        <div className="space-y-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Beyond Research
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-3">
                Photography
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
                Amateur photographer focusing on landscape and urban photography. Check out my work on Instagram.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-3">
                Rock Climbing
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
                Regular climber at local bouldering gyms. Always looking for climbing partners!
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-3">
                Open Source
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
                Contributing to various open-source projects in my free time, mainly focused on developer tools and security.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-3">
                Reading List
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
                Currently reading books on cybersecurity, system design, and sci-fi novels.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabContent;
