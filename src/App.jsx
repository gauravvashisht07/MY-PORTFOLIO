import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiC, SiCplusplus, SiTypescript } from 'react-icons/si';

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-300" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-300" /> },
  { name: "React", icon: <FaReact className="text-cyan-300" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-300" /> },
  { name: "C", icon: <SiC className="text-blue-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-300" /> },
  { name: "Java", icon: <FaJava className="text-red-400" /> },
];

export default function App() {
  React.useEffect(() => {
    const handleClick = (e) => {
      if (e.target.tagName === 'A' && e.target.hash) {
        const el = document.querySelector(e.target.hash);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="font-sans bg-gradient-to-br from-[#181824] via-[#23243a] to-[#181824] text-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-[#23243a]/80 backdrop-blur-md shadow p-6 sticky top-0 z-10 transition-all duration-300 border-b border-[#2d2e4a]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-white">Gaurav Sharma</h1>
          <nav className="space-x-6 text-sm">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#23243a] to-[#181824] text-white text-center overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/4 top-0 w-72 h-72 bg-purple-700 opacity-30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-cyan-600 opacity-30 rounded-full blur-3xl animate-pulse delay-200"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down drop-shadow-lg">
          Hi, I'm Gaurav Sharma <span className="inline-block animate-wave">👋</span>
        </h2>
        <p className="text-xl max-w-xl mx-auto animate-fade-in-up text-gray-300">
          A passionate full-stack developer building real-world projects and exploring AI.
        </p>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 py-16 px-4 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-cyan-300">About Me</h3>
        <div className="bg-[#23243a]/70 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-[#2d2e4a]">
          <p className="text-lg leading-7 text-gray-200">
            I'm a Computer Science student passionate about full-stack development. Currently building real-world projects and exploring AI. I love solving real-world problems through code.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24 py-16 px-4 bg-transparent max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-cyan-300">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {skills.map(skill => (
            <div
              key={skill.name}
              className="bg-[#23243a]/70 backdrop-blur-lg p-5 rounded-xl shadow-lg border border-[#2d2e4a] hover:border-cyan-400 transition-all flex flex-col items-center gap-2 group"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">{skill.icon}</span>
              <span className="font-medium text-gray-100">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-cyan-300">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#23243a]/70 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-[#2d2e4a] hover:border-cyan-400 transition-all hover:-translate-y-1 group">
            <h4 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">E-Commerce Website</h4>
            <p className="text-sm mb-2 text-gray-300">A responsive e-commerce platform with modern UI and backend integration.</p>
            <p className="text-sm mb-4 font-medium text-gray-400">Tech Used: HTML, CSS, Tailwind CSS, Node.js, MongoDB</p>
            <a href="https://github.com/gauravvashisht07" className="text-cyan-400 hover:underline">View on GitHub</a>
          </div>
          <div className="bg-[#23243a]/70 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-[#2d2e4a] hover:border-cyan-400 transition-all hover:-translate-y-1 group">
            <h4 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Lost and Found Website</h4>
            <p className="text-sm mb-2 text-gray-300">A platform to report and find lost items with filtering features.</p>
            <p className="text-sm mb-4 font-medium text-gray-400">Tech Used: HTML, Tailwind CSS, JavaScript, Node.js, MongoDB</p>
            <a href="https://github.com/gauravvashisht07" className="text-cyan-400 hover:underline">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 py-16 px-4 bg-transparent max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6 text-cyan-300">Contact</h3>
        <div className="bg-[#23243a]/70 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-[#2d2e4a]">
          <p className="mb-4 text-gray-200">Feel free to reach out via my social profiles below.</p>
          <div className="flex justify-center space-x-8 text-3xl">
            <a href="https://github.com/gauravvashisht07" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/gaurav-sharma90151/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><FaLinkedin /></a>
            <a href="https://www.instagram.com/gauravvashisht7/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors"><FaInstagram /></a>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Gaurav Sharma. All rights reserved.
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-30px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-down { animation: fade-in-down 1s both; }
        .animate-fade-in-up { animation: fade-in-up 1.2s both; }
        @keyframes wave {
          0%, 60%, 100% { transform: rotate(0deg);}
          10%, 30% { transform: rotate(14deg);}
          20% { transform: rotate(-8deg);}
          40% { transform: rotate(-4deg);}
          50% { transform: rotate(10deg);}
        }
        .animate-wave { display: inline-block; animation: wave 2s infinite; transform-origin: 70% 70%; }
      `}</style>
    </div>
  );
}