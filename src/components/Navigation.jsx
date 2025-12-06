'use client';

// src/components/Navigation.jsx
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeDropdownTab, setActiveDropdownTab] = useState('industry');
  const dropdownRef = useRef(null);
  const router = useRouter();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const servicesData = {
    industry: [
      "Software Development & Implementation",
      "Enterprise Data Strategy & Governance",
      "Connected Devices & Edge Technologies",
      "Data Analytics & AI Solutions",
      "IT Architecture & Strategic Planning",
      "Enterprise Risk & Compliance Management",
      "Business Process Optimization & Automation",
      "Human Capital & Workforce Technology",
      "Industry 4.0 & Engineering Tech",
      "Financial Services & Digital Banking",
      "Green Tech & Sustainable Solutions",
      "Cloud Infrastructure & Network Solutions",
      "Unified Communication & Collaboration Platforms",
      "RegTech & Compliance Solutions",
      "Digital Procurement & Supply Solutions",
      "Customer Experience & Marketing Technologies",
      "Cybersecurity & Data Protection",
      "Digital Commerce & Retail Innovation"
    ],
    geography: [
      { name: "North America", desc: "Deep market intelligence across US & Canada." },
      { name: "Europe", desc: "Expertise in GDPR, fintech, and industrial digitalization." },
      { name: "Latin America", desc: "Rapidly growing tech adoption across Brazil & Mexico." },
      { name: "Middle East", desc: "Smart city and energy digital transformation expertise." },
      { name: "Asia Pacific", desc: "AI and robotics leadership across China, Japan, Korea." },
      { name: "South Asia", desc: "Mobile-first SaaS growth, including India & Bangladesh." },
      { name: "Africa", desc: "Digital leapfrogging, fintech innovation & infra growth." }
    ],
    industryType: [
      { type: "SMB", desc: "Fast deployment, cost-efficient, scalable growth." },
      { type: "Large", desc: "Structured digital transformation and integration." },
      { type: "Enterprise", desc: "Global consistency, governance & long-term value." }
    ],
    changeMaker: [
      { role: "Strategic", titles: "CEO, CMO, CTO, CFO", value: "Driving transformation and market expansion." },
      { role: "Product", titles: "VP Product, VP Architect, VP Product Marketing", value: "Building winning products with market insights." },
      { role: "Marketing", titles: "CMO, VP Sales", value: "Revenue growth through data-led customer engagement." },
      { role: "Finance | Compliance | Governance", titles: "CFO, CCO", value: "Ensuring financial health, compliance & ROI." }
    ]
  };

  const dropdownTabs = [
    { id: 'industry', label: 'Industry' },
    { id: 'geography', label: 'Geography' },
    { id: 'industryType', label: 'Industry Type' },
    { id: 'changeMaker', label: 'Change Makers' }
  ];

  const handleServiceClick = (tab) => {
    setIsServicesDropdownOpen(false);
    router.push(`/services?tab=${tab}`);
  };

  const navItems = [
    { name: 'Home', to: '/', isExternal: false },
    { name: 'About', to: '/about', isExternal: false },
    { name: 'Who We Serve', to: '/services', isExternal: false },
    { name: 'Blog', to: '/blog', isExternal: false },
    { name: 'Contact', to: '/contact', isExternal: false },
  ];

  const renderDropdownContent = () => {
    switch (activeDropdownTab) {
      case 'industry':
        // Split into 3 columns
        const col1 = servicesData.industry.slice(0, 6);
        const col2 = servicesData.industry.slice(6, 12);
        const col3 = servicesData.industry.slice(12, 18);
        
        return (
          <div className="grid grid-cols-3 gap-4">
            <div>
              {col1.map((service, idx) => (
                <button
                  key={idx}
                  onClick={() => handleServiceClick('industry')}
                  className="block text-left text-slate-300 hover:text-white text-sm py-1.5 transition-colors w-full"
                >
                  • {service}
                </button>
              ))}
            </div>
            <div>
              {col2.map((service, idx) => (
                <button
                  key={idx}
                  onClick={() => handleServiceClick('industry')}
                  className="block text-left text-slate-300 hover:text-white text-sm py-1.5 transition-colors w-full"
                >
                  • {service}
                </button>
              ))}
            </div>
            <div>
              {col3.map((service, idx) => (
                <button
                  key={idx}
                  onClick={() => handleServiceClick('industry')}
                  className="block text-left text-slate-300 hover:text-white text-sm py-1.5 transition-colors w-full"
                >
                  • {service}
                </button>
              ))}
            </div>
          </div>
        );

      case 'geography':
        return (
          <div className="grid grid-cols-2 gap-4">
            {servicesData.geography.map((geo, idx) => (
              <button
                key={idx}
                onClick={() => handleServiceClick('geography')}
                className="text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <h4 className="text-white font-semibold mb-1">{geo.name}</h4>
                <p className="text-slate-400 text-xs">{geo.desc}</p>
              </button>
            ))}
          </div>
        );

      case 'industryType':
        return (
          <div className="grid grid-cols-3 gap-4">
            {servicesData.industryType.map((type, idx) => (
              <button
                key={idx}
                onClick={() => handleServiceClick('industryType')}
                className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <h4 className="text-white font-bold text-lg mb-2">{type.type}</h4>
                <p className="text-slate-400 text-xs">{type.desc}</p>
              </button>
            ))}
          </div>
        );

      case 'changeMaker':
        return (
          <div className="grid grid-cols-2 gap-4">
            {servicesData.changeMaker.map((maker, idx) => (
              <button
                key={idx}
                onClick={() => handleServiceClick('changeMaker')}
                className="text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <h4 className="text-white font-semibold mb-1">{maker.role}</h4>
                <p className="text-slate-400 text-xs mb-2">
                  <strong>Titles:</strong> {maker.titles}
                </p>
                <p className="text-slate-500 text-xs">{maker.value}</p>
              </button>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <nav className="relative z-20 flex items-center justify-between px-6 lg:px-14 py-4 mt-6">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-3">
        <div className="flex items-center justify-center">
          <img src="/logo-bg.png" alt="Quantum Quest Insights" className="h-16 w-auto" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold text-white">QUANTUM</span>
          <span className="text-xl font-bold text-white -mt-1">QUEST INSIGHTS</span>
          <span className="text-[10px] text-gray-300 tracking-widest mt-0.5">UNVEILING INSIGHTS, UNLOCKING GROWTH</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8 font-medium relative">
        {navItems.map((item) => {
          if (item.name === 'Who We Serve') {
            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
                ref={dropdownRef}
              >
                <Link
                  href={item.to}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {item.name}
                </Link>

                {/* Two-Panel Dropdown */}
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-[#1C1A35] border border-slate-700 rounded-xl shadow-2xl z-50 flex overflow-hidden">
                    {/* Left Panel - Tabs */}
                    <div className="w-48 bg-[#151329] border-r border-slate-700 p-4">
                      <h4 className="text-orange-400 text-xs font-bold tracking-wider mb-4">
                        WHO WE SERVE
                      </h4>
                      <div className="space-y-2">
                        {dropdownTabs.map((tab) => (
                          <button
                            key={tab.id}
                            onMouseEnter={() => setActiveDropdownTab(tab.id)}
                            onClick={() => handleServiceClick(tab.id)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                              activeDropdownTab === tab.id
                                ? 'bg-cyan-500/20 text-white font-semibold'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Right Panel - Content */}
                    <div className="flex-1 p-6 max-h-96 overflow-y-auto">
                      {renderDropdownContent()}
                    </div>
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.to}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* CTA Button - Desktop */}
      <Link href="/contact">
        <button className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium shadow transition-colors">
          Get a Quote
        </button>
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden text-white text-2xl focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[rgba(9,14,23,0.95)] backdrop-blur-md lg:hidden z-50 border-t border-slate-800">
          <div className="flex flex-col space-y-4 p-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.to}
                className="text-white hover:text-orange-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;