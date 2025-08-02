import React from 'react';

// Icon Components for better code organization
const LocationIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="mt-1 text-white opacity-80 flex-shrink-0"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const ClockIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="mt-1 text-white opacity-80 flex-shrink-0"
  >
    <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
  </svg>
);

const EmailIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="text-white opacity-80 flex-shrink-0"
  >
    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="text-white opacity-80 flex-shrink-0"
  >
    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
  </svg>
);

// Social Media Icon Component
const SocialIcon = ({ 
  children, 
  ariaLabel 
}: { 
  children: React.ReactNode; 
  ariaLabel: string 
}) => (
  <div 
    className="
      w-10 h-10 
      bg-white bg-opacity-20 
      rounded 
      flex items-center justify-center 
      hover:bg-opacity-30 
      transition-all duration-300 
      cursor-pointer
      hover:scale-110
    "
    aria-label={ariaLabel}
  >
    {children}
  </div>
);

// Wave SVG Component
const WaveBackground = () => (
  <div 
    className="absolute top-0 left-0 w-full h-[150px] z-0" 
    style={{ top: '-150px' }}
  >
    <svg 
      viewBox="0 0 1440 150" 
      preserveAspectRatio="none" 
      className="w-full h-full"
    >
      <path
        fill="#f9132a"
        d="M0,32L80,37.3C160,43,320,53,480,64C640,75,800,85,960,96C1120,107,1280,117,1360,122.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      />
    </svg>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#f9132a] text-white overflow-hidden">
      {/* Wave Background */}
      <WaveBackground />
      
      {/* Main Footer Content */}
      <div className="
        relative z-10 
        pt-32 sm:pt-40 md:pt-44 lg:pt-48 
        pb-8 sm:pb-10 
        px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
      ">
        <div className="max-w-7xl mx-auto">
          {/* Three Column Layout */}
          <div className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            gap-8 sm:gap-10 lg:gap-12 
            mb-8 sm:mb-10 lg:mb-12
          ">
            
            {/* Brand Section */}
            <div className="lg:col-span-1 text-center md:text-left">
              <h1 className="
                text-3xl sm:text-4xl lg:text-5xl 
                font-bold 
                text-white 
                mb-4 sm:mb-6 
                leading-tight
              ">
                Cookoo
              </h1>
              
              <p className="
                text-white 
                text-sm sm:text-base 
                leading-relaxed 
                mb-6 sm:mb-8 
                opacity-90 
                max-w-md 
                mx-auto md:mx-0
              ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                accusantium doloremque laudantium, totam rem aperiam, illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              
              {/* Social Media Icons */}
              <div className="
                flex 
                justify-center md:justify-start 
                space-x-3 sm:space-x-4
              ">
                <SocialIcon ariaLabel="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </SocialIcon>
                
                <SocialIcon ariaLabel="Google">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </SocialIcon>
                
                <SocialIcon ariaLabel="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </SocialIcon>
                
                <SocialIcon ariaLabel="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </SocialIcon>
              </div>
            </div>

            {/* Get In Touch Section */}
            <div className="text-center md:text-left">
              <h2 className="
                text-xl sm:text-2xl 
                font-semibold 
                text-white 
                mb-3 sm:mb-4
              ">
                Get In Touch
              </h2>
              
              <div className="
                w-16 
                border-t-2 border-white 
                mb-6 sm:mb-8 
                mx-auto md:mx-0
              "></div>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="
                    text-white 
                    font-semibold 
                    text-base sm:text-lg 
                    mb-3
                  ">
                    Address
                  </h4>
                  
                  <div className="
                    flex 
                    flex-col sm:flex-row 
                    items-center sm:items-start 
                    space-y-2 sm:space-y-0 sm:space-x-3
                  ">
                    <LocationIcon />
                    <p className="
                      text-white 
                      text-sm sm:text-base 
                      opacity-90 
                      leading-relaxed
                    ">
                      4th floor, 218 Stanley Rd, Jaffna 40000
                    </p>
                  </div>
                </div>
                
                <div className="
                  flex 
                  flex-col sm:flex-row 
                  items-center sm:items-start 
                  space-y-2 sm:space-y-0 sm:space-x-3
                ">
                  <ClockIcon />
                  <p className="
                    text-white 
                    text-sm sm:text-base 
                    opacity-90
                  ">
                    Mon - Fri 08:00 AM - 09:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="text-center md:text-left lg:col-start-3">
              <h2 className="
                text-xl sm:text-2xl 
                font-semibold 
                text-white 
                mb-6 sm:mb-8
              ">
                Contact Info
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="
                  flex 
                  flex-col sm:flex-row 
                  items-center sm:items-start 
                  space-y-2 sm:space-y-0 sm:space-x-3
                ">
                  <EmailIcon />
                  <p className="
                    text-white 
                    text-sm sm:text-base 
                    opacity-90
                  ">
                    hello@cookoo.com
                  </p>
                </div>
                
                <div className="
                  flex 
                  flex-col sm:flex-row 
                  items-center sm:items-start 
                  space-y-2 sm:space-y-0 sm:space-x-3
                ">
                  <PhoneIcon />
                  <p className="
                    text-white 
                    text-sm sm:text-base 
                    opacity-90
                  ">
                    +94 75 375 7777
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Copyright Section */}
          <div className="
            text-center 
            pt-6 sm:pt-8 
            border-t border-white border-opacity-20
          ">
            <p className="
              text-white 
              text-xs sm:text-sm 
              opacity-80
            ">
              Copyright © 2020 cookoo. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;