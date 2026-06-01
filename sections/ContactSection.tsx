import { Mail, Phone, Globe2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import { BackgroundWash } from "@/components/Decor";

const contacts: Array<{ label: string; value: string; Icon: LucideIcon }> = [
  { label: "Email", value: "hello@technogigz.com", Icon: Mail },
  { label: "Website", value: "www.technogigz.com", Icon: Globe2 },
  { label: "Call us", value: "+91 00000 00000", Icon: Phone },
];

export default function ContactSection() {
  return (
    <section className="case-section min-h-[760px]">
      <BackgroundWash />
      <div className="mx-auto max-w-[1420px]">
        <Reveal className="grid gap-5 lg:grid-cols-3">
          {[
            "Let's Build Powerful Digital Solutions",
            "Transform your ideas into scalable products",
            "Partner with Technogigz",
          ].map((text, index) => (
            <div key={text} className="relative overflow-hidden rounded-[28px] bg-carosaBlue px-8 py-9 text-white shadow-luxury">
              <span className="absolute -right-6 top-1/2 h-20 w-20 -translate-y-1/2 rotate-45 bg-carosaGreen" />
              <p className="relative z-10 text-[25px] font-black italic leading-tight">{text}</p>
              <span className="relative z-10 mt-6 block h-1.5 w-24 rounded-full bg-white/85" />
              <span className="absolute right-8 top-1/2 text-[80px] font-black italic text-white/10">{index + 1}</span>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.1} className="mt-20 text-center">
          <h2 className="text-[56px] font-black italic leading-none sm:text-[86px]">Get In Touch</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {contacts.map(({ label, value, Icon }) => (
              <article key={label} className="glass-panel grid min-h-[210px] place-items-center rounded-[28px] p-8">
                <Icon size={46} className="text-carosaGreen" strokeWidth={2.4} />
                <div>
                  <h3 className="mt-6 text-[24px] font-black text-carosaBlue">{label}</h3>
                  <p className="mt-3 text-[17px] font-bold text-black/62">{value}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
