import React, { useEffect } from 'react';

const brandGuidelineImages = [
  '/images/Oasis/OasisBrandGuidelines/Brand guide cover.png',
  '/images/Oasis/OasisBrandGuidelines/Introduction.png',
  '/images/Oasis/OasisBrandGuidelines/Logo.png',
  '/images/Oasis/OasisBrandGuidelines/Color scheme.png',
  '/images/Oasis/OasisBrandGuidelines/Color Pairings.png',
  '/images/Oasis/OasisBrandGuidelines/Typography.png',
];
const oasisImages = [
  '/images/Oasis/Profile Page- Final.png',
  '/images/Oasis/Search Page (Posts) - Final.png',
  '/images/Oasis/Search Page (Itineraries) - Final.png',
  '/images/Oasis/View Itinerary page - day 1.png',
  '/images/Oasis/Post Page (Image).png',
  "/images/Oasis/DM's Page - Maegan.png",
  '/images/Oasis/Notification Page Private Acc - Shealyn.png',
  '/images/Oasis/Settings Page - Account.png',
  '/images/Oasis/Settings Page - Travel.png',
];

const OasisCaseStudy = () => {
  useEffect(() => {
    // When this component mounts, ensure we're at the top of the case study
    // so clicking a project reliably lands at the top.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <section className="min-h-screen bg-[#F8F8F0] section-padding">
      <div className="container-custom">
        <button
          onClick={() => (window.location.hash = '')}
          className="mb-6 text-sm text-neutral-700 hover:text-black"
        >
          ← Back
        </button>

        <p className="text-neutral-700 mb-6 max-w-3xl">
          {/* Landing image immediately under the header */}
          <div className="mb-6">
            <img src="/images/Oasis/LandingPage.png" alt="Oasis Landing" className="w-full h-auto rounded" loading="lazy" />
          </div>
          Oasis is a platform that brings authenticity to social media and uses AI as a tool to create more intentional experiences. At its core,
          Oasis reimagines how we connect, share, and explore during travel.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="heading-3 mb-2">My Role</h3>
            <p className="text-neutral-700 mb-4">Front-end developer — built UI components, responsive layouts, and interactive states.</p>
          </div>

          <div>
            <h3 className="heading-3 mb-2">Tools</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-[#F8F8F0] border border-black/20 text-neutral-900 rounded-sm text-xs">React</span>
              <span className="px-3 py-1 bg-[#F8F8F0] border border-black/20 text-neutral-900 rounded-sm text-xs">Figma</span>
              <span className="px-3 py-1 bg-[#F8F8F0] border border-black/20 text-neutral-900 rounded-sm text-xs">AI</span>
            </div>
          </div>
        </div>

        {/* Brand Guidelines Section */}
        <h3 className="heading-3 mb-4">Brand Guidelines</h3>
        <p className="text-neutral-700 mb-6 max-w-3xl">
          The Oasis brand guidelines establish a visual identity that is modern, welcoming, and travel-inspired. The guide covers logo usage, color palette, typography, and design principles to ensure a consistent and authentic experience across all touchpoints.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {brandGuidelineImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Oasis brand guideline"
              className="w-full h-auto"
              loading="lazy"
            />
          ))}
        </div>

        {/* Gallery Section */}
        <h3 className="heading-3 mb-4">Figma Designs</h3>
        {/* Custom layout: Landing left, LoginHome/Login/SignUp stacked right */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left: Landing Page.png */}
          <div>
            <img
              src="/images/Oasis/Landing Page.png"
              alt="Oasis Landing Page"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          {/* Right: LoginHome, Login, SignUp stacked */}
          <div className="flex flex-col gap-8 h-full justify-between">
            <img
              src="/images/Oasis/LoginHome.png"
              alt="Oasis Login Home"
              className="w-full h-auto"
              loading="lazy"
            />
            <img
              src="/images/Oasis/Login.png"
              alt="Oasis Login"
              className="w-full h-auto"
              loading="lazy"
            />
            <img
              src="/images/Oasis/SignUp.png"
              alt="Oasis Sign Up"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
        {/* Remaining images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            '/images/Oasis/Home Page.png',
            '/images/Oasis/Search Page (Posts).png',
            '/images/Oasis/View Itinerary page - day 1.png',
            '/images/Oasis/Post Page (Image).png',
            '/images/Oasis/Profile Page.png',
            "/images/Oasis/DM's Page.png",
            '/images/Oasis/Notification Page Private Acc.png',
            '/images/Oasis/Settings Page - Account.png',
          ].map((src, i) => (
            <img
              key={src}
              src={src}
              alt="Oasis screenshot"
              className="w-full h-auto"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OasisCaseStudy;
