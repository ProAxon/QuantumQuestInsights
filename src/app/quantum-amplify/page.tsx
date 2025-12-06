import Link from 'next/link';
import Navigation from '@/components/Navigation';
import FooterCTA from '@/components/FooterCTA';

export default function QuantumAmplifyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative py-24 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-4">
            OUR OFFERINGS
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Quantum Amplify</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Provides strategic marketing support to help vendors strengthen their market presence and maximize impact.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1714229505922-0ab8148bc2bf?auto=format&fit=crop&w=600&h=300&q=85"
                alt="Marketing Strategy Session"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What We Provide</h2>
              <p className="text-slate-300 mb-6">
                Quantum Amplify provides comprehensive marketing assistance to global ICT vendors, enabling them to strengthen visibility and accelerate market outreach.
              </p>
              <p className="text-slate-300 mb-6">
                Our support includes blogs, webinars, events, whitepapers, newsletters, case studies, digital campaigns, and social media promotions — all tailored to amplify vendor presence.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mt-6">
                <h3 className="text-xl font-semibold text-white mb-4">Our Approach</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">•</span> Create awareness and communicate product updates.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">•</span> Highlight innovations to engage target audiences effectively.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">•</span> Build stronger brand recognition and thought leadership.
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="inline-block mt-8">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition">
                  Start Your Campaign
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Blogs & Articles', desc: 'Thought leadership content to establish authority.' },
              { title: 'Webinars & Events', desc: 'Engage directly with your target audience.' },
              { title: 'Digital Campaigns', desc: 'Targeted ads to drive leads and conversions.' },
              { title: 'Social Media', desc: 'Build community and brand loyalty.' },
              { title: 'Case Studies', desc: 'Showcase real-world success stories.' },
              { title: 'Whitepapers', desc: 'Deep-dive technical content for decision-makers.' },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-xl transition">
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
}

