import React from 'react';

const LitterlyCaseStudy = () => {
  const tools = ['React', 'TensorFlow.js', 'Mobile UI', 'Accessibility'];

  const personas = [
    { name: 'Community Volunteer', desc: 'Often cleans parks and streets; wants quick verification and clear rewards.' },
    { name: 'Concerned Commuter', desc: 'Sees litter during commutes; needs a fast capture flow and immediate feedback.' },
    { name: 'Event Organizer', desc: 'Coordinates cleanups; wants bulk verification and leaderboards to motivate volunteers.' },
  ];

  // If you have a Figma prototype, paste the URL here.
  const figmaUrl = '';

  return (
  <section className="min-h-screen bg-[#F8F8F0] section-padding">
      <div className="container-custom">
        <button
          onClick={() => (window.location.hash = '')}
          className="mb-6 text-sm text-neutral-700 hover:text-black"
        >
          ← Back
        </button>

        <h1 className="heading-2 mb-4">Litterly</h1>

        {/* What is Litterly */}
        <h2 className="heading-3 mb-2">What is Litterly</h2>
        <p className="text-neutral-700 mb-6 max-w-3xl">
          Litterly is a mobile-first, gamified app that uses on-device image
          recognition to verify litter pickups and reward users for taking action.
          The main focus was a fast capture flow, clear verification states, and
          accessible UI patterns for mobile users.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="heading-3 mb-2">My Role</h3>
            <p className="text-neutral-700 mb-4">Fullstack developer — led the front-end implementation of capture, upload and verification flows.</p>

            <h3 className="heading-3 mb-2">Highlights</h3>
            <ul className="list-disc list-inside text-neutral-700 space-y-2">
              <li>Mobile-first capture + preview UX built for low-latency verification.</li>
              <li>Client-side ML integration for instant feedback and reduced server load.</li>
              <li>Accessible status states and microinteractions to reduce user confusion.</li>
            </ul>
          </div>

          <div>
            <h3 className="heading-3 mb-2">Tools</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {tools.map((t) => (
                <span key={t} className="px-3 py-1 bg-[#F8F8F0] border border-black/20 text-neutral-900 rounded-sm text-xs">
                  {t}
                </span>
              ))}
            </div>

            <a
              href="https://devpost.com/software/litterly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-700 hover:text-black"
            >
              View demo on Devpost
            </a>
          </div>
        </div>

        {/* Personas */}
        <h3 className="heading-3 mb-4">Personas</h3>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {personas.map((p) => (
            <div key={p.name} className="bg-[#F8F8F0] border border-black/10 p-4 rounded">
              <div className="font-medium mb-1">{p.name}</div>
              <div className="text-sm text-neutral-700">{p.desc}</div>
            </div>
          ))}
        </div>

        {/* Wireframes */}
        <h3 className="heading-3 mb-4">Wireframes</h3>
        <p className="text-neutral-700 mb-4 max-w-3xl">Low-fidelity wireframes focused on the capture flow, verification feedback, and rewards screens.</p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#F8F8F0] border border-black/10 p-6 rounded text-center">
            <div className="text-4xl mb-4">📷</div>
            <div className="font-medium">Capture</div>
            <p className="text-sm text-neutral-700 mt-2">Quick camera entry and confirm/retake options.</p>
          </div>

          <div className="bg-[#F8F8F0] border border-black/10 p-6 rounded text-center">
            <div className="text-4xl mb-4">✔️</div>
            <div className="font-medium">Verification</div>
            <p className="text-sm text-neutral-700 mt-2">Instant client-side feedback with result states.</p>
          </div>

          <div className="bg-[#F8F8F0] border border-black/10 p-6 rounded text-center">
            <div className="text-4xl mb-4">🏆</div>
            <div className="font-medium">Rewards</div>
            <p className="text-sm text-neutral-700 mt-2">Points, leaderboards, and badges to encourage participation.</p>
          </div>
        </div>

        {/* Figma prototype */}
        <h3 className="heading-3 mb-2">Figma prototype</h3>
        {figmaUrl ? (
          <a href={figmaUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-700 hover:text-black">Open Figma prototype</a>
        ) : (
          <p className="text-sm text-neutral-700">Figma prototype URL not set. Paste the link into the <code>figmaUrl</code> constant in this file to enable a direct link.</p>
        )}

        {/* Impact / Next steps */}
        <h3 className="heading-3 mt-8 mb-2">Impact & next steps</h3>
        <ul className="list-disc list-inside text-neutral-700 space-y-2 max-w-3xl">
          <li>Reduced verification time with on-device model — better UX for mobile users.</li>
          <li>Next: add bulk verification tools for event organizers and improve model accuracy with more labeled data.</li>
        </ul>
      </div>
    </section>
  );
};

export default LitterlyCaseStudy;
