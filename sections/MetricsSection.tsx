import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionText from "@/components/SectionText";
import { BackgroundWash } from "@/components/Decor";
import { asset } from "@/components/assets";

const metrics = [
  "Faster Process",
  "Improved User Trust",
  "Higher Engagement",
  "Seamless Experience",
  "Scalable Growth",
];

export default function MetricsSection() {
  return (
    <section className="case-section">
      <BackgroundWash />
      <Image src={asset.backgroundCar} alt="" fill className="fade-car object-contain" unoptimized />
      <div className="mx-auto max-w-[1420px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <SectionText eyebrow="Performance Insights" title="Success Metrics" />
          </Reveal>
          <Reveal delay={0.1} className="glass-panel p-6">
            <Image src={asset.graph} alt="Success metrics graph" width={760} height={430} className="h-auto w-full" sizes="(max-width: 768px) 94vw, 44vw" unoptimized />
          </Reveal>
        </div>
        <Reveal delay={0.12} className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map((metric, index) => (
            <article key={metric} className="glass-panel min-h-[190px] rounded-[26px] p-7">
              <span className="text-[46px] font-black italic text-carosaGreen">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-[23px] font-black leading-tight text-carosaBlue">{metric}</h3>
              <p className="mt-4 text-sm font-semibold leading-6 text-black/55">
                Measurable platform gains across commerce, operations, and user confidence.
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
