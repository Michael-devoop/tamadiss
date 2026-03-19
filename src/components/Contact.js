"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-[80px] lg:text-[110px] font-black leading-[0.9] tracking-tighter uppercase text-white mb-8 text-center break-words"
        >
          LET'S BUILD <br />
          <span className="text-[#F97316]">YOUR BRAND</span>
        </motion.h2>

        {/* Contact Details & WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-8 mb-16"
        >
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 text-center text-white/80 text-lg md:text-xl font-medium">
            <div>
              <span className="block text-[#F97316] text-xs font-bold tracking-[0.2em] uppercase mb-2">Phone</span>
              0972140826
            </div>
            <div>
              <span className="block text-[#F97316] text-xs font-bold tracking-[0.2em] uppercase mb-2">Email</span>
              Tamiratabayneh5@gmail.com
            </div>
          </div>

          <a
            href="https://wa.me/251972140826"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center gap-3 w-full sm:w-auto mt-2"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="floating-label-group">
              <input
                type="text"
                id="name"
                placeholder=" "
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pt-6 text-white text-sm focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/30 outline-none transition-all duration-300"
              />
              <label htmlFor="name">Name</label>
            </div>

            {/* Email */}
            <div className="floating-label-group">
              <input
                type="email"
                id="email"
                placeholder=" "
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pt-6 text-white text-sm focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/30 outline-none transition-all duration-300"
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          {/* Project Type */}
          <div className="floating-label-group">
            <select
              id="projectType"
              required
              defaultValue=""
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pt-6 text-white text-sm focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/30 outline-none transition-all duration-300 appearance-none"
            >
              <option value="" disabled hidden>
              </option>
              <option value="web" className="bg-[#1A1A1A]">Web Development</option>
              <option value="branding" className="bg-[#1A1A1A]">Brand Identity</option>
              <option value="ui" className="bg-[#1A1A1A]">UI/UX Design</option>
              <option value="motion" className="bg-[#1A1A1A]">Motion & Video</option>
              <option value="app" className="bg-[#1A1A1A]">App Development</option>
              <option value="other" className="bg-[#1A1A1A]">Other</option>
            </select>
            <label htmlFor="projectType">Project Type</label>
          </div>

          {/* Message */}
          <div className="floating-label-group">
            <textarea
              id="message"
              placeholder=" "
              rows={5}
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pt-6 text-white text-sm focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/30 outline-none transition-all duration-300 resize-none"
            />
            <label htmlFor="message">Message</label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#F97316] hover:bg-[#2563EB] text-white py-4 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending...
              </>
            ) : submitted ? (
              "Message Sent! ✓"
            ) : (
              "Send Message"
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
