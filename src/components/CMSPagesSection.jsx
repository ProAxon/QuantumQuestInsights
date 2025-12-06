import React from 'react';

const CMSPagesSection = () => {

  const pages = [
    {
      title: " Vendor and Client Engagement",
      imageUrl:
        "https://images.unsplash.com/photo-1714974528737-3e6c7e4d11af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
    },
    {
      title: " Data Collection",
      imageUrl:
        "https://images.unsplash.com/photo-1529078155058-5d716f45d604?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
    },

    {
      title: "Data Validation and Cross Verification",
      imageUrl:
        "https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
    {
      title: "Market & Competitive Analysis",
      imageUrl:
        "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1106",
    },
    {
      title: "Vendor Positioning with Quantum Scope",
      imageUrl:
        "https://images.unsplash.com/photo-1613759612065-d5971d32ca49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1150",
    },
    {
      title: "Insights and Advisory",
      imageUrl:
        "https://images.unsplash.com/photo-1518888154325-928734ae11b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    },
  ];


  return (
    <section className="relative bg-[linear-gradient(135deg,_#342885_0%,_#4851CC_30%,_#18CBFF_60%,_#2DECBE_100%)] text-white overflow-hidden pt-20 pb-20">
      {/* Grid Background */}
      {/* <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRkYwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRkYwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxIiBmaWxsPSIjRkYwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')]"></div> */}

      <div className="container-max relative z-10">


        <div className="text-center mb-16 px-4 font-[Inter]">
          <span className="text-orange-400 text-sm font-extrabold uppercase tracking-widest inline-block mb-3 animate-pulse hover:text-orange-300 transition-colors">
            ✦ QUANTUM 360
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 mb-6 hover:from-pink-500 hover:to-orange-400 transition-all duration-300"></h2>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 mb-6">
            Market Intelligence Framework
          </h2>
          <p className="text-slate-200 text-lg md:text-xl leading-relaxed mt-6 max-w-4xl mx-auto">
            Quantum 360 delivers a holistic market intelligence framework that empowers organizations with a complete view of their competitive landscape.
            <br className="hidden md:block" />
            It provides competitive intelligence by tracking investments, organizational changes, and strategies of key players. Through market understanding, it delivers insights on market share, opportunity forecasts, and volume analysis to identify growth avenues.
            <br className="hidden md:block" />
            It strengthens product intelligence, offering guidance on pricing strategies, product introductions, and promotional activities, while enabling comprehensive customer understanding through behavior analysis, product adoption, loyalty, and satisfaction metrics.
          </p>
        </div>

        {/* Utility Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* 404 Card */}
          <div className="group relative rounded-xl overflow-hidden border border-white/20 shadow-xl bg-white/10 backdrop-blur-sm transition-all duration-500 transform hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1605902394069-ff2ae2430e62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331"
              alt="404 Page"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h4 className="text-lg font-semibold text-white"> Competitive Intelligence</h4>
            </div>
          </div>

          {/* Password Protected Card */}
          <div className="group relative rounded-xl overflow-hidden border border-white/20 shadow-xl bg-white/10 backdrop-blur-sm transition-all duration-500 transform hover:scale-105
">
            <img
              src="https://images.unsplash.com/photo-1728300250509-f7b954491905?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1182"
              alt="Password Protected"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h4 className="text-lg font-semibold text-white">Market Understanding</h4>
            </div>
          </div>

          {/* Sign Up Card */}
          <div className="group relative rounded-xl overflow-hidden border border-white/20 shadow-xl bg-white/10 backdrop-blur-sm transition-all duration-500 transform hover:scale-105
">
            <img
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
              alt="Sign Up"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h4 className="text-lg font-semibold text-white">Product Intelligence</h4>
            </div>
          </div>

          {/* Sign In Card */}
          <div className="group relative rounded-xl overflow-hidden border border-white/20 shadow-xl bg-white/10 backdrop-blur-sm transition-all duration-500 transform hover:scale-105
">
            <img
              src="https://plus.unsplash.com/premium_photo-1723914142569-4eab32fe384a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1098"
              alt="Sign In"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h4 className="text-lg font-semibold text-white">Customer Understanding</h4>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-20'></div>

      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pages.map((page, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-xl hover:scale-[1.03] transition-transform duration-300 bg-[#1C1A35 ]"
            >
              <img
                src={page.imageUrl}
                alt={page.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold">{page.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default CMSPagesSection;