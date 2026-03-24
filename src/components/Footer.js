"use client";

import { Instagram, Linkedin, Music2, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] pt-28 pb-8 px-6 md:px-16 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1.5fr_1.5fr] gap-12 lg:gap-20 mb-24">
          
          {/* Left Column - Brand & About */}
          <div className="flex flex-col">
            <a href="/" className="flex items-center gap-3 mb-6">
              <span className="text-white font-black text-2xl leading-none tracking-widest uppercase">TAMADDIS</span>
            </a>
            <p className="text-white/60 leading-relaxed font-medium max-w-[90%] md:max-w-sm mb-10 text-sm md:text-base">
              A full-service digital marketing powerhouse in Ethiopia. We blend cinematic production with strategic growth to make your brand impossible to ignore.
            </p>
            
            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/tam__addia?igsh=anU4MHBpMHZ4aXJx" },
                { Icon: Music2, href: "https://www.tiktok.com/@tamaddis2?_r=1&_t=ZS-94xYtFY5197" },
                { Icon: Send, href: "https://t.me/tamirat_Aby" },
                { Icon: Linkedin, href: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#F97316] hover:border-[#F97316] hover:text-black text-white transition-all duration-300"
                >
                  <social.Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Middle Column - Contact Info */}
          <div className="flex flex-col">
            <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-8">
              Contact Info
            </h4>
            
            <div className="space-y-8">
              <div>
                <p className="text-white/30 text-[10px] font-bold tracking-[0.25em] uppercase mb-2">Our Studio</p>
                <p className="text-white/80 font-medium text-sm md:text-base leading-relaxed">
                  Bole KKare Building, 2nd Floor<br />
                  2F-017, Addis Abeba
                </p>
              </div>
              
              <div>
                <p className="text-white/30 text-[10px] font-bold tracking-[0.25em] uppercase mb-2">Hotline</p>
                <p className="text-[#F97316] font-black text-2xl tracking-wider">
                  0972140826
                </p>
              </div>
              
              <div>
                <p className="text-white/30 text-[10px] font-bold tracking-[0.25em] uppercase mb-2">Email</p>
                <p className="text-white/80 font-medium text-sm md:text-base">
                  Tamiratabayneh5@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - CTA Card */}
          <div className="flex flex-col">
             <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-8">
               Start Your Journey
             </h4>
             <div className="bg-[#111111] border border-white/5 rounded-3xl p-8 flex flex-col items-start">
               <p className="text-white/60 font-medium leading-relaxed mb-8 text-sm">
                 Ready to elevate your brand content? Message us directly on Telegram for a quick quote.
               </p>
               <a 
                 href="https://t.me/tamirat_Aby"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full bg-[#F97316] hover:bg-orange-500 text-black font-bold uppercase tracking-[0.15em] text-[11px] py-4 rounded-full transition-all text-center shadow-[0_4px_20px_rgba(249,115,22,0.3)]"
               >
                 Chat With An Expert
               </a>
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-[10px] md:text-xs font-medium tracking-[0.15em] uppercase text-center">
            © {new Date().getFullYear()} TAMADDIS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6 md:gap-8">
            <a href="#" className="text-white/30 hover:text-white text-[10px] md:text-xs font-medium tracking-[0.15em] uppercase transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white text-[10px] md:text-xs font-medium tracking-[0.15em] uppercase transition-colors">Terms Of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
