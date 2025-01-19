import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InstagramReelSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample reel data
  const reels = [
    { id: 1, videoId: 'VIDEO_ID1', thumbnail: 'https://www.instagram.com/p/DE_YXx4O4jP/' },
    { id: 2, videoId: 'VIDEO_ID2', thumbnail: 'https://www.instagram.com/p/DE-Xro-SkoG/' },
    { id: 3, videoId: 'VIDEO_ID3', thumbnail: 'https://www.instagram.com/reel/DE8CXBGub1_/' },
    { id: 4, videoId: 'VIDEO_ID4', thumbnail: 'https://www.instagram.com/reel/DE5b5hdysQ5/' },
    { id: 5, videoId: 'VIDEO_ID5', thumbnail: 'https://www.instagram.com/reel/DE2kOqMOGFb/' },
    { id: 6, videoId: 'VIDEO_ID6', thumbnail: 'https://www.instagram.com/reel/DE0YJday3UW/' },
    { id: 7, videoId: 'VIDEO_ID7', thumbnail: 'https://www.instagram.com/p/DElFQaTywfQ/' },
    { id: 8, videoId: 'VIDEO_ID8', thumbnail: 'https://www.instagram.com/reel/DEgW1qJuo6K/' },
    { id: 9, videoId: 'VIDEO_ID9', thumbnail: 'https://www.instagram.com/reel/DEdp_MRuVpZ/' },
    { id: 10, videoId: 'VIDEO_ID10', thumbnail: 'https://www.instagram.com/reel/DEX8ar_udHX/' },
    { id: 11, videoId: 'VIDEO_ID11', thumbnail: 'https://www.instagram.com/reel/DEVXlHkObXT/' },
    { id: 12, videoId: 'VIDEO_ID12', thumbnail: 'https://www.instagram.com/p/DEThskSumBF/' },
    { id: 13, videoId: 'VIDEO_ID13', thumbnail: 'https://www.instagram.com/reel/DENjg9COxo3/' },
    { id: 14, videoId: 'VIDEO_ID14', thumbnail: 'https://www.instagram.com/reel/DEF8g58O8DL/' }
  ];

  // Videos per slide for different screen sizes
  const videosPerSlideLarge = 4;
  const videosPerSlideSmall = 2;

  // Determine total slides based on the current screen size
  const isSmallScreen = window.innerWidth < 768; // Small screen breakpoint
  const videosPerSlide = isSmallScreen ? videosPerSlideSmall : videosPerSlideLarge;
  const totalSlides = Math.ceil(reels.length / videosPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Get the videos for the current slide
  const currentVideos = reels.slice(
    currentSlide * videosPerSlide,
    currentSlide * videosPerSlide + videosPerSlide
  );

  return (
    <div className="bg-blue-50 py-8">
      <div className="max-w-8xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Create #EverydayWonders</h2>

        <div className="relative">
          <div className="rounded-lg shadow-lg overflow-hidden bg-white">
            <div
              className={`grid gap-4 ${
                isSmallScreen ? 'grid-cols-2' : 'grid-cols-4'
              }`}
            >
              {currentVideos.map((reel) => (
                <a
                  key={reel.id}
                  href={`https://www.instagram.com/reel/${reel.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <img
                    src={reel.thumbnail}
                    alt={`Instagram Reel ${reel.id}`}
                    className="w-full h-auto object-cover rounded"
                  />
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center mt-6">
          <button className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
            Follow @drinkwildwonder
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstagramReelSlider;
