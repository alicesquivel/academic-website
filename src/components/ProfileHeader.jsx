import React from "react";

// This version replaces all custom CSS classes with Tailwind CSS utility classes.
// This ensures the header respects the centered container from App.jsx.
const ProfileHeader = () => {
  return (
    // Use flexbox to create the main layout.
    // It will stack vertically on small screens and become a row on medium screens and up.
    <header className="flex flex-col md:flex-row items-center justify-between py-6 border-b border-gray-200">
      {/* Left side: Avatar, Name, and Title */}
      <div className="flex items-center mb-4 md:mb-0">
        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold text-gray-600 flex-shrink-0">
          AEM
        </div>
        <div className="ml-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Alicia Esquivel Morel
          </h1>
          <p className="text-md text-gray-600">
            PhD Candidate in Computer Science
          </p>
        </div>
      </div>

      {/* Right side: Social links and buttons */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-3">
          <a href="#" className="text-2xl hover:opacity-75" title="GitHub">
            <span>⚡</span>
          </a>
          <a href="#" className="text-2xl hover:opacity-75" title="LinkedIn">
            <span>💼</span>
          </a>
          <a href="#" className="text-2xl hover:opacity-75" title="Email">
            <span>📧</span>
          </a>
        </div>
        <a
          href="#"
          className="bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          CV
        </a>
        <a
          href="#"
          className="bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          Resume
        </a>
      </div>
    </header>
  );
};

export default ProfileHeader;
