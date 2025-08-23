import React from "react";
import { FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0f1b] to-[#1b1b2f] text-white px-10 py-20 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden font-sans">
      {/* Portfolio Label */}
      <div className="absolute top-8 left-8 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500">
        Portfolio
      </div>

      {/* Social Icons */}
      <div className="absolute top-8 right-8 flex gap-5 text-white text-xl">
        <a href="https://www.linkedin.com/in/debaleena-chakraborty56/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-fuchsia-400 transition duration-300" />
        </a>
        <a href="https://github.com/debachaks" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-fuchsia-400 transition duration-300" />
        </a>
      </div>

      {/* Left Content - Brief */}
      <div className="w-full lg:w-1/2 max-w-xl z-10 mb-16 lg:mb-0">
        <h1 className="text-7xl font-extrabold tracking-wide mb-4 leading-tight text-white">
          Debaleena Chakraborty
        </h1>
        
        <p className="text-slate-300 text-lg leading-relaxed tracking-wide mb-6">
          A data-driven engineer passionate about turning complex data into actionable insights. Currently crafting clean pipelines, smart solutions, and scalable systems.
        </p>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/10ioU0WrBaaVytA8quliB5n1hvMxncBW4/view?usp=sharing"
          download
          className="inline-block bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
        >
          Download Resume
        </a>
      </div>

            {/* Right Content - Detailed About Me */}
      <div className="w-full lg:w-1/2 max-w-xl flex flex-col items-center">
        <img
          src="projects/profile.jpg" // Make sure this path is correct
          alt="Debaleena Chakraborty"
          className="w-48 h-48 rounded-full object-cover border-4 border-fuchsia-500 mb-8 shadow-lg"
        />
        <h2 className="text-5xl font-bold text-center text-white mb-10 tracking-wide font-mono">
          About Me
        </h2>
        <div className="bg-[#202034] rounded-xl p-6 shadow-md text-slate-300 text-md leading-relaxed space-y-4">
          <p>
            Hey! I'm Debaleena Chakraborty, a curious and driven researcher-engineer working at the crossroads of <span className="text-fuchsia-300 font-medium">Data Engineering</span>, <span className="text-fuchsia-300 font-medium">Machine Learning</span>, and <span className="text-fuchsia-300 font-medium">Signal Processing</span>.
            I love designing clean pipelines, experimenting with models, and building intelligent systems that turn raw data into meaningful, scalable solutions — with a strong emphasis on impact, reliability, and real-world relevance.
          </p>
          <p>
            As a <span className="text-fuchsia-300 font-medium">Data Enthusiat</span>, I enjoy designing robust data architectures, building ETL pipelines, and working with cloud platforms to ensure data is clean, accessible, and insightful. From optimizing queries to handling big data workflows, I strive to bridge the gap between raw data and actionable insights.
          </p>
          <p>
            I am also <span className="text-fuchsia-300 font-medium">researcher</span> at heart, and love working on problems that leverage Machine Learning to solve real life problems.
          </p>
        </div>
      </div>


      {/* Scroll Down Indicator */}
      <a href="#education">
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-2xl animate-bounce opacity-60 hover:opacity-100 transition-opacity duration-300">
          <FaArrowDown />
        </div>
      </a>
    </section>
  );
};

export default Hero;
