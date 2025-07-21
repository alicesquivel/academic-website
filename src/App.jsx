import React, { useState } from "react";
import {
  Book,
  Coffee,
  FileText,
  GraduationCap,
  Home,
  Lightbulb,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TabContent from "./components/TabContent";
import ThemeToggle from "./components/ThemeToggle";
import "./index.css";

const tabs = [
  { id: "about", label: "About", icon: Home },
  { id: "research", label: "Research", icon: Lightbulb },
  { id: "publications", label: "Publications", icon: Book },
  { id: "experience", label: "Experience", icon: GraduationCap },
  { id: "fun", label: "Fun Stuff", icon: Coffee },
];

function App() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <main className="flex-1 container max-w-5xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8 px-2 sm:px-4 md:px-6">
          <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between gap-4 sm:gap-6">
            {/* Profile Info */}
            <div className="flex flex-col sm:flex-row md:flex-row items-center md:items-start gap-3 sm:gap-4 md:gap-6 max-w-2xl">
              <img 
                src="/profile.png" 
                alt="Alicia Esquivel Morel" 
                className="h-20 w-20 sm:h-24 sm:w-24 md:h-20 md:w-20 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 shadow-sm shrink-0"
              />
              <div className="text-center sm:text-left md:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
                  Alicia Esquivel Morel
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-1">
                  PhD Candidate in Computer Science
                </p>
                <div className="flex items-center justify-center sm:justify-start md:justify-start flex-wrap gap-3 sm:gap-4 mt-3 sm:mt-4">
                  <a
                    href="https://github.com/alicesquivel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.745.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/aliciaesquivel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:alicia.esquivel@example.com"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col xs:flex-row sm:flex-row items-center gap-2 sm:gap-3 w-full xs:w-auto sm:w-auto">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xs:w-auto sm:w-auto inline-flex items-center justify-center px-3 sm:px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                CV
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xs:w-auto sm:w-auto inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs sm:text-sm font-medium text-white transition-colors"
              >
                <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Resume
              </a>
              <ThemeToggle />
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 sm:mt-8 -mx-3 sm:-mx-4 px-3 sm:px-4 md:mx-0 md:px-0">
            <nav className="relative">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="border-b border-gray-200 dark:border-gray-800">
                  <div className="flex flex-nowrap justify-center gap-3 sm:gap-6 min-w-max">
                    {tabs.map((tab) => {
                      const Icon = tab.icon;
                      const isActive = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`${
                            isActive
                              ? "border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-semibold"
                              : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                          } flex items-center gap-1.5 sm:gap-2 py-3 px-2 sm:px-1 border-b-2 whitespace-nowrap text-xs sm:text-sm transition-all flex-shrink-0`}
                        >
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                          <span className="hidden sm:inline">{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Main Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 sm:p-6"
          >
            <TabContent activeTab={activeTab} />
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <footer className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          © 2025 Alicia Esquivel Morel. All Rights Reserved.
        </footer>
      </main>
    </div>
  );
}

export default App;
