"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

// Helper strictly for order. We'll group them dynamically in the component.
const works = [
  // Group 1: Featured Campaigns (projects 1-6)
  {
    id: 1,
    groupHeader: "Product Video Projects",
    category: "PRODUCT",
    title: "PRODUCT",
    desc: "Product Video Projects",
    video: "https://res.cloudinary.com/dkceowz64/video/upload/v1774009666/project1_wr6onb.mp4",
    poster: "https://res.cloudinary.com/dkceowz64/image/upload/v1774370699/project1_oto0f0.jpg"
  },
  {
    id: 2,
    groupHeader: "Featured Campaigns",
    category: "REELS / COSME",
    title: "Cosmee",
    desc: "Well Known Cosmetics Industries",
    video: "https://res.cloudinary.com/dkceowz64/video/upload/v1774010475/project2_bvxae5.mp4",
    poster: "https://res.cloudinary.com/dkceowz64/image/upload/v1774370698/project2_h1p7fg.jpg"
  },
  {
    id: 3,
    groupHeader: "Featured Campaigns",
    category: "JOB APPLICATIONS",
    title: "Careers",
    desc: "A showcase of our most successful jobs",
    video: "https://res.cloudinary.com/dkceowz64/video/upload/v1774012985/project3_1_gzwmvz.mp4",
    poster: "https://res.cloudinary.com/dkceowz64/image/upload/v1774370699/project3_tpfqym.jpg"
  },
  {
    id: 4,
    groupHeader: "Restaurant Video Projects",
    category: "RESTAURANT",
    title: "Focus",
    desc: "Restaurant Video Projects",
    video: "https://res.cloudinary.com/dkceowz64/video/upload/v1774012098/project4_dppiyo.mp4",
    poster: "https://res.cloudinary.com/dkceowz64/image/upload/v1774370691/project4_i5bent.jpg"
  },
  {
    id: 5,
    groupHeader: "Product Video Projects",
    category: "PRODUCT",
    title: "Elevate",
    desc: "Product Video Projects",
    video: "https://res.cloudinary.com/dkceowz64/video/upload/v1774010575/project5_hr1wun.mp4",
    poster: "https://res.cloudinary.com/dkceowz64/image/upload/v1774370700/project5_zgbgdz.jpg"
  },
  {
    id: 6,
    groupHeader: "Product Video Projects",
    category: "PRODUCT",
    title: "Boost",
    desc: "Product Video Projects",
    video: "https://res.cloudinary.com/dkceowz64/video/upload/v1774010552/project6_rqvtee.mp4",
    poster: "https://res.cloudinary.com/dkceowz64/image/upload/v1774370699/project6_fg976n.jpg"
  },

  // Group 2: Catering Brand Video Projects (7, 9, 11)
  {
    id: 7,
    groupHeader: "Catering Brand Video Projects",
    category: "CATERING",
    title: "Identity",
    desc: "Catering Brand Video Projects",
    video: "https://res.cloudinary.com/dkceowz64/video/upload/v1774350582/project7_c2yqiw.mov",
    poster: "https://res.cloudinary.com/dkceowz64/image/upload/v1774370690/project7_oyxxtm.jpg"
  },
  {
    id: 9,
    groupHeader: "Catering Brand Video Projects",
    category: "CATERING",
    title: "Momentum",
    desc: "Catering Brand Video Projects",
    video: "https://res.cloudinary.com/dkceowz64/video/upload/v1774350146/project9_uqi7og.mov",
    poster: "https://res.cloudinary.com/dkceowz64/image/upload/v1774370689/project9_lkxokd.jpg"
  },
  {
    id: 11,
    groupHeader: "Catering Brand Video Projects",
    category: "CATERING",
    title: "Live",
    desc: "Catering Brand Video Projects",
    video: "https://res.cloudinary.com/dkceowz64/video/upload/v1774350070/project11_hwxwcs.mov",
    poster: "https://res.cloudinary.com/dkceowz64/image/upload/v1774370691/project11_uinq4p.jpg"
  },

  // Group 3: Perfume Brand Video Projects (12, 13, 14)
  {
    id: 12,
    groupHeader: "Perfume Brand Video Projects",
    category: "PERFUME",
    title: "Connect",
    desc: "Perfume Brand Video Projects",
    video: "https://res.cloudinary.com/dkceowz64/video/upload/v1774349672/project12_nof2en.mp4",
    poster: "https://res.cloudinary.com/dkceowz64/image/upload/v1774370689/project12_ndih5r.jpg"
  },
  {
    id: 13,
    groupHeader: "Perfume Brand Video Projects",
    category: "PERFUME",
    title: "Detail",
    desc: "Perfume Brand Video Projects",
    video: "https://res.cloudinary.com/dkceowz64/video/upload/v1774349468/project13_u0t1ka.mp4",
    poster: "https://res.cloudinary.com/dkceowz64/image/upload/v1774370689/project13_a9ezlh.jpg"
  },
  {
    id: 14,
    groupHeader: "Perfume Brand Video Projects",
    category: "PERFUME",
    title: "Culture",
    desc: "Perfume Brand Video Projects",
    video: "https://res.cloudinary.com/dkceowz64/video/upload/v1774349427/project14_egpl0c.mp4",
    poster: "https://res.cloudinary.com/dkceowz64/image/upload/v1774370688/project14_gjpcji.jpg"
  },

  // Group 4: Coffee Shop & Restaurant Video Projects
  {
    id: 8,
    groupHeader: "Coffee Shop Video Projects",
    category: "COFFEE SHOP",
    title: "Vision",
    desc: "Coffee Shop Video Projects",
    video: "https://res.cloudinary.com/dkceowz64/video/upload/v1774349559/project8_ihji0z.mp4",
    poster: "https://res.cloudinary.com/dkceowz64/image/upload/v1774370688/project8_uikcsv.jpg"
  },
  {
    id: 15,
    groupHeader: "Coffee Shop Video Projects",
    category: "COFFEE SHOP",
    title: "Origin",
    desc: "Coffee Shop Video Projects",
    video: "https://res.cloudinary.com/dkceowz64/video/upload/v1774349362/project15_ql07nk.mp4",
    poster: "https://res.cloudinary.com/dkceowz64/image/upload/v1774370688/project15_ns99tk.jpg"
  },
  {
    id: 16,
    groupHeader: "Restaurant Video Projects",
    category: "RESTAURANT",
    title: "Taste",
    desc: "Restaurant Video Projects",
    video: "https://res.cloudinary.com/dkceowz64/video/upload/v1774355583/project16_npjd54.mp4",
    poster: "https://res.cloudinary.com/dkceowz64/video/upload/so_0,f_jpg,w_560,q_70/v1774355583/project16_npjd54.jpg"
  },
  {
    id: 17,
    groupHeader: "Restaurant Video Projects",
    category: "RESTAURANT",
    title: "Culinary",
    desc: "Restaurant Video Projects",
    video: "https://res.cloudinary.com/dkceowz64/video/upload/v1787919911/IMG_5551_tyvs7n.mp4",
    poster: "https://res.cloudinary.com/dkceowz64/video/upload/so_0,f_jpg,w_560,q_70/v1787919911/IMG_5551_tyvs7n.jpg"
  }
];

export default function SocialMastery() {
  const [playingId, setPlayingId] = useState(null);
  const videoRefs = useRef({});

  // Group the flat works array by groupHeader maintaining order
  const groupedWorks = works.reduce((acc, work) => {
    if (!acc[work.groupHeader]) acc[work.groupHeader] = [];
    acc[work.groupHeader].push(work);
    return acc;
  }, {});

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
          className="w-full flex flex-col items-center text-center mb-24"
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

        {/* Video Sections */}
        <div className="w-full flex flex-col gap-24">
          {Object.entries(groupedWorks).map(([header, items]) => (
            <div key={header} className="w-full">
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10 w-full"
              >
                <div className="flex items-center gap-6">
                  <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                    {header}
                  </h3>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
                </div>
              </motion.div>

              {/* Grid for this category */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((work, index) => {
                  const isPlaying = playingId === work.id;

                  return (
                    <motion.div
                      key={work.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: (index % 3) * 0.15 }}
                      className="group relative w-full h-[550px] lg:h-[650px] bg-[#1A1A1A] rounded-[2.5rem] overflow-hidden"
                    >
                      {/* Invisible clickable overlay */}
                      <div
                        className="absolute inset-0 z-30 cursor-pointer"
                        onClick={() => togglePlay(work.id)}
                      />

                      {/* Video */}
                      <video
                        ref={(el) => (videoRefs.current[work.id] = el)}
                        loop
                        playsInline
                        preload="metadata"
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isPlaying ? "scale-105 brightness-110 opacity-100" : "brightness-[0.6] group-hover:brightness-90 scale-100 group-hover:scale-105"} ${!isPlaying && work.poster ? "opacity-0" : "opacity-100"}`}
                        src={work.poster ? work.video : `${work.video}#t=0.001`}
                      />

                      {/* Explicit Image Poster Overlay */}
                      {!isPlaying && work.poster && (
                        <img 
                          src={work.poster} 
                          alt={work.title}
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 brightness-[0.6] group-hover:brightness-90 scale-100 group-hover:scale-105 pointer-events-none"
                        />
                      )}

                      {/* Play Button */}
                      <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#F97316] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.4)] pointer-events-none transition-all duration-500 z-10 ${isPlaying ? "opacity-0 scale-50 blur-md" : "opacity-100 scale-100 blur-0 group-hover:scale-110"
                          }`}
                      >
                        <Play fill="black" className="text-black ml-1 w-8 h-8" />
                      </div>

                      {/* Bottom Gradient Overlay & Text (Fades out when playing) */}
                      <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0D0D0D]/95 via-[#0D0D0D]/60 to-transparent pt-32 pb-10 px-8 z-20 flex flex-col justify-end pointer-events-none transition-opacity duration-500 ${isPlaying ? "opacity-0" : "opacity-100"}`}>
                        {work.id === 1 && (
                          <h3 className="text-6xl md:text-7xl font-black text-[#F97316] mb-4 tracking-tighter mix-blend-lighten opacity-90 drop-shadow-xl">

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
          ))}
        </div>

      </div>
    </section>
  );
}
