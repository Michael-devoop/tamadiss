import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Work — TADIGITALS",
  description: "Explore our portfolio of digital projects across branding, web, and motion.",
};

export default function WorkPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-28" />
      <Portfolio />
      <Footer />
    </main>
  );
}
