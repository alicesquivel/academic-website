const TabContent = ({ activeTab }) => {
  return (
    <div className="py-6">
      {activeTab === 'about' && (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            I'm a software engineer specializing in full-stack development. I have experience
            with React, Node.js, and modern web technologies.
          </p>
        </div>
      )}
      {activeTab === 'projects' && (
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="text-lg font-semibold">Project Title</h3>
            <p className="text-sm text-muted-foreground">Project description goes here</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default TabContent