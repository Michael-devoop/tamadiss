"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-start justify-center overflow-hidden px-6 md:px-16 lg:px-24">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-fill"
        >
          <source src="https://res.cloudinary.com/dkceowz64/video/upload/v1774009758/herov2_frdnar.mov" type="video/quicktime" />
          <source src="https://res.cloudinary.com/dkceowz64/video/upload/v1774009758/herov2_frdnar.mov" type="video/mp4" />
        </video>
        {/* Dark vignette overlay similar to design */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]/30" />
      </div>

      <div className="relative z-10 text-left max-w-4xl mt-12 md:mt-20">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex flex-col"
        >
          <h1 className="text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px] font-black leading-[0.85] tracking-tighter uppercase text-white -mb-2 md:-mb-4">
            TAM
          </h1>
          <h1 className="text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px] font-black leading-[0.85] tracking-tighter uppercase text-[#F97316]">
            ADDISS
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl font-medium tracking-wide mb-10 leading-relaxed"
        >
          Crafting <span className="text-white font-bold">cinematic visual narratives</span> that redefine how African brands communicate on the world stage.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-start"
        >
          <a
            href="#works"
            className="bg-[#F97316] hover:bg-orange-500 text-black px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center text-center"
          >
            View Portfolio
          </a>
          <a
            href="#services"
            className="bg-black/30 backdrop-blur-sm border border-white/20 hover:bg-white hover:text-black text-white px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center text-center"
          >
            Expertise
          </a>
        </motion.div>
      </div>

      {/* Right side floating elements */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute right-6 md:right-16 bottom-16 flex flex-col items-center justify-end z-20"
      >
        <div className="flex flex-col items-center gap-6">
          <p className="[writing-mode:vertical-rl] text-white/40 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase rotate-180">
            Established 2018
          </p>
          <div className="w-[2px] h-24 md:h-32 bg-gradient-to-b from-transparent via-[#F97316]/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
