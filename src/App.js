import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

