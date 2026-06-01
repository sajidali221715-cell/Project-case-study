import Image from "next/image";
import FloatingImage from "@/components/FloatingImage";
import Reveal from "@/components/Reveal";
import SectionText from "@/components/SectionText";
import BulletList from "@/components/BulletList";
import { BackgroundWash } from "@/components/Decor";
import { asset } from "@/components/assets";

const items = ["Deliver seamless experience", "Build trust", "Simplify transactions", "Fully digital journey"];

export default function VisionSection() {
  return (
    <section className="case-section">
      <BackgroundWash />
      <Image src={asset.backgroundCar} alt="" fill className="fade-car object-contain" unoptimized />
      <div className="section-shell">
        <Reveal className="relative min-h-[650px]">
          <FloatingImage src={asset.phone2} alt="Vision mobile screen" width={330} height={680} className="absolute left-[2%] top-[20%] z-10 w-[35%] max-w-[255px] phone-shadow" />
          <FloatingImage src={asset.phone1} alt="Vision mobile screen" width={330} height={680} className="absolute left-[31%] top-[2%] z-20 w-[39%] max-w-[290px] phone-shadow" />
          <FloatingImage src={asset.phone2} alt="Vision mobile screen" width={330} height={680} className="absolute right-[2%] top-[24%] z-10 w-[35%] max-w-[255px] phone-shadow" />
        </Reveal>
        <Reveal delay={0.1}>
          <SectionText
            eyebrow="OUR VISION"
            title="Redefining Car Ownership Experience"
            body="The platform vision centers on trust, speed, and complete transparency across the ownership cycle, from discovery to documentation and post-purchase services."
          />
          <BulletList items={items} />
        </Reveal>
      </div>
    </section>
  );
}
