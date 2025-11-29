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
      font-size: 10px !important;
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

// Command aliases mapping
const COMMAND_ALIASES = {
  cls: "clear",
  dir: "help",
  ls: "help",
  info: "about",
  whoami: "about",
  skills: "skills",
  resume: "education",
  cv: "education",
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
      term.writeln("\x1b[1;35m* Command Aliases:\x1b[0m");
      term.writeln(
        "  \x1b[1;33mcls\x1b[0m → clear    \x1b[1;33mls\x1b[0m → help     \x1b[1;33mwhoami\x1b[0m → about"
      );
      term.writeln(
        "  \x1b[1;33mdir\x1b[0m → help     \x1b[1;33mresume\x1b[0m → education"
      );
      term.writeln("");
      if (flags.includes("--verbose") || flags.includes("-v")) {
        term.writeln("");
        term.writeln("\x1b[1;35m* Advanced Features:\x1b[0m");
        term.writeln("  - Command arguments and flags support");
        term.writeln("  - Line navigation with arrow keys");
        term.writeln("  - Ctrl+A/E for line start/end");
        term.writeln("  - Enhanced character support");
        term.writeln("  - Typing animations for select commands");
        term.writeln("  - Customizable prompt symbol");
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
    execute: async (term, args, flags, typeText) => {
      const lines = [
        "\x1b[1;34m+-------------------------------------+\x1b[0m",
        "\x1b[1;34m|\x1b[0m           \x1b[1;37mALICIA ESQUIVEL MOREL\x1b[0m         \x1b[1;34m|\x1b[0m",
        "\x1b[1;34m+-------------------------------------+\x1b[0m",
        "",
        "\x1b[1;35m* PhD Candidate in Computer Science\x1b[0m",
        "\x1b[1;35m* Specializing in Cloud Computing & Cybersecurity\x1b[0m",
        "",
        "\x1b[1;33m* Research Interests:\x1b[0m",
        "  - Cloud Security & Zero-Trust Architecture",
        "  - Edge Computing & Resource Optimization",
        "  - AI Security & Machine Learning",
        "  - Distributed Systems & Protocols",
      ];

      if (flags.includes("--full") || flags.includes("-f")) {
        lines.push("");
        lines.push("\x1b[1;33m* Additional Information:\x1b[0m");
        lines.push("  - 5+ years of research experience");
        lines.push("  - Published in top-tier conferences");
        lines.push("  - Active in open-source community");
        lines.push("  - Mentor for undergraduate students");
      }

      // Use typing animation for about command
      if (typeText) {
        await typeText(lines, 30); // 30ms delay between characters
      } else {
        lines.forEach((line) => term.writeln(line));
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
  joke: {
    description: "Tell a computer science joke",
    execute: async (term, args, flags, typeText) => {
      const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "There are only 10 types of people: those who understand binary and those who don't!",
        "Why did the programmer quit his job? He didn't get arrays!",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
        "Why do Java developers wear glasses? Because they can't C#!",
      ];
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

      const lines = [
        "\x1b[1;33m* Here's a joke for you:\x1b[0m",
        "",
        `\x1b[1;37m${randomJoke}\x1b[0m`,
      ];

      // Use typing animation for jokes
      if (typeText) {
        await typeText(lines, 50); // 50ms delay for comedic effect
      } else {
        lines.forEach((line) => term.writeln(line));
      }
    },
  },
};

export default function Terminal() {
  const terminalRef = useRef(null);
  const xtermRef = useRef(null);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [promptSymbol, setPromptSymbol] = useState("$"); // Customizable prompt symbol
  const [isTyping, setIsTyping] = useState(false); // Track typing animation state

  // Local synchronous input buffer (not React state)
  let inputBuffer = "";
  let cursorPosition = 0;

  useEffect(() => {
    // Ensure monospace fonts are loaded
    ensureMonospaceFont();

    // Wait for the DOM element to be available
    if (!terminalRef.current) {
      console.warn("Terminal container not available");
      return;
    }

    // Initialize xterm.js
    const term = new XTerm({
      cursorBlink: true,
      fontSize: 10,
      fontFamily: "monospace",
      fontWeight: "normal",
      fontWeightBold: "bold",
      allowTransparency: false,
      convertEol: true,
      disableStdin: false,
      rows: 12,
      cols: 50,
      scrollback: 100,
      wordSeparator: ' ',
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
    if (terminalRef.current) {
      term.open(terminalRef.current);
    }

    // Store reference to terminal
    xtermRef.current = term;

    // Safe fit function with validation and timing
    const safeFit = () => {
      if (!term || !terminalRef.current || !fitAddon) return;

      // Check if terminal is visible and has dimensions
      const rect = terminalRef.current.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        // Terminal not visible yet, retry after a delay
        setTimeout(safeFit, 100);
        return;
      }

      // Additional check: ensure terminal has buffer and is properly initialized
      if (!term.buffer || !term.buffer.active) {
        setTimeout(safeFit, 50);
        return;
      }

      try {
        // Use requestAnimationFrame for smoother timing
        requestAnimationFrame(() => {
          try {
            fitAddon.fit();
          } catch (error) {
            console.warn("Terminal fit failed:", error);
            // Retry once more after a longer delay
            setTimeout(() => {
              try {
                if (terminalRef.current?.getBoundingClientRect().width > 0) {
                  fitAddon.fit();
                }
              } catch (retryError) {
                console.warn("Terminal fit retry failed:", retryError);
              }
            }, 300);
          }
        });
      } catch (error) {
        console.warn("Terminal fit preparation failed:", error);
      }
    };

    // Wait for DOM to be ready and fonts to load before fitting
    const initializeTerminal = async () => {
      // Wait for next tick to ensure DOM is ready
      await new Promise((resolve) => setTimeout(resolve, 0));

      // Wait for fonts to load
      if (document.fonts && document.fonts.ready) {
        try {
          await document.fonts.ready;
        } catch (e) {
          console.warn("Font loading check failed:", e);
        }
      }

      // Use multiple timing strategies for better reliability
      setTimeout(safeFit, 100); // Initial attempt
      setTimeout(safeFit, 250); // Fallback attempt

      // Also try with requestAnimationFrame
      requestAnimationFrame(() => {
        setTimeout(safeFit, 50);
      });
    };

    initializeTerminal();

    // Helper function to write prompt
    const writePrompt = () => {
      term.write(`\x1b[1;32m${promptSymbol}\x1b[0m `);
    };

    // Helper function to reset cursor and input state
    const resetInputState = () => {
      inputBuffer = "";
      cursorPosition = 0;
    };

    // Helper function to update cursor position in terminal
    const updateTerminalCursor = () => {
      if (!term.buffer || !term.buffer.active) return;

      const promptLength = promptSymbol.length + 1; // +1 for space after prompt
      const targetCol = promptLength + cursorPosition;
      const currentCol = term.buffer.active.cursorX;
      const diff = targetCol - currentCol;

      if (diff > 0) {
        term.write("\x1b[C".repeat(diff)); // Move cursor right
      } else if (diff < 0) {
        term.write("\x1b[D".repeat(-diff)); // Move cursor left
      }
    };

    // Welcome message - only show after terminal is ready
    const showWelcomeMessage = () => {
      if (!term || !terminalRef.current) return;

      // Double-check terminal is ready and visible
      const rect = terminalRef.current.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        setTimeout(showWelcomeMessage, 100);
        return;
      }

      
      term.writeln(
        "\x1b[1;36m* Type \x1b[1;33mhelp\x1b[1;36m to see available commands\x1b[0m"
      );
      term.writeln(
        "\x1b[1;36m* Try commands with flags like \x1b[1;33mhelp --verbose\x1b[1;36m or \x1b[1;33mabout --full\x1b[0m"
      );
      term.writeln("");
      writePrompt();

      // Initialize input state
      resetInputState();

      // Focus the terminal
      term.focus();
    };

    // Show welcome message after terminal is fully initialized
    setTimeout(showWelcomeMessage, 250); // Typing animation function
    const typeText = async (lines, delay = 50) => {
      setIsTyping(true);

      for (const line of lines) {
        if (line === "") {
          term.writeln("");
          await new Promise((resolve) => setTimeout(resolve, delay * 2));
          continue;
        }

        // Type each character with delay
        for (let i = 0; i < line.length; i++) {
          term.write(line[i]);
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
        term.writeln("");
        await new Promise((resolve) => setTimeout(resolve, delay * 3));
      }

      setIsTyping(false);
    };

    // Process commands with improved parsing
    const processCommand = async (input) => {
      const trimmedInput = input.trim();
      if (trimmedInput === "") return;

      // Parse command with arguments and flags
      const parts = trimmedInput.split(/\s+/);
      let command = parts[0].toLowerCase();
      const args = parts.slice(1);

      // Check for command aliases
      if (COMMAND_ALIASES[command]) {
        command = COMMAND_ALIASES[command];
      }

      // Separate flags from regular arguments
      const flags = args.filter((arg) => arg.startsWith("-"));
      const regularArgs = args.filter((arg) => !arg.startsWith("-"));

      // Debug logging for flags (optional)
      if (flags.length > 0) {
        console.log(
          `Command: ${command}, Flags: ${flags.join(
            ", "
          )}, Args: ${regularArgs.join(", ")}`
        );
      }

      // Add to command history
      setCommandHistory((prev) => [...prev, trimmedInput]);
      setHistoryIndex(-1);

      // Find and execute command
      const cmd = COMMANDS[command];
      if (cmd) {
        term.writeln(""); // Add spacing before command output

        // Check if command supports typing animation
        if (cmd.execute.constructor.name === "AsyncFunction") {
          await cmd.execute(
            term,
            regularArgs,
            flags,
            typeText,
            setPromptSymbol
          );
        } else {
          cmd.execute(term, regularArgs, flags, typeText, setPromptSymbol);
        }

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

      // Show new prompt after command execution
      writePrompt();
      resetInputState();

      // Auto-scroll to bottom and focus cursor
      setTimeout(() => {
        term.scrollToBottom();
        term.focus();
      }, 10);
    };

    // Handle user input with synchronous buffer
    term.onKey(({ key, domEvent }) => {
      // Don't process input during typing animation
      if (isTyping) return;

      // Prevent default for all special keys
      if (
        [
          "Tab",
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
          "Enter",
          "Backspace",
          "Delete",
        ].includes(domEvent.key)
      ) {
        domEvent.preventDefault();
      }

      // Handle Enter key
      if (domEvent.key === "Enter") {
        term.writeln("");
        if (inputBuffer.trim()) {
          processCommand(inputBuffer.trim());
        } else {
          writePrompt();
          resetInputState();
        }
        return;
      }

      // Handle Backspace
      if (domEvent.key === "Backspace") {
        if (cursorPosition > 0) {
          // Remove character from buffer
          inputBuffer =
            inputBuffer.slice(0, cursorPosition - 1) +
            inputBuffer.slice(cursorPosition);
          cursorPosition--;

          // Update terminal display
          term.write("\b \b");
          if (cursorPosition < inputBuffer.length) {
            // Redraw rest of line if cursor is not at end
            term.write(inputBuffer.slice(cursorPosition));
            term.write(" \b".repeat(inputBuffer.length - cursorPosition + 1));
          }
        }
        return;
      }

      // Handle Delete
      if (domEvent.key === "Delete") {
        if (cursorPosition < inputBuffer.length) {
          // Remove character after cursor
          inputBuffer =
            inputBuffer.slice(0, cursorPosition) +
            inputBuffer.slice(cursorPosition + 1);

          // Update terminal display
          term.write(inputBuffer.slice(cursorPosition) + " ");
          term.write("\b".repeat(inputBuffer.length - cursorPosition + 1));
        }
        return;
      }

      // Handle Tab for autocompletion
      if (domEvent.key === "Tab") {
        const partial = inputBuffer.toLowerCase();
        // Include aliases in autocomplete
        const allCommands = [
          ...Object.keys(COMMANDS),
          ...Object.keys(COMMAND_ALIASES),
        ];
        const matches = allCommands.filter((cmd) => cmd.startsWith(partial));

        if (matches.length === 1) {
          // Clear current input
          term.write(
            "\b".repeat(cursorPosition) +
              " ".repeat(inputBuffer.length) +
              "\b".repeat(inputBuffer.length)
          );

          // Write completion
          term.write(matches[0]);
          inputBuffer = matches[0];
          cursorPosition = matches[0].length;
        } else if (matches.length > 1) {
          term.writeln("");
          term.writeln("\x1b[1;36m* Available completions:\x1b[0m");
          term.writeln(
            matches.map((cmd) => `\x1b[1;33m${cmd}\x1b[0m`).join("  ")
          );
          writePrompt();
          term.write(inputBuffer);
          updateTerminalCursor();
        } else if (partial && matches.length === 0) {
          // No matches found - bell sound
          term.write("\x07");
        }
        return;
      }

      // Arrow key navigation within current line
      if (domEvent.key === "ArrowLeft") {
        if (cursorPosition > 0) {
          cursorPosition--;
          term.write("\x1b[D"); // Move cursor left
        }
        return;
      }

      if (domEvent.key === "ArrowRight") {
        if (cursorPosition < inputBuffer.length) {
          cursorPosition++;
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
              " ".repeat(inputBuffer.length) +
              "\b".repeat(inputBuffer.length)
          );

          // Write historical command
          term.write(command);
          inputBuffer = command;
          cursorPosition = command.length;
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
              " ".repeat(inputBuffer.length) +
              "\b".repeat(inputBuffer.length)
          );

          // Write historical command
          term.write(command);
          inputBuffer = command;
          cursorPosition = command.length;
          setHistoryIndex(newIndex);
        } else if (historyIndex === 0) {
          // Clear input when reaching the end of history
          term.write(
            "\b".repeat(cursorPosition) +
              " ".repeat(inputBuffer.length) +
              "\b".repeat(inputBuffer.length)
          );
          inputBuffer = "";
          cursorPosition = 0;
          setHistoryIndex(-1);
        }
        return;
      }

      // Handle Home key
      if (domEvent.key === "Home") {
        if (cursorPosition > 0) {
          term.write("\x1b[D".repeat(cursorPosition)); // Move cursor to start
          cursorPosition = 0;
        }
        return;
      }

      // Handle End key
      if (domEvent.key === "End") {
        if (cursorPosition < inputBuffer.length) {
          term.write("\x1b[C".repeat(inputBuffer.length - cursorPosition)); // Move cursor to end
          cursorPosition = inputBuffer.length;
        }
        return;
      }

      // Handle Ctrl+C - Force clear and reset
      if (domEvent.key === "c" && domEvent.ctrlKey) {
        term.writeln("");
        term.writeln("\x1b[1;31m^C\x1b[0m");
        writePrompt();
        resetInputState();
        setTimeout(() => term.focus(), 10);
        return;
      }

      // Handle Ctrl+L - Clear screen
      if (domEvent.key === "l" && domEvent.ctrlKey) {
        term.clear();
        writePrompt();
        resetInputState();
        setTimeout(() => term.focus(), 10);
        return;
      }

      // Handle Ctrl+A (go to beginning of line)
      if (domEvent.key === "a" && domEvent.ctrlKey) {
        if (cursorPosition > 0) {
          term.write("\x1b[D".repeat(cursorPosition));
          cursorPosition = 0;
        }
        return;
      }

      // Handle Ctrl+E (go to end of line)
      if (domEvent.key === "e" && domEvent.ctrlKey) {
        if (cursorPosition < inputBuffer.length) {
          term.write("\x1b[C".repeat(inputBuffer.length - cursorPosition));
          cursorPosition = inputBuffer.length;
        }
        return;
      }

      // Handle regular character input
      if (
        domEvent.key.length === 1 &&
        !domEvent.ctrlKey &&
        !domEvent.altKey &&
        !domEvent.metaKey
      ) {
        const char = domEvent.key;

        // Insert character at cursor position in buffer
        inputBuffer =
          inputBuffer.slice(0, cursorPosition) +
          char +
          inputBuffer.slice(cursorPosition);

        // Update terminal display
        if (cursorPosition === inputBuffer.length - 1) {
          // Cursor at end, just append
          term.write(char);
        } else {
          // Cursor in middle, insert and redraw
          term.write(char + inputBuffer.slice(cursorPosition + 1));
          term.write("\b".repeat(inputBuffer.length - cursorPosition - 1));
        }

        cursorPosition++;
      }
    });

    // Handle window resize with debouncing
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        safeFit();
      }, 150); // Slightly longer delay for window resize
    };

    window.addEventListener("resize", handleResize);

    // Use ResizeObserver for more precise resize detection
    let resizeObserver;
    if (terminalRef.current && window.ResizeObserver) {
      resizeObserver = new ResizeObserver((entries) => {
        clearTimeout(resizeTimeout);

        // Check if the observed element has meaningful dimensions
        const entry = entries[0];
        if (
          entry &&
          entry.contentRect.width > 0 &&
          entry.contentRect.height > 0
        ) {
          resizeTimeout = setTimeout(() => {
            safeFit();
          }, 100);
        }
      });

      resizeObserver.observe(terminalRef.current);
    }

    // Also observe parent container changes (for responsive layouts)
    let parentObserver;
    if (terminalRef.current?.parentElement && window.ResizeObserver) {
      parentObserver = new ResizeObserver((entries) => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          safeFit();
        }, 100);
      });

      parentObserver.observe(terminalRef.current.parentElement);
    }

    // Use IntersectionObserver to detect when terminal becomes visible
    let intersectionObserver;
    if (terminalRef.current && window.IntersectionObserver) {
      intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0) {
              // Terminal became visible, ensure it's properly fitted
              setTimeout(safeFit, 100);
            }
          });
        },
        { threshold: 0.1 }
      );

      intersectionObserver.observe(terminalRef.current);
    }

    // Cleanup
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (parentObserver) {
        parentObserver.disconnect();
      }
      if (intersectionObserver) {
        intersectionObserver.disconnect();
      }
      if (term) {
        term.dispose();
      }
    };
  }, []);

  return (
    <div className="w-full min-w-[300px] sm:min-w-[360px] max-w-[420px] mx-auto h-[240px] max-h-[240px] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-[#1a1b26] relative group shadow-lg">
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="text-sm text-gray-400"
            style={{ fontFamily: "monospace" }}
          >
            {">"}_bash
          </div>
          <div
            className="text-xs text-gray-500"
            style={{ fontFamily: "monospace" }}
          >
            {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="w-full h-[180px] p-4 overflow-x-hidden overflow-y-auto whitespace-pre-wrap break-words"
        style={{ 
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          fontSize: '10px',
          fontFamily: 'monospace'
        }}
        onClick={() => {
          // Ensure terminal stays focused when clicked
          if (xtermRef.current) {
            xtermRef.current.focus();
          }
        }}
      />
    </div>
  );
}
