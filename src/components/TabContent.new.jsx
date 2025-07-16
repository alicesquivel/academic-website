import React from "react";
import { cn } from "../lib/utils";

const ExpertiseCard = ({ title, description, className }) => (
  <div
    className={cn(
      "bg-card p-4 md:p-6 rounded-lg border border-border shadow-sm",
      "hover:shadow-md transition-shadow duration-200",
      className
    )}
  >
    <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2 flex items-center">
      {title}
    </h4>
    <p className="text-sm text-muted-foreground leading-relaxed">
      {description}
    </p>
  </div>
);

const Terminal = () => (
  <div className="mt-8 overflow-hidden rounded-lg border border-border bg-terminal">
    <div className="flex items-center gap-2 border-b border-border/10 bg-terminal-header px-4 py-3">
      <div className="flex gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <p className="ml-auto text-sm text-terminal-muted font-mono">terminal</p>
    </div>
    <div className="p-4 font-mono text-sm leading-relaxed space-y-2">
      <div className="flex flex-col gap-1">
        <span className="text-terminal-muted">$ whoami</span>
        <span className="text-terminal-text pl-4">
          PhD Candidate specializing in cybersecurity and cloud computing
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-terminal-muted">$ ls skills/</span>
        <span className="text-terminal-text pl-4">
          cybersecurity/ cloud-computing/ machine-learning/ networking/
        </span>
      </div>
    </div>
  </div>
);

const TabContent = ({ activeTab }) => {
  const renderAboutContent = () => (
    <div className="space-y-8">
      <div className="prose prose-gray max-w-none">
        <p className="text-lg text-foreground leading-relaxed">
          I am a motivated PhD candidate specializing in{" "}
          <span className="font-semibold text-primary">
            cloud/edge computing
          </span>{" "}
          and <span className="font-semibold text-primary">cybersecurity</span>.
          With a proven ability to lead research, publish papers, and teach core
          computer science courses, I am seeking a research or faculty role to
          apply my expertise in cybersecurity and resilient network design for
          autonomous systems.
        </p>

        <p className="text-lg text-foreground leading-relaxed">
          I am passionate about leveraging{" "}
          <span className="font-semibold text-primary">
            advanced networking
          </span>
          ,{" "}
          <span className="font-semibold text-primary">
            artificial intelligence
          </span>
          , and{" "}
          <span className="font-semibold text-primary">
            testbed-driven validation
          </span>{" "}
          in cloud and edge environments to create more secure and resilient
          systems for the future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ExpertiseCard
          title="Cybersecurity"
          description="AI-driven security, Zero Trust Architecture, threat modeling, intrusion detection systems"
        />
        <ExpertiseCard
          title="Cloud Computing"
          description="Distributed systems, containerization, serverless architecture, edge computing"
        />
        <ExpertiseCard
          title="Machine Learning"
          description="Deep learning, federated learning, adversarial ML, model optimization"
        />
        <ExpertiseCard
          title="Network Systems"
          description="SDN/NFV, 5G networks, network security, protocol design"
        />
      </div>

      <Terminal />
    </div>
  );

  const renderResearchContent = () => (
    <div className="prose prose-gray max-w-none">
      <h3 className="text-2xl font-semibold mb-4 text-foreground">
        Current Research
      </h3>
      {/* Research content here */}
    </div>
  );

  const renderPublicationsContent = () => (
    <div className="prose prose-gray max-w-none">
      <h3 className="text-2xl font-semibold mb-4 text-foreground">
        Publications
      </h3>
      {/* Publications content here */}
    </div>
  );

  const renderExperienceContent = () => (
    <div className="prose prose-gray max-w-none">
      <h3 className="text-2xl font-semibold mb-4 text-foreground">
        Experience
      </h3>
      {/* Experience content here */}
    </div>
  );

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

export default TabContent;
