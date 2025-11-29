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
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <span className="text-green-400 font-medium">$</span>
      <span className="text-gray-300 font-medium">{command}</span>
    </div>
    <div className="pl-4 text-green-400 leading-relaxed opacity-90 flex items-start">
      <div className="whitespace-pre overflow-x-auto">{output}</div>
      <span className="inline-block w-2 h-4 ml-1 bg-green-400 animate-pulse" />
    </div>
  </div>
);

const TerminalCard = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800 shadow-md">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/90" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/90" />
          <div className="h-3 w-3 rounded-full bg-green-500/90" />
        </div>
        <div className="ml-auto flex items-center gap-2 text-sm text-gray-400 font-mono">
          <Terminal size={14} className="stroke-current" />
          <span>bash</span>
        </div>
      </div>
      <div className="p-4 font-mono text-sm space-y-3 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent bg-gray-900 text-green-400 leading-relaxed">
        <Command command="echo $USER" output="aliciaesquivel@phd-research" />
        <Command
          command="pwd"
          output="/home/aliciaesquivel/research/cloud-security"
        />
        <Command
          command="git status"
          output={
            <div className="text-green-400">
              On branch main Your branch is up to date with 'origin/main'
              Changes to be committed: new file: zero-trust-architecture.py
              modified: cloud-security-tests.py
            </div>
          }
        />
        <Command
          command="ls -la ~/research/projects/"
          output={
            <pre className="text-green-400">
              {`total 156
drwxr-xr-x  15 alicia research 4.0K Jul 16 10:30 .
drwxr-xr-x   8 alicia research 4.0K Jul 16 10:30 ..
-rw-r--r--   1 alicia research 2.5K Jul 16 10:30 cloud-security-tests.py
-rw-r--r--   1 alicia research 1.8K Jul 16 09:45 zero-trust-architecture.py
-rw-r--r--   1 alicia research 3.2K Jul 15 15:20 ml-security-model.py
drwxr-xr-x   5 alicia research 4.0K Jul 15 14:30 distributed-systems-research/
drwxr-xr-x   7 alicia research 4.0K Jul 14 16:15 edge-computing-security/`}
            </pre>
          }
        />
        <Command
          command="python3 -m pytest tests/"
          output={
            <div className="text-green-400">
              ============================= test session starts
              ============================== platform linux -- Python 3.9.5,
              pytest-6.2.4 collecting ... collected 15 items test_security.py
              .......... [ 66%] test_cloud.py ..... [100%]
              ============================== 15 passed in 2.35s
              ===========================
            </div>
          }
        />
      </div>
    </div>
  );
};

export default TerminalCard;
