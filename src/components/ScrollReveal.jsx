import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  threshold = 0.15 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    switch (direction) {
      case 'up': return 'translate3d(0, 36px, 0) scale(0.98)';
      case 'down': return 'translate3d(0, -36px, 0) scale(0.98)';
      case 'left': return 'translate3d(36px, 0, 0) scale(0.98)';
      case 'right': return 'translate3d(-36px, 0, 0) scale(0.98)';
      default: return 'translate3d(0, 36px, 0) scale(0.98)';
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'transform, opacity'
      }}
      className={className}
    >
      {children}
    </div>
  );
}
