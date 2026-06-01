import Image from "next/image";
import FloatingImage from "@/components/FloatingImage";
import Reveal from "@/components/Reveal";
import SectionText from "@/components/SectionText";
import { BackgroundWash } from "@/components/Decor";
import { asset } from "@/components/assets";

const features = ["Buy Cars", "Sell Cars", "Finance", "Test Drive", "RC Transfer", "Services"];

export default function OverviewSection() {
  return (
    <section className="case-section">
      <BackgroundWash />
      <Image src={asset.backgroundCar} alt="" fill className="fade-car object-contain" unoptimized />
      <div className="section-shell">
        <Reveal className="relative min-h-[590px]">
          <FloatingImage src={asset.phone1} alt="Carosa mobile app" width={330} height={680} className="absolute left-[8%] top-[3%] z-10 w-[42%] max-w-[300px] phone-shadow" />
          <FloatingImage src={asset.phone2} alt="Carosa mobile app details" width={330} height={680} className="absolute right-[9%] top-[18%] z-20 w-[42%] max-w-[300px] phone-shadow" />
          <span className="absolute bottom-[10%] left-[3%] h-[360px] w-[72%] rounded-[42px] bg-white/65 shadow-luxury backdrop-blur" />
        </Reveal>
        <Reveal delay={0.1}>
          <SectionText eyebrow="PLATFORM OVERVIEW" title="Core Features & Capabilities" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div key={feature} className="glass-panel flex min-h-[82px] items-center gap-5 rounded-[24px] px-6 py-5">
                <span className="text-[34px] font-black italic text-carosaGreen">{index + 1}</span>
                <span className="text-[22px] font-extrabold text-carosaBlue">{feature}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
