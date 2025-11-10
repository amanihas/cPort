import React from 'react';

const About = () => {
  return (
    <>
      <div className="section-separator"></div>
      <section id="about" className="section-padding bg-[#F8F8F0]">
        <div className="container-custom w-full">
          <h2 className="heading-2 text-center mb-12">About</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-neutral-700 leading-relaxed">
                I'm a designer and developer with a background in <strong className="text-neutral-900">Human Factors Psychology</strong>,{' '}
                <strong className="text-neutral-900">Computer Science</strong>, and{' '}
                <strong className="text-neutral-900">Information Technology</strong>. This
                interdisciplinary foundation allows me to approach digital
                experiences with both empathy and technical rigor.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                My journey began in psychology, where I learned to understand
                human behavior, cognition, and the factors that make interfaces
                intuitive. This curiosity led me to computer science, where I
                discovered the power of code to bring design concepts to life.
                Today, I bridge these worlds by creating user-centered
                applications that are both beautiful and functional.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                I believe in the power of <strong className="text-black">human-centered design</strong> to
                solve real problems. Whether I'm conducting user research,
                prototyping in Figma, or building with React, my goal is always
                the same: create experiences that feel natural, accessible, and
                meaningful.
              </p>
            </div>

            <div className="pt-8 border-t border-black/10">
              <h3 className="text-lg font-semibold text-neutral-900 mb-6">
                What I'm passionate about:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <span className="text-black mr-3 mt-1">•</span>
                  <span className="text-base text-neutral-700">Creating accessible and inclusive digital experiences</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black mr-3 mt-1">•</span>
                  <span className="text-base text-neutral-700">Bridging the gap between design and development</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black mr-3 mt-1">•</span>
                  <span className="text-base text-neutral-700">Building products that solve real-world problems</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black mr-3 mt-1">•</span>
                  <span className="text-base text-neutral-700">Continuous learning and staying current with technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

