"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const works = [
  {
    id: 1,
    category: "TIKTOK / VIRAL",
    title: "Yura",
    desc: "Local Tour And Travel Agency",
    video: "/project1.mp4",
  },
  {
    id: 2,
    category: "REELS / COSME",
    title: "Cosmee",
    desc: "Well Known Cosmetics Industries in...",
    video: "/project2.mp4",
  },
  {
    id: 3,
    category: "JOB APPLICATIONS / FREELANCE",
    title: "Careers",
    desc: "A showcase of our most successful job...",
    video: "/project3.mp4",
  },
  {
    id: 4,
    category: "CAMPAIGN / BRANDING",
    title: "Focus",
    desc: "Creative Direction for modern brands",
    video: "/project4.mp4",
  },
  {
    id: 5,
    category: "COMMERCIAL / TVC",
    title: "Elevate",
    desc: "High end commercial production",
    video: "/project5.mp4",
  },
  {
    id: 6,
    category: "SOCIAL / ENGAGEMENT",
    title: "Boost",
    desc: "Driving organic growth through motion",
    video: "/project6.mp4",
  }
];

export default function SocialMastery() {
  const [playingId, setPlayingId] = useState(null);
  const videoRefs = useRef({});

  const togglePlay = (id) => {
    if (playingId === id) {
      // Pause currently playing
      videoRefs.current[id]?.pause();
      setPlayingId(null);
    } else {
      // Pause any existing
      if (playingId) {
        videoRefs.current[playingId]?.pause();
      }
      // Play new
      const vid = videoRefs.current[id];
      if (vid) {
        vid.play().catch(err => console.log("Playback failed", err));
      }
      setPlayingId(id);
    }
  };

  return (
    <section id="works" className="relative w-full py-28 px-6 md:px-16 lg:px-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center text-center mb-20"
        >
          <p className="text-[#F97316] text-sm font-bold tracking-[0.3em] uppercase mb-6">
            The Viral Strategy
          </p>
          <h2 className="text-7xl md:text-[100px] lg:text-[140px] font-black leading-[0.85] tracking-tighter uppercase text-white break-words">
            SOCIAL <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FDBA74]">
              MASTERY
            </span>
          </h2>
        </motion.div>

        {/* Video Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => {
            const isPlaying = playingId === work.id;

            return (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.2 }}
                className="group relative w-full h-[550px] lg:h-[650px] bg-[#1A1A1A] rounded-[2.5rem] overflow-hidden"
              >
                {/* Invisible clickable overlay to capture clicks anywhere on the card to pause/play */}
                <div 
                  className="absolute inset-0 z-30 cursor-pointer"
                  onClick={() => togglePlay(work.id)}
                />

                {/* Video showing its first frame natively, scaling if playing */}
                <video
                  ref={(el) => (videoRefs.current[work.id] = el)}
                  loop
                  playsInline
                  preload="metadata"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isPlaying ? "scale-105 brightness-110" : "brightness-[0.6] group-hover:brightness-90 scale-100 group-hover:scale-105"}`}
                  src={`${work.video}#t=0.001`}
                />
                
                {/* Play Button */}
                <div 
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#F97316] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.4)] pointer-events-none transition-all duration-500 z-10 ${
                    isPlaying ? "opacity-0 scale-50 blur-md" : "opacity-100 scale-100 blur-0 group-hover:scale-110"
                  }`}
                >
                  <Play fill="black" className="text-black ml-1 w-8 h-8" />
                </div>

                {/* Bottom Gradient Overlay & Text (Fades out when playing) */}
                <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0D0D0D]/95 via-[#0D0D0D]/60 to-transparent pt-32 pb-10 px-8 z-20 flex flex-col justify-end pointer-events-none transition-opacity duration-500 ${isPlaying ? "opacity-0" : "opacity-100"}`}>
                  {work.id === 1 && (
                    <h3 className="text-6xl md:text-7xl font-black text-[#F97316] mb-4 tracking-tighter mix-blend-lighten opacity-90 drop-shadow-xl">
                      Yura
                    </h3>
                  )}
                  <p className="text-[#F97316] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 drop-shadow-md">
                    {work.category}
                  </p>
                  <p className="text-white/90 text-sm font-medium drop-shadow-lg">
                    {work.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
