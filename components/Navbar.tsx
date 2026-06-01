import Image from "next/image";
import { asset } from "@/components/assets";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-5 pt-5 sm:px-8 lg:px-12">
      <nav className="mx-auto flex h-[72px] max-w-[1420px] items-center justify-between rounded-full border border-white/70 bg-white/72 px-6 shadow-card backdrop-blur-xl">
        <Image
          src={asset.logo}
          alt="Carosa"
          width={154}
          height={44}
          priority
          className="h-auto w-[118px] sm:w-[154px]"
          unoptimized={asset.logo.endsWith(".svg")}
        />
        <span className="hidden rounded-full bg-carosaBlue px-5 py-2 text-sm font-extrabold text-white sm:inline-flex">
          Case Study
        </span>
      </nav>
    </header>
  );
}
