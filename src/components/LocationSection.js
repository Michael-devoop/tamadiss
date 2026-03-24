"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="relative w-full min-h-[600px] md:h-[700px] bg-[#0D0D0D] overflow-hidden flex items-center border-[0.5px] border-white/5 mx-2 rounded-[2rem] my-10" style={{ maxWidth: 'calc(100% - 16px)' }}>
      {/* Background Map Placeholder */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "url('/map-placeholder.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient overlays to blend and darken */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-[#0D0D0D]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 w-full relative z-10 flex flex-col items-start justify-center">
        
        {/* Floating Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[420px] bg-[#111111]/90 backdrop-blur-xl border border-white/[0.08] rounded-[2rem] p-8 md:p-10 shadow-2xl relative"
        >
          {/* Subtle glow behind card */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-white/5 to-transparent rounded-[2rem] -z-10 pointer-events-none" />
          
          <div className="flex items-center gap-5 mb-8">
            <div className="w-14 h-14 bg-[#F97316] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(255,202,40,0.15)]">
              <MapPin size={28} className="text-black" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl tracking-tight leading-none mb-1.5">
                VISIT OUR STUDIO
              </h3>
              <p className="text-[#F97316] text-[11px] font-bold tracking-[0.2em] uppercase">
                Addis Ababa, HQ
              </p>
            </div>
          </div>

          <p className="text-white/50 text-[15px] leading-relaxed mb-10 font-medium">
            Bole Kikore Building, 2nd Floor 2F-017. Come by for a coffee and let&apos;s discuss your next cinematic project.
          </p>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full max-w-[280px] flex items-center justify-between bg-[#1A1A1A]/80 hover:bg-white hover:text-black text-white border border-white/10 hover:border-white rounded-full px-6 py-4 text-xs font-bold tracking-widest transition-all duration-300 uppercase"
          >
            Open in Google Maps
            <Navigation size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Pulsing Map Pin (Center/Right Side) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute right-[25%] top-[50%] -translate-y-1/2 hidden md:flex items-center justify-center"
        >
          {/* Radar Waves */}
          <div className="absolute w-32 h-32 bg-[#F97316]/10 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute w-48 h-48 border border-[#F97316]/10 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
          <div className="absolute w-64 h-64 border border-[#F97316]/5 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
          
          {/* Center Pin */}
          <div className="relative z-10 flex items-center">
            <div className="w-[50px] h-[50px] bg-gradient-to-br from-[#F97316] to-[#F59E0B] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,202,40,0.3)] hover:scale-110 transition-transform cursor-pointer relative">
              <div className="w-5 h-5 bg-[#0D0D0D] rounded-full" />
              <div className="absolute -bottom-2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#F59E0B]" />
            </div>
            
            {/* Tooltip */}
            <div className="absolute top-1/2 left-full ml-4 -translate-y-1/2 whitespace-nowrap bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg pointer-events-none">
              <span className="text-white/90 text-xs font-bold tracking-widest uppercase">TAMADISS</span>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
