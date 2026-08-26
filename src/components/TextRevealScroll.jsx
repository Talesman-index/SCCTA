import React, { useEffect, useRef, useState } from 'react';

/**
 * TextRevealScroll
 * As the user scrolls down, words smoothly transition from a dimmed opacity
 * to 100% full dark color based on the scroll position within the container.
 */
export default function TextRevealScroll({ text, className = '' }) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far into view the element is (from entering bottom to reaching top third)
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.25;
      
      const current = rect.top;
      
      if (current > start) {
        setScrollProgress(0);
      } else if (current < end) {
        setScrollProgress(1);
      } else {
        const progress = (start - current) / (start - end);
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const words = text.split(' ');
  const totalWords = words.length;

  return (
    <p ref={containerRef} className={`leading-snug transition-colors ${className}`}>
      {words.map((word, index) => {
        // Calculate the threshold for this word
        const wordStart = index / totalWords;
        const wordEnd = (index + 1) / totalWords;
        
        // Compute opacity for this specific word
        let opacity = 0.22; // Dimmed state
        let color = '#94A3B8'; // Slate 400
        
        if (scrollProgress >= wordEnd) {
          opacity = 1;
          color = '#0F172A'; // Slate 900 (Active)
        } else if (scrollProgress > wordStart) {
          const step = (scrollProgress - wordStart) / (wordEnd - wordStart);
          opacity = 0.22 + step * 0.78;
          color = '#0F172A';
        }

        return (
          <span
            key={index}
            style={{
              opacity,
              color: opacity > 0.4 ? '#0F172A' : '#94A3B8',
              transition: 'opacity 0.15s ease-out, color 0.15s ease-out',
            }}
            className="inline-block mr-[0.28em] font-medium"
          >
            {word}
          </span>
        );
      })}
    </p>
  );
}
