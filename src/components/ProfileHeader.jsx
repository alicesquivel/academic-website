import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/Button";

const IconLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
  >
    <Icon className="h-5 w-5" />
    <span className="text-sm">{label}</span>
  </a>
);

const ProfileHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <h1 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            Alicia Esquivel m
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400">
            PhD Candidate • Cybersecurity and Cloud Computing
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <IconLink
            href="https://github.com/alicesquivel"
            icon={Github}
            label="GitHub"
          />
          <IconLink
            href="https://linkedin.com/in/your-linkedin"
            icon={Linkedin}
            label="LinkedIn"
          />
          <IconLink
            href="mailto:your.email@example.com"
            icon={Mail}
            label="Email"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="default"
          size="sm"
          className="bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 rounded-md px-3 py-1.5 text-sm transition-colors"
          asChild
        >
          <a href="/resume.pdf" download="alicia-esquivel-resume.pdf">
            Resume
          </a>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-white dark:bg-transparent border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md px-3 py-1.5 text-sm transition-colors"
          asChild
        >
          <a href="/cv.pdf" download="alicia-esquivel-cv.pdf">
            CV
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProfileHeader;
