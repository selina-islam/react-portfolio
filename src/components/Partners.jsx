// Importing necessary modules
import React from "react";

// Partners component
const Partners = () => {
  // Define an array of partner objects, each with a name and image path
  const partners = [
    { name: "Code Academy", img: "/logos/code-academy.svg" },
    { name: "Adove", img: "/logos/adove.svg" },
    { name: "Coca Cola", img: "/logos/cocacola.svg" },
    { name: "Mattered", img: "/logos/mattered.svg" },
    { name: "National Bank", img: "/logos/national-bank.svg" },
    { name: "Subway", img: "/logos/subway.svg" },
  ];

  // Duplicate the partners array so the marquee animation loops smoothly
  const duplicatedPatterns = [...partners, ...partners];

  return (
    <div className="bg-white py-12 overflow-hidden mt-20">
      {/* Outer container with padding and hidden overflow */}
      <div className="flex animate-marquee whitespace-nowrap overflow-hidden">
        {/* First loop through all partners and display each logo */}
        {duplicatedPatterns.map((partner, index) => (
          <img
            key={index}
            src={partner.img}
            alt={partner.name}
            className="h-8 mx-6 object-contain min-w-[120px] hover:scale-110 transition-transform duration-200 opacity-50 hover:opacity-100"
          />
        ))}

        {/* Second loop to ensure continuous scroll in the marquee */}
        {duplicatedPatterns.map((partner, index) => (
          <img
            key={`duplicate-${index}`}
            src={partner.img}
            alt={partner.name}
            className="h-8 mx-6 object-contain min-w-[120px] hover:scale-110 transition-transform duration-200 opacity-50 hover:opacity-100"
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
