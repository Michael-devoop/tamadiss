"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#home", id: "home" },
  { label: "ABOUT US", href: "#about", id: "about" },
  { label: "SERVICES", href: "#services", id: "services" },
  { label: "WORKS", href: "#works", id: "works" },
  { label: "PACKAGES", href: "#packages", id: "packages" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for the Scrollspy behavior
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // triggers when section is in the upper part of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections we have links for
    navLinks.forEach((link) => {
      if (link.id) {
        const element = document.getElementById(link.id);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
          scrolled ? "pt-4 px-4 md:px-8 lg:px-16" : "pt-0 px-0"
        }`}
      >
        <div 
          className={`w-full max-w-7xl flex items-center justify-between transition-all duration-500 ${
            scrolled 
              ? "bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-6 md:px-8 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.8)]" 
              : "bg-transparent border-transparent px-6 md:px-16 lg:px-24 py-8"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-white font-black text-xl md:text-2xl leading-none tracking-[0.15em] uppercase">TAM ADDISS</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 lg:gap-12">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id || (link.id === "home" && activeSection === "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Subtle active underline exactly like the design */}
                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-full h-[2px] bg-[#F97316] rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:block bg-white hover:bg-zinc-200 text-black font-bold text-[10px] lg:text-[11px] uppercase tracking-[0.15em] px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_15px_rgba(255,255,255,0.1)]"
          >
            LET'S TALK
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white z-50 p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => {
                  setMobileOpen(false);
                  setActiveSection(link.id);
                }}
                className={`text-2xl font-bold uppercase tracking-widest transition-colors ${
                  activeSection === link.id ? "text-[#F97316]" : "text-white hover:text-[#F97316]"
                }`}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-white text-black px-10 py-4 rounded-full text-lg font-bold uppercase tracking-widest mt-6"
            >
              LET'S TALK
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
