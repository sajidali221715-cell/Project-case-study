import Image from "next/image";
import { Car, FileCheck2, HandCoins, Landmark, LayoutDashboard, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionText from "@/components/SectionText";
import { BackgroundWash } from "@/components/Decor";
import { asset } from "@/components/assets";

const icons: Array<{ label: string; Icon: LucideIcon }> = [
  { label: "Car listings", Icon: Car },
  { label: "KYC verification", Icon: FileCheck2 },
  { label: "Offer tracking", Icon: HandCoins },
  { label: "Finance management", Icon: Landmark },
  { label: "Content control", Icon: LayoutDashboard },
  { label: "Role permissions", Icon: ShieldCheck },
];

export default function AdminSection() {
  return (
    <section className="case-section">
      <BackgroundWash />
      <Image src={asset.backgroundCar} alt="" fill className="fade-car object-contain" unoptimized />
      <div className="mx-auto max-w-[1420px]">
        <Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {icons.map(({ label, Icon }) => (
            <div key={label} className="glass-panel grid min-h-[150px] place-items-center rounded-[24px] p-5 text-center">
              <Icon className="mb-4 text-carosaGreen" size={42} strokeWidth={2.4} />
              <p className="text-[16px] font-extrabold text-carosaBlue">{label}</p>
            </div>
          ))}
        </Reveal>
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="glass-panel p-5">
              <Image src={asset.dashboard} alt="Admin dashboard" width={860} height={520} className="h-auto w-full rounded-[18px] shadow-float" sizes="(max-width: 768px) 94vw, 48vw" unoptimized />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionText
              eyebrow="BUSINESS CONTROL"
              title="Admin & Platform Management"
              body="A structured dashboard gives business teams full visibility into listings, users, finance activity, verification, permissions, and content workflows."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
