import React, { useEffect, useState } from 'react';
import '../assets/styles/scroll.css'; 

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 200); // Show icon only when scroll is less than 200px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    isVisible && (
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="mouse">
          <div className="dot"></div>
        </div>
        
      </div>
    )
  );
};

export default ScrollIndicator;
