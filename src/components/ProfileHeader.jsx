import { Github, Linkedin, Mail, Download, FileText } from "lucide-react";
import { Button } from "./ui/Button";

const IconLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-105 transform"
  >
    <Icon className="h-5 w-5" />
    <span className="sr-only">{label}</span>
  </a>
);

const ProfileHeader = () => {
  return (
    <div className="space-y-8 text-center md:text-left">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
          Alicia Esquivel m
        </h1>
        <p className="text-base text-muted-foreground font-normal leading-relaxed">
          PhD Candidate • Cybersecurity and Cloud Computing
        </p>
        <div className="flex items-center gap-4 justify-center md:justify-start">
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

      <div className="flex items-center gap-4 justify-center md:justify-start">
        <Button
          variant="default"
          size="sm"
          className="bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 rounded-md px-3 py-1.5 text-sm transition-colors"
          asChild
        >
          <a href="/resume.pdf" download="alicia-esquivel-resume.pdf">
            <Download className="mr-2 h-3.5 w-3.5" />
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
            <FileText className="mr-2 h-3.5 w-3.5" />
            CV
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProfileHeader;
