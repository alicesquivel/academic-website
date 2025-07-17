import React, { useEffect, useRef, useState } from 'react';
import { Terminal as XTerm } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { WebLinksAddon } from 'xterm-addon-web-links';
import 'xterm/css/xterm.css';

const COMMANDS = {
  help: {
    description: 'Show available commands',
    execute: (term) => {
      term.writeln('Available commands:');
      Object.entries(COMMANDS).forEach(([cmd, info]) => {
        term.writeln(`  \x1b[1;34m${cmd.padEnd(12)}\x1b[0m${info.description}`);
      });
    },
  },
  clear: {
    description: 'Clear the terminal screen',
    execute: (term) => term.clear(),
  },
  about: {
    description: 'Display information about me',
    execute: (term) => {
      term.writeln('Alicia Esquivel Morel');
      term.writeln('PhD Candidate in Computer Science');
      term.writeln('Specializing in Cloud Computing and Cybersecurity');
      term.writeln('');
      term.writeln('Research Interests:');
      term.writeln('- Cloud Security');
      term.writeln('- Edge Computing');
      term.writeln('- AI Security');
      term.writeln('- Distributed Systems');
    },
  },
  skills: {
    description: 'List technical skills',
    execute: (term) => {
      term.writeln('\x1b[1;35mProgramming Languages:\x1b[0m');
      term.writeln('Python, JavaScript, TypeScript, Go');
      term.writeln('');
      term.writeln('\x1b[1;35mTechnologies:\x1b[0m');
      term.writeln('React, Node.js, Docker, Kubernetes');
      term.writeln('AWS, Azure, TensorFlow, PyTorch');
    },
  },
  contact: {
    description: 'Show contact information',
    execute: (term) => {
      term.writeln('GitHub:  https://github.com/alicesquivel');
      term.writeln('LinkedIn: https://linkedin.com/in/aliciaesquivel');
      term.writeln('Email:   alicia.esquivel@example.com');
    },
  },
  date: {
    description: 'Display current date and time',
    execute: (term) => {
      term.writeln(new Date().toLocaleString());
    },
  },
};

export default function Terminal() {
  const terminalRef = useRef(null);
  const xtermRef = useRef(null);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentInput, setCurrentInput] = useState('');
  const [inputStartPosition, setInputStartPosition] = useState(0);

  useEffect(() => {
    // Initialize xterm.js
    const term = new XTerm({
      cursorBlink: true,
      fontSize: 14,
      fontFamily: 'JetBrains Mono, Menlo, monospace',
      theme: {
        background: '#1a1b26',
        foreground: '#a9b1d6',
        cursor: '#c0caf5',
        selection: '#33467C',
        black: '#32344a',
        blue: '#7aa2f7',
        cyan: '#7dcfff',
        green: '#9ece6a',
        magenta: '#ad8ee6',
        red: '#f7768e',
        white: '#787c99',
        yellow: '#e0af68',
      },
    });

    // Create and attach the fit addon
    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    
    // Add web links addon
    term.loadAddon(new WebLinksAddon());

    // Attach terminal to DOM
    term.open(terminalRef.current);
    fitAddon.fit();

    // Store reference to terminal
    xtermRef.current = term;

    // Welcome message
    term.writeln('\x1b[1;34m╭──────────────────────────────────────╮\x1b[0m');
    term.writeln('\x1b[1;34m│\x1b[0m     \x1b[1;32mWelcome to Interactive Terminal\x1b[0m     \x1b[1;34m│\x1b[0m');
    term.writeln('\x1b[1;34m╰──────────────────────────────────────╯\x1b[0m');
    term.writeln('');
    term.write('\x1b[32m➜\x1b[0m ');

    // Process commands
    const processCommand = (input) => {
      const command = input.trim().toLowerCase();
      
      if (command === '') return;
      
      // Add to command history
      setCommandHistory(prev => [...prev, command]);
      setHistoryIndex(-1);
      
      // Find and execute command
      const cmd = COMMANDS[command];
      if (cmd) {
        cmd.execute(term);
      } else {
        term.writeln(`\x1b[31mCommand not found: ${command}\x1b[0m`);
        term.writeln('Type \x1b[1;34mhelp\x1b[0m for available commands');
      }
    };

    // Handle user input
    term.onKey(({ key, domEvent }) => {
      // Store cursor position after prompt
      const promptLength = 2; // Length of "➜ "
      
      switch (domEvent.keyCode) {
        case 13: // Enter
          const input = currentInput;
          term.writeln('');
          processCommand(input);
          setCurrentInput('');
          term.write('\x1b[32m➜\x1b[0m ');
          setInputStartPosition(term.buffer.active.cursorX + promptLength);
          break;
          
        case 8: // Backspace
          if (term.buffer.active.cursorX > inputStartPosition) {
            term.write('\b \b');
            setCurrentInput(prev => prev.slice(0, -1));
          }
          break;
          
        case 9: // Tab (Autocomplete)
          domEvent.preventDefault();
          const partial = currentInput.toLowerCase();
          const matches = Object.keys(COMMANDS).filter(cmd => cmd.startsWith(partial));
          
          if (matches.length === 1) {
            // Clear current input
            const toErase = currentInput.length;
            term.write('\b'.repeat(toErase) + ' '.repeat(toErase) + '\b'.repeat(toErase));
            
            // Write completion
            term.write(matches[0]);
            setCurrentInput(matches[0]);
          } else if (matches.length > 1) {
            term.writeln('');
            term.writeln(matches.join('  '));
            term.write('\x1b[32m➜\x1b[0m ' + currentInput);
          }
          break;
          
        case 38: // Up arrow
          if (historyIndex < commandHistory.length - 1) {
            const newIndex = historyIndex + 1;
            const command = commandHistory[commandHistory.length - 1 - newIndex];
            
            // Clear current input
            const toErase = currentInput.length;
            term.write('\b'.repeat(toErase) + ' '.repeat(toErase) + '\b'.repeat(toErase));
            
            // Write historical command
            term.write(command);
            setCurrentInput(command);
            setHistoryIndex(newIndex);
          }
          break;
          
        case 40: // Down arrow
          if (historyIndex > 0) {
            const newIndex = historyIndex - 1;
            const command = commandHistory[commandHistory.length - 1 - newIndex];
            
            // Clear current input
            const toErase = currentInput.length;
            term.write('\b'.repeat(toErase) + ' '.repeat(toErase) + '\b'.repeat(toErase));
            
            // Write historical command
            term.write(command);
            setCurrentInput(command);
            setHistoryIndex(newIndex);
          } else if (historyIndex === 0) {
            // Clear input when reaching the end of history
            const toErase = currentInput.length;
            term.write('\b'.repeat(toErase) + ' '.repeat(toErase) + '\b'.repeat(toErase));
            setCurrentInput('');
            setHistoryIndex(-1);
          }
          break;
          
        default:
          // Print other characters
          if (key.length === 1) {
            term.write(key);
            setCurrentInput(prev => prev + key);
          }
          break;
      }
    });

    // Handle window resize
    const handleResize = () => {
      fitAddon.fit();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      term.dispose();
    };
  }, []);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
      <div ref={terminalRef} className="w-full h-full" />
    </div>
  );
}
