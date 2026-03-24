"use client";

export default function LogoMarquee() {
  const logos = [
    "/c1.jpg", "/c2.jpg", "/c3.jpg", "/c4.jpg",
    "/c5.jpg", "/c6.jpg", "/c7.jpg",
  ];

  const row1 = [...logos];
  const row2 = [...logos].reverse();

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-xs uppercase tracking-[0.15em] text-white/30 text-center">
          Trusted by leading brands
        </p>
      </div>

      {/* Row 1 - scrolls right */}
      <div className="relative mb-8 overflow-hidden">
        <div className="flex items-center animate-marquee-right whitespace-nowrap">
          {[...row1, ...row1, ...row1, ...row1].map((logo, i) => (
            <div key={`r1-${i}`} className="flex-shrink-0 mx-8">
              <img
                src={logo}
                alt={`Client logo ${(i % logos.length) + 1}`}
                className="h-28 w-28 md:h-32 md:w-32 object-cover rounded-full opacity-70 hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: "0 0 20px 8px rgba(0,0,0,0.7), 0 0 40px 16px rgba(0,0,0,0.4)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
