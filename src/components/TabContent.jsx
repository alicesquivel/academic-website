import React from "react";
import ResearchGrid from "./ResearchGrid";
import Terminal from "./Terminal";
import { Book, FileText, GraduationCap } from "lucide-react";

const Publication = ({ title, venue, year, description }) => (
  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 hover:shadow-md transition-all duration-200">
    <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">
      {title}
    </h4>
    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
      {venue}, {year}
    </p>
    {description && (
      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
        {description}
      </p>
    )}
  </div>
);

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  tags,
  responsibilities,
}) => (
  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
    <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 font-sans">
          {title}
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-400 mt-1 font-body">
          {company}
        </p>
      </div>
      <span className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium font-body">
        {period}
      </span>
    </div>
    {description && (
      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-body">
        {description}
      </p>
    )}
    {responsibilities && (
      <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 dark:text-gray-300 font-body">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
    {tags && (
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-200 font-body"
          >
            {tag}
          </span>
        ))}
      </div>
    )}
  </div>
);

const TabContent = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-x-12">
            {/* Left Column - Text Content */}
            <div className="flex-1 max-w-xl">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-body text-left">
                  I'm a{" "}
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    PhD candidate in Computer Science
                  </span>{" "}
                  focused on{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    cloud/edge computing
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    cybersecurity
                  </span>
                  . My research interests include{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    federated learning
                  </span>
                  ,{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    Zero Trust Architecture
                  </span>
                  ,{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    intrusion detection
                  </span>
                  , and{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    AI-driven security for IoT and mobile networks
                  </span>
                  . I work with real-world testbeds including GENI, POWDER, and AERPAW to develop practical security solutions for distributed systems.
                </p>
              </div>
            </div>

            {/* Right Column - Terminal */}
            <div className="w-full sm:max-w-[420px] lg:w-[420px] flex-shrink-0 mt-8 lg:mt-0 mx-auto lg:mx-0">
              <Terminal />
            </div>
          </div>
        );

      case "research":
        return (
          <div className="space-y-8">
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              My research focuses on enhancing security and performance in distributed computing environments. I work on cloud/edge computing architectures, zero trust cybersecurity frameworks, and machine learning applications for drone analytics and security.
            </p>
            
            {/* Research Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Zero Trust Research */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-28 h-28 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <div className="text-emerald-700 dark:text-emerald-300 font-semibold text-sm">Zero Trust</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Arculus: Zero Trust for Tactical Edge Networks
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Novel Zero Trust design for tactical environments, improving situational awareness and resilience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Collection Research */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-28 h-28 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <div className="text-blue-700 dark:text-blue-300 font-semibold text-sm">Data Collection</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Floto: A Framework for Adaptable Data Collection
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Multi-sensor data collection for large-scale workflows, enhancing throughput and scalability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Drone Security Research */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-28 h-28 bg-violet-100 dark:bg-violet-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <div className="text-violet-700 dark:text-violet-300 font-semibold text-sm">Drone Security</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Enhancing Drone Video Analytics Security
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      AERPAW-based experiments securing edge video analytics workflows using programmable network services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Federated Learning Research */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-28 h-28 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <div className="text-pink-700 dark:text-pink-300 font-semibold text-sm">Federated Learning</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      FL-Defend: Intrusion Detection in Federated Learning Systems
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      A secure FL framework for UAV swarms under data poisoning and network disruption threats.
                    </p>
                  </div>
                </div>
              </div>

              {/* Edge Orchestration Research */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-28 h-28 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <div className="text-amber-700 dark:text-amber-300 font-semibold text-sm">Edge Orchestration</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Learning-based Multi-Drone Edge Offloading
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      PPO-based orchestration of data tasks for real-time edge/cloud UAV coordination.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legacy Research Grid - Keep for additional research areas */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Research Areas & Collaborations
              </h3>
              <ResearchGrid />
              <div className="mt-8">
                <div className="space-y-4">
                  <ExperienceCard
                    title="VIMAN Lab - University of Missouri"
                    company="Cloud Computing & Cybersecurity Research"
                    period="2021 - Present"
                    description="Conducting research on cloud security, zero trust architectures, and edge computing. Working with NSF-funded testbeds including FABRIC, GENI, and CloudLab."
                    tags={[
                      "Zero Trust",
                      "Cloud Security",
                      "Edge Computing",
                      "NSF Testbeds",
                    ]}
                  />
                  <ExperienceCard
                    title="Drone Analytics & Security"
                    company="Machine Learning Applications"
                    period="2022 - Present"
                    description="Developing machine learning models for drone communication security and analytics in edge computing environments."
                    tags={["Drone Analytics", "ML", "Communication Security"]}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case "publications":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Selected Publications
              </h3>
              <div className="grid gap-4">
                <Publication
                  title="UAV/Drone Systems Security and Privacy: A Comprehensive Survey"
                  venue="ACM Computing Surveys"
                  year="2025"
                  description="Comprehensive survey on security and privacy challenges in unmanned aerial vehicle systems and drone networks."
                />
                <Publication
                  title="Arculus: Zero Trust Architecture for Tactical Edge Computing"
                  venue="IEEE Conference"
                  year="2024"
                  description="Novel Zero Trust framework designed specifically for tactical edge computing environments with enhanced security protocols."
                />
                <Publication
                  title="FLOTO Framework: Federated Learning for Tactical Operations"
                  venue="International Conference on High Performance Computing"
                  year="2025"
                  description="Federated learning framework optimized for tactical operations and distributed edge computing scenarios."
                />
                <Publication
                  title="AI-Driven Intrusion Detection for Mobile Networks"
                  venue="IEEE INFOCOM"
                  year="2024"
                  description="Machine learning approaches for detecting network intrusions in mobile and wireless communication systems."
                />
                <Publication
                  title="Security Challenges in IoT Federated Learning"
                  venue="IEEE MILCOM"
                  year="2024"
                  description="Analysis of security vulnerabilities and mitigation strategies in federated learning for IoT environments."
                />
                <Publication
                  title="Network Management and Orchestration in Edge Computing"
                  venue="IEEE NOMS"
                  year="2023"
                  description="Comprehensive study on network management challenges and solutions for edge computing infrastructures."
                />
              </div>
            </div>
          </div>
        );

      case "experience":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <ExperienceCard
                title="Graduate Research Assistant"
                company="VIMAN Lab, University of Missouri"
                period="2018 - Present"
                responsibilities={[
                  "Conducting research on cloud computing, Zero Trust architectures, and federated learning",
                  "Working with real-world testbeds including GENI, POWDER, AERPAW for distributed systems research",
                  "Developing AI-driven security solutions for IoT and mobile networks",
                  "Published in top-tier venues including ACM Computing Surveys, INFOCOM, MILCOM, NOMS"
                ]}
                tags={["Cloud Computing", "Zero Trust", "Federated Learning", "IoT Security"]}
              />
              <ExperienceCard
                title="Teaching Assistant"
                company="University of Missouri Computer Science Department"
                period="2018 - Present"
                responsibilities={[
                  "Taught Cyber Defense, Cloud Computing, and Algorithm Design courses",
                  "Mentored 30+ students through REU cohorts and REU BigDataX programs",
                  "Supervised Chameleon Cloud projects and research initiatives",
                  "Served as UC Santa Cruz SoR Fellow mentor"
                ]}
                tags={["Teaching", "Mentoring", "Curriculum Development"]}
              />
              <ExperienceCard
                title="Awards & Recognition"
                company="Academic & Professional Achievements"
                period="2024"
                responsibilities={[
                  "Outstanding PhD Student Award (2024)",
                  "Fulbright-CAL Scholar",
                  "UC2 DoD White Paper winner",
                  "FAA Part 107 Drone License holder"
                ]}
                tags={["Awards", "Scholarships", "Certifications"]}
              />
            </div>
          </div>
        );

      case "fun":
        return (
          <div className="space-y-8">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Beyond research, I'm passionate about exploring the world, creating art, learning languages, and connecting with my community. Here's a glimpse into what makes me tick outside the lab!
              </p>
            </div>

            {/* Travel Adventures Section */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                ✈️ Travel Adventures
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-32 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                      Japan 2023
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-32 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                      Europe Tour
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-32 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                      Costa Rica
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-32 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                      Road Trip USA
                    </div>
                  </div>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                  >
                    📄 View Japan Itinerary PDF
                  </a>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <div className="text-2xl mb-2">🗺️</div>
                    <p className="text-sm">Google My Maps</p>
                    <p className="text-xs">Places I've Explored</p>
                    <button className="mt-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-md text-sm">
                      View Map
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Art & Design Projects */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                🎨 Art & Design Projects
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-40 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                  Jewelry Design
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-40 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                  Poster Designs
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-40 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                  Digital Sketches
                </div>
              </div>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium"
                >
                  🖼️ View Full Gallery
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium"
                >
                  🛒 Future Etsy Store
                </a>
              </div>
            </div>

            {/* Grid for smaller sections */}
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Faith & Community */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                  ⛪ Faith & Community
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-32 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                    Mission Trip Photo
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Active in church community, participating in mission trips and local outreach programs.
                  </p>
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-lg p-3">
                    <p className="text-sm italic text-emerald-800 dark:text-emerald-200">
                      "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, to give you hope and a future." - Jeremiah 29:11
                    </p>
                  </div>
                </div>
              </div>

              {/* Language & Culture */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                  🌍 Language & Culture
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-24 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                    Handwritten Japanese Notes
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Languages:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm">🇪🇸 Spanish (Native)</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">🇺🇸 English (Fluent)</span>
                      <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm">🇯🇵 Japanese (Learning)</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 text-sm">📚 Fluent Forever</a>
                    <a href="#" className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 text-sm">🐊 WaniKani</a>
                  </div>
                </div>
              </div>

            </div>

            {/* Cooking Corner */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                👩‍🍳 Cooking Corner
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-28 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                    Perfect Fried Rice
                  </div>
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-28 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                    Homemade Croissants
                  </div>
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-28 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                    Costa Rican Gallo Pinto
                  </div>
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-28 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                    Japanese Ramen
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    I love experimenting with international cuisines and perfecting comfort food classics. Cooking is my creative outlet and stress relief!
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Favorite Recipes:</h4>
                    <div className="space-y-1">
                      <a href="#" className="block text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-sm">🍚 Ultimate Fried Rice Recipe</a>
                      <a href="#" className="block text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-sm">🥐 Weekend Croissant Guide</a>
                      <a href="#" className="block text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-sm">🍜 Authentic Ramen Broth</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Media & Fun */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
                📺 Media & Fun
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                
                {/* TV Shows */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    📺 Currently Watching
                  </h4>
                  <div className="space-y-2">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-200 dark:bg-blue-700 rounded-lg flex items-center justify-center text-xs">
                          🦈
                        </div>
                        <div>
                          <p className="font-medium text-sm">Shark Tank</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Business Reality TV</p>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="block text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm">▶️ YouTube Playlist</a>
                  </div>
                </div>

                {/* Books */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    📚 Reading List
                  </h4>
                  <div className="space-y-2">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-200 dark:bg-green-700 rounded-lg flex items-center justify-center text-xs">
                          📖
                        </div>
                        <div>
                          <p className="font-medium text-sm">Tech Leadership</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Professional Development</p>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="block text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm">📱 Goodreads Profile</a>
                  </div>
                </div>

                {/* Music */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    🎵 Music Vibes
                  </h4>
                  <div className="space-y-2">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-purple-200 dark:bg-purple-700 rounded-lg flex items-center justify-center text-xs">
                          🎧
                        </div>
                        <div>
                          <p className="font-medium text-sm">Focus Playlist</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Lo-fi & Instrumental</p>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="block text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm">🎧 Spotify Playlists</a>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                📊 Fun Facts & Stats
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">12</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Countries Visited</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Japanese Kanji Learned</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">25</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Art Projects Created</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">100+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Recipes Mastered</div>
                </div>
              </div>
            </div>

          </div>
        );

      default:
        return null;
    }
  };

  return <div className="space-y-6">{renderContent()}</div>;
};

export default TabContent;
