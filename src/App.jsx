import React, { useState } from "react";
import {
  Book,
  Coffee,
  FileText,
  GraduationCap,
  Home,
  Lightbulb,
  Mail,
  MapPin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TabContent from "./components/TabContent";
import ThemeToggle from "./components/ThemeToggle";
import "./index.css";

const tabs = [
  { id: "about", label: "About", icon: Home },
  { id: "experience", label: "Experience", icon: GraduationCap },
  { id: "research", label: "Research", icon: Lightbulb },
  { id: "publications", label: "Publications", icon: Book },
  { id: "fun", label: "Fun Stuff", icon: Coffee },
];

function App() {
  const [activeTab, setActiveTab] = useState("about");

  // Add event listener for navigation from Experience to Research tab
  React.useEffect(() => {
    const handleNavigateToTab = (event) => {
      setActiveTab(event.detail);
    };

    window.addEventListener("navigateToTab", handleNavigateToTab);
    return () =>
      window.removeEventListener("navigateToTab", handleNavigateToTab);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <main className="flex-1 container max-w-5xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
        {/* Header Section */}
        <div className="mb-10 sm:mb-12 px-2 sm:px-4 md:px-6">
          <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between gap-6 sm:gap-8">
            {/* Profile Info */}
            <div className="flex flex-col sm:flex-row md:flex-row items-center md:items-start gap-4 sm:gap-6 md:gap-8 max-w-2xl">
              <img
                src="/profile.png"
                alt="Alicia Esquivel Morel"
                className="h-24 w-24 sm:h-28 sm:w-28 md:h-24 md:w-24 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 shadow-md shrink-0"
              />
              <div className="text-center sm:text-left md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 font-sans tracking-tight">
                  Alicia Esquivel Morel
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mt-2 font-body">
                  PhD Candidate • Cloud Computing and Cybersecurity
                </p>
                <div className="flex items-center justify-center sm:justify-start md:justify-start gap-2 mt-1">
                  <MapPin className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    United States
                  </span>
                </div>
                <div className="flex items-center justify-center sm:justify-start md:justify-start flex-wrap gap-4 sm:gap-5 mt-4 sm:mt-5">
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
                    href="https://linkedin.com/in/alicesquivel"
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
                    href="mailto:ace6qv@missouri.edu"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=2-7cgFsAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                    title="Google Scholar"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                    </svg>
                  </a>
                  <a
                    href="https://orcid.org/0000-0002-1766-5370"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                    title="ORCID"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.744-1.344 3.744-3.722 0-2.016-1.178-3.722-3.744-3.722h-2.297z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col xs:flex-row sm:flex-row items-center gap-3 sm:gap-4 w-full xs:w-auto sm:w-auto">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xs:w-auto sm:w-auto inline-flex items-center justify-center px-4 sm:px-5 py-2.5 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md font-body"
              >
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                CV
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xs:w-auto sm:w-auto inline-flex items-center justify-center px-4 sm:px-5 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm sm:text-base font-medium text-white transition-all duration-200 shadow-md hover:shadow-lg font-body"
              >
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Resume
              </a>
              <ThemeToggle />
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-10 sm:mt-12 -mx-3 sm:-mx-4 px-3 sm:px-4 md:mx-0 md:px-0">
            <nav className="relative">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="border-b border-gray-200 dark:border-gray-800">
                  <div className="flex flex-nowrap justify-center gap-4 sm:gap-8 min-w-max">
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
                          } flex items-center gap-2 sm:gap-3 py-4 px-3 sm:px-1 border-b-2 whitespace-nowrap text-sm sm:text-base transition-all duration-200 flex-shrink-0 font-body`}
                        >
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                          <span className="hidden sm:inline font-medium">
                            {tab.label}
                          </span>
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
            className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sm:p-8 lg:p-10"
          >
            <TabContent activeTab={activeTab} />
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <footer className="mt-12 sm:mt-16 border-t border-gray-200 dark:border-gray-700 pt-8 sm:pt-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-body">
              © 2025 Alicia Esquivel Morel. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              {/* X (Twitter) */}
              <a
                href="https://x.com/alicesquivelpy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Follow on X (Twitter)"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/alicesquivelpy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                aria-label="Follow on Instagram"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.017 0C8.396 0 7.929.01 6.71.048 5.498.087 4.79.167 4.204.277c-.63.12-1.092.265-1.487.393a6.601 6.601 0 0 0-1.038.729c-.324.295-.596.653-.729 1.038-.128.395-.273.857-.393 1.487C.167 4.79.087 5.498.048 6.71.01 7.929 0 8.396 0 12.017c0 3.624.01 4.09.048 5.303.039 1.212.12 1.92.23 2.506.12.63.265 1.092.393 1.487.133.385.405.743.729 1.038.295.324.653.596 1.038.729.395.128.857.273 1.487.393 1.212.04 1.92.12 2.506.23.586.04 1.053.048 5.303.048 3.624 0 4.09-.01 5.303-.048 1.212-.039 1.92-.12 2.506-.23.63-.12 1.092-.265 1.487-.393a6.618 6.618 0 0 0 1.038-.729c.324-.295.596-.653.729-1.038.128-.395.273-.857.393-1.487.04-.586.048-1.053.048-5.303 0-3.624-.01-4.09-.048-5.303-.039-1.212-.12-1.92-.23-2.506-.12-.63-.265-1.092-.393-1.487a6.618 6.618 0 0 0-.729-1.038 6.601 6.601 0 0 0-1.038-.729c-.395-.128-.857-.273-1.487-.393C19.207.167 18.499.087 17.287.048 16.068.01 15.601 0 11.977 0h.04Zm.963 5.4a6.615 6.615 0 1 1 0 13.23 6.615 6.615 0 0 1 0-13.23Zm0 2.25a4.365 4.365 0 1 0 0 8.73 4.365 4.365 0 0 0 0-8.73Zm6.988-2.039a1.548 1.548 0 1 1-3.097 0 1.548 1.548 0 0 1 3.097 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/alicesquivel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
                aria-label="Follow on Facebook"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
