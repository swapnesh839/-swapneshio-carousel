"use client"
import React, { useEffect, useRef, ReactNode, useState } from 'react';
import './styles.css';

interface SwapneshiocarouselProps {
  children: ReactNode;
  scrollSpeed?: number;
  height?: string;
  gap?: string;
  scrollAmount?: number;
  slideswidth?:string | number | undefined
}

const carousel: React.FC<SwapneshiocarouselProps> = ({
  children,
  scrollSpeed = 1,
  height = 'auto',
  gap = '20px',
  slideswidth="auto",
  scrollAmount=200
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scroll = () => {
      if (!carousel) return;

      if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 2) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        setTimeout(() => {
          carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }, 900);
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
          style={{height, marginRight: gap, flexBasis:slideswidth}}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
export default carousel;