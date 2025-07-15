import React from "react";

const TabContent = ({ activeTab }) => {
  const renderAboutContent = () => (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-4">
        <p className="text-sm sm:text-base leading-relaxed text-gray-700">
          I am a motivated PhD candidate specializing in{" "}
          <span className="font-semibold text-blue-600">cloud/edge computing</span> and{" "}
          <span className="font-semibold text-blue-600">cybersecurity</span>. With a proven ability
          to lead research, publish papers, and teach core computer science
          courses, I am seeking a research or faculty role to apply my expertise
          in cybersecurity and resilient network design for autonomous systems.
        </p>

        <p className="text-sm sm:text-base leading-relaxed text-gray-700">
          I am passionate about leveraging{" "}
          <span className="font-semibold text-blue-600">advanced networking</span>,{" "}
          <span className="font-semibold text-blue-600">artificial intelligence</span>, and{" "}
          <span className="font-semibold text-blue-600">testbed-driven validation</span> in cloud
          and edge environments to create more secure and resilient systems for
          the future.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
          <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">🛡️ Cybersecurity</h4>
          <p className="text-sm sm:text-base text-gray-600">
            AI-driven security, Zero Trust Architecture, threat modeling,
            intrusion detection systems
          </p>
        </div>
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
          <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">☁️ Cloud Computing</h4>
          <p className="text-sm sm:text-base text-gray-600">
            Edge computing, distributed systems, resilient architectures,
            containerization
          </p>
        </div>
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
          <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">🤖 Machine Learning</h4>
          <p className="text-sm sm:text-base text-gray-600">
            Federated learning, neural networks, intelligent systems, anomaly
            detection
          </p>
        </div>
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
          <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">🌐 Networking</h4>
          <p className="text-sm sm:text-base text-gray-600">
            IoT networks, mobile networks, protocol design, network security
          </p>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Research Interests</h3>
        <p className="text-sm sm:text-base leading-relaxed text-gray-700">
          AI-driven security for cloud, edge, IoT, and mobile networks, focusing
          on federated learning, Zero Trust Architecture, intrusion detection,
          threat modeling, and critical infrastructure resilience.
        </p>
      </div>

      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="flex items-center px-4 py-2 bg-gray-800">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-green-400 space-y-1">
          <div>
            <span className="text-blue-400">$</span>{" "}
            <span className="text-white">whoami</span>
          </div>
          <div className="text-green-300">
            alicia@cs-research:~$ PhD Candidate specializing in cybersecurity
          </div>
          <div>
            <span className="text-blue-400">$</span>{" "}
            <span className="text-white">ls skills/</span>
          </div>
          <div className="text-green-300">
            cybersecurity/ cloud-computing/ machine-learning/ networking/
          </div>
          <div>
            <span className="text-blue-400">$</span>{" "}
            <span className="text-white">cat research_focus.txt</span>
          </div>
          <div className="text-green-300">
            AI-driven security for distributed systems
          </div>
        </div>
      </div>
    </div>
  );

  const renderResearchContent = () => (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Research Projects</h2>

      <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4">
          <div>
            <div className="text-lg font-semibold text-gray-900">TAMU Fractals Research Team</div>
            <div className="text-sm sm:text-base text-blue-600 font-medium">Texas A&M University</div>
          </div>
          <div className="text-sm sm:text-base text-gray-500 mt-1 sm:mt-0">Aug 2023 - May 2024</div>
        </div>
        <div className="text-sm sm:text-base leading-relaxed text-gray-700">
          During my time with the TAMU Fractals Research Team, I explored the
          fascinating world of fractals, with a particular focus on the
          Sierpiński gasket. The Sierpiński gasket (also called the Sierpiński
          triangle) is one of the most famous examples of a fractal, which is a
          type of mathematical object that has "self-similarity" at all scales.
          The Sierpiński gasket is named after Polish mathematician Wacław
          Sierpiński, and can be generated through several different methods.
        </div>
      </div>

      <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Additional Research Projects</h3>
        <p className="text-sm sm:text-base text-gray-600">
          Add your other research projects, current work, and academic
          collaborations here.
        </p>
      </div>
    </div>
  );

  const renderPublicationsContent = () => (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Publications</h2>
      <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Academic Publications</h3>
        <p className="text-sm sm:text-base text-gray-600">
          Your journal articles, conference papers, and other academic
          publications will be listed here.
        </p>
      </div>
    </div>
  );

  const renderExperienceContent = () => (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Experience</h2>
      <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Experience</h3>
        <p className="text-sm sm:text-base text-gray-600">
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

  return <main className="bg-white p-4 sm:p-6 lg:p-8">{renderContent()}</main>;
};

export default TabContent;
