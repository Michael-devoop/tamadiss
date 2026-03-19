"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Compass, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Discovery",
    desc: "Deep dive into your brand, goals, and audience. We ask the right questions to uncover the real story behind your vision.",
    accent: "from-[#F97316] to-[#FB923C]",
  },
  {
    num: "02",
    icon: Compass,
    title: "Strategy",
    desc: "We map out a tailored creative roadmap — every frame, every pixel, every decision is aligned with your business objectives.",
    accent: "from-orange-400 to-emerald-500",
  },
  {
    num: "03",
    icon: PenTool,
    title: "Create",
    desc: "Production begins. From concept to execution, our team crafts high-impact visuals with cinematic precision and detail.",
    accent: "from-orange-400 to-pink-500",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Launch",
    desc: "We deliver a polished final product, optimized for impact. Then we measure, iterate, and help you scale what works.",
    accent: "from-[#F97316] to-orange-500",
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F97316]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[#F97316] text-sm uppercase tracking-[0.15em] mb-4">
            Our Process
          </p>
          <h2 className="text-7xl md:text-[100px] lg:text-[130px] font-black leading-[0.9] tracking-tighter uppercase text-white break-words">
            How We <br />
            Work
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - desktop */}
          <div className="hidden md:block absolute left-[39px] top-0 bottom-0 w-[2px] bg-white/[0.06]">
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full bg-gradient-to-b from-[#F97316] via-orange-400 to-orange-400"
            />
          </div>

          <div className="space-y-6 md:space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative md:flex items-start gap-8 md:pb-16 last:pb-0"
                >
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <motion.div
                      whileInView={{ scale: [0.8, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-lg`}
                      style={{ boxShadow: `0 8px 32px rgba(59,130,246,0.2)` }}
                    >
                      <Icon size={28} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className="group mt-4 md:mt-0 flex-1 bg-[#111111] border border-white/[0.06] rounded-2xl p-6 md:p-8 hover:border-white/[0.12] transition-all duration-500 hover:-translate-y-0.5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#F97316] text-xs font-mono tracking-wider">
                        STEP {step.num}
                      </span>
                      <div className="h-[1px] w-8 bg-white/10" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/45 leading-relaxed max-w-lg">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
