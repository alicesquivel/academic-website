const ProfileHeader = () => {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold tracking-tight">Alicia Esquivel</h1>
      <p className="text-lg text-muted-foreground">
        Software Engineer | Full Stack Developer
      </p>
      <div className="flex items-center space-x-4">
        <a
          href="https://github.com/alicesquivel"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          LinkedIn
        </a>
      </div>
    </div>
  )
}

export default ProfileHeader