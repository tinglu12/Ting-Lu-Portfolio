'use client';

import { useEffect, useState } from 'react';

interface Cloud {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  delay: number;
}

export default function Clouds() {
  const [clouds, setClouds] = useState<Cloud[]>([]);

  useEffect(() => {
    // Generate initial clouds
    const initialClouds: Cloud[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Start within viewport
      y: Math.random() * 50 + 10, // Random vertical position
      size: Math.random() * 80 + 60, // Random size between 60-140px
      opacity: Math.random() * 0.4 + 0.6, // Random opacity between 0.6-1.0
      speed: Math.random() * 0.3 + 0.1, // Random speed between 0.1-0.4 (slower)
      delay: Math.random() * 10, // Random delay to stagger animations
    }));

    setClouds(initialClouds);
  }, []);

  return (
    <>
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          style={{
            position: 'fixed',
            left: `${cloud.x}vw`,
            top: `${cloud.y}vh`,
            width: `${cloud.size}px`,
            height: `${cloud.size * 0.6}px`,
            opacity: cloud.opacity,
            animation: `float ${30 / cloud.speed}s linear infinite`,
            animationDelay: `${cloud.delay}s`,
            transform: 'translateX(-100px)',
            zIndex: -1,
            pointerEvents: 'none',
            willChange: 'transform',
          }}
        >
          <svg
            viewBox="0 0 100 60"
            style={{
              width: '100%',
              height: '100%',
              fill: 'rgba(255, 255, 255, 1)',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
            }}
          >
            {/* Cloud shape - more defined */}
            <ellipse cx="25" cy="30" rx="18" ry="15" />
            <ellipse cx="45" cy="25" rx="15" ry="12" />
            <ellipse cx="65" cy="30" rx="18" ry="15" />
            <ellipse cx="80" cy="35" rx="12" ry="10" />
            <ellipse cx="40" cy="42" rx="10" ry="8" />
            <ellipse cx="20" cy="35" rx="8" ry="6" />
          </svg>
        </div>
      ))}
    </>
  );
} 