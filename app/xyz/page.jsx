import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  CircleDollarSign,
  Crown,
  Database,
  Fingerprint,
  Gem,
  Globe2,
  Layers3,
  LockKeyhole,
  Network,
  Rocket,
  ShieldCheck,
  Star,
  UploadCloud,
  WalletCards
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./styles.css";
import competitionsNew from "./assets/mfa-competitions-new.jpeg";
import partnersProofNew from "./assets/mfa-partners-proof-new.jpeg";

const img = (n) => `/assets/mfa-screen-${String(n).padStart(2, "0")}.jpeg`;

const screens = {
  submissionSuccess: img(1),
  auditionDetails: img(2),
  auditionListing: img(3),
  partnersBottom: img(4),
  partnersBottomDuplicate: img(5),
  ecosystemTop: img(6),
  homeGateway: img(7),
  uploadSuccess: img(8),
  uploadTalent: img(9),
  subcategory: img(10),
  categorySelection: img(11),
  accountSuccess: img(12),
  profile: img(13),
  login: img(14),
  loginDuplicate: img(15),
  otp: img(16),
  register: img(17),
  registerDuplicate: img(18),
  splash: img(19),
  logoSplash: "/assets/mfa-logo-splash.jpeg",
  cleanSplash: "/assets/mfa-clean-splash.jpeg",
  sideMenu: "/assets/mfa-side-menu.jpeg",
  creatorCollage: "/assets/mfa-creator-collage.jpeg",
  actorTalent: "/assets/mfa-actor-talent.jpeg",
  singerTalent: "/assets/mfa-singer-talent.jpeg",
  dancerTalent: "/assets/mfa-dancer-talent.jpeg",
  instrumentalTalent: "/assets/mfa-instrumental-talent.jpeg",
  uploadClean: "/assets/mfa-upload-clean.jpeg",
  uploadSuccessClean: "/assets/mfa-upload-success-clean.jpeg",
  registerEmail: "/assets/mfa-register-email.jpeg",
  authRegisterNew: "/assets/mfa-auth-register-new.jpeg",
  authOtpNew: "/assets/mfa-auth-otp-new.jpeg",
  authLoginNew: "/assets/mfa-auth-login-new.jpeg",
  profileCompleteNew: "/assets/mfa-profile-complete-new.jpeg",
  accountSuccessNew: "/assets/mfa-account-success-new.jpeg",
  ecosystemCelebrityNew: "/assets/mfa-ecosystem-celebrity-new.jpeg",
  ecosystemAuditionsNew: "/assets/mfa-ecosystem-auditions-new.jpeg",
  ecosystemProofNew: "/assets/mfa-ecosystem-proof-new.jpeg",
  partnersProofNew,
  competitionsNew,
  blueFabric: "/assets/mfa-blue-fabric.jpeg"
};

const reveal = {
  hidden: { opacity: 0, y: 42 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <Background />
      <Nav />
      <Hero />
      <ExecutiveSummary />
      <ProblemStatement />
      <AcquisitionSystem />
      <IdentityLayer />
      <TalentSubmission />
      <CreatorEcosystem />
      <PartnershipNetwork />
      <RevenueModel />
      {/* <SubscriptionPlans /> */}
      <TechnologyStack />
      <MarketOpportunity />
      <InsightsDashboard />
      <FutureRoadmap />
      <Conclusion />
    </main>
  );
}

function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div className="brand-background absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:92px_92px] opacity-25" />
    </div>
  );
}

function Nav() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#123b92]/72 backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-7xl items-center px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-play" />
            <span className="brand-arrow" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-base font-semibold tracking-wide text-white">My 1st Audition</span>
            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-steel">Your Gateway to Stardom</span>
          </span>
        </a>
      </div>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-20 pt-32 md:grid-cols-[0.95fr_1.05fr] md:px-8">
      <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
        <motion.p variants={reveal} className="eyebrow">My 1st Audition case study</motion.p>
        <motion.h1 variants={reveal} className="mt-5 font-display text-5xl font-semibold leading-[0.98] text-white md:text-7xl">
          India&apos;s Digital Talent Discovery Platform
        </motion.h1>
        <motion.p variants={reveal} className="mt-7 max-w-2xl text-lg leading-8 text-steel">
          A video-first ecosystem that moves aspiring creators from discovery to verified identity, talent classification, audition submission, visibility, and direct industry opportunity.
        </motion.p>
        <motion.div variants={reveal} className="mt-10 grid grid-cols-3 gap-3">
          {["Creators", "Auditions", "Partners"].map((label, i) => (
            <Metric key={label} value={["Multi-category", "Paid + online", "Industry-led"][i]} label={label} />
          ))}
        </motion.div>
      </motion.div>
      <DeviceCluster
        items={[
          { src: screens.cleanSplash, label: "Clean splash screen anchors the premium navy silk brand language" },
          { src: screens.sideMenu, label: "Navigation drawer reveals the platform's complete creator journey" }
        ]}
      />
    </section>
  );
}

function ExecutiveSummary() {
  const categoryImages = {
    Actors: screens.actorTalent,
    Singers: screens.singerTalent,
    Dancers: screens.dancerTalent,
    "Instrumental Artists": screens.instrumentalTalent
  };
  const summaryCategories = ["Actors", "Singers", "Dancers", "Instrumental Artists"];

  return (
    <Section id="vision" eyebrow="Executive summary" title="A talent gateway for India&apos;s creator class" text="MFA positions the app as a structured entry point for performers, creators, and specialist artists who need visibility beyond local networks. The gateway experience combines premium brand cues with immediate access to auditions, competitions, creator reels, and category exploration.">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Glass className="overflow-hidden p-0">
          <figure className="creator-collage-frame">
            <img src={screens.creatorCollage} alt="Creator categories collage for MFA talent gateway" loading="lazy" />
            <figcaption>
              Creator categories are shown as one connected talent universe, from performing arts to fitness, food, beauty, music, and digital creators.
            </figcaption>
          </figure>
        </Glass>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:min-h-[560px]">
          {summaryCategories.map((item) => (
            <motion.div
              variants={reveal}
              key={item}
              className={categoryImages[item] ? "category-image-card" : "rounded-[28px] border border-white/10 bg-white/[0.06] p-5 text-silver"}
            >
              {categoryImages[item] ? (
                <>
                  <img
                    src={categoryImages[item]}
                    alt={`${item} talent creating an audition video`}
                    loading="lazy"
                  />
                  <div className="category-image-card-content">
                    <Check className="mb-3 text-white" size={20} />
                    <span className="font-semibold">{item}</span>
                  </div>
                </>
              ) : (
                <>
                  <Check className="mb-4 text-white" size={20} />
                  <span className="font-semibold">{item}</span>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function ProblemStatement() {
  const problems = [
    ["Limited Access", "Talent discovery is still concentrated around selective physical networks."],
    ["Geographic Barriers", "Creators outside major hubs struggle to reach production houses and casting teams."],
    ["High Audition Costs", "Travel, time, and repeated physical rounds make opportunity expensive."],
    ["Lack Of Exposure", "Strong performers need credible proof, not only social media noise."]
  ];
  return (
    <Section eyebrow="Problem statement" title="Traditional auditions do not scale fairly" text="The opportunity gap is not only about talent. It is about access, verification, visibility, and repeat participation.">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-5 md:grid-cols-4">
        {problems.map(([title, text]) => (
          <motion.div variants={reveal} key={title} className="problem-card">
            <span className="problem-icon"><LockKeyhole size={18} /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function AcquisitionSystem() {
  return (
    <Section id="funnel" eyebrow="User acquisition system" title="Authentication is designed as a trust funnel" text="Register, OTP, and login screens reduce uncertainty at the first conversion moment. The mobile-first flow supports phone verification, email continuation, and returning-user access without breaking the premium brand surface.">
      <DeviceTrio
        items={[
          { src: screens.authRegisterNew, title: "Register", note: "Name, email, and password capture supports a fuller account creation path." },
          { src: screens.authOtpNew, title: "Verify OTP", note: "Phone verification builds trust and reduces low-quality accounts." },
          { src: screens.authLoginNew, title: "Login", note: "Returning creators retain their portfolio and audition history." }
        ]}
      />
    </Section>
  );
}

function IdentityLayer() {
  return (
    <Section eyebrow="Identity layer" title="Creator profiles become digital portfolios" text="The profile and success screens show the shift from anonymous visitor to identifiable talent. MFA captures profile media, personal details, username, date of birth, and email to create an industry-facing talent identity.">
      <Glass className="identity-showcase">
        <div className="identity-copy">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-ink">
            <Fingerprint size={24} />
          </span>
          <h3 className="mt-6 font-display text-3xl font-semibold md:text-4xl">Verified creator identity</h3>
          <p className="mt-4 text-steel">
            Profile completion turns a visitor into a review-ready creator. Personal details, profile media, username, date of birth, and email create a trusted identity before deeper audition submissions begin.
          </p>
          <div className="mt-7 grid gap-3">
            {["Profile media capture", "Portfolio-ready details", "Success confirmation"].map((item) => (
              <div key={item} className="identity-point">
                <Check size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="identity-phone-grid">
          <Device src={screens.profileCompleteNew} className="identity-phone" label="Complete Profile" />
          <Device src={screens.accountSuccessNew} className="identity-phone" label="Account Creation Success" />
        </div>
      </Glass>
    </Section>
  );
}

function TalentSubmission() {
  return (
    <Section eyebrow="Talent submission system" title="Video upload is the platform&apos;s core engine" text="MFA turns talent into reviewable media. Category metadata, upload rules, progress states, and boost prompts connect creator onboarding with revenue and discovery.">
      <div className="submission-showcase">
        <Glass className="submission-primary">
          <div className="submission-copy">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-ink">
              <UploadCloud size={24} />
            </span>
            <h3 className="mt-6 font-display text-3xl font-semibold md:text-4xl">Structured video submission</h3>
            <p className="mt-4 text-steel">
              Category, sub-category, gender, language, upload rules, progress steps, and final submit action make the creator journey clear before media is sent for discovery.
            </p>
          </div>
          <Device src={screens.uploadClean} className="submission-phone" label="Upload Talent Video" />
        </Glass>
        <Glass className="submission-success">
          <Device src={screens.uploadSuccessClean} className="submission-success-phone" label="Talent Video Uploaded Successfully" />
          <div className="rounded-[26px] border border-white/10 bg-white/[0.07] p-6">
            <h3 className="font-display text-2xl font-semibold">Boost-ready success state</h3>
            <p className="mt-3 text-sm leading-6 text-steel">
              The confirmation screen immediately introduces boosted visibility, turning upload completion into a monetization and engagement moment.
            </p>
          </div>
        </Glass>
      </div>
    </Section>
  );
}

function CreatorEcosystem() {
  return (
    <Section eyebrow="Creator discovery ecosystem" title="Visibility, recognition, and proof create the growth loop" text="Celebrity panels, spotlight artists, top videos, achievers, and testimonials transform MFA from a form-based audition app into a creator discovery ecosystem.">
      <Glass className="ecosystem-showcase">
        <div className="ecosystem-copy">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-ink">
            <Star size={24} />
          </span>
          <h3 className="mt-6 font-display text-3xl font-semibold md:text-4xl">Discovery built around social proof</h3>
          <p className="mt-4 text-steel">
            Celebrity panels, live audition listings, top videos, achiever stories, and collaboration partners make the platform feel active, credible, and opportunity-driven.
          </p>
          <div className="mt-7 grid gap-3">
            {["Celebrity and spotlight discovery", "Audition opportunities at a glance", "Partners and creator proof"].map((item) => (
              <div key={item} className="ecosystem-point">
                <Check size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="ecosystem-image-grid">
          <Device src={screens.ecosystemCelebrityNew} className="ecosystem-phone ecosystem-phone-secondary" label="Celebrity + Spotlight Layer" />
          <Device src={screens.ecosystemAuditionsNew} className="ecosystem-phone ecosystem-phone-featured" label="Audition Listings" />
          <Device src={screens.ecosystemProofNew} className="ecosystem-phone ecosystem-phone-secondary" label="Proof + Partners Layer" />
        </div>
      </Glass>
    </Section>
  );
}

function PartnershipNetwork() {
  return (
    <Section eyebrow="Partnership network" title="Industry relationships make the platform credible" text="Collaboration partners support the promise that creators are not only uploading videos, but entering a network connected to production houses, media schools, talent groups, and entertainment organizations.">
      <Glass className="partnership-showcase">
        <div className="partnership-copy">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-ink">
            <Network size={24} />
          </span>
          <h3 className="mt-6 font-display text-3xl font-semibold md:text-4xl">From creator supply to industry demand</h3>
          <p className="mt-4 text-steel">
            A scalable talent platform needs both sides: verified creator inventory and credible partners that can convert visibility into real-world opportunities.
          </p>
          <div className="mt-7 grid gap-3">
            {["Partner-backed credibility", "Competitions for repeated engagement", "Creator proof that builds trust"].map((item) => (
              <div key={item} className="partnership-point">
                <Check size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="partnership-phone-grid">
          <Device src={screens.partnersProofNew} className="partnership-phone" label="Collaboration Partners" />
          <Device src={screens.competitionsNew} className="partnership-phone partnership-phone-featured" label="Competitions" />
        </div>
      </Glass>
    </Section>
  );
}

function RevenueModel() {
  const streams = [
    ["Audition Fees", CircleDollarSign],
    ["Subscription Plans", WalletCards],
    ["Boost Talent Videos", Rocket],
    ["Premium Visibility", Crown],
    ["Sponsored Campaigns", Star],
    ["Brand Partnerships", Gem],
    ["Industry Collaborations", Network]
  ];
  return (
    <Section id="market" eyebrow="Revenue model" title="Multiple monetization paths are built into the journey" text="MFA&apos;s revenue model sits inside natural creator motivations: apply, get seen, improve chances, and access better opportunities.">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-4 md:grid-cols-7">
        {streams.map(([label, Icon]) => (
          <motion.div variants={reveal} key={label} className="rounded-[32px] border border-white/10 bg-white/[0.065] p-5 shadow-glass">
            <Icon className="mb-7 text-white" size={24} />
            <p className="text-sm font-semibold text-silver">{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function SubscriptionPlans() {
  const plans = [
    ["Talent", "69"],
    ["Passion", "179"],
    ["Dream", "499"],
    ["Aspiration", "849"],
    ["Pinnacle", "1599"]
  ];
  return (
    <Section eyebrow="Subscription plans" title="A laddered pricing system for creator ambition" text="The pricing ladder maps to progressively higher seriousness and visibility needs, from early talent validation to premium exposure.">
      <div className="grid gap-5 md:grid-cols-5">
        {plans.map(([name, price], index) => (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
            key={name}
            className={`pricing-card ${index === 4 ? "pricing-card-featured" : ""}`}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-steel">{name}</p>
            <h3 className="mt-5 font-display text-4xl font-semibold">₹{price}</h3>
            <p className="mt-5 text-sm leading-6 text-steel">Designed for creator visibility, profile momentum, and audition readiness.</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function TechnologyStack() {
  const stack = [
    ["Flutter", Layers3, "Cross-platform app interface"],
    ["Firebase", Database, "Realtime platform services"],
    ["Authentication", ShieldCheck, "Secure creator onboarding"],
    ["Storage", UploadCloud, "Video and profile media"],
    ["Push Notifications", Bell, "Audition updates and engagement"],
    ["Analytics", BarChart3, "Growth and funnel intelligence"]
  ];
  return (
    <Section eyebrow="Technology stack" title="A pragmatic stack for a media-heavy creator platform" text="The architecture supports fast mobile deployment, authentication, storage, notifications, and analytics across the complete audition funnel.">
      <div className="grid gap-4 md:grid-cols-3">
        {stack.map(([title, Icon, text]) => (
          <Glass key={title} className="p-6">
            <Icon className="mb-5 text-white" size={28} />
            <h3 className="font-display text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-steel">{text}</p>
          </Glass>
        ))}
      </div>
    </Section>
  );
}

function MarketOpportunity() {
  const items = [["Creator Economy", 90], ["Digital Auditions", 85], ["Talent Platforms", 80], ["Entertainment Industry", 95]];
  return (
    <Section eyebrow="Market opportunity" title="The market is ready for structured digital discovery" text="Creator behavior, entertainment demand, and remote audition workflows all point toward a scalable digital talent layer.">
      <Glass className="space-y-7 p-7 md:p-10">
        {items.map(([label, value]) => <Progress key={label} label={label} value={value} />)}
      </Glass>
    </Section>
  );
}

function InsightsDashboard() {
  const kpis = ["Talent Categories", "Audition Opportunities", "Creator Engagement", "Submission Growth", "Partner Ecosystem"];
  return (
    <Section eyebrow="Key insights dashboard" title="The platform can be measured as an operating system" text="The best case-study signal is that MFA is not a static app. It can become a dashboard-led business with clear metrics across supply, demand, engagement, and partnerships.">
      <div className="grid gap-5 md:grid-cols-5">
        {kpis.map((label, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            key={label}
            className="kpi-card"
          >
            <Fingerprint className="mb-8 text-white" size={26} />
            <p className="font-display text-3xl font-semibold">{index === 0 ? "20+" : index === 1 ? "Live" : index === 2 ? "High" : index === 3 ? "Rising" : "Growing"}</p>
            <p className="mt-3 text-sm text-steel">{label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function FutureRoadmap() {
  const items = ["AI Talent Scoring", "Live Auditions", "Creator Marketplace", "Agency Dashboard", "Creator Monetization", "International Expansion"];
  return (
    <Section id="roadmap" eyebrow="Future roadmap" title="The next layer is intelligence, monetization, and global scale" text="With structured profiles, categorized uploads, and audition history, MFA has the foundation for recommendation engines, live casting workflows, and creator monetization products.">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            key={item}
            className="roadmap-item"
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
            <ArrowRight size={18} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Conclusion() {
  return (
    <section id="conclusion" className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
      <Glass className="conclusion-card">
        <div className="conclusion-icon" aria-hidden="true">
          <Globe2 size={86} />
        </div>
        <div>
          <p className="eyebrow">Conclusion</p>
          <h2>
            My 1st Audition transforms talent discovery into a scalable digital ecosystem.
          </h2>
          <p className="conclusion-text">
            Creators can showcase skills, participate in auditions, gain visibility, and connect directly with entertainment opportunities through one structured platform.
          </p>
        </div>
        <div className="conclusion-pills">
          {["Showcase", "Participate", "Gain Visibility", "Connect"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Glass>
    </section>
  );
}

function Section({ id, eyebrow, title, text, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.22 }} variants={stagger} className="mb-12 max-w-4xl">
        <motion.p variants={reveal} className="eyebrow">{eyebrow}</motion.p>
        <motion.h2 variants={reveal} className="mt-5 font-display text-4xl font-semibold leading-tight md:text-6xl" dangerouslySetInnerHTML={{ __html: title }} />
        <motion.p variants={reveal} className="mt-6 text-lg leading-8 text-steel">{text}</motion.p>
      </motion.div>
      {children}
    </section>
  );
}

function Glass({ className = "", children }) {
  return <div className={`rounded-[32px] border border-white/10 bg-white/[0.065] shadow-glass backdrop-blur-2xl ${className}`}>{children}</div>;
}

function Metric({ value, label }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-4">
      <p className="text-base font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-steel">{label}</p>
    </div>
  );
}

function Device({ src, label, className = "" }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -34]);
  return (
    <motion.figure style={{ y }} className={`device ${className}`}>
      <div className="device-shell">
        <img src={src} alt={label} loading="lazy" />
      </div>
      {label && <figcaption>{label}</figcaption>}
    </motion.figure>
  );
}

function DeviceCluster({ items }) {
  return (
    <div>
      <div className="relative mx-auto min-h-[560px] max-w-[620px]">
        {items.map((item, index) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, y: 54, rotate: index ? 5 : -4 }}
            animate={{ opacity: 1, y: 0, rotate: index ? 3 : -3 }}
            transition={{ duration: 0.9, delay: index * 0.15 }}
            className={`absolute hidden md:block ${index ? "right-2 top-12 w-[43%]" : "left-8 top-0 w-[46%]"}`}
          >
            <Device src={item.src} label={item.label} />
          </motion.div>
        ))}
        <div className="md:hidden">
          <Device src={items[0].src} label={items[0].label} />
        </div>
      </div>
      <div className="mt-8 rounded-[32px] border border-white/10 bg-white/[0.07] p-6 shadow-luxury backdrop-blur-2xl">
        <p className="text-sm uppercase tracking-[0.22em] text-steel">Brand system</p>
        <p className="mt-3 text-2xl font-semibold">Premium blue silk visuals create immediate entertainment-category recall.</p>
      </div>
    </div>
  );
}

function DeviceTrio({ items, compact = false }) {
  return (
    <div className={`grid gap-6 ${compact ? "md:grid-cols-3" : "lg:grid-cols-3"}`}>
      {items.map((item, index) => (
        <AnalysisDevice key={`${item.title}-${index}`} {...item} />
      ))}
    </div>
  );
}

function AnalysisDevice({ src, title, note, text }) {
  return (
    <Glass className="p-5">
      <Device src={src} label={title} className="mx-auto max-w-[320px]" />
      <div className="mt-5 rounded-[24px] border border-white/10 bg-black/20 p-5">
        <h3 className="font-display text-xl font-semibold">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-steel">{note || text}</p>
      </div>
    </Glass>
  );
}

function ShowcaseImage({ src, title, featured = false }) {
  return (
    <figure className={`showcase-image-card ${featured ? "showcase-image-card-featured" : ""}`}>
      <img src={src} alt={title} loading="lazy" />
      <figcaption>{title}</figcaption>
    </figure>
  );
}

function Progress({ label, value }) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-sm">
        <span className="font-semibold text-silver">{label}</span>
        <span className="text-steel">{value}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-white via-silver to-[#4f7cff]"
        />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
