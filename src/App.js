import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import OasisCaseStudy from './components/OasisCaseStudy';
import LitterlyCaseStudy from './components/LitterlyCaseStudy';

function App() {
  const [route, setRoute] = useState(window.location.hash || '');

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="App">
      <Navigation />
      {/* spacer equal to navbar height so fixed nav doesn't cover page content */}
      <div className="h-16" aria-hidden="true" />
      {route === '#/oasis' ? (
        <OasisCaseStudy />
      ) : route === '#/litterly' ? (
        <LitterlyCaseStudy />
      ) : (
        <>
          <Home />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;

