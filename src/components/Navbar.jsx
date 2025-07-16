const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-base font-medium text-gray-900 dark:text-gray-100">Alicia Esquivel</span>
            </a>
          </div>
          <nav className="hidden sm:flex sm:space-x-8">
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
          {/* Mobile menu button */}
          <div className="flex sm:hidden">
            <a
              href="/resume.pdf"
              className="text-[15px] text-gray-700 dark:text-gray-300 px-3 py-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              href="/cv.pdf"
              className="text-[15px] text-gray-700 dark:text-gray-300 px-3 py-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
