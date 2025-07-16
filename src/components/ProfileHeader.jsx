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
          className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 text-white hover:scale-102 transition-transform"
          asChild
        >
          <a href="/resume.pdf" download="alicia-esquivel-resume.pdf">
            <Download className="mr-2 h-4 w-4" />
            Resume
          </a>
        </Button>
        <Button
          variant="outline"
          size="default"
          className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-105 transition-transform"
          asChild
        >
          <a href="/cv.pdf" download="alicia-esquivel-cv.pdf">
            <FileText className="mr-2 h-4 w-4" />
            CV
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProfileHeader;
