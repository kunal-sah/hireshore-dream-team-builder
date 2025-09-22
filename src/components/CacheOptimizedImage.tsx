/**
 * Cache Optimized Image Component
 * Implements aggressive caching and modern format optimization for better performance
 */
import React, { useState, useEffect, useRef } from 'react';
import { cacheResource, getCachedResource } from '../utils/cacheOptimizer';

interface CacheOptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchpriority?: 'high' | 'low' | 'auto';
  width?: number;
  height?: number;
  [key: string]: any;
}

export const CacheOptimizedImage: React.FC<CacheOptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fetchpriority = 'auto',
  width,
  height,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [supportsWebP, setSupportsWebP] = useState<boolean | null>(null);
  const [supportsAVIF, setSupportsAVIF] = useState<boolean | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Check modern format support on mount
  useEffect(() => {
    const checkWebPSupport = () => {
      const webp = new Image();
      webp.onload = webp.onerror = () => {
        setSupportsWebP(webp.height === 2);
      };
      webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    };

    const checkAVIFSupport = () => {
      const avif = new Image();
      avif.onload = avif.onerror = () => {
        setSupportsAVIF(avif.height === 2);
      };
      avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
    };

    checkWebPSupport();
    checkAVIFSupport();
  }, []);

  // Generate optimized image with client-side hints
  const getOptimizedSrc = () => {
    // For YouTube thumbnails, we can try WebP variant
    if (src.includes('img.youtube.com')) {
      if (supportsWebP) {
        return src.replace('hqdefault.jpg', 'hqdefault.webp');
      }
    }
    
    // For other images, add optimization query params where possible
    if (src.includes('lovable-uploads') && supportsWebP) {
      // Add WebP preference hint (server would need to support this)
      return src + (src.includes('?') ? '&' : '?') + 'format=webp&quality=85';
    }
    
    return src;
  };

  useEffect(() => {
    const optimizedSrc = getOptimizedSrc();
    
    // Check if image is in memory cache first
    const cachedImage = getCachedResource(optimizedSrc);
    if (cachedImage) {
      setImageSrc(cachedImage);
      setIsLoaded(true);
      return;
    }

    // Preload image and cache it
    const img = new Image();
    img.onload = () => {
      // Cache the image URL for future use
      cacheResource(optimizedSrc, 'images', optimizedSrc);
      setImageSrc(optimizedSrc);
      setIsLoaded(true);
    };
    img.onerror = () => {
      // Fallback to original source if optimized version fails
      if (optimizedSrc !== src) {
        setImageSrc(src);
      }
      setIsLoaded(true);
    };
    
    // Start loading
    if (loading === 'eager' || fetchpriority === 'high') {
      img.src = optimizedSrc;
    } else {
      // Use intersection observer for lazy loading
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              img.src = optimizedSrc;
              observer.disconnect();
            }
          });
        },
        { rootMargin: '50px' }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      } else {
        // Fallback if ref is not available
        setTimeout(() => {
          img.src = optimizedSrc;
        }, 100);
      }
    }
  }, [src, loading, fetchpriority, supportsWebP, supportsAVIF]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={className}
      loading={loading}
      fetchPriority={fetchpriority}
      decoding="async"
      width={width}
      height={height}
      style={{
        transition: 'opacity 0.3s ease-in-out',
        opacity: isLoaded ? 1 : 0.8,
        maxWidth: '100%',
        height: 'auto',
        // Add optimization hints for browser
        imageRendering: 'auto',
        objectFit: 'contain'
      }}
      {...props}
    />
  );
};