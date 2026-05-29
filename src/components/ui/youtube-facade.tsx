import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  className?: string;
}

const YouTubeFacade: React.FC<YouTubeFacadeProps> = ({ videoId, title, className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState(
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  );

  // Try to upgrade to maxresdefault; only swap in if it's a real image
  // (YouTube returns a 120x90 gray placeholder when maxres doesn't exist).
  useEffect(() => {
    const hq = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    const max = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    setThumbnailUrl(hq);
    setImageError(false);
    const img = new Image();
    img.onload = () => {
      if (img.naturalWidth > 120) setThumbnailUrl(max);
    };
    img.src = max;
  }, [videoId]);

  const handlePlayClick = () => setIsLoaded(true);

  if (isLoaded) {
    return (
      <div className={className}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`${className} relative bg-gradient-to-br from-gray-800 to-gray-900 cursor-pointer group min-h-[200px] flex items-center justify-center`}
      onClick={handlePlayClick}
      role="button"
      aria-label={`Play video: ${title}`}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
        onError={() => setImageError(true)}
        style={{ display: imageError ? 'none' : 'block' }}
      />

      {imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center">
              <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
            </div>
            <p className="text-sm font-medium">{title}</p>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-red-600 hover:bg-red-700 rounded-full p-4 transition-all group-hover:scale-110 shadow-2xl">
          <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
        </div>
      </div>
    </div>
  );
};

export default YouTubeFacade;
