const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-t border-zinc-200 dark:border-zinc-800">
      <div className="container text-center">
        <p className="text-sm text-muted-foreground">
          Built by{" "}
          <a
            href="https://github.com/alicesquivel"
            target="_blank"
            rel="noreferrer"
            className="hover:underline transition-colors duration-200"
          >
            Alicia Esquivel
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
