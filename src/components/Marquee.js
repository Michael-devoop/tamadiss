"use client";

export default function Marquee() {
  const items =
    "Web Development · Branding · UI/UX · Motion Graphics · App Dev · SEO · Strategy";
  const repeatedItems = `${items} · ${items} · ${items} · ${items}`;

  return (
    <section className="border-t border-b border-white/10 py-5 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="text-[13px] uppercase tracking-[0.1em] text-white/40 mx-4">
          {repeatedItems}
        </span>
        <span className="text-[13px] uppercase tracking-[0.1em] text-white/40 mx-4">
          {repeatedItems}
        </span>
      </div>
    </section>
  );
}
