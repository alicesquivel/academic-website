import React from "react";
import { Shield, Cloud, Network, Brain, Lock, Terminal } from "lucide-react";

const researchAreas = [
  {
    title: "Federated Learning",
    description:
      "Developing secure federated learning frameworks for distributed systems and tactical operations",
    icon: Cloud,
    gradient: "from-sky-400 to-blue-500",
  },
  {
    title: "Zero Trust Architecture",
    description:
      "Implementing Zero Trust security frameworks for tactical edge computing environments",
    icon: Shield,
    gradient: "from-emerald-400 to-green-500",
  },
  {
    title: "UAV/Drone Security",
    description:
      "Security and privacy research for unmanned aerial vehicle systems and drone networks",
    icon: Network,
    gradient: "from-violet-400 to-purple-500",
  },
  {
    title: "AI-Driven Security",
    description:
      "Machine learning approaches for intrusion detection in IoT and mobile networks",
    icon: Brain,
    gradient: "from-pink-400 to-rose-500",
  },
  {
    title: "Cloud/Edge Computing",
    description:
      "Security challenges and solutions for cloud and edge computing infrastructures",
    icon: Lock,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    title: "Testbed Research",
    description:
      "Real-world experimentation using GENI, POWDER, AERPAW, and Chameleon Cloud testbeds",
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
