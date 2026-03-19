import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImageCardSection from "@/components/ImageCardSection";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import SocialMastery from "@/components/SocialMastery";
import Packages from "@/components/Packages";
import LocationSection from "@/components/LocationSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

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

