import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ end, duration = 1500, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const target = parseInt(end, 10);
          if (isNaN(target)) return;

          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOutProgress * target));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={counterRef} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}
