import React from 'react';
import { Terminal } from 'lucide-react';

const Command = ({ command, output }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <span className="text-emerald-400 dark:text-emerald-500">❯</span>
      <span className="text-zinc-700 dark:text-zinc-300 font-semibold">{command}</span>
    </div>
    <div className="pl-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
      {output}
    </div>
  </div>
);

const TerminalCard = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden bg-white dark:bg-zinc-900 shadow-lg ring-1 ring-zinc-900/5 dark:ring-white/10">
      <div className="flex items-center gap-2 px-4 py-3 bg-zinc-50 dark:bg-zinc-800/90 border-b border-zinc-200 dark:border-zinc-700">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-emerald-500" />
        </div>
        <div className="ml-auto flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 font-mono">
          <Terminal size={14} />
          <span>terminal</span>
        </div>
      </div>
      <div className="p-6 font-mono text-sm space-y-6 bg-gradient-to-b from-zinc-50/50 to-white dark:from-zinc-900/50 dark:to-zinc-900">
        <Command
          command="whoami"
          output={
            <>
              <p className="mb-2">Alicia Esquivel</p>
              <p>PhD Candidate specializing in cybersecurity and cloud computing research</p>
            </>
          }
        />
        <Command
          command="ls ./skills/"
          output={
            <div className="grid grid-cols-2 gap-2">
              <span>📊 data-analysis/</span>
              <span>🔒 cybersecurity/</span>
              <span>☁️ cloud-computing/</span>
              <span>🤖 machine-learning/</span>
              <span>🌐 networking/</span>
              <span>📝 technical-writing/</span>
            </div>
          }
        />
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[#34d399]">$</span>
            <span className="text-[#e2e8f0]">cat research_focus.txt</span>
          </div>
          <div className="pl-6 text-[#94a3b8]">
            AI-driven security for cloud and edge computing environments.
            Developing resilient network architectures and Zero Trust systems.
          </div>
        </div>
      </div>
    </div>
  )
}

export default TerminalCard
