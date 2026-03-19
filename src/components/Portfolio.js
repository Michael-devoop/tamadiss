"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Nova Brand Redesign",
    category: "Branding",
    tag: "branding",
    color: "bg-[#F97316]",
    gradient: "from-[#F97316]/20 to-[#F97316]/5",
  },
  {
    title: "FinFlow Dashboard",
    category: "Web",
    tag: "web",
    color: "bg-teal-500",
    gradient: "from-teal-500/20 to-teal-500/5",
  },
  {
    title: "Kinetic Reel 2024",
    category: "Motion",
    tag: "motion",
    color: "bg-[#F97316]",
    gradient: "from-[#F97316]/20 to-[#F97316]/5",
  },
  {
    title: "EcoTech Website",
    category: "Web",
    tag: "web",
    color: "bg-teal-500",
    gradient: "from-teal-500/20 to-teal-500/5",
  },
  {
    title: "Luxe Identity System",
    category: "Branding",
    tag: "branding",
    color: "bg-[#F97316]",
    gradient: "from-[#F97316]/20 to-[#F97316]/5",
  },
  {
    title: "Product Launch Film",
    category: "Motion",
    tag: "motion",
    color: "bg-teal-500",
    gradient: "from-teal-500/20 to-teal-500/5",
  },
];

const filters = ["All", "Branding", "Web", "Motion"];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.tag === active.toLowerCase());

  return (
    <section id="work" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-[52px] font-bold mb-10 tracking-tight"
        >
          Selected Work
        </motion.h2>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-3 mb-12 flex-wrap"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                active === f
                  ? "bg-[#F97316] text-white"
                  : "border border-white/20 text-white/60 hover:text-white hover:border-white/40"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  i === 0 && active === "All" ? "md:col-span-2" : ""
                }`}
                style={{
                  aspectRatio:
                    i === 0 && active === "All" ? "16/8" : "16/10",
                }}
              >
                {/* Placeholder gradient background simulating project image */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} bg-[#1A1A1A]`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center">
                      <span className="text-white/20 text-3xl font-bold">
                        {project.title[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs text-white ${project.color} w-fit mb-3`}
                  >
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <span className="text-white/70 text-sm inline-flex items-center gap-1">
                    View Project →
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
