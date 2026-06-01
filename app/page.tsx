import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import OverviewSection from "@/sections/OverviewSection";
import ProblemSection from "@/sections/ProblemSection";
import SolutionSection from "@/sections/SolutionSection";
import VisionSection from "@/sections/VisionSection";
import AdminSection from "@/sections/AdminSection";
import ContributionSection from "@/sections/ContributionSection";
import MetricsSection from "@/sections/MetricsSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f7f8] text-ink">
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <ProblemSection />
      <SolutionSection />
      <VisionSection />
      <AdminSection />
      <ContributionSection />
      <MetricsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
