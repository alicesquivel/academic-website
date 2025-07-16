const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm">
      <div className="max-w-2xl mx-auto px-3 sm:px-4">
        <div className="py-2 sm:py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col items-center sm:items-start">
            <a href="/" className="flex items-center">
              <span className="text-base font-medium text-gray-900 dark:text-gray-100">Alicia Esquivel</span>
            </a>
            <span className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">PhD Candidate in Computer Science</span>
          </div>
          <nav className="flex items-center gap-4 mt-3 sm:mt-0">
            <a
              href="/resume.pdf"
              className="text-[15px] text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              href="/cv.pdf"
              className="text-[15px] text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
