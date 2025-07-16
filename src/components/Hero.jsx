import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-24">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        PhD Candidate in Computer Science
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl text-center">
        Specializing in Cloud Computing and Cybersecurity
      </p>
      <div className="mt-8 flex items-center space-x-6">
        <a
          href="https://github.com/alicesquivel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="h-6 w-6" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="mailto:your.email@example.com"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail className="h-6 w-6" />
          <span className="sr-only">Email</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
