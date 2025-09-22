import React, { useState, useRef, useCallback } from 'react';
import { Play } from 'lucide-react';
import { scriptManager } from '../utils/scriptManager';

interface LazyYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
}

export const LazyYouTube: React.FC<LazyYouTubeProps> = ({ videoId, title, className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const loadVideo = useCallback(async () => {
    setHasClicked(true);
    
    // Prevent duplicate YouTube API loading
    try {
      await scriptManager.loadYouTubePlayer();
    } catch (error) {
      console.warn('YouTube API loading failed, falling back to iframe');
    }
    
    // Small delay to ensure smooth UX transition
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (!hasClicked) {
    return (
      <div 
        className={`relative cursor-pointer group ${className}`}
        onClick={loadVideo}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            loadVideo();
          }
        }}
        aria-label={`Play video: ${title}`}
      >
        <img
          src={thumbnailUrl}
          alt={`${title} - Click to play video`}
          className="w-full h-full object-cover rounded-lg"
          width={560}
          height={315}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 rounded-lg flex items-center justify-center">
          <div className="bg-red-600 hover:bg-red-700 transition-colors duration-200 rounded-full p-4 shadow-lg">
            <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white text-sm font-medium bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
            Click to play video
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {isLoaded ? (
        <iframe
          ref={iframeRef}
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          className="w-full h-full rounded-lg"
          width="560"
          height="315"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          sandbox="allow-scripts allow-same-origin allow-presentation"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Loading video...</p>
        </div>
      )}
    </div>
  );
};