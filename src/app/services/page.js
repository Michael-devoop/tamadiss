import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Services — TADIGITALS",
  description: "Web Development, Brand Identity, UI/UX Design, Motion & Video, SEO & Strategy, App Development.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-28" />
      <Services />
      <Process />
      <Footer />
    </main>
  );
}
