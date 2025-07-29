import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div className="text-center sm:text-left pb-8 border-b border-gray-200 dark:border-gray-700">
      {/* Name and Role */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Alicia Esquivel Morel
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Cloud Computing and Cybersecurity
        </p>
      </div>

      {/* Social Icons */}
      <div className="mt-6 flex justify-center sm:justify-start items-center gap-6">
        <a
          href="https://github.com/alicesquivel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://linkedin.com/in/aliciaesquivel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="mailto:ace6qv@missouri.edu"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>

      {/* Resume and CV Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium transition-colors"
        >
          View Resume
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-gray-900 dark:text-gray-100 font-medium transition-colors"
        >
          View CV
        </a>
      </div>
    </div>
  );
};

export default Hero;
