import React from 'react';
import { 
  tilkoLogo,
  spoonLogo,
  hotLogo,
  treatLogo,
  ricespiceNewLogo,
  foodLogo,
  keyfoodLogo,
  brightinnNewLogo,
  thinnaiLogo
} from '../assets';

const Partners: React.FC = () => {
  const partners = [
    // First row
    { id: 1, name: "TILKO", logo: tilkoLogo },
    { id: 2, name: "Spoon", logo: spoonLogo },
    { id: 3, name: "Hot", logo: hotLogo },
    { id: 4, name: "Treat", logo: treatLogo },
    { id: 5, name: "Rice and Spice", logo: ricespiceNewLogo },
    // Second row
    { id: 6, name: "Food Logo", logo: foodLogo },
    { id: 7, name: "Key Food", logo: keyfoodLogo },
    { id: 8, name: "Bright Inn", logo: brightinnNewLogo },
    { id: 9, name: "The Thinnai", logo: thinnaiLogo },
  ];

  return (
    <section className="relative bg-white pt-10 pb-24 px-5 overflow-hidden">
      {/* Dot Pattern Background - expanded with 2 more columns and rows */}
      <div className="absolute -top-4 left-40 w-80 h-80 opacity-25">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #999999 2px, transparent 2px)`,
            backgroundSize: '24px 24px',
            backgroundPosition: '0 0',
            backgroundRepeat: 'repeat'
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Title - clean and minimal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">Our partners</h2>
          <div className="w-16 h-1 bg-[#FF0000] mx-auto"></div>
        </div>
        
        {/* Partners Logo Display - 5 logos in first row, 4 in second row */}
        <div className="flex flex-col items-center space-y-12">
          {/* First Row - 5 logos */}
          <div className="flex items-center justify-center space-x-12 lg:space-x-16 flex-wrap">
            {partners.slice(0, 5).map((partner) => (
              <div 
                key={partner.id}
                className="flex items-center justify-center hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="h-16 w-auto object-contain filter grayscale opacity-70 hover:opacity-90 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          
          {/* Second Row - 4 logos */}
          <div className="flex items-center justify-center space-x-12 lg:space-x-16 flex-wrap">
            {partners.slice(5, 9).map((partner) => (
              <div 
                key={partner.id}
                className="flex items-center justify-center hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="h-16 w-auto object-contain filter grayscale opacity-70 hover:opacity-90 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
