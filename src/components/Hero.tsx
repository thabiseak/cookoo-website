import React, { useState } from 'react';
import { googlePlayBadge, appStoreBadge } from '../assets';

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <section id="home" className="relative bg-white py-20 overflow-hidden">
      {/* Background Red Circle */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F21D3A] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left mb-12 lg:mb-0">
            
            {/* Top Section - Buttons */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              <button
                onClick={() => setActiveTab('users')}
                className={`px-8 py-3 text-sm font-medium rounded-lg shadow-md transition-all duration-300 ${
                  activeTab === 'users'
                    ? 'bg-[#FF0000] text-white'
                    : 'bg-[#E0E0E0] text-black hover:bg-gray-300'
                }`}
                style={{ width: 'auto', minWidth: '120px' }}
              >
                Users
              </button>
              <button
                onClick={() => setActiveTab('partner')}
                className={`px-8 py-3 text-sm font-medium rounded-lg shadow-md transition-all duration-300 ${
                  activeTab === 'partner'
                    ? 'bg-[#FF0000] text-white'
                    : 'bg-[#E0E0E0] text-black hover:bg-gray-300'
                }`}
                style={{ width: 'auto', minWidth: '160px' }}
              >
                Become A Partner
              </button>
            </div>

            {/* Main Heading Text */}
            <div className="space-y-5 mb-6">
              <h1 className="text-base lg:text-lg font-normal text-black text-center lg:text-left" style={{ fontSize: '16px', lineHeight: '1.2' }}>
                Build Your Business &
              </h1>
              {/* Decorative Red Line */}
              <div className="flex justify-center lg:justify-start">
                <div className="w-80 h-0.5 bg-[#FF0000]" style={{ height: '2px' }}></div>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-black text-center lg:text-left" style={{ fontSize: '44px', lineHeight: '1.2' }}>
                Become Successful!
              </h1>
            </div>

            {/* Horizontal Red Line - Remove this old one */}
            {/* Subtext/Description */}
            <div className="mb-8">
              <p className="text-[#757575] leading-relaxed text-base text-center lg:text-left max-w-lg mx-auto lg:mx-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>

            {/* Bottom Section - App Store Badges */}
            <div className="flex justify-center lg:justify-start gap-4">
              <img 
                src={googlePlayBadge} 
                alt="Android App on Google Play" 
                className="h-14 w-auto cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md rounded"
              />
              <img 
                src={appStoreBadge} 
                alt="Available on the App Store" 
                className="h-14 w-auto cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md rounded"
              />
            </div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="w-full lg:w-1/2 relative h-[600px] flex items-center justify-center mt-12">
            
            {/* Background Phone - Restaurant List (White) */}
            <div className="absolute top-20 right-4 transform rotate-12 z-10">
              <div className="w-48 h-80 bg-white rounded-3xl shadow-2xl border-4 border-gray-200 p-3 overflow-hidden">
                
                {/* Phone Status Bar */}
                <div className="flex justify-between items-center text-xs text-gray-600 mb-2">
                  <span className="font-medium">9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 bg-green-500 rounded-sm" />
                    <span className="text-xs">100%</span>
                  </div>
                </div>
                
                {/* Location Header */}
                <div className="text-center mb-4">
                  <h3 className="font-bold text-lg text-gray-900">JAFFNA</h3>
                  <p className="text-xs text-gray-600">No 23 Stanley Road, Jaffna</p>
                </div>
                
                {/* Restaurant Cards */}
                <div className="space-y-3">
                  <div className="bg-gray-50 p-2 rounded-lg flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center text-white text-lg">
                      🍽️
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-gray-900">Spice Garden</p>
                      <p className="text-xs text-gray-600">25 Min</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-2 rounded-lg flex items-center space-x-3">
                    <div className="w-12 h-12 bg-red-400 rounded-lg flex items-center justify-center text-white text-lg">
                      🍕
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-gray-900">Pizza Palace</p>
                      <p className="text-xs text-gray-600">30 Min</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-2 rounded-lg flex items-center space-x-3">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-white text-lg">
                      🍜
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-gray-900">Noodle House</p>
                      <p className="text-xs text-gray-600">20 Min</p>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Navigation */}
                <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-8 text-xs">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-gray-400 rounded mb-1" />
                    <span className="text-gray-600">Cart</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-gray-400 rounded mb-1" />
                    <span className="text-gray-600">Account</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Foreground Phone - Cookoo App (Red) */}
            <div className="absolute top-12 left-4 transform -rotate-6 z-20">
              <div className="w-48 h-80 bg-[#F21D3A] rounded-3xl shadow-2xl border-4 border-gray-200 p-6 flex flex-col items-center justify-center text-white relative overflow-hidden">
                
                {/* App Logo */}
                <div className="text-center mb-8 z-10">
                  <h2 className="text-3xl font-bold text-white">Cookoo</h2>
                  <p className="text-white opacity-80 text-sm mt-1">Food Delivery</p>
                </div>
                
                {/* Delivery Illustration */}
                <div className="relative flex-1 flex items-center justify-center z-10">
                  <div className="relative">
                    
                    {/* Delivery Person */}
                    <div className="w-16 h-24 bg-white rounded-lg relative shadow-lg">
                      {/* Head */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full shadow-md" />
                      {/* Arm */}
                      <div className="absolute -right-2 top-2 w-4 h-6 bg-white rounded" />
                    </div>
                    
                    {/* Scooter */}
                    <div className="absolute -bottom-4 -left-2 w-12 h-6 bg-white rounded-lg shadow-lg">
                      {/* Wheels */}
                      <div className="absolute -bottom-1 left-1 w-3 h-3 bg-black rounded-full" />
                      <div className="absolute -bottom-1 right-1 w-3 h-3 bg-black rounded-full" />
                    </div>
                    
                    {/* Cookoo Branding */}
                    <div className="absolute -bottom-2 left-8 w-6 h-3 bg-white rounded flex items-center justify-center">
                      <span className="text-[#F21D3A] text-xs font-bold">C</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
