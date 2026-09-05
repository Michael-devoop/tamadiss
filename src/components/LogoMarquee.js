"use client";

import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LogoMarquee() {
  const logos = [
    { src: "/c1.jpg", alt: "Aroma" },
    { src: "/c2.jpg", alt: "Client logo 2" },
    { src: "/c3.jpg", alt: "Darik Coffee" },
    { src: "/c4.jpg", alt: "Konark Hotel" },
    { src: "/c5.jpg", alt: "Hasiu Sweet" },
    { src: "/c6.jpg", alt: "FYA Gas" },
    { src: "/c7.jpg", alt: "Odoni Kitfo & Lounge" },
    { src: "/Golden Tulip.png", alt: "Golden Tulip Addis Ababa", contain: true },
  ];

  // Repeat logos 6 times to create a seamless infinite scroll runway
  const displayLogos = [
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
  ];

  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const isHovered = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const [canScroll, setCanScroll] = useState(true);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Center scroll position initially so user can scroll in both directions
    const quarterScroll = container.scrollWidth / 3;
    container.scrollLeft = quarterScroll;

    let animationFrameId;

    const autoScroll = () => {
      if (!isDragging.current && !isHovered.current && container) {
        container.scrollLeft += 0.8;

        const singleSetWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += singleSetWidth;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseDown = (e) => {
    const container = scrollRef.current;
    if (!container) return;
    isDragging.current = true;
    startX.current = e.pageX - container.offsetLeft;
    scrollLeftStart.current = container.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const container = scrollRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    container.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleWheel = (e) => {
    const container = scrollRef.current;
    if (!container) return;
    // Allow horizontal wheel or convert vertical delta to horizontal scroll
    if (Math.abs(e.deltaX) > 0) {
      container.scrollLeft += e.deltaX;
    } else if (Math.abs(e.deltaY) > 0) {
      container.scrollLeft += e.deltaY;
    }
  };

  const scrollByAmount = (amount) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="py-16 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-white/40">
            Trusted by leading brands
          </p>
          <p className="text-xs text-white/25 mt-1 hidden sm:block">
            Drag, scroll or swipe to explore
          </p>
        </div>

        {/* Scroll Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollByAmount(-300)}
            aria-label="Scroll left"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollByAmount(300)}
            aria-label="Scroll right"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Scrollable Track Container */}
      <div className="relative group">
        {/* Left & Right subtle gradient fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[var(--color-background)] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[var(--color-background)] to-transparent z-10" />

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => {
            isDragging.current = false;
            isHovered.current = false;
          }}
          onMouseEnter={() => {
            isHovered.current = true;
          }}
          onTouchStart={() => {
            isHovered.current = true;
          }}
          onTouchEnd={() => {
            setTimeout(() => {
              isHovered.current = false;
            }, 1000);
          }}
          onWheel={handleWheel}
          className="flex items-center overflow-x-auto py-6 cursor-grab active:cursor-grabbing no-scrollbar scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {displayLogos.map((logo, i) => (
            <div key={`logo-${i}`} className="flex-shrink-0 mx-6 md:mx-8">
              <div
                className="h-36 w-36 md:h-44 md:w-44 rounded-full overflow-hidden flex items-center justify-center bg-black opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105"
                style={{
                  boxShadow:
                    "0 0 20px 8px rgba(0,0,0,0.7), 0 0 40px 16px rgba(0,0,0,0.4)",
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  draggable={false}
                  className={`w-full h-full pointer-events-none ${
                    logo.contain ? "object-contain p-2" : "object-cover rounded-full"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
