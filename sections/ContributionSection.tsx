import Image from "next/image";
import FloatingImage from "@/components/FloatingImage";
import Reveal from "@/components/Reveal";
import SectionText from "@/components/SectionText";
import BulletList from "@/components/BulletList";
import { BackgroundWash } from "@/components/Decor";
import { asset } from "@/components/assets";

const items = [
  "Complete ecosystem",
  "Scalable architecture",
  "Secure workflows",
  "Finance integration",
  "Seamless UI/UX",
];

export default function ContributionSection() {
  return (
    <section className="case-section">
      <BackgroundWash />
      <Image src={asset.backgroundCar} alt="" fill className="fade-car object-contain" unoptimized />
      <div className="section-shell">
        <Reveal className="relative min-h-[590px]">
          <div className="absolute left-0 top-[12%] w-[82%] rounded-[30px] bg-white/70 p-4 shadow-luxury backdrop-blur">
            <Image src={asset.dashboard} alt="Delivered dashboard" width={820} height={496} className="h-auto w-full rounded-[20px]" sizes="(max-width: 768px) 90vw, 44vw" unoptimized />
          </div>
          <FloatingImage src={asset.phone1} alt="Delivered mobile" width={330} height={680} className="absolute right-[2%] top-[2%] z-20 w-[34%] max-w-[245px] phone-shadow" />
        </Reveal>
        <Reveal delay={0.1}>
          <SectionText eyebrow="OUR CONTRIBUTION" title="What We Delivered" />
          <BulletList items={items} />
        </Reveal>
      </div>
    </section>
  );
}
