import React from "react";

const TabContent = ({ activeTab }) => {
  const renderAboutContent = () => (
    <div className="tab-content active">
      <p className="about-text">
        I am a motivated PhD candidate specializing in{" "}
        <span className="highlight">cloud/edge computing</span> and{" "}
        <span className="highlight">cybersecurity</span>. With a proven ability
        to lead research, publish papers, and teach core computer science
        courses, I am seeking a research or faculty role to apply my expertise
        in cybersecurity and resilient network design for autonomous systems.
      </p>

      <p className="about-text">
        I am passionate about leveraging{" "}
        <span className="highlight">advanced networking</span>,{" "}
        <span className="highlight">artificial intelligence</span>, and{" "}
        <span className="highlight">testbed-driven validation</span> in cloud
        and edge environments to create more secure and resilient systems for
        the future.
      </p>

      <div className="expertise-grid">
        <div className="expertise-card">
          <h4>🛡️ Cybersecurity</h4>
          <p>
            AI-driven security, Zero Trust Architecture, threat modeling,
            intrusion detection systems
          </p>
        </div>
        <div className="expertise-card">
          <h4>☁️ Cloud Computing</h4>
          <p>
            Edge computing, distributed systems, resilient architectures,
            containerization
          </p>
        </div>
        <div className="expertise-card">
          <h4>🤖 Machine Learning</h4>
          <p>
            Federated learning, neural networks, intelligent systems, anomaly
            detection
          </p>
        </div>
        <div className="expertise-card">
          <h4>🌐 Networking</h4>
          <p>
            IoT networks, mobile networks, protocol design, network security
          </p>
        </div>
      </div>

      <div className="research-interests">
        <h3>Research Interests</h3>
        <p className="research-text">
          AI-driven security for cloud, edge, IoT, and mobile networks, focusing
          on federated learning, Zero Trust Architecture, intrusion detection,
          threat modeling, and critical infrastructure resilience.
        </p>
      </div>

      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-dots">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
          </div>
        </div>
        <div>
          <div className="terminal-line">
            <span className="terminal-prompt">$</span>{" "}
            <span className="terminal-command">whoami</span>
          </div>
          <div className="terminal-line terminal-output">
            alicia@cs-research:~$ PhD Candidate specializing in cybersecurity
          </div>
          <div className="terminal-line">
            <span className="terminal-prompt">$</span>{" "}
            <span className="terminal-command">ls skills/</span>
          </div>
          <div className="terminal-line terminal-output">
            cybersecurity/ cloud-computing/ machine-learning/ networking/
          </div>
          <div className="terminal-line">
            <span className="terminal-prompt">$</span>{" "}
            <span className="terminal-command">cat research_focus.txt</span>
          </div>
          <div className="terminal-line terminal-output">
            AI-driven security for distributed systems
          </div>
        </div>
      </div>
    </div>
  );

  const renderResearchContent = () => (
    <div className="tab-content active">
      <h2 className="section-title">Research Projects</h2>

      <div className="experience-item">
        <div className="experience-header">
          <div>
            <div className="experience-title">TAMU Fractals Research Team</div>
            <div className="experience-company">Texas A&M University</div>
          </div>
          <div className="experience-date">Aug 2023 - May 2024</div>
        </div>
        <div className="experience-description">
          During my time with the TAMU Fractals Research Team, I explored the
          fascinating world of fractals, with a particular focus on the
          Sierpiński gasket. The Sierpiński gasket (also called the Sierpiński
          triangle) is one of the most famous examples of a fractal, which is a
          type of mathematical object that has "self-similarity" at all scales.
          The Sierpiński gasket is named after Polish mathematician Wacław
          Sierpiński, and can be generated through several different methods.
        </div>
      </div>

      <div className="placeholder-content">
        <h3>Additional Research Projects</h3>
        <p>
          Add your other research projects, current work, and academic
          collaborations here.
        </p>
      </div>
    </div>
  );

  const renderPublicationsContent = () => (
    <div className="tab-content active">
      <h2 className="section-title">Publications</h2>
      <div className="placeholder-content">
        <h3>Academic Publications</h3>
        <p>
          Your journal articles, conference papers, and other academic
          publications will be listed here.
        </p>
      </div>
    </div>
  );

  const renderExperienceContent = () => (
    <div className="tab-content active">
      <h2 className="section-title">Experience</h2>
      <div className="placeholder-content">
        <h3>Professional Experience</h3>
        <p>
          Your work experience, teaching positions, and academic appointments
          will be displayed here.
        </p>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return renderAboutContent();
      case "research":
        return renderResearchContent();
      case "publications":
        return renderPublicationsContent();
      case "experience":
        return renderExperienceContent();
      default:
        return renderAboutContent();
    }
  };

  return <main className="content">{renderContent()}</main>;
};

export default TabContent;
