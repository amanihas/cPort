import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Oasis',
      type: 'Product Design / Frontend',
      description:
        'Oasis is a platform that brings authenticity to social media and uses AI as a tool, to create more intentional experiences with travel.',
      problem:
        'Social media often amplifies performative content; Oasis reimagines sharing to be more intentional and discovery-focused.',
      solution:
        'Designed interfaces that foreground authentic travel experiences and used lightweight AI features to surface meaningful content. I worked on the front-end implementation and interactions.',
      tools: ['React', 'Figma'],
      github: '#',
      demo: '#',
      caseStudy: '#/oasis',
      thumbnail: (
        <img
          src="/images/Oasis/LandingPage.png"
          alt="Oasis landing preview"
          className="w-full h-auto object-top rounded-t-lg"
        />
      ),
    },
    {
      id: 2,
      name: 'Litterly',
      type: 'Hackathon Project',
      description:
        'A gamified sustainability app that uses AI image recognition to reward users for cleaning up litter. Combines environmental impact with engaging user experience.',
      problem:
        'Motivating people to participate in environmental cleanup efforts.',
      solution:
        'Created a mobile app that gamifies litter collection through AI-powered verification and reward systems.',
      tools: ['React', 'AI/ML', 'Mobile Development', 'Image Recognition'],
      github: '#',
      demo: 'https://devpost.com/software/litterly',
      caseStudy: '#/litterly',
      thumbnail: (
        <img
          src="/images/Litterly/LitterlyCoverPhoto.png"
          alt="Litterly cover"
          className="w-full h-auto object-top rounded-t-lg"
        />
      ),
    },
    {
      id: 3,
      name: 'Girls Who Budget',
      type: 'Personal Finance App',
      description:
        'A React web application for personal finance tracking and category-based budgeting. Empowers users to take control of their finances with intuitive categorization and visualization.',
      problem:
        'Need for an accessible, user-friendly personal finance tracking tool.',
      solution:
        'Created an intuitive budgeting app with category-based tracking and visual analytics.',
      tools: ['React', 'JavaScript', 'SQL', 'PHP', 'Data Visualization'],
      github: '#',
      demo: '#',
      caseStudy: '#',
      thumbnail: '💰',
    },
    {
      id: 4,
      name: 'DrawSpace',
      type: 'Collaborative Web App',
      description:
        'A collaborative web-based art and brainstorming tool that enables multiple users to create and share visual content in real-time. Perfect for remote teams and creative sessions.',
      problem:
        'Lack of accessible tools for real-time collaborative visual brainstorming.',
      solution:
        'Developed a web-based collaborative drawing tool with real-time synchronization.',
      tools: ['React', 'Canvas API', 'Real-time Collaboration'],
      github: '#',
      demo: '#',
      caseStudy: '#',
      thumbnail: '🎨',
    },
    {
      id: 5,
      name: 'Knights Wildlife Tracker',
      type: 'Full-Stack Application',
      description:
        'A React + Node.js platform for logging and mapping wildlife sightings. Enables users to track, visualize, and share wildlife observations with an interactive map interface.',
      problem:
        'Need for a centralized platform to log and visualize wildlife sightings.',
      solution:
        'Built a full-stack application with real-time mapping capabilities using Google Maps API.',
      tools: [
        'React',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Google Maps API',
      ],
      github: '#',
      demo: '#',
      caseStudy: '#',
      thumbnail: '🦌',
    },
  ];

  return (
    <>
      <div className="section-separator"></div>
      <section id="projects" className="section-padding bg-[#F8F8F0]">
        <div className="container-custom w-full">
          <h2 className="heading-2 text-left mb-12">Projects</h2>

          <div className="space-y-20 max-w-4xl mx-auto">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.caseStudy !== '#' ? project.caseStudy : '#'}
                onClick={(e) => {
                  if (project.caseStudy === '#') {
                    e.preventDefault();
                    console.log(`Navigate to project: ${project.name}`);
                    return;
                  }
                  // allow normal anchor navigation for hash-based routing
                }}
                className="group block pb-12 border-b border-black/5 last:border-b-0 no-underline"
                role="link"
                aria-label={`Open case study for ${project.name}`}
              >
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 transform hover:-translate-y-1 overflow-hidden">
                  {/* Preview Image */}
                  <div className="mb-3 w-full overflow-hidden rounded-t-lg">
                    {project.thumbnail}
                  </div>

                  {/* Project Info */}
                  <div className="space-y-2 p-4">
                    <span className="text-xs font-semibold text-neutral-600 uppercase tracking-wide">
                      {project.type}
                    </span>

                    <h2 className="text-3xl font-bold text-black group-hover:text-neutral-700 transition-colors cursor-pointer flex items-center gap-3">
                      {project.name}
                      {/* subtle link indicator */}
                      <svg className="w-5 h-5 text-neutral-500 group-hover:text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </h2>

                    <p className="text-base text-neutral-700 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-3">
                      {project.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 border border-black/20 bg-white text-neutral-900 text-sm rounded-lg"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

