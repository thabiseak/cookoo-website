import React from 'react';

// SVG Icons Components
const FoodIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
    <path d="M7 2v20"/>
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
  </svg>
);

const RestaurantIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18"/>
    <path d="M5 21V7l8-4v18"/>
    <path d="M19 21V11l-6-4"/>
  </svg>
);

const DeliveryIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18.5" cy="17.5" r="3.5"/>
    <circle cx="5.5" cy="17.5" r="3.5"/>
    <path d="M16 3h6l2 7h-8V3Z"/>
    <path d="M2 6h10v11"/>
  </svg>
);

const Stats: React.FC = () => {
  const stats = [
    { label: "Users", value: "6K+" },
    { label: "Downloads", value: "9.2K+" },
    { label: "Ratings", value: "2K+" }
  ];

  const cards = [
    {
      id: 1,
      title: "Hey! Foodies",
      description: "Sed ut perspiciatis unde omnis iste natus error sit, voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde",
      icon: <FoodIcon />,
      email: "hello@cookoo.lk"
    },
    {
      id: 2,
      title: "Hello! Restaurants", 
      description: "Sed ut perspiciatis unde omnis iste natus error sit, voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde",
      icon: <RestaurantIcon />,
      email: "hello@cookoo.lk"
    },
    {
      id: 3,
      title: "Hey! Delivery Partners",
      description: "Sed ut perspiciatis unde omnis iste natus error sit, voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde", 
      icon: <DeliveryIcon />,
      email: "hello@cookoo.lk"
    }
  ];

  return (
    <section className="relative overflow-hidden" style={{
      paddingTop: '64px',
      paddingBottom: '64px',
      paddingLeft: '20px',
      paddingRight: '20px'
    }}>

      {/* Wave Background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute right-0 bottom-0 w-full h-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f4f6fb"
            fillOpacity="1"
            d="M0,320L60,310C120,300,240,280,360,260C480,240,600,220,720,210C840,200,960,200,1080,210C1200,220,1320,240,1380,250L1440,260L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Top Stats Card Container */}
        <div 
          className="bg-white flex flex-col md:flex-row justify-between items-center mx-auto border border-gray-200"
          style={{
            borderRadius: '12px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
            padding: '20px 15px',
            marginBottom: '160px',
            maxWidth: '900px'
          }}
        >
          {/* Users Section - Center Aligned */}
          <div className="text-center flex-1 px-2">
            <p 
              className="mb-3"
              style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#000000',
                letterSpacing: '0.02em',
                fontFamily: '"Poppins", "Inter", "Roboto", sans-serif'
              }}
            >
              Users
            </p>
            <p 
              style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#e60023',
                fontFamily: '"Poppins", "Inter", "Roboto", sans-serif'
              }}
            >
              6K+
            </p>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px h-32 bg-gray-300"></div>

          {/* Downloads Section - Center Aligned */}
          <div className="text-center flex-1 px-2">
            <p 
              className="mb-3"
              style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#000000',
                letterSpacing: '0.02em',
                fontFamily: '"Poppins", "Inter", "Roboto", sans-serif'
              }}
            >
              Downloads
            </p>
            <p 
              style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#e60023',
                fontFamily: '"Poppins", "Inter", "Roboto", sans-serif'
              }}
            >
              9.2K+
            </p>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px h-32 bg-gray-300"></div>

          {/* Ratings Section - Center Aligned */}
          <div className="text-center flex-1 px-2">
            <p 
              className="mb-3"
              style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#000000',
                letterSpacing: '0.02em',
                fontFamily: '"Poppins", "Inter", "Roboto", sans-serif'
              }}
            >
              Ratings
            </p>
            <p 
              style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#e60023',
                fontFamily: '"Poppins", "Inter", "Roboto", sans-serif'
              }}
            >
              2K+
            </p>
          </div>
        </div>

        {/* Service Cards Section */}
        <div className="relative" style={{ zIndex: 20 }}>
          {/* Cards Grid - Three cards in a row, elevated above waves */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-6" style={{
            marginTop: '40px'
          }}>
            {cards.map((card, index) => (
              <div 
                key={card.id}
                className="relative bg-white flex flex-col items-center justify-center text-center mx-auto lg:mx-0 border border-gray-100 hover:shadow-xl transition-all duration-300"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                  width: index === 1 ? '360px' : '330px', // Middle card bigger, all cards larger
                  height: index === 1 ? '480px' : '420px', // Middle card much taller (30px more)
                  padding: index === 1 ? '45px 32px' : '40px 28px', // More padding for all
                  transform: index === 1 ? 'translateY(-15px)' : 'translateY(-10px)', // Middle card less elevated, extending down
                  zIndex: 25,
                  flexShrink: 0
                }}
              >
                {/* Icon - 32px, solid black */}
                <div 
                  className="flex justify-center mb-6"
                  style={{ color: '#222' }}
                >
                  {card.icon}
                </div>
                
                {/* Title - 18-20px, bold, black */}
                <h3 
                  className="mb-4"
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#222',
                    fontFamily: '"Poppins", "Inter", "Roboto", sans-serif'
                  }}
                >
                  {card.title}
                </h3>
                
                {/* Description - 14px, light gray, line-height 1.6 */}
                <p 
                  className="mb-6"
                  style={{
                    fontSize: '13px',
                    fontWeight: '400',
                    color: '#888',
                    lineHeight: '1.6',
                    fontFamily: '"Poppins", "Inter", "Roboto", sans-serif',
                    textAlign: 'center'
                  }}
                >
                  {card.description}
                </p>
                
                {/* CTA Button - Red background, white text, bold */}
                <button 
                  className="mb-3 hover:shadow-md transition-all duration-300"
                  style={{
                    backgroundColor: '#e60023',
                    color: '#ffffff',
                    fontSize: '14px',
                    fontWeight: '600',
                    padding: '10px 20px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: '"Poppins", "Inter", "Roboto", sans-serif'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#d1001c';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#e60023';
                  }}
                  aria-label={`Get in touch for ${card.title}`}
                >
                  Get in touch
                </button>
                
                {/* Email - Small gray text below button */}
                <p 
                  style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#555',
                    marginTop: '8px',
                    fontFamily: '"Poppins", "Inter", "Roboto", sans-serif'
                  }}
                >
                  {card.email}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
