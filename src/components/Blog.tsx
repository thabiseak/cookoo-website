import React from 'react';
import { pizzaImage, biriyaniImage, idiyappamImage } from '../assets';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      image: pizzaImage,
      category: "FOOD RECIPE!",
      title: "Pizza Is A Teenager's Avourite Food In all over the world",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"
    },
    {
      id: 2,
      image: biriyaniImage,
      category: "FOOD RECIPE!",
      title: "How to prepare chicken dum briyani in Jaffna style",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"
    },
    {
      id: 3,
      image: idiyappamImage,
      category: "FOOD RECIPE!",
      title: "Do You Know Mixed Idiyappam Is A Full Meal in Jaffna",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"
    }
  ];

  return (
    <section id="blog" className="relative bg-white py-16 px-5 overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Title Section */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2">Our blog</h2>
          <div className="w-12 h-0.5 bg-[#e60023]"></div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm overflow-hidden max-w-[350px] mx-auto">
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Post Content */}
              <div className="p-6">
                {/* Category */}
                <div className="text-[#e60023] text-xs font-bold uppercase mb-3 tracking-wide">
                  {post.category}
                </div>
                
                <h3 className="text-lg font-bold text-black mb-3 leading-tight">
                  {post.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* View More Blogs Link */}
        <div className="text-right">
          <a 
            href="#" 
            className="text-[#e60023] text-sm font-medium hover:underline transition-all duration-200 flex items-center justify-end gap-1"
          >
            View more blogs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
