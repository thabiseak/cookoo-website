import React from 'react';

// SVG Icons Components
const FoodIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
    <path d="M7 2v20"/>
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
  </svg>
);

const RestaurantIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18"/>
    <path d="M5 21V7l8-4v18"/>
    <path d="M19 21V11l-6-4"/>
  </svg>
);

const DeliveryIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18.5" cy="17.5" r="3.5"/>
    <circle cx="5.5" cy="17.5" r="3.5"/>
    <path d="M16 3h6l2 7h-8V3Z"/>
    <path d="M2 6h10v11"/>
  </svg>
);

const Services: React.FC = () => {
  const cards = [
    {
      id: 1,
      title: "Hey! Foodies",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
      icon: <FoodIcon />,
      email: "hello@cookoo.lk",
      hasDecorator: false
    },
    {
      id: 2,
      title: "Hello! Restaurants", 
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
      icon: <RestaurantIcon />,
      email: "hello@cookoo.lk",
      hasDecorator: false
    },
    {
      id: 3,
      title: "Hey! Delivery Partners",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.", 
      icon: <DeliveryIcon />,
      email: "hello@cookoo.lk",
      hasDecorator: false
    }
  ];

  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      {/* Large red decorative circles - positioned like in the design specs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#FF0000] rounded-full opacity-90"></div>
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-[#FF0000] rounded-full opacity-85"></div>
      
      {/* Subtle gray dotted pattern - lower section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E0E0E0' fill-opacity='0.6' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='3' r='1'/%3E%3Ccircle cx='8' cy='8' r='1'/%3E%3Ccircle cx='18' cy='8' r='1'/%3E%3Ccircle cx='3' cy='13' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3Ccircle cx='8' cy='18' r='1'/%3E%3Ccircle cx='18' cy='18' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Left side dot pattern - 2 columns x 8 rows */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-60">
        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: 16 }).map((_, index) => (
            <div key={index} className="w-2 h-2 bg-gray-700 rounded-full" />
          ))}
        </div>
      </div>

      {/* Content Container - full width centered layout */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Hey! Foodies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit, voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde
          </p>
          <div className="flex flex-col items-center gap-4">
            <button 
              className="bg-[#FF0000] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#E60000] transition-colors duration-300"
            >
              Get in touch
            </button>
            <p className="text-gray-600 text-sm">
              hello@cookoo.lk
            </p>
          </div>
        </div>
        
        {/* Cards Grid - Three column layout with equal spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 justify-items-center relative">
          
          {/* Dot pattern specifically positioned left of first card - matching reference image */}
          <div className="absolute -left-16 top-20 opacity-70 hidden lg:block">
            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: 16 }).map((_, index) => (
                <div key={index} className="w-2 h-2 bg-gray-700 rounded-full" />
              ))}
            </div>
          </div>
          {cards.map((card) => (
            <div 
              key={card.id}
              className="relative bg-white flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#E0E0E0] hover:border-[#FF0000]"
              style={{
                borderRadius: '16px',
                width: '320px',
                padding: '40px 30px',
                maxWidth: '100%'
              }}
            >
              {/* Icon - larger size, consistent with modern design */}
              <div 
                className="flex justify-center mb-8 p-4 rounded-full bg-gray-50"
                style={{ color: '#333333' }}
              >
                {card.icon}
              </div>
              
              {/* Title - Bold sans-serif, black color */}
              <h3 
                className="mb-6"
                style={{
                  fontSize: '22px',
                  fontWeight: '700',
                  color: '#000000',
                  fontFamily: '"Montserrat", "Open Sans", sans-serif',
                  lineHeight: '1.3'
                }}
              >
                {card.title}
              </h3>
              
              {/* Description - Light gray, readable line height */}
              <p 
                className="mb-8"
                style={{
                  fontSize: '16px',
                  fontWeight: '400',
                  color: '#666666',
                  lineHeight: '1.6',
                  fontFamily: '"Open Sans", "Roboto", sans-serif'
                }}
              >
                {card.description}
              </p>
              
              {/* CTA Button - Red background matching color scheme */}
              <button 
                className="mb-4 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  backgroundColor: '#FF0000',
                  color: '#FFFFFF',
                  fontSize: '16px',
                  fontWeight: '600',
                  padding: '14px 28px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: '"Montserrat", "Open Sans", sans-serif',
                  letterSpacing: '0.5px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E60000';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF0000';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label={`Get in touch for ${card.title}`}
              >
                Get in touch
              </button>
              
              {/* Email - Smaller gray text, consistent spacing */}
              <p 
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#666666',
                  fontFamily: '"Open Sans", "Roboto", sans-serif'
                }}
              >
                {card.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
