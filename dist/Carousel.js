import { jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect, useRef } from 'react';
import './styles.css';
var Swapneshiocarousel = function (_a) {
    var children = _a.children, _b = _a.scrollSpeed, scrollSpeed = _b === void 0 ? 1 : _b, _c = _a.height, height = _c === void 0 ? 'auto' : _c, _d = _a.gap, gap = _d === void 0 ? '20px' : _d;
    var carouselRef = useRef(null);
    useEffect(function () {
        var carousel = carouselRef.current;
        var isScrolling = false;
        if (!carousel)
            return;
        var scroll = function () {
            if (!carousel || isScrolling)
                return;
            var scrollAmount = 120;
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
                // Reset the scroll position to start to create the infinite loop effect
                isScrolling = true;
                carousel.scrollTo({ left: 0, behavior: 'auto' });
                setTimeout(function () {
                    isScrolling = false;
                }, 50); // Prevent instant reset issues
            }
        };
        var scrollInterval = setInterval(scroll, scrollSpeed * 1000);
        return function () { return clearInterval(scrollInterval); };
    }, [scrollSpeed]);
    return (_jsx("div", { className: "swapneshiocarousel-wrapper", ref: carouselRef, style: {
            height: height,
            display: 'flex',
            overflowX: 'scroll',
            scrollBehavior: 'smooth',
            whiteSpace: 'nowrap', // Ensure items are in a single row
        }, children: React.Children.map(children, function (child, index) { return (_jsx("div", { className: "swapneshiocarousel-slides", style: { marginRight: gap, flexShrink: 0 }, children: child }, index)); }) }));
};
export default Swapneshiocarousel;
//# sourceMappingURL=Carousel.js.map