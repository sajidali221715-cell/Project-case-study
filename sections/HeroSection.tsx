import Image from "next/image";
import FloatingImage from "@/components/FloatingImage";
import Reveal from "@/components/Reveal";
import { BackgroundWash, BlueDecor } from "@/components/Decor";
import { asset } from "@/components/assets";

export default function HeroSection() {
  return (
    <section className="case-section flex min-h-screen items-center pt-32">
      <BackgroundWash />
      <Image src={asset.backgroundCar} alt="" fill className="fade-car object-contain" priority unoptimized />
      <BlueDecor />
      <div className="section-shell">
        <Reveal className="relative z-10">
          <Image
            src={asset.logo}
            alt="Carosa logo"
            width={198}
            height={58}
            priority
            className="mb-10 h-auto w-[150px] sm:w-[198px]"
            unoptimized
          />
          <h1 className="max-w-[760px] text-[56px] font-black italic leading-[0.88] tracking-normal sm:text-[84px] lg:text-[112px]">
            Carosa
            <span className="block text-carosaBlue">Car Commerce Platform</span>
          </h1>
          <p className="mt-8 max-w-[680px] text-[20px] font-extrabold text-black/72 sm:text-[28px]">
            Buy &bull; Sell &bull; Finance &bull; Manage Vehicles Seamlessly
          </p>
          <div className="mt-10">
            <span className="green-strip">Premium Automotive Digital Ecosystem</span>
          </div>
        </Reveal>
        <Reveal delay={0.12} className="relative min-h-[360px] sm:min-h-[520px]">
          <span className="absolute left-[8%] top-[17%] h-[62%] w-[78%] rounded-[44px] bg-carosaBlue shadow-luxury" />
          <span className="absolute right-[4%] top-[6%] h-28 w-28 rounded-full bg-carosaGreen/85 blur-[1px]" />
          <FloatingImage
            src={asset.heroCar}
            alt="Blue luxury car"
            width={920}
            height={520}
            priority
            className="absolute left-[-5%] top-[15%] z-10 w-[112%] drop-shadow-2xl"
          />
        </Reveal>
      </div>
    </section>
  );
}
