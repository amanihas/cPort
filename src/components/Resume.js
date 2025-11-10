import React from 'react';

const Resume = () => {
  const handleDownload = () => {
    // This would typically link to an actual PDF file
    // For now, it's a placeholder
    alert('Resume download functionality - replace with actual PDF link');
  };

  const highlights = [
    {
      category: 'Education',
      items: [
        'Human Factors Psychology',
        'Computer Science',
        'Information Technology',
      ],
    },
    {
      category: 'Experience',
      items: [
        'Full-Stack Development',
        'UX/UI Design',
        'Human-Computer Interaction Research',
      ],
    },
    {
      category: 'Key Strengths',
      items: [
        'User-Centered Design',
        'Frontend & Backend Development',
        'Accessibility & WCAG Compliance',
        'Agile/Scrum Methodology',
      ],
    },
  ];

  return (
    <section id="resume" className="section-padding bg-[#F8F8F0]">
      <div className="container-custom">
        <h2 className="heading-2 text-center mb-8">Resume</h2>

        <div className="max-w-3xl mx-auto">
          {/* Download Button */}
          <div className="text-center mb-8">
            <button
              onClick={handleDownload}
              className="btn-primary text-sm px-6 py-2.5 inline-flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </button>
          </div>

          {/* Resume Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="card text-center">
                <h3 className="heading-3 mb-4 text-black">
                  {highlight.category}
                </h3>
                <ul className="space-y-2">
                  {highlight.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-sm text-neutral-700 font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

