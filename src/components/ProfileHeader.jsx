import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/Button";

const IconLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-1 text-gray-600 hover:text-slate-700 dark:text-gray-400 dark:hover:text-slate-300 transition-colors"
  >
    <Icon className="h-5 w-5" />
    <span className="text-sm">{label}</span>
  </a>
);

const ProfileHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-4">
      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <h1 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            Alicia Esquivel Morel
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400">
            PhD Candidate • Cloud Computing and Cybersecurity
          </p>
        </div>

        <div className="flex items-center gap-4">
          <IconLink
            href="https://github.com/alicesquivel"
            icon={Github}
            label="GitHub"
          />
          <IconLink
            href="https://www.linkedin.com/in/alicesquivel/"
            icon={Linkedin}
            label="LinkedIn"
          />
          <IconLink
            href="mailto:ace6qv@missouri.edu"
            icon={Mail}
            label="Email"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="default"
          size="sm"
          className="bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 rounded-md px-3 py-1.5 text-sm transition-colors"
          asChild
        >
          <a href="/resume.pdf" download="alicia-esquivel-resume.pdf">
            Resume
          </a>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-white dark:bg-transparent border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md px-3 py-1.5 text-sm transition-colors"
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
