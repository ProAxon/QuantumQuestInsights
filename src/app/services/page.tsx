'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import FooterCTA from '@/components/FooterCTA';

const MapPinIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const ZapIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const TargetIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <circle cx="12" cy="12" r="6" strokeWidth={2} />
    <circle cx="12" cy="12" r="2" strokeWidth={2} />
  </svg>
);

const BuildingIcon = ({ size = 'w-10 h-10' }) => (
  <svg className={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const tabs = ['industry', 'geography', 'industryType', 'changeMaker'] as const;

const services = [
  { name: 'Software Development & Implementation', desc: 'Building robust and scalable applications tailored to your business goals.', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80' },
  { name: 'Enterprise Data Strategy & Governance', desc: 'Transforming data into actionable insights through governance and strategy.', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80' },
  { name: 'Connected Devices & Edge Technologies', desc: 'Empowering IoT ecosystems with intelligent edge solutions.', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80' },
  { name: 'Data Analytics & AI Solutions', desc: 'Driving innovation through predictive analytics and machine learning.', img: '/data_analytics.jpeg' },
  { name: 'IT Architecture & Strategic Planning', desc: 'Designing future-ready digital frameworks for sustainable growth.', img: 'https://images.unsplash.com/photo-1562601553-b67e9e26f364?auto=format&fit=crop&w=800&q=80' },
  { name: 'Enterprise Risk & Compliance Management', desc: 'Mitigating risk with proactive compliance and regulatory strategies.', img: '/enterprise_data_strategy.jpeg' },
  { name: 'Business Process Optimization & Automation', desc: 'Simplifying operations with workflow automation and intelligent systems.', img: '/bpm.jpeg' },
  { name: 'Human Capital & Workforce Technology', desc: 'Empowering teams with digital HR and workforce optimization tools.', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80' },
  { name: 'Industry 4.0 & Engineering Tech', desc: 'Revolutionizing industries through smart manufacturing and automation.', img: 'https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?auto=format&fit=crop&w=1170&q=80' },
  { name: 'Financial Services & Digital Banking', desc: 'Modernizing finance through secure and seamless digital solutions.', img: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&w=1170&q=80' },
  { name: 'Green Tech & Sustainable Solutions', desc: 'Driving sustainability through innovative and eco-friendly technologies.', img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80' },
  { name: 'Cloud Infrastructure & Network Solutions', desc: 'Seamless cloud adoption and secure network management services.', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80' },
  { name: 'Unified Communication & Collaboration Platforms', desc: 'Bringing teams together through intelligent communication tools.', img: '/unified_communication.jpeg' },
  { name: 'RegTech & Compliance Solutions', desc: 'Enhancing transparency and control with advanced regulatory tech.', img: 'https://plus.unsplash.com/premium_photo-1661696766614-49a79483876c?auto=format&fit=crop&w=1170&q=80' },
  { name: 'Digital Procurement & Supply Solutions', desc: 'Optimizing procurement cycles with smart digital integrations.', img: '/digital_procurement.jpeg' },
  { name: 'Customer Experience & Marketing Technologies', desc: 'Delivering exceptional digital journeys through AI-driven engagement.', img: '/customer_exp.jpeg' },
  { name: 'Cybersecurity & Data Protection', desc: 'Protecting digital assets with end-to-end cybersecurity frameworks.', img: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80' },
  { name: 'Digital Commerce & Retail Innovation', desc: 'Redefining shopping experiences through next-gen retail tech.', img: '/digital_commerce.jpeg' },
];

const geographies = [
  { name: 'North America', desc: 'Deep market intelligence across US & Canada.', icon: <MapPinIcon /> },
  { name: 'Europe', desc: 'Expertise in GDPR, fintech, and industrial digitalization.', icon: <GlobeIcon /> },
  { name: 'Latin America', desc: 'Rapidly growing tech adoption across Brazil & Mexico.', icon: <TrendingUpIcon /> },
  { name: 'Middle East', desc: 'Smart city and energy digital transformation expertise.', icon: <ZapIcon /> },
  { name: 'Asia Pacific', desc: 'AI and robotics leadership across China, Japan, Korea.', icon: <TargetIcon /> },
  { name: 'South Asia', desc: 'Mobile-first SaaS growth, including India & Bangladesh.', icon: <GlobeIcon /> },
  { name: 'Africa', desc: 'Digital leapfrogging, fintech innovation & infra growth.', icon: <TrendingUpIcon /> },
];

const industryTypes = [
  { type: 'SMB', desc: 'Fast deployment, cost-efficient, scalable growth.', icon: <BuildingIcon size="w-12 h-12" /> },
  { type: 'Large', desc: 'Structured digital transformation and integration.', icon: <BuildingIcon size="w-14 h-14" /> },
  { type: 'Enterprise', desc: 'Global consistency, governance & long-term value.', icon: <BuildingIcon size="w-16 h-16" /> },
];

const changeMakers = [
  { role: 'Strategic', titles: 'CEO, CMO, CTO, CFO', value: 'Driving transformation and market expansion.', icon: <TargetIcon /> },
  { role: 'Product', titles: 'VP Product, VP Architect, VP Product Marketing', value: 'Building winning products with market insights.', icon: <ZapIcon /> },
  { role: 'Marketing', titles: 'CMO, VP Sales', value: 'Revenue growth through data-led customer engagement.', icon: <TrendingUpIcon /> },
  { role: 'Finance | Compliance | Governance', titles: 'CFO, CCO', value: 'Ensuring financial health, compliance & ROI.', icon: <ShieldIcon /> },
];

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="py-20 px-6 text-white">Loading services…</div>}>
      <ServicesContent />
    </Suspense>
  );
}

function ServicesContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('industry');

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && tabs.includes(tabParam as any)) {
      setActiveTab(tabParam as (typeof tabs)[number]);
    }
  }, [searchParams]);

  return (
    <div
      className="min-h-screen flex flex-col text-white"
      style={{ background: 'linear-gradient(135deg, #342885 0%, #4851CC 30%, #28778fff 60%, #2e9c82ff 100%)' }}
    >
      <Navigation />

      <main className="flex-grow py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg">
            OUR EXPERTISE
          </span>
          <h1 className="text-5xl font-bold mt-6 mb-4">Who We Serve</h1>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to empower your organization with strategic insights and technological excellence.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-cyan-500 text-white shadow-xl scale-105'
                    : 'bg-white/15 text-slate-100 hover:bg-white/25 hover:scale-105'
                }`}
              >
                {tab === 'industry'
                  ? 'Industry'
                  : tab === 'geography'
                  ? 'Geography'
                  : tab === 'industryType'
                  ? 'Industry Type'
                  : 'Change Makers'}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/30 shadow-2xl">
          {activeTab === 'industry' && (
            <>
              <h2 className="text-3xl font-bold mb-8 text-white">Our Services Across Industries</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <div
                    key={service.name}
                    className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <img src={service.img} alt={service.name} className="h-48 w-full object-cover" />
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-3 text-white leading-tight">{service.name}</h4>
                      <p className="text-base text-slate-200 leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'geography' && (
            <>
              <h2 className="text-3xl font-bold mb-8 text-white">Global Reach. Local Expertise.</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {geographies.map((geo) => (
                  <div
                    key={geo.name}
                    className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-xl p-6 border border-white/30 hover:scale-105 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center"
                  >
                    <div className="text-cyan-400 mb-4">{geo.icon}</div>
                    <h3 className="text-lg font-bold text-white">{geo.name}</h3>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'industryType' && (
            <>
              <h2 className="text-3xl font-bold mb-8 text-white">Solutions for Every Organization Size</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {industryTypes.map((size) => (
                  <div
                    key={size.type}
                    className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-xl p-8 border border-white/30 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center justify-center"
                  >
                    <div className="flex justify-center mb-4 text-cyan-400">{size.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{size.type}</h3>
                    <p className="text-slate-200 mt-2">{size.desc}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'changeMaker' && (
            <>
              <h2 className="text-3xl font-bold mb-8 text-white">Empowering Change Makers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {changeMakers.map((maker) => (
                  <div
                    key={maker.role}
                    className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-xl p-6 border border-white/30 hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-cyan-400">{maker.icon}</div>
                      <h3 className="text-xl font-bold text-white">{maker.role}</h3>
                    </div>
                    <p className="text-sm text-slate-200 mb-3">
                      <strong className="text-white">Titles: </strong>
                      {maker.titles}
                    </p>
                    <p className="text-sm text-slate-300">
                      <strong className="text-white">Value Delivered: </strong>
                      {maker.value}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <FooterCTA />
    </div>
  );
}

