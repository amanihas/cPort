import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
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
      demo: '#',
      caseStudy: '#',
      thumbnail: '🗑️',
    },
    {
      id: 2,
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
        'RESTful APIs',
      ],
      github: '#',
      demo: '#',
      caseStudy: '#',
      thumbnail: '🦌',
    },
    {
      id: 3,
      name: 'DrawSpace',
      type: 'Collaborative Web App',
      description:
        'A collaborative web-based art and brainstorming tool that enables multiple users to create and share visual content in real-time. Perfect for remote teams and creative sessions.',
      problem:
        'Lack of accessible tools for real-time collaborative visual brainstorming.',
      solution:
        'Developed a web-based collaborative drawing tool with real-time synchronization.',
      tools: ['React', 'WebSockets', 'Canvas API', 'Real-time Collaboration'],
      github: '#',
      demo: '#',
      caseStudy: '#',
      thumbnail: '🎨',
    },
    {
      id: 4,
      name: 'Girls Who Budget',
      type: 'Personal Finance App',
      description:
        'A React web application for personal finance tracking and category-based budgeting. Empowers users to take control of their finances with intuitive categorization and visualization.',
      problem:
        'Need for an accessible, user-friendly personal finance tracking tool.',
      solution:
        'Created an intuitive budgeting app with category-based tracking and visual analytics.',
      tools: ['React', 'JavaScript', 'Local Storage', 'Data Visualization'],
      github: '#',
      demo: '#',
      caseStudy: '#',
      thumbnail: '💰',
    },
  ];

  return (
    <>
      <div className="section-separator"></div>
      <section id="projects" className="section-padding bg-[#F8F8F0]">
        <div className="container-custom w-full">
          <h2 className="heading-2 text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.caseStudy !== '#' ? project.caseStudy : '#'}
              className="card group block cursor-pointer hover:border-black hover:shadow-xl 
                       transition-all duration-300 transform hover:-translate-y-1"
              onClick={(e) => {
                if (project.caseStudy === '#') {
                  e.preventDefault();
                  // You can add routing logic here later
                  console.log(`Navigate to project: ${project.name}`);
                }
              }}
            >
              {/* Project Thumbnail */}
              <div className="mb-6 h-40 border border-black/10 bg-[#F8F8F0] flex items-center justify-center text-5xl 
                           group-hover:border-black group-hover:bg-black/5 transition-all duration-300">
                {project.thumbnail}
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold text-black uppercase tracking-wide">
                    {project.type}
                  </span>
                  <h3 className="heading-3 mt-2 group-hover:text-black transition-colors">
                    {project.name}
                  </h3>
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed">
                  {project.description}
                </p>

                {/* Tools Used */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#F8F8F0] border border-black/20 text-neutral-900 rounded-sm text-xs font-medium
                                 group-hover:border-black/40 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Link */}
                <div className="pt-2 flex items-center text-sm font-medium text-black group-hover:underline">
                  View Project →
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

