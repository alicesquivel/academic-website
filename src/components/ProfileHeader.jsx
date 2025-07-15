import React from "react";

// This version restores the original visual layout while ensuring it remains centered and responsive.
const ProfileHeader = () => {
  return (
    // On medium screens (md) and up, it's a row. Below that, it stacks.
    <header className="flex flex-col md:flex-row items-center justify-between py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-200 bg-white">
      {/* Left side: Avatar, Name, and Title. */}
      <div className="flex flex-col sm:flex-row items-center mb-4 md:mb-0 text-center sm:text-left">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-700 flex-shrink-0 mb-4 sm:mb-0">
          AEM
        </div>
        <div className="sm:ml-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Alicia Esquivel Morel
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            PhD Candidate in Computer Science
          </p>
        </div>
      </div>

      {/* Right side: Social links and buttons. */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <div className="flex items-center space-x-4 text-gray-500">
          {/* Using SVG for icons for a cleaner look */}
          <a href="#" className="hover:text-gray-900 transition-colors duration-200" title="GitHub">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors duration-200" title="CV">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
          </a>
        </div>
        <a
          href="#"
          className="bg-gray-800 text-white font-semibold px-4 py-2 sm:px-5 sm:py-2 rounded-lg hover:bg-gray-700 text-sm transition-colors duration-200"
        >
          Resume
        </a>
      </div>
    </header>
  );
};

export default ProfileHeader;
