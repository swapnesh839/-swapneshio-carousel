import React, { ReactNode } from 'react';
import './styles.css';
interface SwapneshiocarouselProps {
    children: ReactNode;
    scrollSpeed?: number;
    height?: string;
    gap?: string;
}
declare const Swapneshiocarousel: React.FC<SwapneshiocarouselProps>;
export default Swapneshiocarousel;
