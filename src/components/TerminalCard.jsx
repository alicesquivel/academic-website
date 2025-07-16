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
  <div className="space-y-3">
    <div className="flex items-center gap-2">
      <span className="text-green-400 dark:text-green-500 font-bold">❯</span>
      <span className="text-blue-500 dark:text-blue-400 font-semibold">
        {command}
      </span>
    </div>
    <div className="pl-6 text-zinc-600 dark:text-zinc-400 leading-loose">
      {output}
    </div>
  </div>
);

const TerminalCard = () => {
  return (
    <div className="w-full rounded-xl overflow-hidden bg-white dark:bg-[#1e1e2e] shadow-md">
      <div className="flex items-center gap-2 px-4 py-3 bg-zinc-50 dark:bg-zinc-800/90 border-b border-zinc-200 dark:border-zinc-700">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="ml-auto flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 font-mono">
          <Terminal size={14} className="stroke-current" />
          <span>terminal</span>
        </div>
      </div>
      <div className="p-6 font-mono text-sm space-y-6 overflow-x-auto bg-gradient-to-b from-zinc-50/50 to-white dark:from-[#1e1e2e]/95 dark:to-[#1e1e2e] leading-loose">
        <Command
          command="whoami"
          output={
            <>
              <p className="text-purple-500 dark:text-purple-400 mb-2">
                Alicia Esquivel
              </p>
              <p className="text-zinc-600 dark:text-zinc-300">
                PhD Candidate specializing in cybersecurity and cloud computing
                research
              </p>
            </>
          }
        />
        <Command
          command="ls ./skills/"
          output={
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Database size={16} className="text-blue-400" />
                <span>data-analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-red-400" />
                <span>cybersecurity</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud size={16} className="text-purple-400" />
                <span>cloud-computing</span>
              </div>
              <div className="flex items-center gap-2">
                <BrainCircuit size={16} className="text-green-400" />
                <span>machine-learning</span>
              </div>
              <div className="flex items-center gap-2">
                <Network size={16} className="text-yellow-400" />
                <span>networking</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode size={16} className="text-pink-400" />
                <span>technical-writing</span>
              </div>
            </div>
          }
        />
        <Command
          command="cat ./research_interests.txt"
          output={
            <div className="space-y-2 text-emerald-500 dark:text-emerald-400">
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
