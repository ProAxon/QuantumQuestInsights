// src/components/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ title, imageUrl }) => {
  // Clean URL: remove trailing spaces
  const cleanUrl = imageUrl.trim();

  return (
    <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
      <img
        src={cleanUrl}
        alt={title}
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      </div>
    </div>
  );
};

export default ServiceCard;