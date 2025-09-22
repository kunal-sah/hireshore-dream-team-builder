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
  displayWidth?: number;
  displayHeight?: number;
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
  displayWidth,
  displayHeight,
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

  // Calculate optimal dimensions for image loading
  const getOptimalDimensions = () => {
    const dpr = window.devicePixelRatio || 1;
    const targetWidth = displayWidth || width || 100;
    const targetHeight = displayHeight || height || 32;
    
    // Scale for device pixel ratio but cap at reasonable limits for logos
    const optimalWidth = Math.min(targetWidth * dpr, 200);
    const optimalHeight = Math.min(targetHeight * dpr, 100);
    
    return { width: Math.round(optimalWidth), height: Math.round(optimalHeight) };
  };

  // Generate optimized image with proper sizing and format hints
  const getOptimizedSrc = () => {
    const { width: optimalWidth, height: optimalHeight } = getOptimalDimensions();
    
    // For YouTube thumbnails, use appropriately sized variants
    if (src.includes('img.youtube.com')) {
      if (supportsWebP) {
        return src.replace('hqdefault.jpg', 'hqdefault.webp');
      }
      // Use medium quality thumbnail for smaller displays
      if (optimalWidth <= 200) {
        return src.replace('hqdefault.jpg', 'mqdefault.jpg');
      }
    }
    
    // For lovable uploads, add size and format optimization hints
    if (src.includes('lovable-uploads')) {
      const params = new URLSearchParams();
      if (supportsWebP) params.set('format', 'webp');
      params.set('quality', '85');
      params.set('w', optimalWidth.toString());
      params.set('h', optimalHeight.toString());
      params.set('fit', 'contain');
      
      return src + (src.includes('?') ? '&' : '?') + params.toString();
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

  // Generate sizes attribute for responsive loading
  const getSizesAttribute = () => {
    if (displayWidth) {
      return `${displayWidth}px`;
    }
    if (width) {
      return `${Math.min(width, 200)}px`;
    }
    return '100px';
  };

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={className}
      loading={loading}
      fetchPriority={fetchpriority}
      decoding="async"
      width={displayWidth || width}
      height={displayHeight || height}
      sizes={getSizesAttribute()}
      style={{
        transition: 'opacity 0.3s ease-in-out',
        opacity: isLoaded ? 1 : 0.8,
        maxWidth: displayWidth ? `${displayWidth}px` : width ? `${width}px` : '100%',
        maxHeight: displayHeight ? `${displayHeight}px` : height ? `${height}px` : 'auto',
        width: 'auto',
        height: 'auto',
        // Optimize rendering for small images
        imageRendering: displayWidth && displayWidth <= 100 ? 'crisp-edges' : 'auto',
        objectFit: 'contain'
      }}
      data-processed="true"
      {...props}
    />
  );
};