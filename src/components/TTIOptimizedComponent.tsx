/**
 * TTI Optimized Component Wrapper
 * Ensures components don't block Time to Interactive
 */
import React, { useEffect, useRef, useState } from 'react';
import { queueAfterInteractive } from '../utils/interactivityOptimizer';

interface TTIOptimizedComponentProps {
  children: React.ReactNode;
  priority?: 'critical' | 'high' | 'normal' | 'low';
  deferMs?: number;
}

export const TTIOptimizedComponent: React.FC<TTIOptimizedComponentProps> = ({ 
  children, 
  priority = 'normal',
  deferMs = 0 
}) => {
  const [shouldRender, setShouldRender] = useState(priority === 'critical');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority === 'critical') return;

    const renderComponent = () => {
      setShouldRender(true);
    };

    // Defer based on priority
    switch (priority) {
      case 'high':
        queueAfterInteractive(() => {
          setTimeout(renderComponent, deferMs);
        });
        break;
      case 'normal':
        queueAfterInteractive(() => {
          setTimeout(renderComponent, deferMs + 100);
        });
        break;
      case 'low':
        queueAfterInteractive(() => {
          setTimeout(renderComponent, deferMs + 500);
        });
        break;
    }
  }, [priority, deferMs]);

  if (!shouldRender) {
    return (
      <div 
        ref={containerRef}
        className="min-h-[200px] bg-gray-50 animate-pulse"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '0 200px' }}
      />
    );
  }

  return (
    <div ref={containerRef} data-tti-optimized={priority}>
      {children}
    </div>
  );
};