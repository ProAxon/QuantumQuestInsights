// src/components/Header.jsx
import React from "react";
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="relative text-white min-h-screen overflow-hidden">
      <Navigation />

      {/* Centered decorative background image */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-30 pointer-events-none">
        <img
          src="/background.png"
          alt="Background"
          className="w-[120%] max-w-none h-auto object-contain scale-110"
        />
      </div>

      {/* Hero text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none -mt-80 mb-80 px-8">
        <h1
          className="text-center text-[9vw] sm:text-[7vw] md:text-[6vw] lg:text-[5.5vw] font-extrabold uppercase tracking-wide leading-tight"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.4))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            textShadow: "0 0 6px rgba(255,255,255,0.3)",
          }}
        >
          Quantum Quest Insights
        </h1>
      </div>

      <div className="relative z-10 px-6 lg:px-12 pt-32">
        <div className="max-w-4xl mx-auto text-center mt-20">
          <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Innovative IT Solutions & Research
          </span>

          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Quantum Quest Insights <br />
            Research <span className="italic text-gray-200">& Advisory</span>
          </h1>

          {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow transition mb-20">
            Explore Demos
          </button> */}
        </div>
        <br />
        <br />

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-6 max-w-7xl mx-auto pb-16">
          {/* Card 1: AI Dashboard */}
          <div className="relative rounded-2xl p-8 border border-white/20 shadow-xl bg-white/10 backdrop-blur-sm w-full md:w-[32%] hover:scale-[1.02] transition-transform duration-300">
            <div className="text-center mb-6">
              <span className="text-orange-400 text-xs font-medium tracking-wider">MISSION</span>
              {/* <h2 className="text-xl lg:text-2xl font-bold mt-3 mb-4 leading-snug text-white">
                AI Dashboard <br />
                <span className="text-gray-300">Insights & Analytics</span>
              </h2> */}
              <p className="text-slate-100 text-base font-bold max-w-sm mx-auto mb-6">
                To provide transformative insights and market dynamics, empowering global vendors/stakeholders with strategic solutions to grow, compete, and prosper.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/20 mt-6">
              <img
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=600&h=300&q=85"
                alt="AI Dashboard with data visualization"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Card 2: Workflow Automation */}
          <div className="relative rounded-2xl p-8 border border-white/20 shadow-xl bg-white/10 backdrop-blur-sm w-full md:w-[32%] hover:scale-[1.02] transition-transform duration-300">
            <div className="text-center mb-6">
              <span className="text-orange-400 text-xs font-medium tracking-wider">VISION</span>
              {/* <h2 className="text-xl lg:text-2xl font-bold mt-3 mb-4 leading-snug text-white">
                Workflow Automation <br />
                <span className="text-gray-300">Boost Productivity</span>
              </h2> */}
              <p className="text-slate-100 text-base font-bold max-w-sm mx-auto mb-6">
                We envision a future to pioneer in research market upholding a sense of trust and reliability amongst global ICT leaders.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/20 mt-6">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
                alt="Business automation and workflow"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Card 3: Cloud Native */}
          <div className="relative rounded-2xl p-8 border border-white/20 shadow-xl bg-white/10 backdrop-blur-sm w-full md:w-[32%] hover:scale-[1.02] transition-transform duration-300">
            <div className="text-center mb-6">
              <span className="text-orange-400 text-xs font-medium tracking-wider">OBJECTIVE</span>
              {/* <h2 className="text-xl lg:text-2xl font-bold mt-3 mb-4 leading-snug text-white">
                Cloud Native <br />
                <span className="text-gray-300">Deployments</span>
              </h2> */}
              <p className="text-slate-100 text-base font-bold max-w-sm mx-auto mb-6">
                Our key objectives include pushing the boundaries of research, expanding our global reach, and fostering collaboration with leading experts.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/20 mt-6">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
                alt="Cloud computing and server infrastructure"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </header>
  );
};

export default Header;