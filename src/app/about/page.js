"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Award } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "We push boundaries and explore new technologies to deliver cutting-edge digital solutions.",
  },
  {
    icon: Target,
    title: "Result-Driven",
    desc: "Every pixel and line of code is purposeful — designed to achieve measurable business outcomes.",
  },
  {
    icon: Users,
    title: "Collaborative",
    desc: "We work as an extension of your team, ensuring transparent communication at every stage.",
  },
  {
    icon: Award,
    title: "Quality Obsessed",
    desc: "We never cut corners. Premium craftsmanship is the standard for every project we deliver.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#F97316] text-sm uppercase tracking-[0.15em] mb-4"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
          >
            We are a creative digital agency building bold experiences.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-white/50 max-w-2xl leading-relaxed"
          >
            Founded with a passion for design and technology, TADIGITALS brings
            together strategists, designers, and developers to create digital
            products that make an impact. We believe great design is not just
            beautiful — it solves real problems.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-[52px] font-bold mb-16 tracking-tight"
        >
          Our Values
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                variants={item}
                className="bg-[#1A1A1A] border border-white/[0.08] rounded-2xl p-8 hover:border-[#F97316]/30 transition-all duration-500"
              >
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={20} className="text-[#F97316]" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Team Stats */}
      <section className="py-20 px-6 md:px-16 lg:px-24 border-t border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { num: "50+", label: "Projects Delivered" },
            { num: "3+", label: "Years Experience" },
            { num: "20+", label: "Happy Clients" },
            { num: "100%", label: "Satisfaction Rate" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {s.num}
              </div>
              <div className="text-xs uppercase tracking-wider text-white/40">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
