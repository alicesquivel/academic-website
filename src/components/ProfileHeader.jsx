import { Github, Linkedin, Mail, MapPin, FileText, ExternalLink } from "lucide-react";
import { Button } from "./ui/Button";

const IconLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-1 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
  >
    <Icon className="h-5 w-5 flex-shrink-0" style={{ display: 'inline-block' }} />
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
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <MapPin className="h-4 w-4" />
            <span>United States</span>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
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
          <IconLink
            href="https://scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID"
            icon={FileText}
            label="Google Scholar"
          />
          <IconLink
            href="https://orcid.org/YOUR_ORCID_ID"
            icon={ExternalLink}
            label="ORCID"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="default"
          size="sm"
          className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:hover:bg-blue-900/30 rounded-md px-3 py-1.5 text-sm transition-colors border border-blue-200 dark:border-blue-800"
          asChild
        >
          <a href="/resume.pdf" download="alicia-esquivel-resume.pdf">
            Resume
          </a>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md px-3 py-1.5 text-sm transition-colors"
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
