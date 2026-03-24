"use client";

import { useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    quote:
      "TAMADISS transformed our entire brand presence. The attention to detail and creative direction exceeded every expectation we had.",
    name: "Sarah Chen",
    role: "CEO, NovaTech",
    initials: "SC",
  },
  {
    quote:
      "Working with this team was a game-changer. Our website conversions increased by 340% within the first two months of launch.",
    name: "Marcus Rivera",
    role: "Founder, FlowState",
    initials: "MR",
  },
  {
    quote:
      "The motion design work they delivered for our product launch was absolutely stunning. We received countless compliments from our audience.",
    name: "Aisha Patel",
    role: "Marketing Director, Luxe",
    initials: "AP",
  },
  {
    quote:
      "Professional, creative, and incredibly responsive. They didn't just build us a website — they built us a digital experience.",
    name: "David Okonkwo",
    role: "Co-Founder, EcoTech",
    initials: "DO",
  },
  {
    quote:
      "From strategy to execution, every step was handled with precision. Our rebrand has been the best investment we've made this year.",
    name: "Emma Johansson",
    role: "Brand Manager, Kinetic",
    initials: "EJ",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();

    // Auto-scroll
    const interval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 4000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-[52px] font-bold mb-16 tracking-tight"
        >
          What Clients Say
        </motion.h2>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_33.333%] min-w-0"
                >
                  <div className="bg-[#1A1A1A] rounded-2xl p-8 h-full relative">
                    {/* Decorative Quote */}
                    <span className="text-6xl text-[#F97316] opacity-30 absolute top-4 left-6 leading-none font-serif">
                      &ldquo;
                    </span>

                    {/* Quote */}
                    <p className="text-base text-white/70 italic leading-relaxed mt-8 mb-6">
                      {t.quote}
                    </p>

                    {/* Stars */}
                    <div className="text-yellow-400 text-xs mb-4 tracking-wider">
                      ★★★★★
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#F97316]/20 flex items-center justify-center">
                        <span className="text-[#F97316] text-xs font-semibold">
                          {t.initials}
                        </span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">
                          {t.name}
                        </div>
                        <div className="text-white/40 text-xs">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi && emblaApi.scrollTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? "bg-[#F97316] w-6"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
