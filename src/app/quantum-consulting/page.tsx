import Link from 'next/link';
import Navigation from '@/components/Navigation';
import FooterCTA from '@/components/FooterCTA';

export default function QuantumConsultingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative py-24 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-4">
            OUR OFFERINGS
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Quantum Consulting</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Provides expert advisory services to optimize technology strategies, streamline operations, and unlock new growth opportunities.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src="https://images.unsplash.com/photo-1590649681928-4b179f773bd5?auto=format&fit=crop&w=1200&q=80"
                alt="Consulting Team Meeting"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What We Offer</h2>
              <p className="text-slate-300 mb-6">
                Our consultants work side-by-side with your leadership to diagnose challenges, design solutions, and implement changes that drive measurable results.
              </p>
              <p className="text-slate-300 mb-6">
                Whether it’s digital transformation, operational efficiency, or strategic planning — we tailor our approach to your unique needs.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mt-6">
                <h3 className="text-xlfont-semibold text-white mb-4">Our Process</h3>
                <ol className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-cyan-400">1.</span> Initial assessment and goal alignment.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-cyan-400">2.</span> Customized strategy development.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-cyan-400">3.</span> Implementation roadmap and execution.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-cyan-400">4.</span> Continuous optimization and KPI tracking.
                  </li>
                </ol>
              </div>
              <Link href="/contact" className="inline-block mt-8">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition">
                  Schedule a Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Technology Strategy', desc: 'Align tech investments with business goals.' },
              { title: 'Process Optimization', desc: 'Streamline operations for maximum efficiency.' },
              { title: 'Digital Transformation', desc: 'Modernize systems and workflows.' },
              { title: 'Change Management', desc: 'Drive adoption and minimize disruption.' },
              { title: 'Go-to-Market Strategy', desc: 'Launch products with precision and impact.' },
              { title: 'Performance Measurement', desc: 'Track ROI and refine strategies.' },
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

