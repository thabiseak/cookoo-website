import React, { useState } from 'react';
import { googlePlayBadge, appStoreBadge, heroImage } from '../assets';

// Tab Configuration
const tabs = [
  { id: 'users', label: 'Users' },
  { id: 'partner', label: 'Become A Partner' }
];

// Tab Button Component
const TabButton = ({ 
  tab, 
  isActive, 
  onClick 
}: {
  tab: { id: string; label: string };
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`
      px-6 sm:px-8 
      py-2.5 sm:py-3 
      text-xs sm:text-sm 
      font-medium 
      transition-all duration-300
      focus:outline-none focus:ring-2 focus:ring-[#FF3B3B] focus:ring-opacity-50
      ${isActive
        ? 'bg-[#FF3B3B] text-white rounded-full shadow-md transform scale-105'
        : 'bg-transparent text-[#FF3B3B] hover:bg-gray-100 rounded-full'
      }
    `}
  >
    {tab.label}
  </button>
);

// App Store Button Component
const AppStoreButton = ({ 
  type, 
  imageSrc, 
  altText,
  storeUrl 
}: {
  type: 'google' | 'apple';
  imageSrc: string;
  altText: string;
  storeUrl: string;
}) => (
  <button 
    onClick={() => {
      console.log(`${type} Store clicked`);
      window.open(storeUrl, '_blank');
    }}
    className="
      inline-block
      transition-all duration-300
      hover:scale-105 hover:shadow-lg
      active:scale-95
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
      rounded-lg
      group
    "
    aria-label={altText}
  >
    <img 
      src={imageSrc} 
      alt={altText} 
      className="
        h-12 sm:h-14 
        w-32 sm:w-40 
        object-contain
        group-hover:brightness-110
        transition-all duration-300
      "
    />
  </button>
);

// Decorative Dot Pattern Component
const DotPattern = () => (
  <div className="
    absolute 
    top-24 sm:top-28 lg:top-24 
    left-[-40px] sm:left-[-40px] lg:left-[-40px] 
    w-60 sm:w-80 
    h-60 sm:h-80 
    opacity-20 sm:opacity-30
    pointer-events-none
  ">
    <div 
      className="w-full h-full"
      style={{
        backgroundImage: `radial-gradient(circle, #444 1.5px, transparent 1.5px)`,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0'
      }}
    />
  </div>
);

const HeroNew: React.FC = () => {
  // State Management
  const [activeTab, setActiveTab] = useState('users');

  // Event Handlers
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section className="
      bg-white 
      relative 
      py-2 sm:py-4 lg:py-6 
      min-h-[600px] sm:min-h-[700px] lg:min-h-[800px]
      overflow-visible
    ">
      {/* Background Decorative Elements */}
      <div 
        className="
          absolute 
          bg-[#FF0000] 
          rounded-full 
          opacity-100
          z-10
        "
        style={{
          width: '200px',
          height: '200px',
          top: '0px',
          left: '-120px'
        }}
      />
      
      {/* Main Content Container */}
      <div className="
        container mx-auto 
        px-4 sm:px-6 lg:px-8
        relative z-20
        pt-4 sm:pt-6 lg:pt-8
      ">
        <div className="
          grid grid-cols-1 lg:grid-cols-2 
          gap-0 sm:gap-1 lg:gap-2 
          items-start
          min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]
        ">
          
          {/* Left Content Section */}
          <div className="
            space-y-6 sm:space-y-8 
            text-center lg:text-left
            order-2 lg:order-1
            relative
            pt-8 lg:pt-12
          ">
            
            {/* Tab Navigation */}
            <div className="
              inline-flex 
              bg-[#F6F6F6] 
              rounded-full 
              overflow-hidden 
              p-1
              shadow-sm
              mt-8 sm:mt-12 lg:mt-16
            ">
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  tab={tab}
                  isActive={activeTab === tab.id}
                  onClick={() => handleTabChange(tab.id)}
                />
              ))}
            </div>

            {/* Main Headline */}
            <div className="mt-[30px]">
              <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                <div className="font-normal text-black text-[36px] leading-tight">
                  Build Your Business &
                </div>
                <div className="font-bold text-black text-[48px] leading-tight">
                  Become Successful!
                </div>
                {/* Red decorative line */}
                <div className="w-[50px] h-[2px] bg-[#FF0000] mt-[10px] mx-auto lg:mx-0"></div>
              </div>
              
              <p className="
                text-[#666666] 
                leading-relaxed 
                text-[14px]
                max-w-[450px] 
                mx-auto lg:mx-0
                mt-[20px]
                text-center lg:text-left
              ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>

            {/* App Store Buttons */}
            <div className="
              flex 
              flex-col sm:flex-row 
              items-center 
              justify-center lg:justify-start 
              gap-4 sm:gap-6 
              pt-4
              relative
            ">
              <div className="relative flex items-center">
                <AppStoreButton
                  type="google"
                  imageSrc={googlePlayBadge}
                  altText="Get it on Google Play"
                  storeUrl="https://play.google.com/store"
                />
                {/* Decorative Dot Pattern */}
                <DotPattern />
              </div>
              
              <div className="flex items-center">
                <AppStoreButton
                  type="apple"
                  imageSrc={appStoreBadge}
                  altText="Download on the App Store"
                  storeUrl="https://apps.apple.com/"
                />
              </div>
            </div>
          </div>

          {/* Right Hero Image Section */}
          <div className="
            relative 
            order-1 lg:order-2
            flex justify-center lg:justify-end
            px-0 sm:px-0
            pt-0 lg:pt-0
            w-full
            overflow-visible
            -mt-4 sm:-mt-6 lg:-mt-8
            h-full
          ">
            <div className="
              relative 
              w-full 
              max-w-3xl sm:max-w-4xl lg:max-w-6xl xl:max-w-7xl
              lg:-mr-20
              overflow-visible
              h-full
            ">
              <img 
                src={heroImage} 
                alt="Cookoo Hero - Food Delivery Platform" 
                className="
                  w-full 
                  h-auto 
                  object-contain
                  rounded-lg sm:rounded-xl lg:rounded-none
                  shadow-xl lg:shadow-none
                  hover:scale-105 lg:hover:scale-100
                  transition-transform duration-500
                "
                style={{ 
                  maxHeight: 'none',
                  minHeight: '600px',
                  width: '100%',
                  transform: 'scale(1.05) translateY(-20px)'
                }}
                loading="lazy"
              />
              
              {/* Image Overlay for Mobile */}
              <div className="
                absolute inset-0 
                bg-gradient-to-t from-black/20 to-transparent 
                rounded-lg sm:rounded-xl lg:rounded-none
                lg:hidden
              " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
