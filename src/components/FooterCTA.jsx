// src/components/FooterCTA.jsx
import React from 'react';
import Link from 'next/link';

const FooterCTA = () => {
  return (
    <footer
      className="relative text-white overflow-hidden py-4"  
      style={{
        background: "linear-gradient(135deg, #342885 0%, #4851CC 30%, #2d7d96ff 60%, #2a8d76ff 100%)",
      }}
    >
      {/* Soft border separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/10"></div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 lg:px-12 py-4 text-center relative z-10">
        
        {/* Logo */}
        <div className="flex items-center justify-center mb-2">
          <img src="/logo-bg.png" alt="Quantum Quest Insights" className="h-14 w-auto" /> {/* smaller but fits tighter */}
        </div>

        <p className="font-semibold text-lg text-white/90 mb-2 tracking-wide">
          Quantum Quest Insights
        </p>

        {/* CTA Heading */}
        <h2 className="text-[1.45rem] lg:text-3xl font-bold text-white/95 mb-4 leading-tight">
          Want us to boost your company growth?
          <br />
          Get in touch!
        </h2>

        <Link href="/contact" className="inline-block mb-4">
          <button className="bg-white text-indigo-900 hover:bg-gray-100 font-semibold rounded-full px-7 py-3 text-base transition-all duration-300 shadow-md hover:shadow-xl">
            Contact Us
          </button>
        </Link>

        {/* Footer Bottom */}
        <p className="text-white/60 mt-3 text-sm tracking-wide">
          Designed by Quantum Quest Insights.
        </p>
      </div>
    </footer>
  );
};

export default FooterCTA;
