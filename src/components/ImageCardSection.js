"use client";

import { motion } from "framer-motion";

export default function ImageCardSection() {
  return (
    <section className="relative w-full bg-[#0D0D0D] py-20 px-6 md:px-16 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Text Block (Optional, just in case they want the text too) */}
        <div className="flex-1 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-[100px] lg:text-[130px] font-black leading-[0.9] tracking-tighter text-white mb-6 uppercase"
          >
            THE <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF7A59] to-[#F97316]">STARS</span> <br />
            BEHIND <br />
            TAM ADDISS.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg max-w-md"
          >
            Meet the elite collective of visual architects. We don't just record content; we engineer cinematic legends.
          </motion.p>
        </div>

        {/* Right Cards Block */}
        <div className="flex-1 flex justify-center md:justify-end gap-6 relative w-full h-[600px]">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-[280px] h-[500px] bg-zinc-800 rounded-[2.5rem] relative overflow-hidden flex flex-col shadow-2xl z-10"
          >
            <div className="absolute inset-0 bg-zinc-700 animate-pulse" /> {/* Placeholder for image */}
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="w-12 h-1 bg-[#F97316] mb-3" />
              <p className="text-white font-semibold tracking-wider text-sm uppercase">Cinematic Dept.</p>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-[280px] h-[500px] bg-zinc-800 rounded-[2.5rem] relative overflow-hidden flex flex-col shadow-2xl mt-24"
          >
            <div className="absolute inset-0 bg-zinc-600 animate-pulse" /> {/* Placeholder for image */}
            <div className="absolute top-8 left-0 right-0 z-20 flex flex-col items-center">
              <p className="text-white font-bold text-center">Image Placeholder</p>
            </div>
          </motion.div>

          {/* Chat bubble decorative element (like in the screenshot) */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
            className="absolute -right-6 bottom-16 w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center shadow-lg z-30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
