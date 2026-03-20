"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "CINEMATIC CONTENT",
    desc: "RED and ARRI grade production values tailored for global impact."
  },
  {
    num: "02",
    title: "VIRAL STRATEGY",
    desc: "Platform-engineered short-form content that dominates algorithms."
  },
  {
    num: "03",
    title: "ELITE CORPORATE",
    desc: "Executive-level identity branding for market leaders."
  }
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="relative w-full py-28 px-6 md:px-16 lg:px-24 bg-[#0D0D0D] overflow-hidden">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/dkceowz64/video/upload/v1774012985/project3_1_gzwmvz.mp4"
        />
        
        {/* Dark overlay to make text highly readable */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Vignette edge shadows */}
        <div
          className="absolute inset-0"
          style={{
            boxShadow: "inset 0 0 200px 80px rgba(13,13,13,1), inset 0 0 100px 50px rgba(13,13,13,0.8)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[#F97316] text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Our Expertise
          </p>
          <h2 className="text-7xl md:text-[100px] lg:text-[130px] font-black leading-[0.85] tracking-tighter uppercase text-white break-words">
            What We Bring<br />
            To The Table
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.num}
              variants={item}
              className="group relative bg-[#111111]/80 backdrop-blur-xl rounded-[2rem] p-10 md:p-12 lg:p-14 border border-white/5 overflow-hidden transition-all duration-500 hover:border-[#F97316] hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] flex flex-col justify-between min-h-[400px]"
            >
              {/* Top Badge */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-white/10 group-hover:bg-[#F97316] group-hover:border-[#F97316] flex items-center justify-center mb-16 transition-colors duration-500">
                <span className="text-[#F97316] group-hover:text-black font-black text-xl md:text-2xl transition-colors duration-500">
                  {service.num}
                </span>
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-[1.1] mb-6">
                  {service.title.split(' ').map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </h3>

                <p className="text-white/50 text-sm md:text-base font-medium leading-relaxed max-w-[90%]">
                  {service.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
