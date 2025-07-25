import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-[#1b1b2f] to-[#1b1b2f] text-white px-10 py-20 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden font-sans">
      
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-center text-fuchsia-400 mb-20 tracking-wide font-mono">
          Get in Touch
        </h2>
        <p className="text-slate-300 mb-3 text-lg">
          debaleena82001@gmail.com
        </p>
        <p className="text-slate-300 mb-6 text-lg">+1 6027431408</p>
        <a
          href="https://www.linkedin.com/in/debaleena-chakraborty56/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white-300 border border-fuchsia-500 px-6 py-2 rounded-full hover:bg-fuchsia-600 hover:text-white hover:shadow-md transition-all duration-200"
        >
          LinkedIn Profile
        </a>
      </div>
    </section>
  );
};

export default Contact;
