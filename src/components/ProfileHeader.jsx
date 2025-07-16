import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from './ui/Button';

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
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900/90 to-zinc-900 dark:from-white dark:to-white/80">
          Alicia Esquivel
        </h1>
        <p className="text-xl text-muted-foreground font-medium leading-relaxed">
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
        <Button variant="outline" size="default" asChild>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <Download className="mr-2 h-4 w-4" />
            Resume
          </a>
        </Button>
        <Button variant="default" size="default" asChild>
          <a href="/cv.pdf" target="_blank" rel="noreferrer">
            <Download className="mr-2 h-4 w-4" />
            CV
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProfileHeader;