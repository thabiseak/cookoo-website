import React from 'react';
import { featureImage } from '../assets';

const Features: React.FC = () => {
  return (
    <section id="features" className="relative bg-white pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Section - Feature Image */}
          <div className="relative flex justify-center items-start pt-20">
            <img 
              src={featureImage} 
              alt="Our Features" 
              className="w-full object-cover"
              style={{ height: '550px' }}
            />
          </div>
          
          {/* Right Section - Content */}
          <div className="space-y-8 flex flex-col justify-start h-full">
            {/* Section Title */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-2">Our features</h2>
              <div className="w-16 h-1 bg-[#F21D3A] rounded-full mb-7"></div>
              {/* Description Paragraphs */}
              <div className="space-y-2 text-gray-400 leading-relaxed">
                <p className="text-base">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p className="text-base">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
              </div>
            </div>
            {/* Feature Items */}
            <div className="space-y-8">
              {/* Take Away Feature */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 border-2 border-[#F21D3A] rounded-full flex items-center justify-center bg-white">
                  <svg className="w-8 h-8 text-[#F21D3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-black mb-2">Take Away</h3>
                  <p className="text-gray-400 leading-relaxed text-base">
                    Trem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi vitae dicta sunt explicabo sequi nesciunt.
                  </p>
                </div>
              </div>
              {/* Delivery Feature (active) */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#F21D3A] rounded-full flex items-center justify-center shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                  </svg>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-extrabold text-black mb-2">Delivery</h3>
                  <p className="text-gray-400 leading-relaxed text-base">
                    Trem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi vitae dicta sunt explicabo sequi nesciunt.
                  </p>
                </div>
              </div>
              {/* Dine In Feature */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 border-2 border-[#F21D3A] rounded-full flex items-center justify-center bg-white">
                  <svg className="w-8 h-8 text-[#F21D3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-black mb-2">Dine In</h3>
                  <p className="text-gray-400 leading-relaxed text-base">
                    Trem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi vitae dicta sunt explicabo sequi nesciunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
