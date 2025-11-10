import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      return;
    }

    // If the section isn't on the current page (e.g., we're on a case study),
    // navigate back to the main page (clear hash) and scroll after the DOM updates.
    setIsMobileMenuOpen(false);
    if (window.location.hash && window.location.hash !== '') {
      // Clear the hash to render the home sections
      window.location.hash = '';
      // Wait briefly for the home content to render, then scroll.
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 250);
    }
  };

  const navLinks = [
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleResumeClick = () => {
    // Open resume PDF in a new tab
    // public/AmaniHassan-Resume.pdf is served from the site root when built/served.
    window.open('/AmaniHassan-Resume.pdf', '_blank');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] bg-[#F8F8F0] backdrop-blur-sm shadow-md transition-all duration-300`}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999, WebkitBackdropFilter: 'blur(6px)', backdropFilter: 'blur(6px)' }}
      role="navigation"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4">
          <button
            onClick={() => scrollToSection('home')}
            className="text-lg font-bold text-black hover:text-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded"
            style={{ fontFamily: "'Charter', Georgia, 'Times New Roman', serif" }}
            aria-label="Go to home"
          >
            Amani Hassan
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-neutral-900 hover:text-neutral-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded px-2 py-1"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={handleResumeClick}
              className="text-sm text-neutral-900 hover:text-neutral-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded px-2 py-1"
            >
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-neutral-900 hover:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded p-2"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Black separator line below navbar */}
      <div className="w-full h-px bg-black"></div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F8F8F0] border-t border-black">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-neutral-900 hover:text-neutral-600 font-medium py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded px-2"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={handleResumeClick}
              className="block w-full text-left text-neutral-900 hover:text-neutral-600 font-medium py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded px-2"
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

