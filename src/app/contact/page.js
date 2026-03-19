"use client";

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-10 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#F97316] text-sm uppercase tracking-[0.15em] mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
          >
            Let&apos;s start a project together.
          </motion.h1>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-6 md:px-16 lg:px-24 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl"
        >
          {[
            { icon: Mail, label: "Email", value: "hello@tadigitals.com" },
            { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
            { icon: MapPin, label: "Location", value: "Addis Ababa, Ethiopia" },
          ].map((info) => {
            const Icon = info.icon;
            return (
              <div
                key={info.label}
                className="bg-[#1A1A1A] border border-white/[0.08] rounded-2xl p-6 flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#F97316]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">
                    {info.label}
                  </div>
                  <div className="text-white text-sm mt-1">{info.value}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </section>

      {/* Contact Form */}
      <Contact />

      <Footer />
    </main>
  );
}
