const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Alicia Esquivel</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a
              href="/resume.pdf"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              href="/cv.pdf"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
