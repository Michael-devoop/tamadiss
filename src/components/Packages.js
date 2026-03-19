"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "BASIC",
    tagline: "Growth Starter",
    desc: "Small businesses starting their digital journey.",
    price: "50,000",
    currency: "ETB",
    features: [
      "8 Short-Form Videos",
      "Professional Editing",
      "Content Planning Support",
      "Posting Guidance (1 Platform)",
      "1 Shooting Session",
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "STANDARD",
    badge: "MOST CHOSEN",
    tagline: "Business Standard",
    desc: "Growing brands needing consistent content.",
    price: "70,000",
    currency: "ETB",
    features: [
      "12 Videos",
      "Advanced Editing & Color Grading",
      "Caption Writing & Hashtag Strategy",
      "Posting & Optimization (2 Platforms)",
      "2 Shooting Sessions",
      "Basic Performance Report",
    ],
    buttonText: "Work With Us",
    popular: true,
  },
  {
    name: "PREMIUM",
    tagline: "Enterprise Elite",
    desc: "Established entities seeking market dominance.",
    price: "100,000",
    currency: "ETB",
    features: [
      "16+ Premium Videos",
      "Cinematic Editing & Creative Direction",
      "Full Content Strategy & Planning",
      "Full Social Media Management",
      "3–4 Shooting Sessions",
      "Monthly Analytics Report",
      "Priority Support",
    ],
    buttonText: "Let's Grow Your Brand",
    popular: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="relative w-full py-28 px-6 md:px-16 lg:px-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center text-center mb-24"
        >
          <p className="text-[#F97316] text-[11px] font-bold tracking-[0.4em] uppercase mb-4">
            Strategic Investment
          </p>
          <h2 className="text-6xl md:text-[90px] lg:text-[120px] font-black leading-[0.85] tracking-tighter uppercase text-white mb-6">
            INVESTMENT <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FDBA74]">
              PLANS
            </span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl italic font-serif">
            Serious Brands Invest in Visibility.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex flex-col h-full bg-[#111111] rounded-[2.5rem] rounded-b-3xl border transition-all duration-300 ${
                pkg.popular 
                  ? "border-[#F97316] shadow-[0_0_50px_rgba(249,115,22,0.15)] md:-translate-y-4" 
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F97316] text-black text-[10px] font-black tracking-widest uppercase px-6 py-2 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.5)] z-10">
                  {pkg.badge}
                </div>
              )}

              {/* Card Header */}
              <div className="p-8 md:p-10 pb-8 text-center border-b border-white/5 relative overflow-hidden">
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-24 bg-[#F97316]/20 blur-[50px] pointer-events-none rounded-t-full" />
                )}
                <h3 className={`text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-2 ${pkg.popular ? "text-[#F97316]" : "text-white/80"}`}>
                  {pkg.name}
                </h3>
                <p className="text-white/50 text-xs mb-8 uppercase tracking-wider">{pkg.tagline}</p>
                <div className="flex flex-col items-center justify-center">
                   <h4 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-1">
                     {pkg.price}
                   </h4>
                   <p className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">{pkg.currency}</p>
                </div>
              </div>

              {/* Features List */}
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <ul className="space-y-6 mb-10 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${pkg.popular ? "bg-[#F97316]" : "bg-white/10"}`}>
                        <Check size={12} className={pkg.popular ? "text-black" : "text-white/70"} />
                      </div>
                      <span className="text-white/80 text-sm font-medium leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                    pkg.popular
                      ? "bg-[#F97316] hover:bg-orange-500 text-black shadow-[0_4px_20px_rgba(249,115,22,0.4)]"
                      : "bg-[#1A1A1A] hover:bg-white hover:text-black text-white border border-white/10 hover:border-white"
                  }`}
                >
                  {pkg.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
