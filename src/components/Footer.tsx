
import React from "react";
import footerLogo from "../assets/footer_logo.png";

const Footer = () => {
  return (
    <div className="relative bg-[#FD0E34] text-white pt-80 pb-20 px-4 sm:px-6 md:px-8 lg:px-12 min-h-[800px]">
      {/* Wave Shape */}
      <svg
        className="absolute top-0 left-0 w-full h-80 sm:h-88 md:h-96 lg:h-104"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,400C120,200 300,100 540,150C780,200 1020,250 1440,280L1440,0L0,0Z"
        ></path>
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 px-8 lg:px-16 ml-20 lg:ml-32">
        {/* Left Section: Cookoo Logo & Description */}
        <div className="text-left ml-4 lg:ml-8">
          <img 
            src={footerLogo} 
            alt="Cookoo Footer Logo" 
            className="h-16 lg:h-20 mb-6"
          />
          <p className="text-sm lg:text-base text-white leading-relaxed mb-6 max-w-md">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium, totam rem aperiam, illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <div className="flex gap-4 text-2xl mb-8 relative z-50">
            <i className="fab fa-facebook-f text-white cursor-pointer hover:opacity-75 transition-opacity duration-300" style={{ fontSize: '24px' }}></i>
            <i className="fab fa-google-plus-g text-white cursor-pointer hover:opacity-75 transition-opacity duration-300" style={{ fontSize: '24px' }}></i>
            <i className="fab fa-twitter text-white cursor-pointer hover:opacity-75 transition-opacity duration-300" style={{ fontSize: '24px' }}></i>
            <i className="fab fa-instagram text-white cursor-pointer hover:opacity-75 transition-opacity duration-300" style={{ fontSize: '24px' }}></i>
          </div>
        </div>

        {/* Center Section: Get In Touch */}
        <div className="text-left mt-8 ml-12 lg:ml-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-white mb-8"></div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Address</h3>
              <div className="space-y-2">
                <p className="flex items-start gap-3 text-white text-sm">
                  <i className="fas fa-map-marker-alt text-white mt-1"></i>
                  <span>4th floor, 218 Stanley Rd, Jaffna 40000</span>
                </p>
                <p className="flex items-start gap-3 text-white text-sm">
                  <i className="fas fa-clock text-white mt-1"></i>
                  <span>Mon - Fri 08:00 AM - 09:00 PM</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Info */}
        <div className="text-left mt-8 ml-12 lg:ml-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 opacity-0">Get In Touch</h2>
          <div className="w-16 h-1 bg-white mb-8 opacity-0"></div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
              <div className="space-y-2">
                <p className="flex items-start gap-3 text-white text-sm">
                  <i className="fas fa-envelope text-white mt-1"></i>
                  <span>hello@cookoo.com</span>
                </p>
                <p className="flex items-start gap-3 text-white text-sm">
                  <i className="fas fa-phone text-white mt-1"></i>
                  <span>+94 75 375 7777</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mt-16 pt-8 border-t border-white border-opacity-30">
        <p className="text-center text-sm text-white">Copyright © 2020 cookoo. All rights</p>
      </div>
    </div>
  );
};

export default Footer;