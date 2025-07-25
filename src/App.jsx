import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
    
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
