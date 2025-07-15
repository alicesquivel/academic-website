import { Github, Linkedin, Download } from 'lucide-react';
import { Button } from './ui/Button';

const ProfileHeader = () => {
  return (
    <div className="space-y-6 text-center md:text-left">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Alicia Esquivel
        </h1>
        <p className="text-xl text-muted-foreground font-medium">
          PhD Candidate | Cybersecurity and Cloud Computing
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" asChild>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
          <Button variant="default" size="sm" asChild>
            <a href="/cv.pdf" target="_blank" rel="noreferrer">
              <Download className="mr-2 h-4 w-4" />
              CV
            </a>
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/alicesquivel"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader