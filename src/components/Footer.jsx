import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-8 border-t border-gray-200 dark:border-gray-800">
      {/* Social Media Links */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
          Let's connect:
        </p>
        <div className="flex items-center gap-x-4">
          {/* X (Twitter) */}
          <a
            href="https://twitter.com/alicesquivel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-200"
            aria-label="Follow on X (Twitter)"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/alicesquivel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:scale-110 transition-all duration-200"
            aria-label="Follow on Instagram"
          >
            <svg
              className="w-5 h-5"
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
            href="https://facebook.com/alicesquivel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-500 hover:scale-110 transition-all duration-200"
            aria-label="Follow on Facebook"
          >
            <svg
              className="w-5 h-5"
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

      {/* Copyright */}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © Last Update July, 2025 | Alicia Esquivel Morel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
