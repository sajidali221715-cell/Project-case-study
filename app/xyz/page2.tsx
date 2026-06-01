"use client";

import Image from "next/image";
import Link from "next/link";

function CaseStudyPage({ children }) {
  return (
    <main className="m-0 min-h-screen w-full overflow-x-hidden bg-white p-0 font-[Poppins,Arial,sans-serif]">
      <div className="m-0 w-full overflow-x-auto px-[clamp(3rem,12vw,12rem)] py-[clamp(1rem,2vw,2rem)]">
        <div className="mx-auto w-full max-w-[1440px] p-0 [container-type:inline-size]">
          {children}
        </div>
      </div>

      <div className="border-t border-[#d7edf6] bg-white px-[clamp(3rem,12vw,12rem)] py-4">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-end">
          <Link
            href="#cover"
            className="rounded-full bg-[#0059ad] px-5 py-2 text-sm font-bold text-white hover:bg-[#004988]"
          >
            Back To Top
          </Link>
        </div>
      </div>
    </main>
  );
}

function DotBg({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(0, 84, 173, 0.12) 0 0.38em, transparent 0.42em)",
        backgroundSize: "1.48em 1.48em",
      }}
    />
  );
}

function Logo({ className = "" }) {
  return (
    <Image
      src="/rhv/assets/logo.png"
      alt="Ray Health Vault"
      width={150}
      height={71}
      priority
      unoptimized
      className={`h-auto w-[10.4%] ${className}`}
    />
  );
}

function Slide({ children, className = "", label, id }) {
  return (
    <section
      id={id}
      aria-label={label}
      className={`relative m-0 aspect-[16/9] w-full scroll-mt-20 overflow-hidden bg-white p-0 text-[clamp(5px,1cqw,14.4px)] ${className}`}
    >
      {children}
    </section>
  );
}

function GradientTitle({ children, className = "" }) {
  return (
    <h2
      className={`bg-gradient-to-r from-[#ff4d57] via-[#d64db9] to-[#8b4dff] bg-clip-text font-extrabold leading-none text-transparent ${className}`}
    >
      {children}
    </h2>
  );
}

function Check() {
  return (
    <span className="grid h-[2.4em] w-[2.4em] shrink-0 place-items-center rounded-full bg-[#93eff1] text-[1.55em] font-black leading-none text-[#0059ad]">
      +
    </span>
  );
}

function ChallengeIcon({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={120}
      height={92}
      unoptimized
      className="h-[6em] w-[8.2em] rounded-[.35em] object-contain"
    />
  );
}

function WorkflowImage({ src, alt }) {
  return (
    <div className="mx-auto mt-[1em] flex h-[10.5em] w-full items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={140}
        height={140}
        unoptimized
        className="h-full w-[10em] object-contain"
      />
    </div>
  );
}

function CoverSlide() {
  return (
    <Slide id="cover" label="Ray Health Vault cover">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_28%,rgba(220,232,240,.65),transparent_28%),linear-gradient(115deg,#fff,#f7fbfd)]" />
      <div className="absolute inset-x-0 bottom-0 h-[28%]">
        <DotBg />
      </div>
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(153deg, transparent 0 57.5%, rgba(255,255,255,.9) 57.8% 100%)",
        }}
      />

      <Logo className="absolute left-[2%] top-[4%] z-10" />

      <h1 className="absolute left-[2%] top-[19%] z-10 flex flex-col gap-[.42em] text-[6.1em] font-extrabold uppercase leading-[.9]">
        <span className="bg-gradient-to-r from-[#ff474d] via-[#c94ec1] to-[#8b4dff] bg-clip-text text-transparent">
          RAY HEALTH
        </span>
        <span className="bg-gradient-to-r from-[#ff474d] via-[#c94ec1] to-[#8b4dff] bg-clip-text text-transparent">
          VAULT
        </span>
      </h1>

      <p className="absolute left-[9.3%] top-[58.5%] z-10 text-[1.65em] font-bold leading-[1.4] text-[#303236]">
        A Unified Digital Healthcare
        <br />
        Platform
      </p>

      <a
        href="https://www.rayhealthvault.com"
        className="absolute left-0 top-[80%] z-10 flex h-[8%] w-[30.6%] items-center rounded-r-full bg-gradient-to-r from-[#045db8] to-[#05b8cf] pl-[9.3%] text-[1.58em] leading-none text-white underline"
      >
        www.rayhealthvault.com
      </a>

      <div className="absolute left-[54.2%] top-0 h-[37.2%] w-[35.2%] rounded-bl-[1.35em] bg-[#30c51f]" />
      <div className="absolute left-[63.6%] top-[37%] h-[63%] w-[31.2%] rounded-b-[3.6em] rounded-tr-[3.6em] bg-[#30c51f]" />
      <Image
        src="/rhv/cover/medical-records-instantly.png"
        alt="Ray Health Vault medical records app screen"
        width={268}
        height={452}
        priority
        unoptimized
        className="absolute left-[59.2%] top-[4%] z-10 h-[92%] w-[29%] rounded-[1.4em] border border-black/10 bg-white object-contain shadow-[.45em_.45em_1em_rgba(0,0,0,.22)]"
      />
      <span className="absolute bottom-[8%] right-[5.2%] z-30 text-[1.1em] font-bold">
        1
      </span>
    </Slide>
  );
}

function IntroSlide() {
  return (
    <Slide id="introduction" label="Introduction">
      <DotBg />
      <Logo className="absolute left-[2%] top-[4%] z-10" />
      <Image
        src="/rhv/assets/intro-visual.png"
        alt="Cloud healthcare platform illustration"
        width={470}
        height={636}
        unoptimized
        className="absolute left-[7.6%] top-[21.5%] h-[78.5%] w-[32.7%] rounded-t-[2em] object-cover"
      />
      <div className="absolute left-[21.4%] top-[35.5%] z-10 h-[54.5%] w-[31.2%] overflow-hidden rounded-[2.2em] bg-[#30c51f]/95 px-[4.8%] py-[3.1%] text-white">
        <div className="flex gap-[1em]">
          <Check />
          <div>
            <h3 className="text-[1.32em] font-extrabold leading-[1.28] text-[#b9ffff]">
              Centralizes
              <br />
              Healthcare Data
            </h3>
            <p className="mt-[.75em] text-[1.04em] leading-[1.34]">
              RayHealthVault brings all patient records into one secure platform
              for real-time access.
            </p>
          </div>
        </div>
        <div className="mt-[1.45em] flex gap-[1em]">
          <Check />
          <div>
            <h3 className="text-[1.32em] font-extrabold leading-[1.28] text-[#b9ffff]">
              Connects Healthcare
              <br />
              Ecosystem
            </h3>
            <p className="mt-[.75em] text-[1.04em] leading-[1.34]">
              Enables seamless data sharing between patients, doctors, and
              hospitals.
            </p>
          </div>
        </div>
      </div>
      <h2 className="absolute left-[57.3%] top-[21.2%] text-[4.15em] font-black uppercase leading-none text-[#0059ad]">
        INTRODUCTION
      </h2>
      <p className="absolute left-[57.3%] top-[32%] w-[38%] text-[1.7em] leading-[1.55] text-black">
        RayHealthVault is a secure, cloud-based digital healthcare platform that
        centralizes patient medical records and enables real-time access across
        hospitals and providers.
        <br />
        It eliminates fragmented data systems by creating a unified ecosystem
        where patients, doctors, and healthcare institutions can seamlessly
        access and share critical health information.
        <br />
        This ensures faster decision-making, improved coordination, and better
        patient outcomes.
      </p>
      <span className="absolute bottom-[8%] right-[4.8%] text-[1.2em] font-bold">
        2
      </span>
    </Slide>
  );
}

function OverviewSlide() {
  return (
    <Slide id="project-overview" label="Project overview">
      <DotBg />
      <Logo className="absolute left-[3.4%] top-[6%] z-10" />
      <h2 className="absolute left-[3.4%] top-[21%] text-[5.65em] font-black leading-none text-[#0059ad]">
        Project Overview
      </h2>
      <p className="absolute left-[3.6%] top-[37%] w-[47%] text-[1.75em] leading-[1.6] text-black">
        RayHealthVault is a cloud-based digital health platform designed to
        centralize patient records and streamline healthcare interactions across
        patients, doctors, and hospitals.
      </p>
      <div className="absolute left-[3.2%] top-[71.5%] h-[.25%] w-[35.5%] bg-[#08a0d7]" />
      <div
        className="absolute left-[3.5%] top-[75.5%] flex h-[15%] w-[53.5%] items-center bg-gradient-to-r from-[#e956a9] to-[#ff69c7] pl-[2.6%] text-[1.5em] text-white"
        style={{ clipPath: "polygon(0 0, 91% 0, 100% 50%, 91% 100%, 0 100%)" }}
      >
        Building a connected and efficient digital healthcare ecosystem
      </div>
      <div className="absolute right-[1.7%] top-[12%] h-[76%] w-[36.3%] rounded-[2.2em] bg-[#30c51f] text-center shadow-[.65em_.65em_0_rgba(0,0,0,.35)]">
        <div className="flex h-1/4 flex-col items-center justify-center border-b-[.22em] border-[#118ccd]/70 px-[2em]">
          <h3 className="text-[1.75em] font-extrabold text-black">
            Platform:
          </h3>
          <p className="mt-[.45em] text-[1.55em] font-extrabold leading-[1.35] text-white">
            Mobile Application (iOS & Android)
          </p>
        </div>
        <div className="flex h-1/4 flex-col items-center justify-center border-b-[.22em] border-[#118ccd]/70 px-[2em]">
          <h3 className="text-[1.75em] font-extrabold text-black">
            Objective:
          </h3>
          <p className="mt-[.45em] text-[1.55em] font-extrabold leading-[1.35] text-white">
            Unified patient data & seamless healthcare coordination
          </p>
        </div>
        <div className="flex h-1/4 flex-col items-center justify-center border-b-[.22em] border-[#118ccd]/70 px-[2em]">
          <h3 className="text-[1.75em] font-extrabold text-black">
            Industry:
          </h3>
          <p className="mt-[.45em] text-[1.55em] font-extrabold leading-[1.35] text-white">
            Healthcare & Digital Health
          </p>
        </div>
        <div className="flex h-1/4 flex-col items-center justify-center px-[2em]">
          <h3 className="text-[1.75em] font-extrabold text-black">
            Core Modules:
          </h3>
          <p className="mt-[.45em] text-[1.55em] font-extrabold leading-[1.35] text-white">
            Appointments, Medical Records, Chat, Doctor Discovery
          </p>
        </div>
      </div>
    </Slide>
  );
}

function ChallengeSlide() {
  return (
    <Slide id="challenge" label="Challenge">
      <DotBg className="left-[46%]" />
      <div className="absolute left-[1.5%] top-[2.7%] grid h-[94%] w-[43.7%] grid-cols-2 gap-[1.2em]">
        <div className="flex flex-col items-center rounded-[.55em] bg-[#30c51f] px-[1.5em] py-[2.2em] text-center shadow-[.45em_.45em_.6em_rgba(0,0,0,.28)]">
          <ChallengeIcon
            src="/rhv/icons/double-booking.png"
            alt="Double Bookings"
          />
          <h3 className="mt-[1.05em] text-[2em] font-black leading-[1.15] text-black">
            Double Bookings
          </h3>
          <p className="mt-[1.25em] text-[1.6em] leading-[1.35] text-white">
            Appointments overlap due to disconnected systems.
          </p>
        </div>

        <div className="flex flex-col items-center rounded-[.55em] bg-[#30c51f] px-[1.5em] py-[2.2em] text-center shadow-[.45em_.45em_.6em_rgba(0,0,0,.28)]">
          <ChallengeIcon
            src="/rhv/icons/incomplete-records.png"
            alt="Incomplete Records"
          />
          <h3 className="mt-[1.05em] text-[2em] font-black leading-[1.15] text-black">
            Incomplete Records
          </h3>
          <p className="mt-[1.25em] text-[1.6em] leading-[1.35] text-white">
            Patient history not available when needed.
          </p>
        </div>

        <div className="flex flex-col items-center rounded-[.55em] bg-[#30c51f] px-[1.5em] py-[2.2em] text-center shadow-[.45em_.45em_.6em_rgba(0,0,0,.28)]">
          <ChallengeIcon
            src="/rhv/icons/manual-process.png"
            alt="Manual Processes"
          />
          <h3 className="mt-[1.05em] text-[2em] font-black leading-[1.15] text-black">
            Manual Processes
          </h3>
          <p className="mt-[1.25em] text-[1.6em] leading-[1.35] text-white">
            Delays caused by paperwork and coordination.
          </p>
        </div>

        <div className="flex flex-col items-center rounded-[.55em] bg-[#30c51f] px-[1.5em] py-[2.2em] text-center shadow-[.45em_.45em_.6em_rgba(0,0,0,.28)]">
          <ChallengeIcon
            src="/rhv/icons/limited-communication.png"
            alt="Limited Communication"
          />
          <h3 className="mt-[1.05em] text-[2em] font-black leading-[1.15] text-black">
            Limited Communication
          </h3>
          <p className="mt-[1.25em] text-[1.6em] leading-[1.35] text-white">
            No seamless connection between patient and doctor.
          </p>
        </div>
      </div>

      <h2 className="absolute left-[50.5%] top-[6.5%] text-[5.7em] font-black leading-none text-black">
        The Challenge:
      </h2>
      <h3 className="absolute left-[53.6%] top-[19%] text-[2.55em] font-black text-[#0059ad]">
        Fragmented Healthcare Systems
      </h3>
      <p className="absolute left-[50%] top-[25.5%] w-[47%] text-center text-[1.8em] leading-[1.55] text-[#0059ad]">
        Healthcare systems struggle with disconnected data, delayed access, and
        inefficient coordination.
      </p>
      <div className="absolute left-[56.7%] top-[36.5%] h-[60%] w-[27.1%] rounded-[.6em] bg-gradient-to-r from-[#ff5359] to-[#8b4dff] px-[3.2em] py-[3.4em] text-white shadow-[.7em_.7em_1.2em_rgba(0,0,0,.3)]">
        <div className="mb-[2.35em] flex items-center gap-[1.5em]">
          <span className="grid h-[3.5em] w-[3.5em] place-items-center rounded-full bg-white text-[1.6em] font-black text-[#087bd6]">
            1
          </span>
          <p className="text-[1.55em] font-semibold leading-[1.35]">
            Patient data scattered across systems
          </p>
        </div>
        <div className="mb-[2.35em] flex items-center gap-[1.5em]">
          <span className="grid h-[3.5em] w-[3.5em] place-items-center rounded-full bg-white text-[1.6em] font-black text-[#087bd6]">
            2
          </span>
          <p className="text-[1.55em] font-semibold leading-[1.35]">
            No real-time access to medical history
          </p>
        </div>
        <div className="mb-[2.35em] flex items-center gap-[1.5em]">
          <span className="grid h-[3.5em] w-[3.5em] place-items-center rounded-full bg-white text-[1.6em] font-black text-[#087bd6]">
            3
          </span>
          <p className="text-[1.55em] font-semibold leading-[1.35]">
            Delays due to manual processes
          </p>
        </div>
        <div className="flex items-center gap-[1.5em]">
          <span className="grid h-[3.5em] w-[3.5em] place-items-center rounded-full bg-white text-[1.6em] font-black text-[#087bd6]">
            4
          </span>
          <p className="text-[1.55em] font-semibold leading-[1.35]">
            Poor coordination between providers
          </p>
        </div>
      </div>
    </Slide>
  );
}

function SolutionSlide() {
  return (
    <Slide id="solution" label="Solution">
      <div className="absolute left-0 top-0 h-[46.7%] w-[60.6%] bg-[#30c51f]" />
      <div className="absolute left-0 top-[46.7%] h-[53.3%] w-[60.6%] bg-white" />
      <h2 className="absolute left-[11%] top-[11%] text-[6em] font-black leading-none text-white">
        The Solution
      </h2>
      <p className="absolute left-[11%] top-[27.6%] text-[2.1em] font-black text-black">
        A Unified Digital Healthcare Platform
      </p>
      <div className="absolute left-[3.1%] top-[50.8%] flex h-[46%] w-[51.5%] items-center bg-gradient-to-r from-[#ff5359] to-[#8b4dff] px-[4.5%] text-[1.75em] leading-[1.55] text-white shadow-[.6em_.6em_1em_rgba(0,0,0,.32)]">
        We built a smart healthcare platform that simplifies patient care by
        connecting appointments, communication, and medical records into one
        seamless experience.
      </div>
      <div className="absolute right-0 top-0 h-full w-[39.4%] overflow-hidden border-l-[.2em] border-black">
        <Image
          src="/rhv/assets/solution-phone.png"
          alt="Ray Health Vault app appointment upload screen"
          width={567}
          height={810}
          unoptimized
          className="h-full w-full object-cover"
        />
      </div>
    </Slide>
  );
}

function FeaturesSlide() {
  return (
    <Slide id="key-features" label="Key features">
      <DotBg />
      <GradientTitle className="absolute left-0 right-0 top-[4.4%] text-center text-[4.3em]">
        Key Features
      </GradientTitle>
      <p className="absolute left-0 right-0 top-[15.5%] text-center text-[2em] text-black">
        Powerful tools designed for seamless healthcare experience
      </p>
      <div className="absolute left-[3.2%] right-[3.2%] top-[27.2%] grid grid-cols-4 gap-[5.4%]">
        <div className="text-center">
          <div className="aspect-[268/452] w-full overflow-hidden border border-black">
            <Image
              src="/rhv/assets/feature-manage.png"
              alt="Track and manage all appointments"
              width={268}
              height={452}
              unoptimized
              className="h-full w-full object-cover object-center"
            />
          </div>
          <p className="mt-[1.55em] text-[1.55em] leading-[1.25] text-[#0059ad]">
            Track and manage all appointments
          </p>
        </div>

        <div className="text-center">
          <div className="aspect-[268/452] w-full overflow-hidden border border-black">
            <Image
              src="/rhv/assets/feature-browse.png"
              alt="Discover specialists near you instantly"
              width={268}
              height={452}
              unoptimized
              className="h-full w-full object-cover object-center"
            />
          </div>
          <p className="mt-[1.55em] text-[1.55em] leading-[1.25] text-[#0059ad]">
            Discover specialists near you instantly
          </p>
        </div>

        <div className="text-center">
          <div className="aspect-[268/452] w-full overflow-hidden border border-black">
            <Image
              src="/rhv/assets/feature-book.png"
              alt="Schedule visits in seconds"
              width={268}
              height={452}
              unoptimized
              className="h-full w-full object-cover object-center"
            />
          </div>
          <p className="mt-[1.55em] text-[1.55em] leading-[1.25] text-[#0059ad]">
            Schedule visits in seconds
          </p>
        </div>

        <div className="text-center">
          <div className="aspect-[268/452] w-full overflow-hidden border border-black">
            <Image
              src="/rhv/assets/feature-chat.png"
              alt="Connect with doctors anytime"
              width={268}
              height={452}
              unoptimized
              className="h-full w-full object-cover object-center"
            />
          </div>
          <p className="mt-[1.55em] text-[1.55em] leading-[1.25] text-[#0059ad]">
            Connect with doctors anytime
          </p>
        </div>
      </div>
    </Slide>
  );
}

function SecuritySlide() {
  return (
    <Slide id="security-privacy" label="Security and privacy">
      <DotBg className="right-[46%]" />
      <div className="absolute right-0 top-0 h-full w-[46%] bg-[#e85abc]" />
      <h2 className="absolute left-[5.8%] top-[7.8%] text-[5em] font-light leading-none text-[#0059ad]">
        Security &amp; Privacy
      </h2>
      <p className="absolute left-[8.5%] top-[21.8%] text-[2.25em] text-black">
        Built with Security at Its Core
      </p>
      <div
        className="absolute left-[5.8%] top-[29.5%] h-[57%] w-[39.8%] bg-[#30c51f] px-[4.4%] py-[5.4%] text-white shadow-[.55em_.55em_0_rgba(0,0,0,.35)]"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 78%, 58% 78%, 18% 100%, 18% 78%, 0 78%)",
        }}
      >
        <p className="mb-[1.15em] text-[1.5em] font-bold tracking-[.04em] leading-[1.45]">
          &bull;&nbsp;&nbsp;Secure login & authentication
        </p>
        <p className="mb-[1.15em] text-[1.5em] font-bold tracking-[.04em] leading-[1.45]">
          &bull;&nbsp;&nbsp;Encrypted data handling
        </p>
        <p className="mb-[1.15em] text-[1.5em] font-bold tracking-[.04em] leading-[1.45]">
          &bull;&nbsp;&nbsp;Role-based access control
        </p>
        <p className="text-[1.5em] font-bold tracking-[.04em] leading-[1.45]">
          &bull;&nbsp;&nbsp;Privacy-first architecture
        </p>
      </div>
      <Image
        src="/rhv/assets/security-login.png"
        alt="Smarter login app screen"
        width={379}
        height={635}
        unoptimized
        className="absolute right-[9.8%] top-[10.9%] h-[78.4%] w-[26.3%] object-cover"
      />
    </Slide>
  );
}

function HowItWorksSlide() {
  return (
    <Slide id="how-it-works" label="How it works">
      <DotBg />
      <div className="absolute left-[30.2%] top-[1.6%] flex h-[19.4%] w-[39.4%] items-center justify-center bg-gradient-to-r from-[#ff5359] to-[#8b4dff] text-[3.3em] font-light text-white">
        How it works
      </div>
      <p className="absolute left-0 right-0 top-[27.5%] text-center text-[2em] font-black text-black">
        A simple and seamless journey from booking to care
      </p>
      <div className="absolute left-[1.4%] right-[2%] top-[39.3%] grid grid-cols-4 gap-[7.8%]">
        <div className="relative text-center">
          <div className="mx-auto flex h-[5.45em] w-full items-center justify-center bg-[#30c51f] text-white shadow-[.55em_.55em_.9em_rgba(0,0,0,.25)]">
            <span className="text-[1.8em]">Find a Doctor</span>
          </div>
          <span className="absolute left-[100%] top-[2.35em] z-10 w-[38%] border-t-[.22em] border-black after:absolute after:right-[-.1em] after:top-[-.47em] after:block after:h-[.8em] after:w-[.8em] after:rotate-45 after:border-r-[.22em] after:border-t-[.22em] after:border-black" />
          <p className="mt-[2.1em] text-[1.75em] leading-[1.25] text-black">
            Browse specialists based on your needs
          </p>
          <WorkflowImage
            src="/rhv/how-it-works/find-doctor.png"
            alt="Find a Doctor"
          />
        </div>

        <div className="relative text-center">
          <div className="mx-auto flex h-[5.45em] w-full items-center justify-center bg-[#dceedd] shadow-[.55em_.55em_.9em_rgba(0,0,0,.25)]">
            <span className="text-[1.8em]">Book Appointment</span>
          </div>
          <span className="absolute left-[100%] top-[2.35em] z-10 w-[38%] border-t-[.22em] border-black after:absolute after:right-[-.1em] after:top-[-.47em] after:block after:h-[.8em] after:w-[.8em] after:rotate-45 after:border-r-[.22em] after:border-t-[.22em] after:border-black" />
          <p className="mt-[2.1em] text-[1.75em] leading-[1.25] text-black">
            Select time and confirm instantly
          </p>
          <WorkflowImage
            src="/rhv/how-it-works/book-appointment.png"
            alt="Book Appointment"
          />
        </div>

        <div className="relative text-center">
          <div className="mx-auto flex h-[5.45em] w-full items-center justify-center bg-[#ffc20a] shadow-[.55em_.55em_.9em_rgba(0,0,0,.25)]">
            <span className="text-[1.8em]">Manage & Access</span>
          </div>
          <span className="absolute left-[100%] top-[2.35em] z-10 w-[38%] border-t-[.22em] border-black after:absolute after:right-[-.1em] after:top-[-.47em] after:block after:h-[.8em] after:w-[.8em] after:rotate-45 after:border-r-[.22em] after:border-t-[.22em] after:border-black" />
          <p className="mt-[2.1em] text-[1.75em] leading-[1.25] text-black">
            Track visits and access medical records
          </p>
          <WorkflowImage
            src="/rhv/how-it-works/manage-access.png"
            alt="Manage & Access"
          />
        </div>

        <div className="relative text-center">
          <div className="mx-auto flex h-[5.45em] w-full items-center justify-center bg-[#30c51f] text-white shadow-[.55em_.55em_.9em_rgba(0,0,0,.25)]">
            <span className="text-[1.8em]">Connect & Consult</span>
          </div>
          <p className="mt-[2.1em] text-[1.75em] leading-[1.25] text-black">
            Chat with doctors anytime
          </p>
          <WorkflowImage
            src="/rhv/how-it-works/connect-consult.png"
            alt="Connect & Consult"
          />
        </div>
      </div>
    </Slide>
  );
}

function ImpactSlide() {
  return (
    <Slide id="impact-results" label="Impact and results">
      <div className="absolute inset-x-0 top-0 h-[27.1%] bg-gradient-to-b from-[#004db5] to-[#00bad0]" />
      <div className="absolute inset-x-0 top-[2.2%] flex flex-col items-center text-center">
        <div className="grid h-[4.65em] w-[4.65em] place-items-center rounded-full border-[.22em] border-white bg-white shadow-[0_0_0_.18em_rgba(255,255,255,.35)]">
          <svg
            aria-hidden="true"
            viewBox="0 0 64 64"
            className="h-[3.3em] w-[3.3em] text-[#0070b8]"
            fill="none"
          >
            <path
              d="M13 47h38"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M18 43V33h8v10M31 43V25h8v18M44 43V17h8v26"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              d="M17 27 29 18l9 6 14-15"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M43 9h9v9"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="mt-[.18em] text-[4.45em] font-bold leading-none text-white">
          Impact &amp; Results
        </h2>
        <p className="mt-[.58em] text-[2.25em] leading-none text-[#f3efc1]">
          Delivering measurable improvements in healthcare experience
        </p>
      </div>
      <div className="absolute left-[4.1%] right-[5.4%] top-[31.8%] grid grid-cols-2 gap-x-[10.8%] gap-y-[4.2em]">
        <div className="flex h-[12.2em] items-center gap-[4em] rounded-[.8em] border-l-[.45em] border-[#00dce8] bg-[#30c51f] px-[4.3em] shadow-[.32em_.32em_0_#e316d7]">
          <span className="grid h-[8.5em] w-[8.5em] shrink-0 place-items-center">
            <Image
              src="/rhv/impact-results/faster-access.png"
              alt="Faster Access"
              width={85}
              height={85}
              unoptimized
              className="h-[8.5em] w-[8.5em] object-contain transition-all duration-300 ease-in-out hover:scale-105"
            />
          </span>
          <div>
            <h3 className="text-[1.85em] font-black text-black">
              Faster Access
            </h3>
            <p className="mt-[1.2em] text-[1.45em] leading-[1.35] text-white">
              Reduced time to access medical records
            </p>
          </div>
        </div>

        <div className="flex h-[12.2em] items-center gap-[4em] rounded-[.8em] border-l-[.45em] border-[#00dce8] bg-[#30c51f] px-[4.3em] shadow-[.32em_.32em_0_#e316d7]">
          <span className="grid h-[8.5em] w-[8.5em] shrink-0 place-items-center">
            <Image
              src="/rhv/impact-results/better-communication.png"
              alt="Better Communication"
              width={85}
              height={85}
              unoptimized
              className="h-[8.5em] w-[8.5em] object-contain transition-all duration-300 ease-in-out hover:scale-105"
            />
          </span>
          <div>
            <h3 className="text-[1.85em] font-black text-black">
              Better Communication
            </h3>
            <p className="mt-[1.2em] text-[1.45em] leading-[1.35] text-white">
              Improved doctor-patient interaction
            </p>
          </div>
        </div>

        <div className="flex h-[12.2em] items-center gap-[4em] rounded-[.8em] border-l-[.45em] border-[#00dce8] bg-[#30c51f] px-[4.3em] shadow-[.32em_.32em_0_#e316d7]">
          <span className="grid h-[8.5em] w-[8.5em] shrink-0 place-items-center">
            <Image
              src="/rhv/impact-results/efficient-scheduling.png"
              alt="Efficient Scheduling"
              width={85}
              height={85}
              unoptimized
              className="h-[8.5em] w-[8.5em] object-contain transition-all duration-300 ease-in-out hover:scale-105"
            />
          </span>
          <div>
            <h3 className="text-[1.85em] font-black text-black">
              Efficient Scheduling
            </h3>
            <p className="mt-[1.2em] text-[1.45em] leading-[1.35] text-white">
              Simplified appointment booking process
            </p>
          </div>
        </div>

        <div className="flex h-[12.2em] items-center gap-[4em] rounded-[.8em] border-l-[.45em] border-[#00dce8] bg-[#30c51f] px-[4.3em] shadow-[.32em_.32em_0_#e316d7]">
          <span className="grid h-[8.5em] w-[8.5em] shrink-0 place-items-center">
            <Image
              src="/rhv/impact-results/streamlined-workflow.png"
              alt="Streamlined Workflow"
              width={85}
              height={85}
              unoptimized
              className="h-[8.5em] w-[8.5em] object-contain transition-all duration-300 ease-in-out hover:scale-105"
            />
          </span>
          <div>
            <h3 className="text-[1.85em] font-black text-black">
              Streamlined Workflow
            </h3>
            <p className="mt-[1.2em] text-[1.45em] leading-[1.35] text-white">
              Reduced manual effort in healthcare operations
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[3.4%] left-[15.5%] flex h-[7.6%] w-[69%] items-center rounded-full bg-gradient-to-r from-[#ff5359] to-[#8b4dff] px-[2em] text-[1.9em] text-white">
        <span className="mr-[.8em] grid h-[2.2em] w-[2.2em] place-items-center rounded-full bg-[#0e9dc0] font-black">
          +
        </span>
        Enabling faster, smarter, and more connected healthcare delivery.
      </div>
    </Slide>
  );
}

function MetricsSlide() {
  return (
    <Slide id="success-metrics" label="Success metrics">
      <div className="absolute inset-x-0 top-0 h-[27.2%] bg-[#30c51f] text-center text-white">
        <h2 className="mt-[3.5%] text-[4.75em] font-light leading-none">
          Success Metrics
        </h2>
        <p className="mt-[1.3em] text-[2em]">
          Measured improvements after implementing RayHealthVault
        </p>
      </div>
      <div className="absolute left-[5.5%] right-[6.2%] top-[32.5%] grid grid-cols-2 gap-x-[14.5%] gap-y-[5.1em]">
        <div className="flex h-[11.5em] items-center justify-between rounded-[.7em] bg-[#e7e9e8] px-[3.7em] shadow-[.55em_.55em_0_rgba(0,0,0,.38)]">
          <span className="grid h-[7em] w-[7em] place-items-center rounded-full bg-white">
            <Image
              src="/rhv/success-metrics/downloads.png"
              alt="Downloads"
              width={70}
              height={70}
              unoptimized
              className="h-[5.5em] w-[5.5em] object-contain transition-all duration-300 ease-in-out hover:scale-[1.03]"
            />
          </span>
          <div className="text-right">
            <p className="text-[4.6em] font-black leading-none text-[#0059d6]">
              1000+
            </p>
            <p className="mt-[.7em] text-[1.6em] font-black text-black">
              Downloads
            </p>
          </div>
        </div>

        <div className="flex h-[11.5em] items-center justify-between rounded-[.7em] bg-[#e7e9e8] px-[3.7em] shadow-[.55em_.55em_0_rgba(0,0,0,.38)]">
          <span className="grid h-[7em] w-[7em] place-items-center rounded-full bg-white">
            <Image
              src="/rhv/success-metrics/active-users.png"
              alt="Active Users"
              width={70}
              height={70}
              unoptimized
              className="h-[5.5em] w-[5.5em] object-contain transition-all duration-300 ease-in-out hover:scale-[1.03]"
            />
          </span>
          <div className="text-right">
            <p className="text-[4.6em] font-black leading-none text-[#315336]">
              50+
            </p>
            <p className="mt-[.7em] text-[1.6em] font-black text-black">
              Active Users
            </p>
          </div>
        </div>

        <div className="flex h-[11.5em] items-center justify-between rounded-[.7em] bg-[#e7e9e8] px-[3.7em] shadow-[.55em_.55em_0_rgba(0,0,0,.38)]">
          <span className="grid h-[7em] w-[7em] place-items-center rounded-full bg-white">
            <Image
              src="/rhv/success-metrics/user-rating.png"
              alt="User Rating"
              width={70}
              height={70}
              unoptimized
              className="h-[5.5em] w-[5.5em] object-contain transition-all duration-300 ease-in-out hover:scale-[1.03]"
            />
          </span>
          <div className="text-right">
            <p className="text-[4.6em] font-black leading-none text-[#4f46e5]">
              4.8
            </p>
            <p className="mt-[.7em] text-[1.6em] font-black text-black">
              User Rating
            </p>
          </div>
        </div>

        <div className="flex h-[11.5em] items-center justify-between rounded-[.7em] bg-[#e7e9e8] px-[3.7em] shadow-[.55em_.55em_0_rgba(0,0,0,.38)]">
          <span className="grid h-[7em] w-[7em] place-items-center rounded-full bg-white">
            <Image
              src="/rhv/success-metrics/faster-booking.png"
              alt="Faster Booking"
              width={70}
              height={70}
              unoptimized
              className="h-[5.5em] w-[5.5em] object-contain transition-all duration-300 ease-in-out hover:scale-[1.03]"
            />
          </span>
          <div className="text-right">
            <p className="text-[4.6em] font-black leading-none text-[#ff7a1a]">
              30%
            </p>
            <p className="mt-[.7em] text-[1.6em] font-black text-black">
              Faster Booking
            </p>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-[3.4%] left-[14.3%] flex h-[11.8%] w-[73.7%] items-center justify-center bg-gradient-to-r from-[#ff5359] to-[#8b4dff] px-[5.8em] text-center text-[1.55em] font-black leading-[1.25] text-white"
        style={{
          clipPath:
            "polygon(5% 0, 94% 0, 100% 50%, 94% 100%, 5% 100%, 0 50%)",
        }}
      >
        Driving measurable growth and efficiency across healthcare operations.
      </div>
    </Slide>
  );
}

function CtaSlide() {
  return (
    <Slide id="future-healthcare" label="Call to action">
      <DotBg />
      <div className="absolute left-[5.6%] top-[11.3%] flex h-[15.2%] w-[78.5%] items-center bg-[#30c51f] px-[2.6em] text-[3.3em] font-black text-black shadow-[.55em_.55em_0_rgba(0,0,0,.45)]">
        Let's Build the Future of Healthcare
      </div>
      <div className="absolute left-[5.6%] top-[29.1%] flex h-[24%] w-[64.5%] items-center bg-gradient-to-r from-[#a51f87] to-[#f255b6] px-[2.8em] text-[2.15em] leading-[1.5] text-white shadow-[.55em_.55em_0_rgba(0,0,0,.45)]">
        Transform your ideas into powerful digital healthcare
        <br />
        solutions
      </div>
      <div className="absolute left-[5.6%] top-[55.8%] flex h-[17.7%] w-[78.5%] items-center bg-[#30c51f] px-[2.8em] text-[2.15em] leading-[1.45] text-black shadow-[.55em_.55em_0_rgba(0,0,0,.45)]">
        Partner with Technogigz to design scalable, secure,
        <br />
        and user-friendly applications.
      </div>
    </Slide>
  );
}

function ContactSlide() {
  return (
    <Slide id="contact" label="Contact" className="-mt-[12em]">
      <DotBg />
      <div className="absolute inset-x-0 top-0 h-[66%] bg-gradient-to-r from-[#ff5359] to-[#8b4dff]" />
      <h2 className="absolute left-[3.7%] top-[4.8%] text-[5.15em] font-black leading-none text-white">
        Get In Touch
      </h2>
      <div className="absolute left-[8.7%] top-[22.8%] grid h-[12.4em] w-[12.4em] place-items-center rounded-full bg-[#268894] shadow-[.45em_.45em_0_rgba(0,0,0,.2)]">
        <svg
          aria-label="Email"
          role="img"
          viewBox="0 0 80 80"
          className="h-[10.4em] w-[10.4em]"
        >
          <circle cx="40" cy="40" r="40" fill="#268894" />
          <path d="M40 12 15 31v29h50V31L40 12z" fill="#ffc64a" />
          <path d="M15 31 40 50 65 31v29H15V31z" fill="#f89a2a" />
          <path d="M20 24h40v30L40 40 20 54V24z" fill="#ffffff" />
          <path d="M15 60 40 39 65 60H15z" fill="#fb9929" />
          <text
            x="40"
            y="39"
            textAnchor="middle"
            fontSize="22"
            fontWeight="800"
            fill="#df4b54"
          >
            @
          </text>
        </svg>
      </div>
      <svg
        aria-label="Technogigz"
        role="img"
        viewBox="0 0 64 64"
        className="absolute left-[39.8%] top-[30.8%] h-[11em] w-[11em] shadow-[.35em_.35em_0_rgba(0,0,0,.18)]"
      >
        <rect width="64" height="64" rx="4" fill="#090b10" />
        <path d="M12 14h42v11H29L12 43V14z" fill="#ffe600" />
        <path d="M12 43 27 25h25L36 43h16v7H24L12 43z" fill="#ffd400" />
      </svg>
      <svg
        aria-label="Call"
        role="img"
        viewBox="0 0 80 80"
        className="absolute left-[70.2%] top-[27.8%] h-[13em] w-[13em] drop-shadow-[.35em_.35em_0_rgba(0,0,0,.2)]"
      >
        <rect width="80" height="80" rx="10" fill="#000000" />
        <path
          d="M27 16h16l4 15-8 5c3 7 8 12 15 15l5-8 15 4v16c0 5-4 9-9 9-31 0-57-26-57-57 0-5 4-9 9-9z"
          fill="#ffffff"
        />
      </svg>
      <div className="absolute left-[2.4%] right-[15.8%] top-[51.8%] grid grid-cols-3 gap-[2.6em]">
        <div className="rounded-full border-[.25em] border-[#5cc5df] bg-[#2d006d] px-[3em] py-[1.35em] text-white shadow-[.55em_.55em_0_rgba(0,0,0,.28)]">
          <h3 className="text-[2em] font-black leading-none">Email</h3>
          <p className="mt-[.65em] text-[1.45em] leading-none">
            info@technogigz.com
          </p>
        </div>

        <div className="rounded-full border-[.25em] border-[#5cc5df] bg-[#2d006d] px-[3em] py-[1.35em] text-white shadow-[.55em_.55em_0_rgba(0,0,0,.28)]">
          <h3 className="text-[2em] font-black leading-none">Website</h3>
          <p className="mt-[.65em] text-[1.45em] leading-none">
            www.technogigz.com
          </p>
        </div>

        <div className="rounded-full border-[.25em] border-[#5cc5df] bg-[#2d006d] px-[3em] py-[1.35em] text-white shadow-[.55em_.55em_0_rgba(0,0,0,.28)]">
          <h3 className="text-[2em] font-black leading-none">Call Us</h3>
          <p className="mt-[.65em] text-[1.45em] leading-none">
            +91 8448591473
          </p>
        </div>
      </div>
    </Slide>
  );
}

export default function RHVCaseStudyPage() {
  return (
    <CaseStudyPage>
      <div className="m-0 flex w-full flex-col gap-0 p-0">
        <CoverSlide />
        <IntroSlide />
        <OverviewSlide />
        <ChallengeSlide />
        <SolutionSlide />
        <FeaturesSlide />
        <SecuritySlide />
        <HowItWorksSlide />
        <ImpactSlide />
        <MetricsSlide />
        <CtaSlide />
        <ContactSlide />
      </div>
    </CaseStudyPage>
  );
}
