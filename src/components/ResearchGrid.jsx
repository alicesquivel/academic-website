import React from "react";
import { Shield, Cloud, Network, Brain, Lock, Terminal } from "lucide-react";

const researchAreas = [
  {
    title: "Cloud/Edge Computing",
    description:
      "Developing secure and efficient architectures for distributed cloud and edge environments",
    icon: Cloud,
    gradient: "from-sky-400 to-blue-500",
  },
  {
    title: "Zero Trust Architecture",
    description:
      "Implementing and evaluating zero-trust security frameworks for modern infrastructures",
    icon: Shield,
    gradient: "from-emerald-400 to-green-500",
  },
  {
    title: "Drone Analytics",
    description:
      "Machine learning approaches for drone communication security and analytics",
    icon: Network,
    gradient: "from-violet-400 to-purple-500",
  },
  {
    title: "ML for Cybersecurity",
    description:
      "Applying machine learning algorithms for threat detection and security automation",
    icon: Brain,
    gradient: "from-pink-400 to-rose-500",
  },
  {
    title: "Container Security",
    description:
      "Kubernetes and Docker security with focus on container orchestration",
    icon: Lock,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    title: "NSF Testbeds",
    description:
      "Research using FABRIC, GENI, CloudLab, and POWDER for distributed systems",
    icon: Terminal,
    gradient: "from-teal-400 to-cyan-500",
  },
];

const ResearchCard = ({ title, description, icon: Icon, gradient }) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r opacity-50 group-hover:opacity-100 transition duration-500 blur-sm"></div>
      <div className="relative h-full p-6 space-y-4 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
        <div
          className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${gradient} shadow-sm`}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {title}
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const ResearchGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {researchAreas.map((area) => (
        <ResearchCard key={area.title} {...area} />
      ))}
    </div>
  );
};

export default ResearchGrid;
