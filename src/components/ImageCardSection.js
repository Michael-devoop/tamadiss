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
            className="text-5xl md:text-7xl lg:text-[90px] font-black leading-[0.9] tracking-tighter text-white mb-6 uppercase"
          >
            Crafted <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF7A59] to-[#F97316]">Moments</span> <br />
            by <br />
            TAMADDIS
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
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="https://res.cloudinary.com/dkceowz64/video/upload/so_0,f_jpg,w_560,q_70/v1774349693/leftcard_tzplzn.jpg"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://res.cloudinary.com/dkceowz64/video/upload/f_webm,q_auto/v1774349693/leftcard_tzplzn.webm" type="video/webm" />
              <source src="https://res.cloudinary.com/dkceowz64/video/upload/f_mp4,q_auto/v1774349693/leftcard_tzplzn.mp4" type="video/mp4" />
            </video>
            {/* Gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />


          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-[280px] h-[500px] bg-zinc-800 rounded-[2.5rem] relative overflow-hidden flex flex-col shadow-2xl mt-24"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="https://res.cloudinary.com/dkceowz64/video/upload/so_0,f_jpg,w_560,q_70/v1774367483/rightcard_nljkuw.jpg"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://res.cloudinary.com/dkceowz64/video/upload/f_webm,q_auto/v1774367483/rightcard_nljkuw.webm" type="video/webm" />
              <source src="https://res.cloudinary.com/dkceowz64/video/upload/f_mp4,q_auto/v1774367483/rightcard_nljkuw.mp4" type="video/mp4" />
            </video>
            {/* Gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />


          </motion.div>


        </div>
      </div>
    </section>
  );
}
