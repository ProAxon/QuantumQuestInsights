// src/components/FeaturesSection.jsx
import React from 'react';
import Link from 'next/link';

const FeaturesSection = () => {
  return (
    <section
      className="text-white py-20"
      style={{ background: "linear-gradient(135deg, #342885 0%, #4851CC 30%, #2b7a92e3 60%, #36937ee3 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading + Quote */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-16">
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-2">
              We blend qualitative expertise with
            </h2>
            <h2 className="text-4xl lg:text-6xl font-light italic text-gray-300 leading-none">
              quantitative insights!
            </h2>
          </div>

          <div className="flex-1 lg:max-w-xl text-slate-300">
            <blockquote className="text-base lg:text-lg leading-relaxed">
              “At Quantum Quest Insights, integrity, innovation, and collaboration are at the core of everything we do.
              These values drive our decision-making processes and foster a culture of excellence within the company.<br /><br />
              Ethical Standards: We uphold the highest ethical standards in our research practices, ensuring transparency, accuracy, and
              integrity in all our interactions. Our commitment to ethical conduct is non-negotiable.”
            </blockquote>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 shadow-xl hover:shadow-cyan-500/20 transition-transform duration-300">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-5xl font-bold mb-2 text-white">10+</h3>
                <p className="text-slate-300 text-lg">Clients</p>
              </div>
              <div className="w-[200px] h-60 rounded-lg overflow-hidden border border-white/20 bg-white/5 flex items-center justify-center p-2">
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Feature Preview"
                  className="max-h-full w-auto object-contain rounded"
                />
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Ready-to-use pages to launch your website fast.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 shadow-xl hover:shadow-cyan-500/20 transition-transform duration-300">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-5xl font-bold mb-2 text-white">20+</h3>
                <p className="text-slate-300 text-lg">Case Studies</p>
              </div>
              <div className="w-[200px] h-60 rounded-lg overflow-hidden border border-white/20 bg-white/5 flex items-center justify-center p-2">
                <img
                  src="https://images.unsplash.com/photo-1529119513315-c7c361862fc7?auto=format&fit=crop&w=1200&q=80"
                  alt="Feature Preview"
                  className="max-h-full w-auto object-contain rounded"
                />
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Pre-optimized to load your pages faster.
            </p>
          </div>
        </div>

        {/* Our Offerings */}
        <div className="text-center mb-20 mt-40">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Our <span className="text-gray-300">Offerings</span>
          </h3>
        </div>

        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {[
            {
              title: "Quantum Scope",
              img: "/quantum_scope.jpeg",
              desc: "Enables competitive positioning of vendors by analyzing technology capabilities and market share.",
              path: "/quantum-scope"
            },
            {
              title: "Quantum Market Intel",
              img: "/quantum_intel_1.png",
              desc: "Offers in-depth analysis of market share, industry trends, customer segments, and regional dynamics.",
              path: "/quantum-market-intel"
            },
            {
              title: "Quantum Amplify",
              img: "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
              desc: "Provides strategic marketing support to help vendors strengthen their market presence and maximize impact.",
              path: "/quantum-amplify"
            }
          ].map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-xl transition flex flex-col group"
            >
              <div className="h-48 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-white/3">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow justify-between">
                <h3 className="text-center text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                <p className="text-center text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Second row: 2 cards, centered */}
        <div className="flex justify-center gap-10 flex-wrap">
          {[
            {
              title: "Quantum Consulting",
              img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
              desc: "Provides expert advisory services to organizations, helping them optimize technology strategies, streamline operations, and unlock new growth opportunities through tailored research and consulting solutions.",
              path: "/quantum-consulting"
            },
            {
              title: "Quantum 360",
              img: "/quantum_360.png",
              desc: "Delivers comprehensive market insights, including competitive advantage, product intelligence, and customer understanding.",
              path: "/quantum-360"
            }
          ].map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-xl transition flex flex-col w-full max-w-[350px] group"
            >
              <div className="h-48 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-white/3">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow justify-between">
                <h3 className="text-center text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                <p className="text-center text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>


        {/* Research Methodology Section */}
        <div className="mt-40 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Research Methodology</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our 6-step process ensures accurate, data-driven, and actionable intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: "1",
                title: "Vendor & Client Engagement",
                desc: "Initial interaction through briefing sessions, RFIs, and consultations.",
                path: "/research-step-1"
              },
              {
                step: "2",
                title: "Data Collection",
                desc: "Primary and secondary research to gather comprehensive data.",
                path: "/research-step-2"
              },
              {
                step: "3",
                title: "Data Validation & Cross-Verification",
                desc: "Triangulating information to ensure accuracy and reliability.",
                path: "/research-step-3"
              },
              {
                step: "4",
                title: "Market & Competitive Analysis",
                desc: "Assessing innovation, market share, and competitive positioning.",
                path: "/research-step-4"
              },
              {
                step: "5",
                title: "Vendor Positioning with Quantum Scope",
                desc: "Mapping vendors using our proprietary framework.",
                path: "/research-step-5"
              },
              {
                step: "6",
                title: "Insights & Advisory",
                desc: "Delivering actionable intelligence and strategic guidance.",
                path: "/research-step-6"
              }
            ].map((item, i) => (
              <Link
                key={i}
                href={item.path}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-xl transition group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;