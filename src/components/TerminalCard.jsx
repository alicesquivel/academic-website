import React from "react";
import {
  Terminal,
  Database,
  Shield,
  Cloud,
  Network,
  FileCode,
  BrainCircuit,
} from "lucide-react";

const Command = ({ command, output }) => (
  <div className="space-y-1.5">
    <div className="flex items-center gap-1">
      <span className="text-green-500 dark:text-green-500 font-medium text-sm">❯</span>
      <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
        {command}
      </span>
    </div>
    <div className="pl-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
      {output}
    </div>
  </div>
);

const TerminalCard = () => {
  return (
    <div className="w-full sm:w-[400px] mx-auto rounded-md overflow-hidden bg-[#f9fafb] dark:bg-[#1e1e2e] border border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="flex items-center gap-1.5 px-2 py-1.5 bg-white dark:bg-zinc-800/90 border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-red-500/90" />
          <div className="h-2 w-2 rounded-full bg-yellow-500/90" />
          <div className="h-2 w-2 rounded-full bg-green-500/90" />
        </div>
        <div className="ml-auto flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 font-mono">
          <Terminal size={10} className="stroke-current" />
          <span>terminal</span>
        </div>
      </div>
      <div className="p-3 font-mono text-sm space-y-2 overflow-x-auto bg-[#f9fafb] dark:bg-[#1e1e2e] leading-snug">
        <Command
          command="whoami"
          output={
            <>
              <p className="text-purple-600 dark:text-purple-400 mb-1 text-sm">
                Alicia Esquivel
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                PhD Candidate specializing in cybersecurity and cloud computing
                research
              </p>
            </>
          }
        />
        <Command
          command="ls ./skills/"
          output={
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              <div className="flex items-center gap-1">
                <Database size={12} className="text-blue-500" />
                <span className="text-sm">data-analysis</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield size={12} className="text-red-500" />
                <span className="text-sm">cybersecurity</span>
              </div>
              <div className="flex items-center gap-1">
                <Cloud size={12} className="text-purple-500" />
                <span className="text-sm">cloud-computing</span>
              </div>
              <div className="flex items-center gap-1">
                <BrainCircuit size={12} className="text-green-500" />
                <span className="text-sm">machine-learning</span>
              </div>
              <div className="flex items-center gap-1">
                <Network size={12} className="text-yellow-500" />
                <span className="text-sm">networking</span>
              </div>
              <div className="flex items-center gap-1">
                <FileCode size={12} className="text-pink-500" />
                <span className="text-sm">technical-writing</span>
              </div>
            </div>
          }
        />
        <Command
          command="cat ./research_interests.txt"
          output={
            <div className="space-y-1 text-emerald-600 dark:text-emerald-400 text-sm">
              <p>• Zero-trust Architecture in Cloud Systems</p>
              <p>• AI-driven Security Solutions</p>
              <p>• Edge Computing Security</p>
              <p>• Distributed Systems Resilience</p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default TerminalCard;
