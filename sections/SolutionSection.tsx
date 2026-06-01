import Image from "next/image";
import FloatingImage from "@/components/FloatingImage";
import Reveal from "@/components/Reveal";
import SectionText from "@/components/SectionText";
import BulletList from "@/components/BulletList";
import { BackgroundWash } from "@/components/Decor";
import { asset } from "@/components/assets";

const items = ["Unified platform", "Verified inspections", "Seamless UX", "Dealer-enabled ecosystem"];

export default function SolutionSection() {
  return (
    <section className="case-section">
      <BackgroundWash />
      <Image src={asset.backgroundCar} alt="" fill className="fade-car object-contain" unoptimized />
      <div className="section-shell">
        <Reveal>
          <SectionText
            eyebrow="OUR APPROACH"
            title="The Solution"
            body="Carosa was shaped as a complete digital commerce platform that brings buyers, sellers, dealers, finance teams, and admin operations into one seamless automotive journey."
          />
          <BulletList items={items} />
        </Reveal>
        <Reveal delay={0.1} className="relative min-h-[610px]">
          <span className="absolute left-[18%] top-[4%] h-[540px] w-[420px] rounded-[44px] bg-carosaGreen/20 shadow-luxury" />
          <FloatingImage src={asset.phone1} alt="Solution mobile screen" width={330} height={680} className="absolute left-[11%] top-[8%] z-20 w-[43%] max-w-[315px] phone-shadow" />
          <FloatingImage src={asset.phone2} alt="Solution mobile screen" width={330} height={680} className="absolute right-[11%] top-[15%] z-10 w-[43%] max-w-[315px] phone-shadow" />
        </Reveal>
      </div>
    </section>
  );
}
