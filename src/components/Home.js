import React, { useState, useEffect } from 'react';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Human-Centered Designer & Developer';
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < fullText.length) {
        setDisplayText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (charIndex === fullText.length) {
        setIsDeleting(true);
      } else if (charIndex === 0 && isDeleting) {
        setIsDeleting(false);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, fullText]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#F8F8F0] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Name and Title */}
          <div className="text-left">
            <h1 className="heading-1 mb-6 animate-fade-in">
              Hi, I'm <span className="text-black">Amani Hassan</span>
            </h1>
            
            <div className="h-12 sm:h-14 mb-8">
              <p className="text-xl sm:text-2xl text-neutral-900 font-medium">
                {displayText}
                <span className="animate-pulse text-black">|</span>
              </p>
            </div>

            <p className="text-base sm:text-lg text-neutral-700 mb-8 leading-relaxed">
              Bridging the gap between psychology, design, and technology to create
              meaningful digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary text-sm px-6 py-2.5"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary text-sm px-6 py-2.5"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Column - Background Info */}
          <div className="border-l border-black/20 pl-8 md:pl-12">
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              I'm a designer and developer with a background in <strong className="text-neutral-900">Human Factors Psychology</strong> and{' '}
              <strong className="text-neutral-900">Computer Science</strong>. I create user-centered applications that are both <strong className="text-neutral-900">beautiful and functional</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

