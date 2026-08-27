import React, { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentScroll = window.scrollY;
        setScrollPercentage(Math.min(Math.max((currentScroll / totalHeight) * 100, 0), 100));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-black/10 pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-[#8cb0bf] via-[#0A84FF] to-[#8cb0bf] transition-all duration-75 shadow-[0_0_10px_rgba(140, 176, 191,0.6)]"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}
