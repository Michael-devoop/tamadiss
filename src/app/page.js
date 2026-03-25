import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// Lazy load below-the-fold components so they don't block hero video
const ImageCardSection = dynamic(() => import("@/components/ImageCardSection"));
const Services = dynamic(() => import("@/components/Services"));
const SocialMastery = dynamic(() => import("@/components/SocialMastery"));
const Packages = dynamic(() => import("@/components/Packages"));
const LogoMarquee = dynamic(() => import("@/components/LogoMarquee"));
const LocationSection = dynamic(() => import("@/components/LocationSection"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ImageCardSection />
      <Services />
      <SocialMastery />
      <Packages />
      <LogoMarquee />
      <LocationSection />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
