"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fadeInUpVariants } from "../ui/MotionVariants";

const VideoComponent = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useFallback, setUseFallback] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Cleanup on unmount
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.removeAttribute('src');
        videoRef.current.load();
      }
    };
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoError = () => {
    console.error('Video failed to load, falling back to image');
    setUseFallback(true);
  };

  // Don't render video during SSR
  if (!isClient) {
    return (
      <div className="w-full aspect-video bg-gray-100 rounded-xl animate-pulse">
        <div className="w-full h-full bg-gray-200 rounded-xl"></div>
      </div>
    );
  }

  return (
    <motion.div
      variants={fadeInUpVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 }}
      className="w-full h-full rounded-lg mx-auto max-w-[1366px] px-4 sm:px-8 md:px-[60px] relative"
    >
      <div className="relative">
        <div className="relative transform hover:scale-[1.02] transition-transform duration-300">
          {/* Shadow layers for depth */}
          <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl transform translate-y-4 opacity-20"></div>
          <div className="absolute inset-0 bg-white rounded-2xl shadow-xl transform translate-y-2 opacity-40"></div>
          
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100/50 overflow-hidden">
            <div className="p-4 sm:p-8">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                {/* Skeleton Loader */}
                {!isVideoLoaded && !useFallback && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
                    <div className="w-full h-full bg-gray-300 rounded-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
                    </div>
                  </div>
                )}
                
                {/* Video or Fallback Image */}
                {useFallback ? (
                  <img 
                    src="/images/hero-fallback.jpg" 
                    alt="Vorbit AI Platform"
                    className="w-full h-full object-cover rounded-xl"
                    loading="eager"
                  />
                ) : (
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    loop
                    preload="metadata"
                    onLoadedData={handleVideoLoad}
                    onCanPlay={handleVideoLoad}
                    onError={handleVideoError}
                    className={`w-full h-full object-cover rounded-xl transition-opacity duration-500 ${
                      isVideoLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <source 
                      src="/videos/hero.webm" 
                      type="video/webm" 
                    />
                    <source 
                      src="/videos/hero.mp4" 
                      type="video/mp4" 
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoComponent;