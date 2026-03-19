"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Projects" },
  { value: 3, suffix: "+", label: "Years" },
  { value: 100, suffix: "%", label: "Satisfaction" },
  { value: 20, suffix: "+", label: "Clients" },
];

function useCountUp(target, duration = 2000, inView) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, inView]);

  return count;
}

function StatItem({ value, suffix, label }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const count = useCountUp(value, 2000, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center px-4 py-6">
      <div className="text-5xl md:text-[64px] font-bold text-white tracking-tight">
        {count}
        {suffix}
      </div>
      <div className="text-[13px] uppercase tracking-[0.1em] text-white/40 mt-2">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 px-6 border-t border-b border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-white/10"
      >
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </motion.div>
    </section>
  );
}
