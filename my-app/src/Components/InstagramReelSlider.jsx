import React, { useState, useEffect, lazy, Suspense } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Lazy load the video component
const LazyVideo = lazy(() => Promise.resolve({
  default: ({ reel, isPlaying, onVideoClick }) => (
    <div
      className="block w-full aspect-[9/16] relative group border border-gray-200 cursor-pointer"
      style={{ maxHeight: '240px' }}
      onClick={onVideoClick}
    >
      <video
        className="w-full h-full object-cover rounded cursor-pointer"
        poster={reel.thumbnail}
        playsInline
        preload="none" // Changed to 'none' for better performance
        loop
        muted={!isPlaying}
        ref={(el) => {
          if (el) {
            if (isPlaying) {
              el.play();
            } else {
              el.pause();
              el.currentTime = 0;
            }
          }
        }}
      >
        <source src={reel.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-opacity">
          <svg 
            className="w-12 h-12 text-white opacity-80 group-hover:opacity-100"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      )}
      
      {isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent group-hover:bg-black group-hover:bg-opacity-20 transition-opacity">
          <svg 
            className="w-12 h-12 text-white opacity-0 group-hover:opacity-100"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        </div>
      )}
    </div>
  )
}));

// Loading placeholder component
const VideoPlaceholder = () => (
  <div className="block w-full aspect-[9/16] relative bg-gray-200 animate-pulse rounded"
       style={{ maxHeight: '240px' }}>
  </div>
);

const InstagramReelSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(null);

  // Add window resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Updated reel data with actual video sources
  const reels = [
    { 
      id: 1, 
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    },
    { 
      id: 2, 
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    },
    { 
      id: 3, 
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    },
    { 
      id: 4, 
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg',
    },
    { 
      id: 5, 
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    },
    { 
      id: 6, 
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    },
    { 
      id: 7, 
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    },
    { 
      id: 8, 
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg',
    },
    { 
      id: 9, 
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    },
    { 
      id: 10, 
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    },
    { 
      id: 11, 
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    },
    { 
      id: 12, 
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg',
    },
    { 
      id: 13, 
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    },
    { 
      id: 14, 
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    },
    { 
      id: 15, 
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    }
  ];

  // Videos per slide for different screen sizes
  const videosPerSlideLarge = 5;
  const videosPerSlideSmall = 2;

  // Determine total slides based on the current screen size
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

  console.log('Current Videos:', currentVideos); // Debug log

  const handleVideoClick = (videoId) => {
    if (playingVideo === videoId) {
      setPlayingVideo(null); // Stop playing if clicking the same video
    } else {
      setPlayingVideo(videoId); // Play the clicked video
    }
  };

  // Function to check if a video should be loaded
  const shouldLoadVideo = (index) => {
    const currentIndex = currentSlide * videosPerSlide;
    const preloadRange = videosPerSlide * 2; // Load current slide and next slide
    return index >= currentIndex - preloadRange && index <= currentIndex + preloadRange;
  };

  return (
    <div className="bg-blue-50 py-8">
      <div className="max-w-8xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Create #EverydayWonders</h2>
        
        <div className="relative">
          <div className="rounded-lg shadow-lg overflow-hidden bg-white p-4">
            <div
              className={`grid gap-4 ${
                isSmallScreen ? 'grid-cols-2' : 'grid-cols-5'
              }`}
            >
              {currentVideos.map((reel, index) => (
                <Suspense key={reel.id} fallback={<VideoPlaceholder />}>
                  {shouldLoadVideo(currentSlide * videosPerSlide + index) ? (
                    <LazyVideo
                      reel={reel}
                      isPlaying={playingVideo === reel.id}
                      onVideoClick={() => handleVideoClick(reel.id)}
                    />
                  ) : (
                    <VideoPlaceholder />
                  )}
                </Suspense>
              ))}
            </div>
          </div>

          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute -left-4 top-1/2 -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition-colors shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute -right-4 top-1/2 -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition-colors shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {totalSlides > 1 && (
          <div className="flex justify-center gap-3 mt-6">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-pink-500 scale-125' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <button className="px-8 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors shadow-md">
            Follow @drinkwildwonder
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstagramReelSlider;
