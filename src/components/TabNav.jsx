const TabNav = ({ activeTab, onTabChange }) => {
  return (
    <nav className="flex space-x-4 border-b">
      <button
        onClick={() => onTabChange('about')}
        className={`pb-2 text-sm font-medium ${
          activeTab === 'about'
            ? 'border-b-2 border-primary text-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        About
      </button>
      <button
        onClick={() => onTabChange('projects')}
        className={`pb-2 text-sm font-medium ${
          activeTab === 'projects'
            ? 'border-b-2 border-primary text-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        Projects
      </button>
    </nav>
  )
}

export default TabNav