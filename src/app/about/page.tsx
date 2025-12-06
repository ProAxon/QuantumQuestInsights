import Navigation from '@/components/Navigation';
import FooterCTA from '@/components/FooterCTA';

const coreValues = [
  {
    title: 'Integrity',
    description:
      'We operate with unwavering honesty, transparency, and ethical rigor in every research engagement. Our clients trust us because we prioritize truth over convenience, ensuring data accuracy and unbiased insights.',
    color: 'orange',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description:
      'We pioneer cutting-edge methodologies that merge AI, market intelligence, and strategic foresight. By constantly evolving our frameworks, we deliver forward-looking insights that anticipate market shifts before they happen.',
    color: 'purple',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Collaboration',
    description:
      'We believe the best outcomes emerge from deep partnership. By actively listening and co-creating with clients, we ensure our insights are not just accurate—but actionable, relevant, and aligned with your strategic vision.',
    color: 'cyan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const colorClasses: Record<string, string> = {
  orange: 'bg-orange-500/10 group-hover:bg-orange-500/20',
  purple: 'bg-purple-500/10 group-hover:bg-purple-500/20',
  cyan: 'bg-cyan-500/10 group-hover:bg-cyan-500/20',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative py-24 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-12">
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-6">
              WHO WE ARE
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              We blend qualitative expertise with
            </h1>
            <h2 className="text-4xl lg:text-6xl font-light italic text-gray-300 leading-none">
              quantitative insights!
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto">
            <blockquote className="text-lg lg:text-xl text-slate-200 leading-relaxed font-medium">
              “At Quantum Quest Insights, integrity, innovation, and collaboration are at the core of everything we do. These values drive our decision-making processes and foster a culture of excellence within the company.
              <br />
              <br />
              Ethical Standards: We uphold the highest ethical standards in our research practices, ensuring transparency, accuracy, and integrity in all our interactions. Our commitment to ethical conduct is non-negotiable.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              These guiding principles shape every insight we deliver and every partnership we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-opacity-50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors ${colorClasses[value.color]}`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
}

