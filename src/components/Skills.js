import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'C' },
        { name: 'Java' },
        { name: 'Python' },
        { name: 'PHP' },
        { name: 'JavaScript' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'SQL' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React' },
        { name: 'Node.js' },
        { name: 'Express.js' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL' },
        { name: 'MongoDB' },
      ],
    },
    {
      title: 'APIs & Tools',
      skills: [
        { name: 'Google Maps API' },
        { name: 'Spotify API' },
        { name: 'RESTful APIs' },
        { name: 'Postman' },
      ],
    },
    {
      title: 'Design & Prototyping',
      skills: [
        { name: 'Figma' },
        { name: 'Adobe XD' },
        { name: 'Accessibility/WCAG' },
      ],
    },
    {
      title: 'Developer Tools',
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'VS Code' },
        { name: 'Docker' },
        { name: 'Linux' },
      ],
    },
  ];

  return (
    <>
      <div className="section-separator"></div>
      <section id="skills" className="section-padding bg-[#F8F8F0]">
        <div className="container-custom w-full">
          <h2 className="heading-2 text-center mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="card group hover:border-black/30 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="heading-3 mb-6 text-black group-hover:text-black transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-4 py-2 bg-[#F8F8F0] border border-black/10 
                             hover:border-black hover:bg-black hover:text-white
                             transition-all duration-200 text-sm font-medium
                             cursor-default transform hover:scale-105"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
};

export default Skills;

