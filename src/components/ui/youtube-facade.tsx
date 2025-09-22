import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  className?: string;
}

const YouTubeFacade: React.FC<YouTubeFacadeProps> = ({ videoId, title, className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handlePlayClick = () => {
    setIsLoaded(true);
  };

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        className={className}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    );
  }

  return (
    <div 
      className={`${className} relative bg-gradient-to-br from-gray-800 to-gray-900 cursor-pointer group min-h-[200px] flex items-center justify-center`}
      onClick={handlePlayClick}
    >
      {/* YouTube thumbnail image */}
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={() => setImageError(true)}
        style={{ display: imageError ? 'none' : 'block' }}
      />
      
      {/* Fallback for when image fails to load */}
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
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-red-600 hover:bg-red-700 rounded-full p-4 transition-all group-hover:scale-110 shadow-2xl">
          <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
        </div>
      </div>
      
      {/* Video title overlay */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-black/80 text-white px-3 py-2 rounded text-sm font-medium">
          {title}
        </div>
      </div>
    </div>
  );
};

export default YouTubeFacade;