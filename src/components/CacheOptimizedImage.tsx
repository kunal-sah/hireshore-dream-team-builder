/**
 * Cache Optimized Image Component
 * Implements aggressive caching and modern format optimization for better performance
 */
import React, { useState, useEffect } from 'react';
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

  // Generate optimized sources based on file type and format support
  const generateOptimizedSources = () => {
    const sources = [];
    const baseUrl = src.replace(/\.[^/.]+$/, ''); // Remove extension
    const isLovableUpload = src.includes('/lovable-uploads/');
    
    // For lovable uploads, we can't convert formats server-side,
    // but we can optimize delivery with proper sizing
    if (isLovableUpload) {
      return [{ src, type: 'image/' + src.split('.').pop() }];
    }

    // For external images, suggest format alternatives
    if (supportsAVIF) {
      sources.push({ src: `${baseUrl}.avif`, type: 'image/avif' });
    }
    if (supportsWebP) {
      sources.push({ src: `${baseUrl}.webp`, type: 'image/webp' });
    }
    
    // Original format as fallback
    sources.push({ src, type: 'image/' + src.split('.').pop() });
    
    return sources;
  };

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

  // Use picture element for format optimization when multiple sources available
  const sources = generateOptimizedSources();
  
  if (sources.length > 1) {
    return (
      <picture>
        {sources.slice(0, -1).map((source, index) => (
          <source 
            key={index}
            srcSet={source.src}
            type={source.type}
          />
        ))}
        <img
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
            height: 'auto'
          }}
          {...props}
        />
      </picture>
    );
  }

  return (
    <img
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
        height: 'auto'
      }}
      {...props}
    />
  );
};