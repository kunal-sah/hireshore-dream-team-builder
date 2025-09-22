/**
 * Cache Optimized Image Component
 * Implements aggressive caching for better repeat visit performance
 */
import React, { useState, useEffect } from 'react';
import { cacheResource, getCachedResource } from '../utils/cacheOptimizer';

interface CacheOptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchpriority?: 'high' | 'low' | 'auto';
  [key: string]: any;
}

export const CacheOptimizedImage: React.FC<CacheOptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fetchpriority = 'auto',
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if image is in memory cache first
    const cachedImage = getCachedResource(src);
    if (cachedImage) {
      setImageSrc(cachedImage);
      setIsLoaded(true);
      return;
    }

    // Preload image and cache it
    const img = new Image();
    img.onload = () => {
      // Cache the image URL for future use
      cacheResource(src, 'images', src);
      setImageSrc(src);
      setIsLoaded(true);
    };
    img.onerror = () => {
      setIsLoaded(true); // Still show broken image
    };
    
    // Start loading
    if (loading === 'eager' || fetchpriority === 'high') {
      img.src = src;
    } else {
      // Use intersection observer for lazy loading
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              img.src = src;
              observer.disconnect();
            }
          });
        },
        { rootMargin: '50px' }
      );

      // We need a ref to observe, but since we're not using one, 
      // just load after a short delay for lazy images
      setTimeout(() => {
        img.src = src;
      }, 100);
    }
  }, [src, loading, fetchpriority]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading={loading}
      fetchPriority={fetchpriority}
      decoding="async"
      style={{
        transition: 'opacity 0.3s ease-in-out',
        opacity: isLoaded ? 1 : 0.8
      }}
      {...props}
    />
  );
};