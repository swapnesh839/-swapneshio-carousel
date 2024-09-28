import React, { useEffect, useRef, ReactNode } from 'react';
import './styles.css';

interface SwapneshiocarouselProps {
  children: ReactNode;
  scrollSpeed?: number;
  height?: string;
  gap?: string;
}

const Swapneshiocarousel: React.FC<SwapneshiocarouselProps> = ({
  children,
  scrollSpeed = 1,
  height = 'auto',
  gap = '20px',
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let isScrolling = false;
       

    if (!carousel) return;

    const scroll = () => {
      if (!carousel || isScrolling) return;

      const scrollAmount = 120;
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });

      if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
        // Reset the scroll position to start to create the infinite loop effect
        isScrolling = true;
        carousel.scrollTo({ left: 0, behavior: 'auto' });
        setTimeout(() => {
          isScrolling = false;
        }, 50); // Prevent instant reset issues
      }
    };

    const scrollInterval = setInterval(scroll, scrollSpeed * 1000);

    return () => clearInterval(scrollInterval);
  }, [scrollSpeed]);

  return (
    <div
      className="swapneshiocarousel-wrapper"
      ref={carouselRef}
      style={{
        height,
        display: 'flex',
        overflowX: 'scroll',
        scrollBehavior: 'smooth',
        whiteSpace: 'nowrap', 
      }}
    >
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className="swapneshiocarousel-slides"
          style={{ marginRight: gap, flexShrink: 0 }} // Ensure slides don't shrink
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default Swapneshiocarousel;
