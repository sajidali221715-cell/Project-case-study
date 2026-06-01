import Image from "next/image";
import FloatingImage from "@/components/FloatingImage";
import Reveal from "@/components/Reveal";
import SectionText from "@/components/SectionText";
import BulletList from "@/components/BulletList";
import { BackgroundWash } from "@/components/Decor";
import { asset } from "@/components/assets";

const items = [
  "Fragmented buying/selling experience",
  "Lack of trust in inspections",
  "No unified platform",
  "Outdated UX",
];

export default function ProblemSection() {
  return (
    <section className="case-section">
      <BackgroundWash />
      <Image src={asset.backgroundCar} alt="" fill className="fade-car object-contain" unoptimized />
      <div className="section-shell">
        <Reveal>
          <SectionText eyebrow="UNDERSTANDING THE PROBLEM" title="The Challenge" />
          <BulletList items={items} />
        </Reveal>
        <Reveal delay={0.1} className="relative min-h-[610px]">
          <span className="absolute right-[7%] top-[10%] h-[470px] w-[470px] rounded-full bg-carosaBlue/10" />
          <FloatingImage src={asset.phone2} alt="Problem mobile screen" width={330} height={680} className="absolute left-[14%] top-[4%] z-10 w-[42%] max-w-[315px] phone-shadow" />
          <FloatingImage src={asset.phone1} alt="Problem mobile screen" width={330} height={680} className="absolute right-[12%] top-[20%] z-20 w-[42%] max-w-[315px] phone-shadow" />
        </Reveal>
      </div>
    </section>
  );
}
