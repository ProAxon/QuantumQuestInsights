import React from "react";

const ScrollingBanner = () => {
  const features = [
    "DevOps Automation",
    "Agentic AI",
    "Hyper-Automation",
    "Open Banking API's",
    "AI-Augmented Tools",
    "Omnichannel Engagement",
    "Data Mesh",
    "AI Workforce Agents",
    "Real-Time Fraud Detection",
    "Zero-Trust Architecture",
    "Quantum Cryptography",
    "Edge AI",
    "Digital Twin",
    "Network as a Service (NaaS)",
    "AI Sourcing",
    "Voice Commerce",
    "Predictive Logistics",
  ];

  return (
    <>
      {/* Inline animation without external CSS file */}
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .scroll-animate {
            display: inline-block;
            animation: scroll-left 20s linear infinite;
            white-space: nowrap;
          }
        `}
      </style>

      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 overflow-hidden">
        <div className="scroll-animate">
          {[...features, ...features].map((feature, index) => (
            <span key={index} className="inline-block mr-12 text-2xl font-bold">
              ★ {feature}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrollingBanner;
