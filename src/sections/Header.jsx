import React from "react";

const Header = () => {
  return (
    <header className="w-full py-4 shadow-md bg-gray-800 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold text-purple-400">Shrey Bishnoi</h1>
        <ul className="flex gap-6 text-sm">
          <li><a href="#hero" className="hover:text-purple-300">Home</a></li>
          <li><a href="#education" className="hover:text-purple-300">Education</a></li>
          <li><a href="#experience" className="hover:text-purple-300">Experience</a></li>
          <li><a href="#projects" className="hover:text-purple-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
