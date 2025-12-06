import React from "react";

const InnerPagesSection = () => {
  const pages = [
    {
      title: " Vendor and Client Engagement",
      imageUrl:
        "https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683949477d96ecf045ba517b_Mask%20group%20-%202025-05-30T112752.952-p-800.webp",
    },
    {
      title: " Data Collection",
      imageUrl:
        "https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683833863fee3ce9f9851348_Mask%20group%20-%202025-05-29T154409.668-p-500.webp",
    },

    {
      title: "Data Validation and Cross Verification",
      imageUrl:
        "https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/68394947972e2c854533545d_Mask%20group%20-%202025-05-30T112810.717-p-500.webp",
    },
    {
      title: "Market & Competitive Analysis",
      imageUrl:
        "https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834317d69273f267164f9_Mask%20group%20-%202025-05-29T154645.600-p-500.webp",
    },
    {
      title: "Vendor Positioning with Quantum Scope",
      imageUrl:
        "https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834312a74c48a373323e6_Mask%20group%20-%202025-05-29T154653.098-p-500.webp",
    },
    {
      title: "Insights and Advisory",
      imageUrl:
        "https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/68383431a825a392dcf32514_Mask%20group%20-%202025-05-29T154705.026-p-500.webp",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[rgba(9,14,23,1)] to-[rgba(28,26,53,1)] text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* <div className="text-center mb-16">
          <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            ⚡ UNIQUE INNER PAGES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Great Collection{" "}
            <span className="italic text-purple-300">Of Inner Pages</span>
          </h2>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pages.map((page, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-xl hover:scale-[1.03] transition-transform duration-300 bg-[#0b0f1a]"
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

export default InnerPagesSection;
