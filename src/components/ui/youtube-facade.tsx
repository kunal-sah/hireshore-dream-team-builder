import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  className?: string;
}

const YouTubeFacade: React.FC<YouTubeFacadeProps> = ({ videoId, title, className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

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
      className={`${className} relative bg-black cursor-pointer group`}
      onClick={handlePlayClick}
      style={{
        backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
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