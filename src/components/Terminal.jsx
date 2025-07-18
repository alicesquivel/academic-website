import React, { useEffect, useRef, useState } from "react";
import { Terminal as XTerm } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { WebLinksAddon } from "xterm-addon-web-links";
import "xterm/css/xterm.css";

// Ensure monospace fonts are loaded with proper fallbacks
const ensureMonospaceFont = () => {
  const style = document.createElement("style");
  style.textContent = `
    .xterm-viewport {
      font-family: monospace !important;
      font-size: 14px !important;
      line-height: 1.2 !important;
      font-variant-ligatures: none !important;
      font-feature-settings: normal !important;
      text-rendering: optimizeSpeed !important;
    }
    
    .xterm-screen {
      font-family: monospace !important;
    }
    
    .xterm-rows {
      font-family: monospace !important;
    }
    
    .xterm-char-measure-element {
      font-family: monospace !important;
    }
  `;
  document.head.appendChild(style);
};

const COMMANDS = {
  help: {
    description: "Show available commands",
    execute: (term, args, flags) => {
      term.writeln("\x1b[1;36m=======================================\x1b[0m");
      term.writeln("\x1b[1;36m           AVAILABLE COMMANDS\x1b[0m");
      term.writeln("\x1b[1;36m=======================================\x1b[0m");
      Object.entries(COMMANDS).forEach(([cmd, info]) => {
        term.writeln(
          `  \x1b[1;33m${cmd.padEnd(12)}\x1b[0m\x1b[37m${
            info.description
          }\x1b[0m`
        );
      });
      term.writeln("");
      term.writeln(
        "\x1b[1;32mTip:\x1b[0m Use Tab for autocompletion, up/down for history"
      );
      term.writeln(
        "\x1b[1;32mTip:\x1b[0m Try typing partial commands and press Tab"
      );
      term.writeln(
        "\x1b[1;32mTip:\x1b[0m Use arrow keys to navigate within the current line"
      );
      if (flags.includes("--verbose") || flags.includes("-v")) {
        term.writeln("");
        term.writeln("\x1b[1;35m* Advanced Features:\x1b[0m");
        term.writeln("  - Command arguments and flags support");
        term.writeln("  - Line navigation with arrow keys");
        term.writeln("  - Ctrl+A/E for line start/end");
        term.writeln("  - Enhanced character support");
      }
    },
  },
  clear: {
    description: "Clear the terminal screen",
    execute: (term, args, flags) => {
      term.clear();
      if (flags.includes("--force") || flags.includes("-f")) {
        term.writeln("\x1b[1;32m* Terminal forcefully cleared\x1b[0m");
      } else {
        term.writeln("\x1b[1;32m* Terminal cleared\x1b[0m");
      }
    },
  },
  about: {
    description: "Display information about me",
    execute: (term, args, flags) => {
      term.writeln("\x1b[1;34m+-------------------------------------+\x1b[0m");
      term.writeln(
        "\x1b[1;34m|\x1b[0m           \x1b[1;37mALICIA ESQUIVEL MOREL\x1b[0m         \x1b[1;34m|\x1b[0m"
      );
      term.writeln("\x1b[1;34m+-------------------------------------+\x1b[0m");
      term.writeln("");
      term.writeln("\x1b[1;35m* PhD Candidate in Computer Science\x1b[0m");
      term.writeln(
        "\x1b[1;35m* Specializing in Cloud Computing & Cybersecurity\x1b[0m"
      );
      term.writeln("");
      term.writeln("\x1b[1;33m* Research Interests:\x1b[0m");
      term.writeln("  - Cloud Security & Zero-Trust Architecture");
      term.writeln("  - Edge Computing & Resource Optimization");
      term.writeln("  - AI Security & Machine Learning");
      term.writeln("  - Distributed Systems & Protocols");

      if (flags.includes("--full") || flags.includes("-f")) {
        term.writeln("");
        term.writeln("\x1b[1;33m* Additional Information:\x1b[0m");
        term.writeln("  - 5+ years of research experience");
        term.writeln("  - Published in top-tier conferences");
        term.writeln("  - Active in open-source community");
        term.writeln("  - Mentor for undergraduate students");
      }
    },
  },
  skills: {
    description: "List technical skills and expertise",
    execute: (term) => {
      term.writeln("\x1b[1;35m* Programming Languages:\x1b[0m");
      term.writeln(
        "  \x1b[1;33m>\x1b[0m Python \x1b[1;33m>\x1b[0m JavaScript \x1b[1;33m>\x1b[0m TypeScript \x1b[1;33m>\x1b[0m Go"
      );
      term.writeln(
        "  \x1b[1;33m>\x1b[0m Java \x1b[1;33m>\x1b[0m C++ \x1b[1;33m>\x1b[0m Rust"
      );
      term.writeln("");
      term.writeln("\x1b[1;35m* Cloud & Infrastructure:\x1b[0m");
      term.writeln(
        "  \x1b[1;36m>\x1b[0m AWS \x1b[1;36m>\x1b[0m Azure \x1b[1;36m>\x1b[0m Docker \x1b[1;36m>\x1b[0m Kubernetes"
      );
      term.writeln("  \x1b[1;36m>\x1b[0m Terraform \x1b[1;36m>\x1b[0m Ansible");
      term.writeln("");
      term.writeln("\x1b[1;35m* AI/ML & Frameworks:\x1b[0m");
      term.writeln(
        "  \x1b[1;32m>\x1b[0m TensorFlow \x1b[1;32m>\x1b[0m PyTorch \x1b[1;32m>\x1b[0m React \x1b[1;32m>\x1b[0m Node.js"
      );
    },
  },
  contact: {
    description: "Show contact information",
    execute: (term) => {
      term.writeln("\x1b[1;34m* CONTACT INFORMATION\x1b[0m");
      term.writeln("\x1b[1;34m---------------------\x1b[0m");
      term.writeln(
        "\x1b[1;32m* GitHub:\x1b[0m   \x1b[4;37mhttps://github.com/alicesquivel\x1b[0m"
      );
      term.writeln(
        "\x1b[1;32m* LinkedIn:\x1b[0m \x1b[4;37mhttps://linkedin.com/in/aliciaesquivel\x1b[0m"
      );
      term.writeln(
        "\x1b[1;32m* Email:\x1b[0m    \x1b[4;37malicia.esquivel@example.com\x1b[0m"
      );
      term.writeln("");
      term.writeln(
        "\x1b[1;33m* Feel free to reach out for collaboration!\x1b[0m"
      );
    },
  },
  projects: {
    description: "Show recent projects and research",
    execute: (term) => {
      term.writeln("\x1b[1;35m* RECENT PROJECTS\x1b[0m");
      term.writeln("\x1b[1;35m-----------------\x1b[0m");
      term.writeln("\x1b[1;33m1. SecureCloud Framework\x1b[0m");
      term.writeln(
        "   Zero-trust security architecture for cloud environments"
      );
      term.writeln("");
      term.writeln("\x1b[1;33m2. EdgeAI Optimizer\x1b[0m");
      term.writeln("   Resource allocation system for edge computing");
      term.writeln("");
      term.writeln("\x1b[1;33m3. DistributedML Platform\x1b[0m");
      term.writeln("   Secure machine learning in distributed systems");
    },
  },
  publications: {
    description: "List recent publications",
    execute: (term) => {
      term.writeln("\x1b[1;34m* RECENT PUBLICATIONS\x1b[0m");
      term.writeln("\x1b[1;34m---------------------\x1b[0m");
      term.writeln(
        '\x1b[1;37m> "Zero-Trust Architecture for Cloud Security"\x1b[0m'
      );
      term.writeln("  \x1b[2;37mIEEE Security & Privacy, 2024\x1b[0m");
      term.writeln("");
      term.writeln('\x1b[1;37m> "Edge Computing Resource Optimization"\x1b[0m');
      term.writeln("  \x1b[2;37mACM Computing Surveys, 2024\x1b[0m");
      term.writeln("");
      term.writeln('\x1b[1;37m> "AI Security in Distributed Systems"\x1b[0m');
      term.writeln(
        "  \x1b[2;37mIEEE Transactions on Dependable Computing, 2023\x1b[0m"
      );
    },
  },
  education: {
    description: "Show educational background",
    execute: (term) => {
      term.writeln("\x1b[1;33m* EDUCATION\x1b[0m");
      term.writeln("\x1b[1;33m-----------\x1b[0m");
      term.writeln(
        "\x1b[1;37mPhD in Computer Science\x1b[0m \x1b[2;37m(In Progress)\x1b[0m"
      );
      term.writeln("Focus: Cloud Computing & Cybersecurity");
      term.writeln("");
      term.writeln(
        "\x1b[1;37mMaster of Science in Computer Science\x1b[0m \x1b[2;37m(2022)\x1b[0m"
      );
      term.writeln('Thesis: "Secure Edge Computing Architectures"');
      term.writeln("");
      term.writeln(
        "\x1b[1;37mBachelor of Science in Computer Engineering\x1b[0m \x1b[2;37m(2020)\x1b[0m"
      );
      term.writeln("Magna Cum Laude");
    },
  },
  date: {
    description: "Display current date and time",
    execute: (term) => {
      const now = new Date();
      term.writeln("\x1b[1;36m* Current Date & Time:\x1b[0m");
      term.writeln(
        `\x1b[1;37m${now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}\x1b[0m`
      );
      term.writeln(`\x1b[1;37m${now.toLocaleTimeString("en-US")}\x1b[0m`);
    },
  },
  joke: {
    description: "Tell a computer science joke",
    execute: (term) => {
      const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "There are only 10 types of people: those who understand binary and those who don't!",
        "Why did the programmer quit his job? He didn't get arrays!",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
        "Why do Java developers wear glasses? Because they can't C#!",
      ];
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      term.writeln("\x1b[1;33m* Here's a joke for you:\x1b[0m");
      term.writeln("");
      term.writeln(`\x1b[1;37m${randomJoke}\x1b[0m`);
    },
  },
  weather: {
    description: "Show current weather (simulated)",
    execute: (term) => {
      const conditions = [
        "Sunny",
        "Partly Cloudy",
        "Rainy",
        "Snowy",
        "Mostly Sunny",
      ];
      const temps = [68, 72, 75, 80, 65, 70, 78];
      const condition =
        conditions[Math.floor(Math.random() * conditions.length)];
      const temp = temps[Math.floor(Math.random() * temps.length)];

      term.writeln("\x1b[1;34m* Current Weather:\x1b[0m");
      term.writeln(`\x1b[1;37m${condition}\x1b[0m`);
      term.writeln(`\x1b[1;37m${temp}°F\x1b[0m`);
      term.writeln("\x1b[2;37m(Simulated data)\x1b[0m");
    },
  },
  test: {
    description: "Test character display",
    execute: (term) => {
      term.writeln("\x1b[1;33m* CHARACTER DISPLAY TEST\x1b[0m");
      term.writeln("\x1b[1;33m-----------------------\x1b[0m");
      term.writeln("Testing problematic characters:");
      term.writeln("C c L l - These should display clearly");
      term.writeln("contact clear help skills");
      term.writeln("");
      term.writeln("Full alphabet test:");
      term.writeln("abcdefghijklmnopqrstuvwxyz");
      term.writeln("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      term.writeln("0123456789");
      term.writeln("!@#$%^&*()_+-=[]{}|;:,.<>?");
      term.writeln("");
      term.writeln(
        "\x1b[1;32m* All characters should be visible and properly spaced\x1b[0m"
      );
    },
  },
};

export default function Terminal() {
  const terminalRef = useRef(null);
  const xtermRef = useRef(null);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentInput, setCurrentInput] = useState("");
  const [inputStartPosition, setInputStartPosition] = useState(0);
  const [cursorPosition, setCursorPosition] = useState(0); // Position within current input
  const [promptSymbol, setPromptSymbol] = useState("$"); // Customizable prompt symbol
  const [isTyping, setIsTyping] = useState(false); // Track typing animation state

  useEffect(() => {
    // Ensure monospace fonts are loaded
    ensureMonospaceFont();

    // Initialize xterm.js
    const term = new XTerm({
      cursorBlink: true,
      fontSize: 14,
      fontFamily: "monospace",
      fontWeight: "normal",
      fontWeightBold: "bold",
      allowTransparency: false,
      convertEol: true,
      disableStdin: false,
      theme: {
        background: "#1a1b26",
        foreground: "#a9b1d6",
        cursor: "#c0caf5",
        selection: "#33467C",
        black: "#32344a",
        blue: "#7aa2f7",
        cyan: "#7dcfff",
        green: "#9ece6a",
        magenta: "#ad8ee6",
        red: "#f7768e",
        white: "#787c99",
        yellow: "#e0af68",
      },
    });

    // Create and attach the fit addon
    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);

    // Add web links addon
    term.loadAddon(new WebLinksAddon());

    // Attach terminal to DOM
    term.open(terminalRef.current);

    // Wait for font to load before fitting
    setTimeout(() => {
      fitAddon.fit();
    }, 100);

    // Store reference to terminal
    xtermRef.current = term;

    // Welcome message
    term.writeln("\x1b[1;34m+--------------------------------------+\x1b[0m");
    term.writeln(
      "\x1b[1;34m|\x1b[0m     \x1b[1;32mWelcome to Interactive Terminal\x1b[0m     \x1b[1;34m|\x1b[0m"
    );
    term.writeln("\x1b[1;34m+--------------------------------------+\x1b[0m");
    term.writeln("");
    term.writeln(
      "\x1b[1;36m* Type \x1b[1;33mhelp\x1b[1;36m to see available commands\x1b[0m"
    );
    term.writeln(
      "\x1b[1;36m* Use Tab for autocompletion, up/down for history\x1b[0m"
    );
    term.writeln(
      "\x1b[1;36m* Use left/right arrows to navigate within the line\x1b[0m"
    );
    term.writeln(
      "\x1b[1;36m* Try commands with flags like \x1b[1;33mhelp --verbose\x1b[1;36m or \x1b[1;33mabout --full\x1b[0m"
    );
    term.writeln("");
    term.write("\x1b[1;32m>\x1b[0m ");

    // Initialize input state
    setInputStartPosition(term.buffer.active.cursorX);
    setCursorPosition(0);

    // Focus the terminal
    term.focus();

    // Process commands with improved parsing
    const processCommand = (input) => {
      const trimmedInput = input.trim();
      if (trimmedInput === "") return;

      // Parse command with arguments and flags
      const parts = trimmedInput.split(/\s+/);
      const command = parts[0].toLowerCase();
      const args = parts.slice(1);

      // Separate flags from regular arguments
      const flags = args.filter((arg) => arg.startsWith("-"));
      const regularArgs = args.filter((arg) => !arg.startsWith("-"));

      // Add to command history
      setCommandHistory((prev) => [...prev, trimmedInput]);
      setHistoryIndex(-1);

      // Find and execute command
      const cmd = COMMANDS[command];
      if (cmd) {
        term.writeln(""); // Add spacing before command output
        cmd.execute(term, regularArgs, flags);
        term.writeln(""); // Add spacing after command output
      } else if (command) {
        term.writeln("");
        term.writeln(
          `\x1b[31m* Command not found: \x1b[1;37m${command}\x1b[0m`
        );
        term.writeln(
          "\x1b[1;33m* Type \x1b[1;36mhelp\x1b[1;33m to see available commands\x1b[0m"
        );
        term.writeln("\x1b[1;33m* Use Tab for autocompletion\x1b[0m");
        term.writeln("");
      }

      // Auto-scroll to bottom and focus cursor
      setTimeout(() => {
        term.scrollToBottom();
        term.focus();
      }, 10);
    };

    // Helper function to reset cursor and input state
    const resetInputState = () => {
      setCurrentInput("");
      setCursorPosition(0);
      setInputStartPosition(term.buffer.active.cursorX);
    };

    // Helper function to update cursor position in terminal
    const updateTerminalCursor = () => {
      const targetCol = inputStartPosition + cursorPosition;
      const currentCol = term.buffer.active.cursorX;
      const diff = targetCol - currentCol;

      if (diff > 0) {
        term.write("\x1b[C".repeat(diff)); // Move cursor right
      } else if (diff < 0) {
        term.write("\x1b[D".repeat(-diff)); // Move cursor left
      }
    };

    // Handle user input
    term.onKey(({ key, domEvent }) => {
      // Prevent default for all special keys
      if (
        ["Tab", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
          domEvent.key
        )
      ) {
        domEvent.preventDefault();
      }

      // Handle special keys first
      if (domEvent.key === "Enter") {
        const input = currentInput;
        term.writeln("");
        if (input.trim()) {
          processCommand(input);
        }
        term.write("\x1b[1;32m>\x1b[0m ");
        resetInputState();
        return;
      }

      if (domEvent.key === "Backspace") {
        if (cursorPosition > 0) {
          // Remove character at cursor position
          const newInput =
            currentInput.slice(0, cursorPosition - 1) +
            currentInput.slice(cursorPosition);
          setCurrentInput(newInput);
          setCursorPosition((prev) => prev - 1);

          // Update terminal display
          term.write("\b \b");
          if (cursorPosition < currentInput.length) {
            // Redraw rest of line if cursor is not at end
            term.write(currentInput.slice(cursorPosition));
            term.write(" \b".repeat(currentInput.length - cursorPosition + 1));
          }
        }
        return;
      }

      if (domEvent.key === "Delete") {
        if (cursorPosition < currentInput.length) {
          // Remove character after cursor position
          const newInput =
            currentInput.slice(0, cursorPosition) +
            currentInput.slice(cursorPosition + 1);
          setCurrentInput(newInput);

          // Update terminal display
          term.write(currentInput.slice(cursorPosition + 1) + " ");
          term.write("\b".repeat(currentInput.length - cursorPosition));
        }
        return;
      }

      if (domEvent.key === "Tab") {
        const partial = currentInput.toLowerCase();
        const matches = Object.keys(COMMANDS).filter((cmd) =>
          cmd.startsWith(partial)
        );

        if (matches.length === 1) {
          // Clear current input
          term.write(
            "\b".repeat(cursorPosition) +
              " ".repeat(currentInput.length) +
              "\b".repeat(currentInput.length)
          );

          // Write completion
          term.write(matches[0]);
          setCurrentInput(matches[0]);
          setCursorPosition(matches[0].length);
        } else if (matches.length > 1) {
          term.writeln("");
          term.writeln("\x1b[1;36m* Available completions:\x1b[0m");
          term.writeln(
            matches.map((cmd) => `\x1b[1;33m${cmd}\x1b[0m`).join("  ")
          );
          term.write("\x1b[1;32m>\x1b[0m " + currentInput);
          updateTerminalCursor();
        } else if (partial && matches.length === 0) {
          // No matches found
          term.write("\x1b[31m\x07\x1b[0m"); // Bell sound + red color
        }
        return;
      }

      // Arrow key navigation within current line
      if (domEvent.key === "ArrowLeft") {
        if (cursorPosition > 0) {
          setCursorPosition((prev) => prev - 1);
          term.write("\x1b[D"); // Move cursor left
        }
        return;
      }

      if (domEvent.key === "ArrowRight") {
        if (cursorPosition < currentInput.length) {
          setCursorPosition((prev) => prev + 1);
          term.write("\x1b[C"); // Move cursor right
        }
        return;
      }

      // Command history navigation
      if (domEvent.key === "ArrowUp") {
        if (historyIndex < commandHistory.length - 1) {
          const newIndex = historyIndex + 1;
          const command = commandHistory[commandHistory.length - 1 - newIndex];

          // Clear current input
          term.write(
            "\b".repeat(cursorPosition) +
              " ".repeat(currentInput.length) +
              "\b".repeat(currentInput.length)
          );

          // Write historical command
          term.write(command);
          setCurrentInput(command);
          setCursorPosition(command.length);
          setHistoryIndex(newIndex);
        }
        return;
      }

      if (domEvent.key === "ArrowDown") {
        if (historyIndex > 0) {
          const newIndex = historyIndex - 1;
          const command = commandHistory[commandHistory.length - 1 - newIndex];

          // Clear current input
          term.write(
            "\b".repeat(cursorPosition) +
              " ".repeat(currentInput.length) +
              "\b".repeat(currentInput.length)
          );

          // Write historical command
          term.write(command);
          setCurrentInput(command);
          setCursorPosition(command.length);
          setHistoryIndex(newIndex);
        } else if (historyIndex === 0) {
          // Clear input when reaching the end of history
          term.write(
            "\b".repeat(cursorPosition) +
              " ".repeat(currentInput.length) +
              "\b".repeat(currentInput.length)
          );
          setCurrentInput("");
          setCursorPosition(0);
          setHistoryIndex(-1);
        }
        return;
      }

      // Handle Home key
      if (domEvent.key === "Home") {
        if (cursorPosition > 0) {
          term.write("\x1b[D".repeat(cursorPosition)); // Move cursor to start
          setCursorPosition(0);
        }
        return;
      }

      // Handle End key
      if (domEvent.key === "End") {
        if (cursorPosition < currentInput.length) {
          term.write("\x1b[C".repeat(currentInput.length - cursorPosition)); // Move cursor to end
          setCursorPosition(currentInput.length);
        }
        return;
      }

      // Handle Ctrl+C - Force clear and reset
      if (domEvent.key === "c" && domEvent.ctrlKey) {
        term.writeln("");
        term.writeln("\x1b[1;31m^C\x1b[0m");
        term.write("\x1b[1;32m>\x1b[0m ");
        resetInputState();
        // Force focus back to terminal
        setTimeout(() => term.focus(), 10);
        return;
      }

      // Handle Ctrl+L - Force clear and reset
      if (domEvent.key === "l" && domEvent.ctrlKey) {
        term.clear();
        term.writeln("\x1b[1;32m* Terminal cleared (Ctrl+L)\x1b[0m");
        term.write("\x1b[1;32m>\x1b[0m ");
        resetInputState();
        // Force focus back to terminal
        setTimeout(() => term.focus(), 10);
        return;
      }

      // Handle Ctrl+A (go to beginning of line)
      if (domEvent.key === "a" && domEvent.ctrlKey) {
        if (cursorPosition > 0) {
          term.write("\x1b[D".repeat(cursorPosition));
          setCursorPosition(0);
        }
        return;
      }

      // Handle Ctrl+E (go to end of line)
      if (domEvent.key === "e" && domEvent.ctrlKey) {
        if (cursorPosition < currentInput.length) {
          term.write("\x1b[C".repeat(currentInput.length - cursorPosition));
          setCursorPosition(currentInput.length);
        }
        return;
      }

      // Handle regular character input - IMPROVED CHARACTER SUPPORT
      if (
        domEvent.key.length === 1 &&
        !domEvent.ctrlKey &&
        !domEvent.altKey &&
        !domEvent.metaKey
      ) {
        const char = domEvent.key;

        // Insert character at cursor position
        const newInput =
          currentInput.slice(0, cursorPosition) +
          char +
          currentInput.slice(cursorPosition);
        setCurrentInput(newInput);

        // Update terminal display
        if (cursorPosition === currentInput.length) {
          // Cursor at end, just append
          term.write(char);
        } else {
          // Cursor in middle, insert and redraw
          term.write(char + currentInput.slice(cursorPosition));
          term.write("\b".repeat(currentInput.length - cursorPosition));
        }

        setCursorPosition((prev) => prev + 1);
      }
    });

    // Handle window resize
    const handleResize = () => {
      fitAddon.fit();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      term.dispose();
    };
  }, []);

  return (
    <div className="w-full h-[450px] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-[#1a1b26] relative group">
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-gray-800 dark:bg-gray-900 px-4 py-2 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div
          className="text-sm text-gray-400"
          style={{ fontFamily: "monospace" }}
        >
          Interactive Terminal
        </div>
        <div
          className="text-xs text-gray-500"
          style={{ fontFamily: "monospace" }}
        >
          {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="w-full h-[calc(100%-40px)]"
        onClick={() => {
          // Ensure terminal stays focused when clicked
          if (xtermRef.current) {
            xtermRef.current.focus();
          }
        }}
      />

      {/* Helpful Tips Overlay */}
      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div
          className="bg-black/80 text-white text-xs px-2 py-1 rounded"
          style={{ fontFamily: "monospace" }}
        >
          Press Tab for completion • Arrow keys to navigate
        </div>
      </div>
    </div>
  );
}
