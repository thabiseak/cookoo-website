import React, { useState } from 'react';

const Videos: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      title: "Jaffna's Special Home Made Foods Of 2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed diam",
      youtubeId: "u6kQOZDpcvs",
      thumbnail: `https://img.youtube.com/vi/u6kQOZDpcvs/maxresdefault.jpg`
    },
    {
      id: 2,
      title: "Success Of Cookoo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed diam",
      youtubeId: "kWJs1aVU3hA",
      thumbnail: `https://img.youtube.com/vi/kWJs1aVU3hA/maxresdefault.jpg`
    },
    {
      id: 3,
      title: "Make A Hotel In Market Place",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed diam",
      youtubeId: "_KdnWXvqX9w",
      thumbnail: `https://img.youtube.com/vi/_KdnWXvqX9w/maxresdefault.jpg`
    }
  ];

  const openVideo = (youtubeId: string) => {
    setSelectedVideo(youtubeId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };
  return (
    <section className="relative bg-white py-16 px-5 overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Title Section */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2">Our videos</h2>
          <div className="w-12 h-0.5 bg-[#e60023]"></div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm overflow-hidden max-w-[350px] mx-auto">
              <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => openVideo(video.youtubeId)}>
                {/* Video thumbnail */}
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
                  <div className="bg-white bg-opacity-90 rounded-full w-16 h-16 flex items-center justify-center hover:bg-opacity-100 transition-all cursor-pointer shadow-lg">
                    <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-3 leading-tight">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Videos Link */}
        <div className="text-right">
          <a 
            href="#" 
            className="text-[#e60023] text-sm font-medium hover:underline transition-all duration-200 flex items-center justify-end gap-1"
          >
            View more videos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeVideo}
        >
          <div 
            className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* YouTube Video Iframe */}
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Videos;
