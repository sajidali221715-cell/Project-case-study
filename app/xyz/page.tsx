'use client';

import { useEffect } from 'react';
import type { HTMLAttributes } from 'react';

function Icon(props: HTMLAttributes<HTMLElement>) {
  return <i {...props} />;
}

export default function BuildersPoolCaseStudyPage() {
  useEffect(() => {
    const loadLucide = () => {
      const existingScript = document.querySelector<HTMLScriptElement>('script[data-lucide-runtime]');
      if ((window as any).lucide?.createIcons) {
        (window as any).lucide.createIcons();
        return;
      }
      const script = existingScript ?? document.createElement('script');
      script.src = 'https://unpkg.com/lucide@latest';
      script.async = true;
      script.dataset.lucideRuntime = 'true';
      script.onload = () => (window as any).lucide?.createIcons?.();
      if (!existingScript) document.body.appendChild(script);
    };

    loadLucide();

    let statsTriggered = false;
    const getEl = <T extends HTMLElement>(id: string) => document.getElementById(id) as T | null;

    const setClass = (element: HTMLElement | null, className: string) => {
      if (element) element.className = className;
    };

    const scrollShowcase = (direction: 'left' | 'right') => {
      const container = getEl<HTMLDivElement>('showcase-scroll-container');
      if (!container) return;
      const itemWidth = 312;
      container.scrollLeft += direction === 'left' ? -itemWidth : itemWidth;
    };

    const toggleEcosystemPanel = (panelId: 'admin' | 'supplier') => {
      const adminTab = getEl<HTMLButtonElement>('eco-tab-admin');
      const supplierTab = getEl<HTMLButtonElement>('eco-tab-supplier');
      const adminPanel = getEl<HTMLDivElement>('eco-panel-admin');
      const supplierPanel = getEl<HTMLDivElement>('eco-panel-supplier');
      if (!adminTab || !supplierTab || !adminPanel || !supplierPanel) return;

      if (panelId === 'admin') {
        adminTab.className = 'px-6 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 bg-white text-[#0A3B91] shadow-sm';
        supplierTab.className = 'px-6 py-2.5 rounded-xl font-bold text-xs text-slate-500 hover:text-[#0A3B91] transition-all duration-300';
        adminPanel.classList.remove('hidden');
        supplierPanel.classList.add('hidden');
      } else {
        supplierTab.className = 'px-6 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 bg-white text-[#0A3B91] shadow-sm';
        adminTab.className = 'px-6 py-2.5 rounded-xl font-bold text-xs text-slate-500 hover:text-[#0A3B91] transition-all duration-300';
        supplierPanel.classList.remove('hidden');
        adminPanel.classList.add('hidden');
      }
    };

    const triggerSimStep1 = () => {
      const buyerBal = getEl('sim-buyer-bal');
      const escrowBal = getEl('sim-escrow-bal');
      const logger = getEl('sim-logger-txt');
      const simBtn1 = getEl<HTMLButtonElement>('sim-btn-1');
      const simBtn2 = getEl<HTMLButtonElement>('sim-btn-2');
      const lineLeft = getEl('sim-line-left');
      const escrowIcon = getEl('sim-escrow-icon');

      if (buyerBal) buyerBal.innerText = '₦4,40,000';
      if (escrowBal) escrowBal.innerText = '₦40,000';
      setClass(escrowBal, 'block text-xs font-extrabold text-[#F97316]');
      lineLeft?.classList.add('active');
      setClass(escrowIcon, 'w-9 h-9 rounded-xl bg-orange-500/10 flex items-center justify-center text-[#F97316] mx-auto pulse-dot');
      if (logger) logger.innerText = '[LOG - 16:40:15] Smart escrow account created. Contractor balance ₦40,000 locked in escrow transaction vault. Awaiting campaign pool lock rules for Dangote Cement...';
      if (simBtn1) {
        simBtn1.disabled = true;
        simBtn1.className = 'bg-slate-800 text-slate-500 font-semibold py-2 px-1.5 rounded-xl text-[9px] cursor-not-allowed transition-all';
      }
      if (simBtn2) {
        simBtn2.disabled = false;
        simBtn2.className = 'bg-orange-500 text-white font-semibold py-2 px-1.5 rounded-xl text-[9px] shadow-glowOrange transition-all';
      }
    };

    const triggerSimStep2 = () => {
      const logger = getEl('sim-logger-txt');
      const simBtn2 = getEl<HTMLButtonElement>('sim-btn-2');
      const simBtn3 = getEl<HTMLButtonElement>('sim-btn-3');
      setClass(getEl('sim-escrow'), 'sim-card bg-slate-900 border border-amber-500/40 rounded-2xl p-4 text-center space-y-2 relative z-10 shadow-2xl');
      setClass(getEl('sim-escrow-icon'), 'w-9 h-9 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-500 mx-auto pulse-dot');
      if (logger) logger.innerText = '[LOG - 16:40:24] Sourcing target volume met. Pool #DAN-102 closed and locked. Dangote manufacturing queue initiated. Dispatch trucks scheduled...';
      if (simBtn2) {
        simBtn2.disabled = true;
        simBtn2.className = 'bg-slate-800 text-slate-500 font-semibold py-2 px-1.5 rounded-xl text-[9px] cursor-not-allowed transition-all';
      }
      if (simBtn3) {
        simBtn3.disabled = false;
        simBtn3.className = 'bg-emerald-500 text-white font-semibold py-2 px-1.5 rounded-xl text-[9px] shadow-glowGreen transition-all';
      }
    };

    const triggerSimStep3 = () => {
      const escrowBal = getEl('sim-escrow-bal');
      const supplierBal = getEl('sim-supplier-bal');
      const logger = getEl('sim-logger-txt');
      const simBtn3 = getEl<HTMLButtonElement>('sim-btn-3');
      if (escrowBal) escrowBal.innerText = '₦0';
      setClass(escrowBal, 'block text-xs font-extrabold text-slate-500');
      if (supplierBal) supplierBal.innerText = '₦42,40,000';
      getEl('sim-line-right')?.classList.add('active');
      setClass(getEl('sim-escrow-icon'), 'w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 mx-auto');
      setClass(getEl('sim-escrow'), 'sim-card bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center space-y-2 relative z-10 shadow-lg');
      if (logger) logger.innerText = '[LOG - 16:40:35] Electronic site handover verified. Multi-sig validation resolved. Smart escrow released ₦40,000 directly to Supplier Dangote Cement. Transaction success!';
      if (simBtn3) {
        simBtn3.disabled = true;
        simBtn3.className = 'bg-slate-800 text-slate-500 font-semibold py-2 px-1.5 rounded-xl text-[9px] cursor-not-allowed transition-all';
      }
    };

    const resetEscrowSimulator = () => {
      const buyerBal = getEl('sim-buyer-bal');
      const escrowBal = getEl('sim-escrow-bal');
      const supplierBal = getEl('sim-supplier-bal');
      const logger = getEl('sim-logger-txt');
      const simBtn1 = getEl<HTMLButtonElement>('sim-btn-1');
      const simBtn2 = getEl<HTMLButtonElement>('sim-btn-2');
      const simBtn3 = getEl<HTMLButtonElement>('sim-btn-3');
      if (buyerBal) buyerBal.innerText = '₦4,80,000';
      if (escrowBal) escrowBal.innerText = '₦0';
      if (supplierBal) supplierBal.innerText = '₦42,00,000';
      setClass(escrowBal, 'block text-xs font-extrabold text-slate-500');
      getEl('sim-line-left')?.classList.remove('active');
      getEl('sim-line-right')?.classList.remove('active');
      setClass(getEl('sim-escrow-icon'), 'w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 mx-auto');
      setClass(getEl('sim-escrow'), 'sim-card bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center space-y-2 relative z-10 shadow-lg');
      if (logger) logger.innerText = 'System standing by. Click "Step 1: Deposit ₦40,000" below to begin secure Dangote bulk cement pool escrow simulation.';
      if (simBtn1) {
        simBtn1.disabled = false;
        simBtn1.className = 'bg-[#1295E6] hover:bg-[#0D5FD3] text-white font-semibold py-2 px-1.5 rounded-xl text-[9px] shadow-glow transition-all';
      }
      if (simBtn2) {
        simBtn2.disabled = true;
        simBtn2.className = 'bg-slate-800 text-slate-400 font-semibold py-2 px-1.5 rounded-xl text-[9px] cursor-not-allowed transition-all';
      }
      if (simBtn3) {
        simBtn3.disabled = true;
        simBtn3.className = 'bg-slate-800 text-slate-400 font-semibold py-2 px-1.5 rounded-xl text-[9px] cursor-not-allowed transition-all';
      }
    };

    const animateCounters = () => {
      const targets = {
        procure: { current: 0, max: 4.2, speed: 40, decimals: 1, suffix: 'x Faster' },
        escrow: { current: 0, max: 145, speed: 10, decimals: 0, suffix: 'K+' },
        savings: { current: 0, max: 20, speed: 60, decimals: 0, suffix: '% Avg' },
        disputes: { current: 0, max: 80, speed: 15, decimals: 0, suffix: '%' },
        ops: { current: 0, max: 42, speed: 20, decimals: 0, suffix: ' Pools' },
      };

      Object.entries(targets).forEach(([key, item]) => {
        const element = getEl('counter-' + key);
        if (!element) return;
        const interval = window.setInterval(() => {
          item.current += item.decimals > 0 ? 0.1 : 1;
          if (item.current >= item.max) {
            item.current = item.max;
            window.clearInterval(interval);
          }
          element.innerText = item.decimals > 0 ? item.current.toFixed(item.decimals) + item.suffix : Math.round(item.current) + item.suffix;
        }, item.speed);
      });
    };

    const checkScrollStatsTrigger = () => {
      const section = getEl('counters-section');
      if (!section || statsTriggered) return;
      const position = section.getBoundingClientRect();
      if (position.top < window.innerHeight && position.bottom >= 0) {
        statsTriggered = true;
        animateCounters();
      }
    };

    const clickHandler = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest('[data-action]') as HTMLElement | null;
      if (!target) return;
      const action = target.dataset.action;
      if (action === 'showcase-left') scrollShowcase('left');
      if (action === 'showcase-right') scrollShowcase('right');
      if (action === 'eco-admin') toggleEcosystemPanel('admin');
      if (action === 'eco-supplier') toggleEcosystemPanel('supplier');
      if (action === 'sim-step-1') triggerSimStep1();
      if (action === 'sim-step-2') triggerSimStep2();
      if (action === 'sim-step-3') triggerSimStep3();
      if (action === 'sim-reset') resetEscrowSimulator();
    };

    document.addEventListener('click', clickHandler);
    window.addEventListener('scroll', checkScrollStatsTrigger);
    checkScrollStatsTrigger();

    return () => {
      document.removeEventListener('click', clickHandler);
      window.removeEventListener('scroll', checkScrollStatsTrigger);
    };
  }, []);

  return (
    <>
      <style>{`/* Custom premium styling overrides */
    body {
      background-color: #FFFFFF;
      color: #0F172A;
      overflow-x: hidden;
    }

    /* Custom Webkit scrollbar for premium feel */
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #F5FAFF;
    }
    ::-webkit-scrollbar-thumb {
      background: #CBD5E1;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #0D5FD3;
    }

    /* Floating neon glow overlays */
    .glow-circle {
      position: absolute;
      border-radius: 50%;
      filter: blur(140px);
      z-index: 0;
      pointer-events: none;
      opacity: 0.5;
    }

    /* Construction blueprints overlay */
    .blueprint-grid {
      background-image: 
        linear-gradient(rgba(18, 149, 230, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(18, 149, 230, 0.04) 1px, transparent 1px);
      background-size: 40px 40px;
    }

    /* Premium dynamic transitions */
    .hover-glow:hover {
      box-shadow: 0 10px 40px rgba(18, 149, 230, 0.15);
      border-color: rgba(18, 149, 230, 0.4);
      transform: translateY(-4px);
    }
    .transition-all-300 {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Hide scrollbar on showcase row but allow swiping */
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }

    /* Pulse active dot animations */
    @keyframes pulse-glow {
      0%, 100% {
        opacity: 0.6;
        transform: scale(1);
      }
      50% {
        opacity: 1;
        transform: scale(1.15);
      }
    }
    .pulse-dot {
      animation: pulse-glow 2s infinite ease-in-out;
    }

    /* Escrow simulation visual transitions */
    .sim-card {
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .sim-line {
      background-size: 200% 100%;
      background-position: 100% 0;
      transition: background-position 0.8s ease-in-out;
    }
    .sim-line.active {
      background-position: 0 0;
    }

.text-brand-darkSlate { color: #0F172A; }
.shadow-premium { box-shadow: 0 10px 40px rgba(15, 23, 42, 0.08); }
.shadow-glow { box-shadow: 0 0 30px rgba(18, 149, 230, 0.25); }
.shadow-glowGreen { box-shadow: 0 0 30px rgba(34, 197, 94, 0.25); }
.shadow-glowOrange { box-shadow: 0 0 30px rgba(249, 115, 22, 0.25); }`}</style>
      <main className="font-sans antialiased bg-[#FFFFFF]">
{/* BACKGROUND DECORATIONS */}
  <div className="relative w-full overflow-hidden">
    <div className="glow-circle bg-[#1295E6] w-[400px] h-[400px] top-[10%] left-[-150px]"></div>
    <div className="glow-circle bg-[#0A3B91] w-[500px] h-[500px] top-[40%] right-[-200px]"></div>
    <div className="glow-circle bg-[#EAF4FF] w-[600px] h-[600px] bottom-[10%] left-[10%]"></div>




    {/* SECTION 1 â€” HERO SECTION */}
    <section className="relative min-h-screen pt-32 pb-20 flex items-center blueprint-grid bg-gradient-to-b from-[#F5FAFF] to-white overflow-hidden">
      {/* Ambient light effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/50 to-[#EAF4FF]/40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Hero Text Elements (Left 7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EAF4FF] to-white border border-[#1295E6]/20 px-4 py-2 rounded-full shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1295E6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1295E6]"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0A3B91]">Escrow-Secured Procurement Platform</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
            Building Smarter<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A3B91] via-[#0D5FD3] to-[#1295E6]">Procurement Together</span>
          </h1>

          <p className="text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
            BuildersPool enables developers and building contractors to combine purchasing power, secure locked-in pooled pricing, manage project escrow safely, and fully streamline commercial material sourcing within a high-trust digital ecosystem.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#about" className="bg-gradient-to-r from-[#0A3B91] to-[#0D5FD3] text-white font-semibold px-8 py-4 rounded-2xl shadow-glow hover:shadow-lg hover:-translate-y-0.5 transition-all-300 flex items-center gap-2">
              <span>View Case Study</span>
              <Icon data-lucide="arrow-down" className="w-4 h-4" />
            </a>
            <a href="#showcase" className="bg-white border border-slate-200 text-brand-darkSlate hover:border-[#1295E6] font-semibold px-8 py-4 rounded-2xl shadow-premium hover:shadow-md hover:-translate-y-0.5 transition-all-300 flex items-center gap-2">
              <span>Explore Platform</span>
              <Icon data-lucide="smartphone" className="w-4 h-4" />
            </a>
          </div>

          {/* Proof Badges */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-2"><Icon data-lucide="check-circle" className="w-4 h-4 text-[#1295E6]" /> ISO 27001 Audited</span>
            <span className="flex items-center gap-2"><Icon data-lucide="shield-check" className="w-4 h-4 text-[#1295E6]" /> Multi-Sig Smart Escrows</span>
            <span className="flex items-center gap-2"><Icon data-lucide="truck" className="w-4 h-4 text-[#1295E6]" /> Verified Logistics Integrations</span>
          </div>
        </div>

        {/* Layered Coded Mockups (Right 5 Cols) */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center h-[560px] w-full">
          
          {/* Mockup Background Glow Circles */}
          <div className="absolute w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-[#1295E6]/20 to-[#EAF4FF]/40 blur-2xl z-0 pointer-events-none"></div>

          {/* MOCKUP 1: Onboarding 1 (Front Left) */}
          <div className="absolute left-[-20px] sm:left-[20px] lg:left-[-40px] bottom-[20px] z-20 scale-[0.80] sm:scale-95 duration-500 hover:scale-[1.02] hover:z-30 cursor-pointer">
            {/* iPhone Wrapper */}
            <div className="relative bg-slate-900 border-[8px] border-slate-950 rounded-[36px] h-[440px] w-[220px] shadow-2xl overflow-hidden flex flex-col text-white text-[10px]">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-4 bg-black flex justify-center items-center z-50">
                <div className="w-14 h-2 bg-black rounded-full mt-0.5"></div>
              </div>
              {/* Phone Status Bar */}
              <div className="pt-5 px-3 flex justify-between text-[8px] opacity-90 z-20">
                <span className="font-bold">09:41</span>
                <div className="flex gap-1">
                  <Icon data-lucide="wifi" className="w-2.5 h-2.5" />
                  <Icon data-lucide="battery" className="w-2.5 h-2.5" />
                </div>
              </div>
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('onboarding_workers.png')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/10"></div>
              </div>
              
              {/* Phone Content */}
              <div className="relative z-10 p-3 flex-1 flex flex-col justify-between h-full pt-10">
                {/* Skip button */}
                <div className="flex justify-end">
                  <span className="bg-white text-[#0A3B91] font-bold text-[8px] px-2 py-0.5 rounded-full shadow-sm cursor-pointer hover:bg-slate-100 transition-all">Skip</span>
                </div>
                
                {/* Onboarding content at the bottom */}
                <div className="space-y-3 pt-12">
                  {/* Logo Block */}
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 rounded bg-gradient-to-tr from-[#0A3B91] to-[#1295E6] flex items-center justify-center text-white">
                      <Icon data-lucide="layers" className="w-2.5 h-2.5" />
                    </div>
                    <span className="font-extrabold text-[8px]">Builders<span className="text-[#1295E6]">Pool</span></span>
                  </div>
                  
                  {/* Headline & Subtext */}
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-xs text-white leading-tight">Join Smart Buying Pools with Other Builders</h4>
                    <p className="text-[7.5px] text-slate-300 leading-relaxed font-normal">Collaborate with builders and contractors to combine orders and make bulk purchases at better prices.</p>
                  </div>
                  
                  {/* Continue Button */}
                  <button className="w-full bg-[#1295E6] hover:bg-[#0D5FD3] text-white py-2 rounded-xl font-bold shadow-glow text-[9px] transition-all">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* MOCKUP 2: Onboarding 2 (Center Floating Back) */}
          <div className="absolute right-[40px] sm:right-[100px] lg:right-[60px] top-[30px] z-10 scale-[0.80] sm:scale-95 duration-500 hover:scale-[1.02] hover:z-30 cursor-pointer">
            <div className="relative bg-slate-900 border-[8px] border-slate-950 rounded-[36px] h-[440px] w-[220px] shadow-2xl overflow-hidden flex flex-col text-white text-[10px]">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-4 bg-black flex justify-center items-center z-50">
                <div className="w-14 h-2 bg-black rounded-full mt-0.5"></div>
              </div>
              {/* Status Bar */}
              <div className="pt-5 px-3 flex justify-between text-[8px] opacity-90 z-20">
                <span className="font-bold">09:41</span>
                <div className="flex gap-1">
                  <Icon data-lucide="wifi" className="w-2.5 h-2.5" />
                  <Icon data-lucide="battery" className="w-2.5 h-2.5" />
                </div>
              </div>
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('onboarding_delivery.png')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/10"></div>
              </div>
              {/* Content */}
              <div className="relative z-10 p-3 flex-1 flex flex-col justify-between h-full pt-10">
                <div className="flex justify-end">
                  <span className="bg-white text-[#0A3B91] font-bold text-[8px] px-2 py-0.5 rounded-full shadow-sm cursor-pointer hover:bg-slate-100 transition-all">Skip</span>
                </div>
                
                <div className="space-y-3 pt-12">
                  {/* Logo Block */}
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 rounded bg-gradient-to-tr from-[#0A3B91] to-[#1295E6] flex items-center justify-center text-white">
                      <Icon data-lucide="layers" className="w-2.5 h-2.5" />
                    </div>
                    <span className="font-extrabold text-[8px]">Builders<span className="text-[#1295E6]">Pool</span></span>
                  </div>
                  
                  {/* Headline & Subtext */}
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-xs text-white leading-tight">Get Bulk Orders Delivered On Time</h4>
                    <p className="text-[7.5px] text-slate-300 leading-relaxed font-normal">Receive your materials directly at your site with fast, reliable, and on-time delivery tracking.</p>
                  </div>
                  
                  <button className="w-full bg-[#1295E6] hover:bg-[#0D5FD3] text-white py-2 rounded-xl font-bold shadow-glow text-[9px] transition-all">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* MOCKUP 3: Onboarding 3 (Front Right Overlap) */}
          <div className="absolute right-[-10px] sm:right-[30px] lg:right-[-20px] bottom-[30px] z-20 scale-[0.80] sm:scale-95 duration-500 hover:scale-[1.02] hover:z-30 cursor-pointer">
            <div className="relative bg-slate-900 border-[8px] border-slate-950 rounded-[36px] h-[440px] w-[220px] shadow-2xl overflow-hidden flex flex-col text-white text-[10px]">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-4 bg-black flex justify-center items-center z-50">
                <div className="w-14 h-2 bg-black rounded-full mt-0.5"></div>
              </div>
              {/* Status Bar */}
              <div className="pt-5 px-3 flex justify-between text-[8px] opacity-90 z-20">
                <span className="font-bold">09:41</span>
                <div className="flex gap-1">
                  <Icon data-lucide="wifi" className="w-2.5 h-2.5" />
                  <Icon data-lucide="battery" className="w-2.5 h-2.5" />
                </div>
              </div>
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('onboarding_materials.png')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/10"></div>
              </div>
              {/* Content */}
              <div className="relative z-10 p-3 flex-1 flex flex-col justify-between h-full pt-10">
                <div className="flex justify-end">
                  <span className="bg-white text-[#0A3B91] font-bold text-[8px] px-2 py-0.5 rounded-full shadow-sm cursor-pointer hover:bg-slate-100 transition-all">Skip</span>
                </div>
                
                <div className="space-y-3 pt-12">
                  {/* Logo Block */}
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 rounded bg-gradient-to-tr from-[#0A3B91] to-[#1295E6] flex items-center justify-center text-white">
                      <Icon data-lucide="layers" className="w-2.5 h-2.5" />
                    </div>
                    <span className="font-extrabold text-[8px]">Builders<span className="text-[#1295E6]">Pool</span></span>
                  </div>
                  
                  {/* Headline & Subtext */}
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-xs text-white leading-tight">Save More on Construction Materials</h4>
                    <p className="text-[7.5px] text-slate-300 leading-relaxed font-normal">Get better discounts on cement, steel, sand and other materials by purchasing in bulk with others.</p>
                  </div>
                  
                  <button className="w-full bg-[#1295E6] hover:bg-[#0D5FD3] text-white py-2 rounded-xl font-bold shadow-glow text-[9px] transition-all">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    {/* SECTION 2 â€” ABOUT BUILDERSPOOL */}
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Heading + Short pitch) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-[#1295E6] uppercase tracking-wider">About BuildersPool</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-darkSlate leading-tight">
              Transforming Construction Sourcing Through Collective Sourcing Power
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Historically, small and mid-sized contractors paid exorbitant premiums on materials while enterprise companies secured massive volume discounts. BuildersPool democratizes the construction supply chain. 
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              By combining procurement orders into unified purchasing pools and locking safety deposits into multi-signature escrows, we guarantee low prices for buyers and fully secured risk-free contracts for manufacturers.
            </p>

            {/* Stat Cards Embedded Below Left Column */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="bg-[#F5FAFF] border border-[#EAF4FF] rounded-2xl p-4 text-center">
                <span className="block text-2xl font-extrabold text-[#0A3B91]">85%</span>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Pool Success</span>
              </div>
              <div className="bg-[#F5FAFF] border border-[#EAF4FF] rounded-2xl p-4 text-center">
                <span className="block text-2xl font-extrabold text-[#1295E6]">20%</span>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Average Savings</span>
              </div>
              <div className="bg-[#F5FAFF] border border-[#EAF4FF] rounded-2xl p-4 text-center">
                <span className="block text-2xl font-extrabold text-[#22C55E]">100%</span>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Escrow Secured</span>
              </div>
            </div>
          </div>

          {/* Right Column (Content Feature Cards Grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos-delay="200">
            {/* Card 1 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-premium hover:shadow-md transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF4FF] flex items-center justify-center text-[#0A3B91]">
                <Icon data-lucide="users" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-darkSlate">Pooled Buying Power</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Connect and group matching material needs with neighboring contractors to reach tier-1 factory order minimums effortlessly.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-premium hover:shadow-md transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF4FF] flex items-center justify-center text-[#0D5FD3]">
                <Icon data-lucide="shield" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-darkSlate">Verified Manufacturers</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Source directly from vetted suppliers subject to rigid quality assurance, verified testing logs, and prompt delivery records.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-premium hover:shadow-md transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF4FF] flex items-center justify-center text-[#1295E6]">
                <Icon data-lucide="lock" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-darkSlate">Secure Escrow Accounts</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Buyers deposit escrow to locking contracts. Funds are safely frozen and only released upon successful physical site verification.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-premium hover:shadow-md transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF4FF] flex items-center justify-center text-[#22C55E]">
                <Icon data-lucide="refresh-cw" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-darkSlate">Procurement Automation</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Say goodbye to fragmented paper invoices. Automate receipts, purchase matching, multi-sig sign-offs, and billing items.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>


    {/* SECTION 3 â€” THE CHALLENGE */}
    <section id="problem" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-[#0D5FD3] uppercase tracking-wider">The Market Failure</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-darkSlate">Understanding The Problem</h2>
          <p className="text-slate-500 text-sm">
            Commercial building material procurement is plagued by high-cost middlemen, opaque pricing formulas, and high transaction security risks.
          </p>
        </div>

        {/* 2x3 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos-delay="200">
          
          {/* Card 1: Fragmented Procurement */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-premium hover:border-[#1295E6]/40 hover:-translate-y-1 duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500">
                <Icon data-lucide="split" className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-darkSlate">Fragmented Sourcing</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Builders purchase in separate, fragmented streams, missing out on massive price discount reductions available exclusively to multi-billion corporations.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-50 mt-6 flex justify-between items-center text-[10px] text-rose-500 font-semibold uppercase">
              <span>High Cost Impact</span>
              <span className="bg-rose-50 px-2 py-0.5 rounded-full">+25% markup</span>
            </div>
          </div>

          {/* Card 2: Trust Issues */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-premium hover:border-[#1295E6]/40 hover:-translate-y-1 duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500">
                <Icon data-lucide="alert-triangle" className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-darkSlate">Counterparty Risks</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Builders face immense anxiety when paying large upfront balances to suppliers, worried that raw material qualities will disappoint or deliveries fail.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-50 mt-6 flex justify-between items-center text-[10px] text-rose-500 font-semibold uppercase">
              <span>Risk Metric</span>
              <span className="bg-rose-50 px-2 py-0.5 rounded-full">High Default</span>
            </div>
          </div>

          {/* Card 3: Manual Payments */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-premium hover:border-[#1295E6]/40 hover:-translate-y-1 duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500">
                <Icon data-lucide="file-text" className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-darkSlate">Manual Invoicing</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Opaque bank transfers, manual spreadsheets, and phone-based follow-ups slow accounting departments, leading to payment errors and administrative stress.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-50 mt-6 flex justify-between items-center text-[10px] text-rose-500 font-semibold uppercase">
              <span>Admin Burden</span>
              <span className="bg-rose-50 px-2 py-0.5 rounded-full">14+ Days delay</span>
            </div>
          </div>

          {/* Card 4: Supplier Uncertainty */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-premium hover:border-[#1295E6]/40 hover:-translate-y-1 duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500">
                <Icon data-lucide="user-x" className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-darkSlate">Supplier Uncertainty</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Material manufacturers suffer from unpredictable ordering lines, capacity under-utilization, and high customer acquisition costs trying to find regional buyers.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-50 mt-6 flex justify-between items-center text-[10px] text-rose-500 font-semibold uppercase">
              <span>Supply Bottleneck</span>
              <span className="bg-rose-50 px-2 py-0.5 rounded-full">Overage Stock</span>
            </div>
          </div>

          {/* Card 5: Delivery Disputes */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-premium hover:border-[#1295E6]/40 hover:-translate-y-1 duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500">
                <Icon data-lucide="skull" className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-darkSlate">Logistics Disputes</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Damaged concrete during transit or steel diameter defects trigger endless blaming matches between logistics drivers, factories, and site supervisors.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-50 mt-6 flex justify-between items-center text-[10px] text-rose-500 font-semibold uppercase">
              <span>Resolution Lag</span>
              <span className="bg-rose-50 px-2 py-0.5 rounded-full">Weeks to resolve</span>
            </div>
          </div>

          {/* Card 6: Lack of Transparency */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-premium hover:border-[#1295E6]/40 hover:-translate-y-1 duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500">
                <Icon data-lucide="eye-off" className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-darkSlate">Opaque Pricing</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Local material distributors dynamically change quotes based on who is asking, leading to unequal, inflated procurement prices for smaller contracting companies.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-50 mt-6 flex justify-between items-center text-[10px] text-rose-500 font-semibold uppercase">
              <span>Transparency Gap</span>
              <span className="bg-rose-50 px-2 py-0.5 rounded-full">Opaque Sourcing</span>
            </div>
          </div>

        </div>
      </div>
    </section>


    {/* SECTION 4 â€” OUR SOLUTION */}
    <section id="solution" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold text-[#1295E6] uppercase tracking-wider">The Innovation</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-darkSlate">Our Structured Approach</h2>
          <p className="text-slate-500 text-sm">
            We replaced old, dangerous, high-markup purchasing flows with a smart 6-step unified escrow procurement pipeline.
          </p>
        </div>

        {/* Premium Horizontal Timeline */}
        <div className="relative py-12" data-aos-delay="200">
          {/* Timeline Connecting Line */}
          <div className="absolute top-[48px] left-[5%] right-[5%] h-1 bg-slate-100 hidden md:block">
            <div className="h-full bg-gradient-to-r from-[#0A3B91] via-[#0D5FD3] to-[#1295E6] w-[80%] rounded-full shadow-glow"></div>
          </div>

          {/* Timeline Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4 relative z-10">
            
            {/* Step 1 */}
            <div className="text-center space-y-4 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0A3B91] to-[#0D5FD3] text-white flex items-center justify-center font-extrabold text-lg mx-auto shadow-glow group-hover:scale-110 duration-300">
                1
              </div>
              <div className="space-y-1 px-2">
                <h4 className="font-bold text-sm text-brand-darkSlate group-hover:text-[#1295E6] transition-colors">Create Pool</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  A contractor lists a specific quantity need (e.g. 2,000 bags of OPC cement).
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0A3B91] to-[#0D5FD3] text-white flex items-center justify-center font-extrabold text-lg mx-auto shadow-glow group-hover:scale-110 duration-300">
                2
              </div>
              <div className="space-y-1 px-2">
                <h4 className="font-bold text-sm text-brand-darkSlate group-hover:text-[#1295E6] transition-colors">Join Pool</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Other builders combine matching orders, hitting wholesale factory volume thresholds.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0A3B91] to-[#0D5FD3] text-white flex items-center justify-center font-extrabold text-lg mx-auto shadow-glow group-hover:scale-110 duration-300">
                3
              </div>
              <div className="space-y-1 px-2">
                <h4 className="font-bold text-sm text-brand-darkSlate group-hover:text-[#1295E6] transition-colors">Secure Escrow</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Buyers deposit funds into BuildersPool multi-sig escrow, locking price savings.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="text-center space-y-4 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0A3B91] to-[#0D5FD3] text-white flex items-center justify-center font-extrabold text-lg mx-auto shadow-glow group-hover:scale-110 duration-300">
                4
              </div>
              <div className="space-y-1 px-2">
                <h4 className="font-bold text-sm text-brand-darkSlate group-hover:text-[#1295E6] transition-colors">Procurement</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Escrow verified. Manufacturer schedules manufacturing runs and batches delivery.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="text-center space-y-4 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0A3B91] to-[#0D5FD3] text-white flex items-center justify-center font-extrabold text-lg mx-auto shadow-glow group-hover:scale-110 duration-300">
                5
              </div>
              <div className="space-y-1 px-2">
                <h4 className="font-bold text-sm text-brand-darkSlate group-hover:text-[#1295E6] transition-colors">Verified Delivery</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Materials arrive at sites. Quality and volumes are digitally logged and verified.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="text-center space-y-4 group">
              <div className="w-14 h-14 rounded-2xl bg-[#1295E6] text-white flex items-center justify-center font-extrabold text-lg mx-auto shadow-glow group-hover:scale-110 duration-300">
                <Icon data-lucide="check" className="w-6 h-6" />
              </div>
              <div className="space-y-1 px-2">
                <h4 className="font-bold text-sm text-brand-darkSlate group-hover:text-[#1295E6] transition-colors">Fund Release</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Escrow automatically releases payments to manufacturers. Flow completes successfully!
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>


    {/* SECTION 5 â€” CORE FEATURES */}
    <section id="features" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-[#0A3B91] uppercase tracking-wider font-semibold">Engineered Architecture</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-darkSlate">Core Platform Capabilities</h2>
          <p className="text-slate-500 text-sm">
            Explore the core architectural components that drive friction-free bulk procurement.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos-delay="200">
          
          {/* Feature 1: Buying Pools */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-premium hover-glow transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0A3B91] to-[#1295E6] text-white flex items-center justify-center group-hover:scale-105 duration-300">
                <Icon data-lucide="users" className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-darkSlate">Cooperative Buying Pools</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Smart grouping engine matches nearby buyers with equivalent material requirements, automatically calculating distance metrics to minimize shipping expenses.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-50 mt-6 flex items-center justify-between text-[11px] text-[#1295E6] font-semibold">
              <span>View Pool Engine specs</span>
              <Icon data-lucide="chevron-right" className="w-4 h-4" />
            </div>
          </div>

          {/* Feature 2: Wallet & Escrow */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-premium hover-glow transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0A3B91] to-[#1295E6] text-white flex items-center justify-center group-hover:scale-105 duration-300">
                <Icon data-lucide="wallet" className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-darkSlate">Secure Escrow Wallets</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Integrated virtual account infrastructure with automated locking vaults. Funds are legally protected under audited banking compliance rules.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-50 mt-6 flex items-center justify-between text-[11px] text-[#1295E6] font-semibold">
              <span>View Wallet API logs</span>
              <Icon data-lucide="chevron-right" className="w-4 h-4" />
            </div>
          </div>

          {/* Feature 3: Delivery Tracking */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-premium hover-glow transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0A3B91] to-[#1295E6] text-white flex items-center justify-center group-hover:scale-105 duration-300">
                <Icon data-lucide="navigation" className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-darkSlate">Milestone Tracking</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Real-time delivery coordination integrating GPS vehicle data, electronic digital signatures, and automatic weight sensors at construction gates.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-50 mt-6 flex items-center justify-between text-[11px] text-[#1295E6] font-semibold">
              <span>View Tracking systems</span>
              <Icon data-lucide="chevron-right" className="w-4 h-4" />
            </div>
          </div>

          {/* Feature 4: Supplier Portal */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-premium hover-glow transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0A3B91] to-[#1295E6] text-white flex items-center justify-center group-hover:scale-105 duration-300">
                <Icon data-lucide="store" className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-darkSlate">Direct Supplier Portal</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Manufacturer console featuring capacity utilization calculators, bulk bidding pipelines, dispatch sheets, and verified factoring solutions.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-50 mt-6 flex items-center justify-between text-[11px] text-[#1295E6] font-semibold">
              <span>Supplier documentation</span>
              <Icon data-lucide="chevron-right" className="w-4 h-4" />
            </div>
          </div>

          {/* Feature 5: Admin Dashboard */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-premium hover-glow transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0A3B91] to-[#1295E6] text-white flex items-center justify-center group-hover:scale-105 duration-300">
                <Icon data-lucide="sliders" className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-darkSlate">Admin Control Tower</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Platform analytics mapping total locked transaction volume, live dispute states, smart-matching efficiency, and regional supply patterns.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-50 mt-6 flex items-center justify-between text-[11px] text-[#1295E6] font-semibold">
              <span>Explore Admin module</span>
              <Icon data-lucide="chevron-right" className="w-4 h-4" />
            </div>
          </div>

          {/* Feature 6: Dispute Resolution */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-premium hover-glow transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0A3B91] to-[#1295E6] text-white flex items-center justify-center group-hover:scale-105 duration-300">
                <Icon data-lucide="scale" className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-darkSlate">Fair Dispute Vaults</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Smart automated escrow refund paths triggered by verified third-party site logs, or routed to neutral trade arbitration boards for fast resolution.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-50 mt-6 flex items-center justify-between text-[11px] text-[#1295E6] font-semibold">
              <span>View Dispute terms</span>
              <Icon data-lucide="chevron-right" className="w-4 h-4" />
            </div>
          </div>

        </div>
      </div>
    </section>


    {/* SECTION 6 â€” ESCROW PROTECTION SYSTEM */}
    <section id="escrow" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Starry grid and gradient meshes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(18,149,230,0.15),transparent_60%)] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-bold text-[#1295E6] uppercase tracking-wider">Financial Safety</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Escrow-First Financial Protection</h2>
          <p className="text-slate-400 text-sm">
            Learn how funds travel through our highly secure multi-signature escrow pipeline, minimizing financial counterparty defaults to absolute zero.
          </p>
        </div>

        {/* Split Layout (Interactive Simulator / Bullet benefits) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Interactive Visual Wallet-to-Escrow Simulator */}
          <div className="lg:col-span-6 bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold">Interactive Simulator</span>
                <h3 className="text-base font-bold text-white">Live Escrow Flow Demo</h3>
              </div>
              <button data-action="sim-reset" className="bg-slate-800 hover:bg-slate-700 text-[10px] font-bold text-[#1295E6] px-3 py-1.5 rounded-lg border border-slate-700 transition-all flex items-center gap-1">
                <Icon data-lucide="refresh-cw" className="w-3 h-3" /> Reset Flow
              </button>
            </div>

            {/* SIMULATOR FLOW ROW */}
            <div className="grid grid-cols-3 gap-3 items-center mb-8 relative">
              
              {/* Card A: Contractor Wallet */}
              <div id="sim-buyer" className="sim-card bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center space-y-2 relative z-10 shadow-lg">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-[#1295E6] mx-auto">
                  <Icon data-lucide="user" className="w-5 h-5" />
                </div>
                <span className="block text-[8px] font-bold text-slate-400 uppercase">Contractor Wallet</span>
                <span id="sim-buyer-bal" className="block text-xs font-extrabold text-white">â‚¦4,80,000</span>
              </div>

              {/* Card B: Escrow Vault */}
              <div id="sim-escrow" className="sim-card bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center space-y-2 relative z-10 shadow-lg">
                <div id="sim-escrow-icon" className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 mx-auto transition-all duration-300">
                  <Icon data-lucide="lock" className="w-5 h-5" />
                </div>
                <span className="block text-[8px] font-bold text-slate-400 uppercase">Escrow Vault</span>
                <span id="sim-escrow-bal" className="block text-xs font-extrabold text-slate-500">â‚¦0</span>
              </div>

              {/* Card C: Supplier Wallet */}
              <div id="sim-supplier" className="sim-card bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center space-y-2 relative z-10 shadow-lg">
                <div className="w-9 h-9 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 mx-auto">
                  <Icon data-lucide="store" className="w-5 h-5" />
                </div>
                <span className="block text-[8px] font-bold text-slate-400 uppercase">Supplier Wallet</span>
                <span id="sim-supplier-bal" className="block text-xs font-extrabold text-white">â‚¦42,00,000</span>
              </div>

              {/* Connecting Line Backing Visuals */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-slate-800 z-0 flex justify-between pointer-events-none">
                <div id="sim-line-left" className="sim-line w-1/2 h-full bg-gradient-to-r from-[#1295E6] to-[#0A3B91]"></div>
                <div id="sim-line-right" className="sim-line w-1/2 h-full bg-gradient-to-r from-[#0A3B91] to-green-500"></div>
              </div>
            </div>

            {/* SIMULATOR STATE LOGGER & ACTION TRIGGERS */}
            <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800/80 mb-6">
              <div className="flex justify-between items-center text-[10px] text-slate-400 mb-2 border-b border-slate-800 pb-1.5">
                <span>SIMULATOR STATUS LEDGER</span>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
              <p id="sim-logger-txt" className="text-xs text-slate-300 font-mono leading-relaxed h-[52px]">
                System standing by. Click "Step 1: Deposit â‚¦40k" below to begin secure Dangote bulk cement pool escrow simulation.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button id="sim-btn-1" data-action="sim-step-1" className="bg-[#1295E6] hover:bg-[#0D5FD3] text-white font-semibold py-2 px-1.5 rounded-xl text-[9px] shadow-glow transition-all">
                Step 1: Deposit â‚¦40k
              </button>
              <button id="sim-btn-2" data-action="sim-step-2" className="bg-slate-800 text-slate-400 font-semibold py-2 px-1.5 rounded-xl text-[9px] cursor-not-allowed transition-all" disabled>
                Step 2: Lock Pool
              </button>
              <button id="sim-btn-3" data-action="sim-step-3" className="bg-slate-800 text-slate-400 font-semibold py-2 px-1.5 rounded-xl text-[9px] cursor-not-allowed transition-all" disabled>
                Step 3: Release
              </button>
            </div>
          </div>

          {/* RIGHT: Bullets & benefits list (6 columns) */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-2xl font-extrabold leading-snug">
              Smart Escrow Safeguards Sourcing & Procurement Trades
            </h3>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              Our automated smart escrow contract enforces security rules that protect cash balances, logistics compliance, and delivery deadlines. No single counterparty has manual control over escrow balances.
            </p>

            <div className="space-y-4">
              {/* Benefit 1 */}
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mt-1 shrink-0">
                  <Icon data-lucide="check" className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Automated Instantly Triggered Refunds</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                    If sourcing target volumes are not met within the pool's duration limits, escrow locks dissolve and release funds back to contractors instantly.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mt-1 shrink-0">
                  <Icon data-lucide="check" className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">No Opaque Manual Handling</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                    Transactions process over automated secure software structures. Human administrators are restricted from accessing client escrow balances.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mt-1 shrink-0">
                  <Icon data-lucide="check" className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Real-Time Wallet Audit Ledger</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                    Maintain permanent receipts mapping current locked values, matching delivery invoices, tax compliance filings, and escrow distributions.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    {/* SECTION 7 â€” PROCUREMENT WORKFLOW */}
    <section id="workflow" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold text-[#0D5FD3] uppercase tracking-wider font-semibold">Step-By-Step Journey</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-darkSlate">Seamless Sourcing Workflow</h2>
          <p className="text-slate-500 text-sm">
            Behind the clean UX is a robust supply-chain automation mechanism operating across five key transaction phases.
          </p>
        </div>

        {/* Premium Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto pl-8 sm:pl-16 py-4" data-aos-delay="200">
          
          {/* Timeline Vertical backing line */}
          <div className="absolute left-[36px] sm:left-[68px] top-0 bottom-0 w-1 bg-slate-100 rounded-full">
            <div className="h-[75%] bg-gradient-to-b from-[#0A3B91] via-[#0D5FD3] to-[#1295E6] rounded-full shadow-glow"></div>
          </div>

          {/* Step 1 */}
          <div className="relative mb-12 sm:mb-16 group">
            {/* Icon Indicator */}
            <div className="absolute left-[-28px] sm:left-[-60px] top-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#0A3B91] to-[#0D5FD3] text-white flex items-center justify-center font-extrabold text-sm sm:text-base shadow-glow group-hover:scale-105 duration-300">
              01
            </div>
            {/* Content card */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-premium hover:border-[#1295E6]/20 transition-all duration-300 ml-4 sm:ml-6">
              <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                <h3 className="text-lg font-bold text-brand-darkSlate group-hover:text-[#1295E6] transition-colors">Pooling Stage (Cooperative Assembly)</h3>
                <span className="bg-[#EAF4FF] text-[#0A3B91] text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">Phase Active</span>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Contractors establish purchasing demands with accurate delivery coordinates. The platform pairs matching regional needs into dynamic procurement campaigns.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative mb-12 sm:mb-16 group">
            <div className="absolute left-[-28px] sm:left-[-60px] top-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#0A3B91] to-[#0D5FD3] text-white flex items-center justify-center font-extrabold text-sm sm:text-base shadow-glow group-hover:scale-105 duration-300">
              02
            </div>
            <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-premium hover:border-[#1295E6]/20 transition-all duration-300 ml-4 sm:ml-6">
              <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                <h3 className="text-lg font-bold text-brand-darkSlate group-hover:text-[#1295E6] transition-colors">Pool Lock & Escrow Lock</h3>
                <span className="bg-[#EAF4FF] text-[#0A3B91] text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">Volume Reached</span>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Once the unified volume triggers factory pricing, the platform closes the pool. Members deposit their purchasing balances into secure multi-sig escrow accounts.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative mb-12 sm:mb-16 group">
            <div className="absolute left-[-28px] sm:left-[-60px] top-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#0A3B91] to-[#0D5FD3] text-white flex items-center justify-center font-extrabold text-sm sm:text-base shadow-glow group-hover:scale-105 duration-300">
              03
            </div>
            <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-premium hover:border-[#1295E6]/20 transition-all duration-300 ml-4 sm:ml-6">
              <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                <h3 className="text-lg font-bold text-brand-darkSlate group-hover:text-[#1295E6] transition-colors">Factory Manufacturing & Dispatch</h3>
                <span className="bg-emerald-50 text-emerald-600 text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">Escrow Confirmed</span>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                With escrow secured, manufacturers instantly initiate production lines. Dispatch managers schedule coordinated direct shipping to builders' job sites.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative mb-12 sm:mb-16 group">
            <div className="absolute left-[-28px] sm:left-[-60px] top-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#0A3B91] to-[#0D5FD3] text-white flex items-center justify-center font-extrabold text-sm sm:text-base shadow-glow group-hover:scale-105 duration-300">
              04
            </div>
            <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-premium hover:border-[#1295E6]/20 transition-all duration-300 ml-4 sm:ml-6">
              <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                <h3 className="text-lg font-bold text-brand-darkSlate group-hover:text-[#1295E6] transition-colors">Materials In Transit & GPS Tracking</h3>
                <span className="bg-orange-50 text-[#F97316] text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">In Transit</span>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Integrated logistics companies ship the order bulk. Buyers track vehicle routes in real-time on the platform, preparing receiving logistics on site.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative group">
            <div className="absolute left-[-28px] sm:left-[-60px] top-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#22C55E] text-white flex items-center justify-center font-extrabold text-sm sm:text-base shadow-glowGreen group-hover:scale-105 duration-300">
              <Icon data-lucide="flag" className="w-5 h-5" />
            </div>
            <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-premium hover:border-[#1295E6]/20 transition-all duration-300 ml-4 sm:ml-6">
              <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                <h3 className="text-lg font-bold text-brand-darkSlate group-hover:text-[#1295E6] transition-colors">Verified Handover & Settlement</h3>
                <span className="bg-emerald-50 text-emerald-600 text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">Fulfillment Complete</span>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Materials arrive and pass quality tests. Once site managers sign delivery proofs, escrow instantly releases funds to supplier balances, concluding transaction flows.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>


    {/* SECTION 8 â€” PLATFORM SHOWCASE (HORIZONTALLY SCROLLABLE SHOWCASE) */}
    <section id="showcase" className="py-24 bg-gradient-to-b from-[#F5FAFF] to-white relative overflow-hidden">
      
      {/* Backdrop glow effects */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-[#1295E6]/10 to-transparent blur-3xl right-[-200px] top-[10%] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold text-[#0A3B91] uppercase tracking-wider font-semibold">User Experience</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-darkSlate">Coded Mobile App Showcase</h2>
            <p className="text-slate-500 text-sm">
              Discover the BuildersPool high-fidelity mobile application. Recreated entirely using live responsive HTML/CSS structures. Scroll horizontally to inspect other platform screens.
            </p>
          </div>
          {/* Slider Navigation controls */}
          <div className="flex items-center gap-3">
            <button data-action="showcase-left" className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-brand-darkSlate flex items-center justify-center shadow-premium hover:border-[#1295E6] hover:text-[#1295E6] transition-all-300">
              <Icon data-lucide="arrow-left" className="w-5 h-5" />
            </button>
            <button data-action="showcase-right" className="w-12 h-12 rounded-2xl bg-[#0D5FD3] text-white flex items-center justify-center shadow-glow hover:bg-[#1295E6] transition-all-300">
              <Icon data-lucide="arrow-right" className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Row container */}
        <div id="showcase-scroll-container" className="flex flex-row flex-nowrap gap-8 overflow-x-auto pb-12 pt-4 hide-scrollbar snap-x snap-mandatory scroll-smooth w-full">
          
          {/* SCREEN 1: Onboarding Screen */}
          <div className="snap-center shrink-0 w-[280px]">
            {/* iPhone Frame */}
            <div className="relative bg-white border-[10px] border-slate-900 rounded-[44px] h-[550px] w-full shadow-2xl overflow-hidden flex flex-col text-slate-800 text-[11px] font-sans">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-4 bg-black flex justify-center items-center z-50">
                <div className="w-16 h-2.5 bg-black rounded-full mt-0.5"></div>
              </div>
              {/* Status Bar */}
              <div className="pt-5 px-4 flex justify-between text-[8px] text-slate-600 font-medium">
                <span>09:41</span>
                <div className="flex gap-1.5 items-center">
                  <Icon data-lucide="wifi" className="w-2.5 h-2.5" />
                  <Icon data-lucide="battery" className="w-2.5 h-2.5" />
                </div>
              </div>
              {/* Content */}
              <div className="p-4 flex-1 flex flex-col justify-between text-center bg-[#F8FAFC]">
                <div className="pt-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#0A3B91] to-[#1295E6] flex items-center justify-center text-white mx-auto shadow-md mb-6">
                    <Icon data-lucide="layers" className="w-8 h-8" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#0A3B91] leading-tight mb-2">Smart Sourcing Pools</h3>
                  <p className="text-slate-500 text-[10px] px-2 leading-relaxed">
                    Unite purchasing needs with developers, unlock wholesale pricing, and lock deposits in certified trade escrows.
                  </p>
                </div>
                {/* Mini slide navigation indicators */}
                <div className="space-y-4">
                  <div className="flex justify-center gap-1.5">
                    <span className="w-3.5 h-1 bg-[#1295E6] rounded-full"></span>
                    <span className="w-1.5 h-1 bg-slate-300 rounded-full"></span>
                    <span className="w-1.5 h-1 bg-slate-300 rounded-full"></span>
                  </div>
                  <button className="w-full bg-[#1295E6] hover:bg-[#0D5FD3] text-white py-3 rounded-2xl font-bold shadow-md transition-all text-xs">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <span className="block text-center mt-3 text-xs font-bold text-slate-500 uppercase tracking-wider">1. Onboarding</span>
          </div>

          {/* SCREEN 2: Home Screen Dashboard */}
          <div className="snap-center shrink-0 w-[280px]">
            {/* iPhone Frame */}
            <div className="relative bg-white border-[10px] border-slate-900 rounded-[44px] h-[550px] w-full shadow-2xl overflow-hidden flex flex-col text-slate-800 text-[11px] font-sans">
              <div className="absolute top-0 inset-x-0 h-4 bg-black flex justify-center items-center z-50">
                <div className="w-16 h-2.5 bg-black rounded-full mt-0.5"></div>
              </div>
              <div className="pt-5 px-4 flex justify-between text-[8px] text-slate-600 font-medium">
                <span>09:41</span>
                <div className="flex gap-1.5 items-center">
                  <Icon data-lucide="wifi" className="w-2.5 h-2.5" />
                  <Icon data-lucide="battery" className="w-2.5 h-2.5" />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between overflow-y-auto bg-[#F8FAFC]">
                <div className="space-y-4">
                  {/* App Header */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 shadow-inner">
                        <Icon data-lucide="user" className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-bold text-[9px] text-[#0A3B91]">Apex Builders</span>
                    </div>
                    <Icon data-lucide="bell" className="w-4 h-4 text-slate-500 hover:text-[#0A3B91] cursor-pointer" />
                  </div>

                  {/* Wallet Card */}
                  <div className="bg-gradient-to-tr from-[#0A3B91] to-[#1295E6] rounded-2xl p-3 shadow-md relative overflow-hidden">
                    <span className="text-white/70 text-[7px] block font-medium uppercase tracking-wider">ESCROW ACTIVE BALANCE</span>
                    <span className="text-base font-extrabold block text-white mt-0.5">â‚¦42,500.00</span>
                    <div className="mt-3 flex justify-between items-center text-[7px] text-white/90">
                      <span className="font-medium">Apex Corp</span>
                      <span className="bg-emerald-500/25 border border-emerald-400/20 text-emerald-300 font-extrabold px-1.5 py-0.5 rounded text-[6px]">Verified KYC</span>
                    </div>
                  </div>

                  {/* Action Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white rounded-xl p-2.5 flex items-center gap-2 border border-slate-100 shadow-sm hover:border-[#1295E6]/40 cursor-pointer transition-all">
                      <Icon data-lucide="search" className="w-4 h-4 text-[#1295E6]" />
                      <span className="font-bold text-[8px] text-[#0A3B91]">Find Pools</span>
                    </div>
                    <div className="bg-white rounded-xl p-2.5 flex items-center gap-2 border border-slate-100 shadow-sm hover:border-[#1295E6]/40 cursor-pointer transition-all">
                      <Icon data-lucide="plus-circle" className="w-4 h-4 text-[#22C55E]" />
                      <span className="font-bold text-[8px] text-[#0A3B91]">New Demand</span>
                    </div>
                  </div>

                  {/* Active Campaign row */}
                  <div className="space-y-2 text-left">
                    <span className="text-[8px] font-bold text-slate-400 block uppercase tracking-wider">YOUR ACTIVE CAMPAIGNS</span>
                    <div className="bg-white rounded-xl p-2.5 border border-slate-100 shadow-sm space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-[9px] text-[#0A3B91]">Cement Pool #CEM-802</span>
                        <span className="text-amber-500 font-bold text-[8px]">79% Filled</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1 overflow-hidden">
                        <div className="bg-[#1295E6] h-full" style={{ width: '79%' }}></div>
                      </div>
                      <span className="text-[7px] text-slate-400 block">Target volume: 5,000 bags</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-around items-center border-t border-slate-200/80 pt-3 text-slate-400 text-[8px] mt-2 bg-white -mx-4 -mb-4 px-4 rounded-b-[34px]">
                  <span className="text-[#1295E6] flex flex-col items-center gap-0.5"><Icon data-lucide="home" className="w-3.5 h-3.5" />Home</span>
                  <span className="flex flex-col items-center gap-0.5"><Icon data-lucide="layers" className="w-3.5 h-3.5" />Pools</span>
                  <span className="flex flex-col items-center gap-0.5"><Icon data-lucide="wallet" className="w-3.5 h-3.5" />Escrow</span>
                  <span className="flex flex-col items-center gap-0.5"><Icon data-lucide="settings" className="w-3.5 h-3.5" />Settings</span>
                </div>
              </div>
            </div>
            <span className="block text-center mt-3 text-xs font-bold text-slate-500 uppercase tracking-wider">2. Home Portal</span>
          </div>

          {/* SCREEN 3: Live Sourcing Pools */}
          <div className="snap-center shrink-0 w-[280px]">
            {/* iPhone Frame */}
            <div className="relative bg-white border-[10px] border-slate-900 rounded-[44px] h-[550px] w-full shadow-2xl overflow-hidden flex flex-col text-slate-800 text-[11px] font-sans">
              <div className="absolute top-0 inset-x-0 h-4 bg-black flex justify-center items-center z-50">
                <div className="w-16 h-2.5 bg-black rounded-full mt-0.5"></div>
              </div>
              
              {/* Blue Header */}
              <div className="bg-[#1295E6] pt-6 pb-4 px-4 relative flex items-center gap-3 shrink-0">
                {/* Status Bar inside Header */}
                <div className="absolute top-1.5 inset-x-4 flex justify-between text-[8px] text-white/90">
                  <span>09:41</span>
                  <div className="flex gap-1.5 items-center">
                    <Icon data-lucide="wifi" className="w-2.5 h-2.5" />
                    <Icon data-lucide="battery" className="w-2.5 h-2.5" />
                  </div>
                </div>
                {/* White circle back button containing blue arrow */}
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#1295E6] cursor-pointer shadow-sm hover:scale-105 transition-all mt-1">
                  <Icon data-lucide="chevron-left" className="w-4 h-4 text-[#1295E6] stroke-[3]" />
                </div>
                <div className="text-left mt-1">
                  <h4 className="font-extrabold text-[12px] text-white leading-none">My Pools</h4>
                  <p className="text-[7.5px] text-white/80 mt-0.5">Manage your pool participations</p>
                </div>
              </div>

              {/* Main Body */}
              <div className="p-3 flex-1 flex flex-col justify-between overflow-y-auto bg-[#F8FAFC]">
                <div className="space-y-3">
                  {/* Tab Bar */}
                  <div className="bg-[#FFFFFF] p-0.5 rounded-xl flex border border-slate-100 text-[8px] shadow-sm">
                    <span className="flex-1 text-center py-1.5 bg-[#0A3B91] rounded-lg font-bold text-white shadow-sm cursor-pointer">My Live Pools</span>
                    <span className="flex-1 text-center py-1.5 text-slate-400 font-semibold cursor-pointer hover:text-slate-600 transition-colors">Joined Pools</span>
                  </div>

                  {/* TATA Tiscon Card */}
                  <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden text-left">
                    {/* Card Blue Header */}
                    <div className="bg-[#0A3B91] p-3 flex justify-between items-start gap-1">
                      <div className="truncate max-w-[130px]">
                        <h4 className="font-extrabold text-[10px] text-white leading-tight truncate">TATA Tiscon 550SD T...</h4>
                        <p className="text-[6.5px] text-white/75 truncate mt-0.5">TATA Tiscon 550SD TMT Steel Bars, TATA Tiscon 550SD TMT Steel Bars, TATA Tiscon 550SD TMT Steel Bars</p>
                      </div>
                      <span className="bg-white text-[#1295E6] px-1.5 py-0.5 rounded-full text-[6px] font-extrabold shrink-0 flex items-center gap-0.5 shadow-sm border border-[#1295E6]/10">
                        <Icon data-lucide="clock" className="w-2 h-2 text-[#1295E6]" /> Ending Soon
                      </span>
                    </div>

                    <div className="p-3 space-y-2.5">
                      {/* Progress */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[7.5px]">
                          <span className="text-slate-400 font-semibold">Progress</span>
                          <span className="text-[#1295E6] font-bold">0%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1 overflow-hidden">
                          <div className="bg-[#1295E6] h-full" style={{ width: '0%' }}></div>
                        </div>
                        <div className="flex justify-between text-[7px] text-slate-400">
                          <span className="font-medium">â‚¦0</span>
                          <span className="font-bold text-[#0A3B91]">â‚¦6,000,000</span>
                        </div>
                      </div>

                      {/* Box MOQ Specs */}
                      <div className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-2 flex justify-between items-center text-[7px]">
                        <div className="flex items-center gap-1.5 text-[#0A3B91] font-bold">
                          <Icon data-lucide="building" className="w-3 h-3 text-[#1295E6]" />
                          <span>MOQ: 1500</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[#0A3B91] font-bold">
                          <Icon data-lucide="users" className="w-3 h-3 text-[#1295E6]" />
                          <span>0 contributors</span>
                        </div>
                      </div>

                      {/* Details list */}
                      <div className="space-y-1 text-[7px] text-slate-500">
                        <div>
                          <span className="font-bold text-slate-600">Location:</span> Unnamed Road, Ch...
                        </div>
                        <div>
                          <span className="font-bold text-slate-600">Supplier:</span> Dangote Cement Plc
                        </div>
                      </div>

                      {/* Bottom Colored Pills */}
                      <div className="grid grid-cols-3 gap-1 text-[7px] text-center pt-1">
                        <div className="bg-[#F1F5F9] rounded-lg py-1.5 border border-slate-100">
                          <span className="text-slate-400 block text-[6px]">Pooled</span>
                          <span className="font-bold text-slate-700">â‚¦0</span>
                        </div>
                        <div className="bg-[#E8F8F0] rounded-lg py-1.5 border border-emerald-100">
                          <span className="text-slate-400 block text-[6px]">Bulk Discount</span>
                          <span className="font-bold text-emerald-600">15%</span>
                        </div>
                        <div className="bg-[#E6F2FF] rounded-lg py-1.5 border border-[#1295E6]/10">
                          <span className="text-slate-400 block text-[6px]">Delivery</span>
                          <span className="font-bold text-[#1295E6]">5-7 days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-around items-center border-t border-slate-200 pt-2.5 text-slate-400 text-[8px] mt-2 bg-white -mx-3 -mb-3 px-3 rounded-b-[34px]">
                  <span className="flex flex-col items-center gap-0.5"><Icon data-lucide="home" className="w-3.5 h-3.5" />Home</span>
                  <span className="text-[#1295E6] flex flex-col items-center gap-0.5"><Icon data-lucide="layers" className="w-3.5 h-3.5" />Pools</span>
                  <span className="flex flex-col items-center gap-0.5"><Icon data-lucide="wallet" className="w-3.5 h-3.5" />Wallet</span>
                  <span className="flex flex-col items-center gap-0.5"><Icon data-lucide="user" className="w-3.5 h-3.5" />Profile</span>
                </div>
              </div>
            </div>
            <span className="block text-center mt-3 text-xs font-bold text-slate-500 uppercase tracking-wider">3. Live Sourcing Pools</span>
          </div>

          {/* SCREEN 4: Pool Summary */}
          <div className="snap-center shrink-0 w-[280px]">
            {/* iPhone Frame */}
            <div className="relative bg-white border-[10px] border-slate-900 rounded-[44px] h-[550px] w-full shadow-2xl overflow-hidden flex flex-col text-slate-800 text-[11px] font-sans">
              <div className="absolute top-0 inset-x-0 h-4 bg-black flex justify-center items-center z-50">
                <div className="w-16 h-2.5 bg-black rounded-full mt-0.5"></div>
              </div>
              
              {/* Blue Header */}
              <div className="bg-[#0A3B91] pt-6 pb-4 px-4 relative flex items-center gap-3 shrink-0">
                <div className="absolute top-1.5 inset-x-4 flex justify-between text-[8px] text-white/90">
                  <span>09:41</span>
                  <div className="flex gap-1.5 items-center">
                    <Icon data-lucide="wifi" className="w-2.5 h-2.5" />
                    <Icon data-lucide="battery" className="w-2.5 h-2.5" />
                  </div>
                </div>
                <Icon data-lucide="chevron-left" className="w-4 h-4 text-white font-extrabold cursor-pointer mt-1" />
                <h4 className="font-extrabold text-[12px] text-white leading-none mt-1">Pool Summary</h4>
              </div>

              {/* Main Body */}
              <div className="p-3 flex-1 flex flex-col justify-between overflow-y-auto bg-[#F8FAFC]">
                <div className="space-y-4">
                  {/* First partially visible card */}
                  <div className="bg-white border border-slate-100 rounded-2xl p-3 space-y-2 opacity-30 pointer-events-none -mt-8">
                    <div className="flex justify-between items-center text-[#1295E6] font-extrabold text-[10px]">
                      <span>â‚¦240000.0</span>
                    </div>
                    <div className="flex justify-between items-center border-t border-slate-100 pt-2 text-[7.5px] text-slate-400">
                      <span>Adjust Quantity</span>
                      <span>600</span>
                    </div>
                  </div>

                  {/* Material card with Ambuja Cement icon (drawn in HTML) */}
                  <div className="bg-white border border-slate-100 rounded-2xl p-3 shadow-sm space-y-2 text-left relative">
                    <div className="flex gap-3 items-center">
                      {/* Ambuja Cement Bag representation */}
                      <div className="w-11 h-15 bg-[#FFBF00] rounded-lg flex flex-col justify-between p-1.5 text-center shadow-md border border-amber-400 shrink-0 relative overflow-hidden">
                        <div className="absolute -right-2 -top-2 w-5 h-5 bg-red-600 rotate-45 flex items-center justify-center">
                          <span className="text-[3.5px] font-bold text-white uppercase tracking-tighter">Ambuja</span>
                        </div>
                        <span className="text-[5px] font-bold text-amber-950 block mt-1 tracking-tighter leading-none">Ambuja</span>
                        <div className="w-full bg-[#E65100] py-0.5 rounded text-[5px] font-extrabold text-white leading-none tracking-tighter text-center">Cement</div>
                        <span className="text-[4px] text-amber-900 font-bold block leading-none">OPC 53</span>
                      </div>
                      <div className="truncate flex-1 space-y-1 relative">
                        <span className="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[6px] font-bold uppercase tracking-wider">Standard</span>
                        <h4 className="font-extrabold text-[10px] text-slate-800">Material</h4>
                        <p className="text-[7.5px] text-slate-400">Qty: 600 | â‚¦400.0.0/BAG</p>
                        <span className="text-[10px] font-extrabold text-[#1295E6] block">â‚¦240000.0</span>
                      </div>
                      {/* Red Trash bin */}
                      <Icon data-lucide="trash-2" className="w-3.5 h-3.5 text-red-500 hover:text-red-700 cursor-pointer absolute right-3 top-3" />
                    </div>

                    {/* Quantity adjust selector */}
                    <div className="flex justify-between items-center border-t border-slate-100 pt-2 text-[7.5px] text-slate-400">
                      <span>Adjust Quantity</span>
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center font-extrabold text-slate-600 text-[8px] cursor-pointer hover:bg-slate-200 transition-all">-</span>
                        <span className="font-extrabold text-slate-800 text-[8.5px]">600</span>
                        <span className="w-4 h-4 rounded-full bg-[#0A3B91] flex items-center justify-center font-extrabold text-white text-[8px] cursor-pointer hover:bg-[#1295E6] transition-all">+</span>
                      </div>
                    </div>
                  </div>

                  {/* Delivery location */}
                  <div className="space-y-1 text-left">
                    <span className="text-slate-400 font-bold text-[7.5px] block uppercase tracking-wider">Delivery</span>
                    <div className="bg-white border border-slate-100 rounded-2xl p-2.5 flex justify-between items-center cursor-pointer shadow-sm hover:border-[#1295E6]/40 transition-all">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-xl bg-[#EAF4FF] flex items-center justify-center text-[#1295E6] shrink-0">
                          <Icon data-lucide="map-pin" className="w-4 h-4 text-[#1295E6]" />
                        </div>
                        <div className="truncate max-w-[150px]">
                          <span className="font-bold text-[8.5px] block text-slate-800">Location</span>
                          <span className="text-[7.5px] text-slate-400 truncate block">Unnamed Road, Chandrapur, Maharashtra</span>
                        </div>
                      </div>
                      <Icon data-lucide="chevron-right" className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </div>
                  </div>

                  {/* Pool Visibility */}
                  <div className="space-y-1 text-left">
                    <span className="text-slate-400 font-bold text-[7.5px] block uppercase tracking-wider">Pool Visibility</span>
                    <div className="bg-white border border-slate-100 rounded-2xl p-2.5 flex justify-between items-center cursor-pointer shadow-sm hover:border-[#1295E6]/40 transition-all">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-xl bg-[#EAF4FF] flex items-center justify-center text-[#1295E6] shrink-0">
                          <Icon data-lucide="users" className="w-4 h-4 text-[#1295E6]" />
                        </div>
                        <div>
                          <span className="font-bold text-[8.5px] block text-slate-800">Public</span>
                          <span className="text-[7.5px] text-slate-400">Anyone Can See</span>
                        </div>
                      </div>
                      <Icon data-lucide="chevron-right" className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </div>
                  </div>

                  {/* Price Summary */}
                  <div className="space-y-1 text-left">
                    <span className="text-slate-400 font-bold text-[7.5px] block uppercase tracking-wider">Price Summary</span>
                    <div className="bg-white border border-slate-100 rounded-2xl p-2.5 flex justify-between items-center cursor-pointer shadow-sm hover:border-[#1295E6]/40 transition-all">
                      <span className="font-bold text-[8.5px] text-slate-800">Price Details ( 9 Variants )</span>
                      <Icon data-lucide="chevron-right" className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </div>
                  </div>
                </div>

                {/* Bottom solid payment button */}
                <button className="w-full bg-[#1295E6] hover:bg-[#0D5FD3] text-white py-3 rounded-2xl font-extrabold shadow-glow text-[9px] flex items-center justify-between px-4 mt-4 transition-all">
                  <div className="flex items-center gap-1.5">
                    <Icon data-lucide="lock" className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                    <span>Proceeds to Payment</span>
                  </div>
                  <Icon data-lucide="arrow-right" className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                </button>
              </div>
            </div>
            <span className="block text-center mt-3 text-xs font-bold text-slate-500 uppercase tracking-wider">4. Pool Summary</span>
          </div>

          {/* SCREEN 5: Escrow Confirmation */}
          <div className="snap-center shrink-0 w-[280px]">
            {/* iPhone Frame */}
            <div className="relative bg-white border-[10px] border-slate-900 rounded-[44px] h-[550px] w-full shadow-2xl overflow-hidden flex flex-col text-slate-800 text-[11px] font-sans">
              <div className="absolute top-0 inset-x-0 h-4 bg-black flex justify-center items-center z-50">
                <div className="w-16 h-2.5 bg-black rounded-full mt-0.5"></div>
              </div>
              <div className="pt-5 px-4 flex justify-between text-[8px] text-slate-600 font-medium z-20">
                <span>09:41</span>
                <div className="flex gap-1.5 items-center">
                  <Icon data-lucide="wifi" className="w-2.5 h-2.5" />
                  <Icon data-lucide="battery" className="w-2.5 h-2.5" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 flex-1 flex flex-col justify-between overflow-y-auto bg-[#F8FAFC] pt-6 text-center relative">
                <div className="space-y-4">
                  {/* Checkmark Animation Header with Stars */}
                  <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                    {/* Ring animations */}
                    <div className="absolute inset-0 bg-[#1295E6]/5 rounded-full border border-slate-200/50"></div>
                    <div className="absolute inset-2.5 bg-[#1295E6]/5 rounded-full border border-slate-200/80 animate-pulse"></div>
                    <div className="absolute inset-5 bg-[#1295E6]/5 rounded-full border border-slate-200"></div>
                    {/* Small Stars decorations in absolute corners */}
                    <Icon data-lucide="star" className="w-2.5 h-2.5 text-slate-400 fill-slate-400 absolute top-2 right-4" />
                    <Icon data-lucide="star" className="w-2.5 h-2.5 text-slate-400 fill-slate-400 absolute bottom-3 left-2" />
                    <Icon data-lucide="star" className="w-2.5 h-2.5 text-slate-400 fill-slate-400 absolute bottom-6 right-2" />
                    <Icon data-lucide="star" className="w-2.5 h-2.5 text-slate-400 fill-slate-400 absolute top-6 left-4" />
                    
                    <div className="w-13 h-13 rounded-full bg-[#1295E6] flex items-center justify-center text-white shadow-glow relative z-10">
                      <Icon data-lucide="check" className="w-6 h-6 text-white stroke-[3]" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-base font-extrabold text-[#0D2C54]">You've Joined!</h3>
                    <p className="text-[8px] text-slate-500 px-2 leading-relaxed">
                      Your <span className="text-[#0D2C54] font-semibold">â‚¦290,000</span> is securely held in escrow. We'll notify you when the target is reached
                    </p>
                  </div>

                  {/* Joined Pools list */}
                  <div className="space-y-2.5 text-left pt-1">
                    <div className="bg-white border border-slate-100 rounded-2xl p-3 space-y-2 shadow-sm">
                      <span className="font-extrabold text-[9px] text-[#0A3B91] block">Nigeria Cement</span>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-[#1295E6] h-full rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <div className="flex justify-between text-[7.5px] items-center">
                        <span className="font-bold text-[#1295E6]">65% filled</span>
                        <span className="text-slate-400 font-medium">770 / 900 Bags</span>
                      </div>
                    </div>

                    <div className="bg-white border border-slate-100 rounded-2xl p-3 space-y-2 shadow-sm">
                      <span className="font-extrabold text-[9px] text-[#0A3B91] block">Sugna TMT Fe-550</span>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-[#1295E6] h-full rounded-full" style={{ width: '20%' }}></div>
                      </div>
                      <div className="flex justify-between text-[7.5px] items-center">
                        <span className="font-bold text-[#1295E6]">20% filled</span>
                        <span className="text-slate-400 font-medium">770 / 600 Tons</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="space-y-2 mt-4">
                  <button className="w-full bg-[#1295E6] hover:bg-[#0D5FD3] text-white py-3 rounded-2xl font-bold shadow-md transition-all text-xs">
                    Back to Home
                  </button>
                  <button className="w-full bg-white border border-[#1295E6] hover:bg-slate-50 text-[#1295E6] py-3 rounded-2xl font-bold transition-all text-xs">
                    Invite Friends
                  </button>
                </div>
              </div>
            </div>
            <span className="block text-center mt-3 text-xs font-bold text-slate-500 uppercase tracking-wider">5. Escrow Confirmation</span>
          </div>

          {/* SCREEN 6: Personal Profile */}
          <div className="snap-center shrink-0 w-[280px]">
            {/* iPhone Frame */}
            <div className="relative bg-white border-[10px] border-slate-900 rounded-[44px] h-[550px] w-full shadow-2xl overflow-hidden flex flex-col text-slate-800 text-[11px] font-sans">
              <div className="absolute top-0 inset-x-0 h-4 bg-black flex justify-center items-center z-50">
                <div className="w-16 h-2.5 bg-black rounded-full mt-0.5"></div>
              </div>
              
              {/* Blue Header */}
              <div className="bg-[#1295E6] pt-6 pb-4 px-4 relative flex items-center gap-3 shrink-0">
                <div className="absolute top-1.5 inset-x-4 flex justify-between text-[8px] text-white/90">
                  <span>09:41</span>
                  <div className="flex gap-1.5 items-center">
                    <Icon data-lucide="wifi" className="w-2.5 h-2.5" />
                    <Icon data-lucide="battery" className="w-2.5 h-2.5" />
                  </div>
                </div>
                <h4 className="font-extrabold text-[12px] text-white leading-none mt-1">Profile</h4>
              </div>

              {/* Main Body */}
              <div className="p-3 flex-1 flex flex-col justify-between overflow-y-auto bg-[#F8FAFC]">
                <div className="space-y-4">
                  {/* Wallet & Pools side-by-side cards */}
                  <div className="grid grid-cols-2 gap-2 text-left">
                    <div className="bg-white border border-slate-100 rounded-2xl p-2.5 flex items-center gap-2 shadow-sm">
                      <div className="w-7 h-7 rounded-lg bg-[#EAF4FF] flex items-center justify-center text-[#0A3B91] shrink-0">
                        <Icon data-lucide="wallet" className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <span className="text-[7px] text-slate-400 font-bold block uppercase tracking-wider">My Wallet</span>
                        <span className="font-extrabold text-[#0A3B91] text-[9.5px]">â‚¦80,000</span>
                      </div>
                    </div>

                    <div className="bg-white border border-slate-100 rounded-2xl p-2.5 flex items-center gap-2 shadow-sm">
                      <div className="w-7 h-7 rounded-lg bg-[#EAF4FF] flex items-center justify-center text-[#0A3B91] shrink-0">
                        <Icon data-lucide="box" className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <span className="text-[7px] text-slate-400 font-bold block uppercase tracking-wider">My Pool</span>
                        <span className="font-extrabold text-[#0A3B91] text-[9.5px]">03</span>
                      </div>
                    </div>
                  </div>

                  {/* Account Info list */}
                  <div className="space-y-1.5 text-left">
                    <span className="text-slate-400 font-bold text-[7.5px] block uppercase tracking-wider">Account Info</span>
                    
                    <div className="bg-white border border-slate-100 rounded-2xl p-2.5 flex justify-between items-center cursor-pointer shadow-sm hover:border-[#1295E6]/40 transition-all">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-xl bg-[#EAF4FF] flex items-center justify-center text-[#1295E6] shrink-0">
                          <Icon data-lucide="plus-square" className="w-4 h-4 text-[#1295E6]" />
                        </div>
                        <div>
                          <span className="font-bold text-[8.5px] block text-slate-800">Join Pool</span>
                          <span className="text-[7.5px] text-slate-400 block mt-0.5">Manage your join Pool</span>
                        </div>
                      </div>
                      <Icon data-lucide="chevron-right" className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </div>

                    <div className="bg-white border border-slate-100 rounded-2xl p-2.5 flex justify-between items-center cursor-pointer shadow-sm hover:border-[#1295E6]/40 transition-all">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-xl bg-[#EAF4FF] flex items-center justify-center text-[#1295E6] shrink-0">
                          <Icon data-lucide="map-pin" className="w-4 h-4 text-[#1295E6]" />
                        </div>
                        <div>
                          <span className="font-bold text-[8.5px] block text-slate-800">Address</span>
                          <span className="text-[7.5px] text-slate-400 block mt-0.5">Make changes to your address</span>
                        </div>
                      </div>
                      <Icon data-lucide="chevron-right" className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </div>
                  </div>

                  {/* General list */}
                  <div className="space-y-1.5 text-left">
                    <span className="text-slate-400 font-bold text-[7.5px] block uppercase tracking-wider">General</span>
                    
                    <div className="bg-white border border-slate-100 rounded-2xl p-2.5 flex justify-between items-center cursor-pointer shadow-sm hover:border-[#1295E6]/40 transition-all">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                          <Icon data-lucide="help-circle" className="w-4 h-4 text-slate-500" />
                        </div>
                        <div>
                          <span className="font-bold text-[8.5px] block text-slate-800">About App</span>
                          <span className="text-[7.5px] text-slate-400 block mt-0.5">Read about us details & services</span>
                        </div>
                      </div>
                      <Icon data-lucide="chevron-right" className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </div>

                    <div className="bg-white border border-slate-100 rounded-2xl p-2.5 flex justify-between items-center cursor-pointer shadow-sm hover:border-[#1295E6]/40 transition-all">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                          <Icon data-lucide="file-text" className="w-4 h-4 text-slate-500" />
                        </div>
                        <div>
                          <span className="font-bold text-[8.5px] block text-slate-800">Terms & Conditions</span>
                          <span className="text-[7.5px] text-slate-400 block mt-0.5">Read our terms of service</span>
                        </div>
                      </div>
                      <Icon data-lucide="chevron-right" className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-around items-center border-t border-slate-200 pt-2.5 text-slate-400 text-[8px] mt-2 bg-white -mx-3 -mb-3 px-3 rounded-b-[34px]">
                  <span className="flex flex-col items-center gap-0.5"><Icon data-lucide="home" className="w-3.5 h-3.5" />Home</span>
                  <span className="flex flex-col items-center gap-0.5"><Icon data-lucide="layers" className="w-3.5 h-3.5" />Pools</span>
                  <span className="flex flex-col items-center gap-0.5"><Icon data-lucide="wallet" className="w-3.5 h-3.5" />Wallet</span>
                  <span className="text-[#1295E6] flex flex-col items-center gap-0.5"><Icon data-lucide="user" className="w-3.5 h-3.5" />Profile</span>
                </div>
              </div>
            </div>
            <span className="block text-center mt-3 text-xs font-bold text-slate-500 uppercase tracking-wider">6. Personal Profile</span>
          </div>

          {/* SCREEN 7: Transaction Details */}
          <div className="snap-center shrink-0 w-[280px]">
            {/* iPhone Frame */}
            <div className="relative bg-white border-[10px] border-slate-900 rounded-[44px] h-[550px] w-full shadow-2xl overflow-hidden flex flex-col text-slate-800 text-[11px] font-sans">
              <div className="absolute top-0 inset-x-0 h-4 bg-black flex justify-center items-center z-50">
                <div className="w-16 h-2.5 bg-black rounded-full mt-0.5"></div>
              </div>
              
              {/* Blue Header */}
              <div className="bg-[#1295E6] pt-6 pb-4 px-4 relative flex items-center gap-3 shrink-0 opacity-40">
                <div className="absolute top-1.5 inset-x-4 flex justify-between text-[8px] text-white/90">
                  <span>09:41</span>
                  <div className="flex gap-1.5 items-center">
                    <Icon data-lucide="wifi" className="w-2.5 h-2.5" />
                    <Icon data-lucide="battery" className="w-2.5 h-2.5" />
                  </div>
                </div>
                {/* White circle back button */}
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#1295E6] mt-1">
                  <Icon data-lucide="chevron-left" className="w-4 h-4 text-[#1295E6] stroke-[3]" />
                </div>
                <h4 className="font-extrabold text-[12px] text-white leading-none mt-1">Wallet</h4>
              </div>

              {/* Main Body (under content blurred/dimmed) */}
              <div className="p-3 flex-1 flex flex-col justify-between bg-[#F8FAFC] relative overflow-hidden">
                {/* Wallet Bal underlay content */}
                <div className="space-y-4 opacity-30 pointer-events-none text-left">
                  <div className="bg-white border border-slate-100 rounded-2xl p-3 flex justify-between items-center shadow-sm">
                    <div>
                      <span className="text-[7.5px] text-slate-400 font-bold block uppercase tracking-wider">Wallet Bal</span>
                      <span className="font-extrabold text-[#0D2C54] text-xs">â‚¦800</span>
                    </div>
                    <span className="bg-[#1295E6] text-white text-[8px] px-2.5 py-1 rounded-lg font-bold flex items-center gap-0.5 shadow-sm">+ Add</span>
                  </div>

                  {/* Search bar */}
                  <div className="flex gap-1.5 items-center bg-white border border-slate-100 rounded-xl px-2 py-1.5 shadow-inner">
                    <Icon data-lucide="search" className="w-3 h-3 text-slate-400" />
                    <span className="text-[7.5px] text-slate-300">Search</span>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[7.5px] font-bold text-slate-400 block uppercase tracking-wider">Transactions</span>
                    <div className="h-10 bg-white border border-slate-50 rounded-xl"></div>
                  </div>
                </div>

                {/* Transaction Overlay drawer sheet slide-up */}
                <div className="absolute bottom-0 inset-x-0 bg-white border-t border-slate-200 rounded-t-[32px] p-3.5 space-y-3.5 z-30 text-left shadow-2xl">
                  {/* Header row with Close button */}
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <div>
                      <h4 className="text-[10px] font-extrabold text-[#0D2C54]">Transaction</h4>
                      <p className="text-[6.5px] text-slate-400 mt-0.5">Your Transaction Details Shown</p>
                    </div>
                    {/* Close button in white circle */}
                    <span className="w-5 h-5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 cursor-pointer flex items-center justify-center text-[7px] font-bold transition-all shadow-sm">âœ•</span>
                  </div>

                  {/* Wallet Topup card */}
                  <div className="bg-white border border-slate-100 rounded-2xl p-2.5 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-[#F0F7FF] rounded-xl flex items-center justify-center text-[#1295E6] shrink-0 border border-[#1295E6]/10">
                        <Icon data-lucide="wallet" className="w-4 h-4 text-[#1295E6]" />
                      </div>
                      <div>
                        <span className="font-extrabold text-[9px] text-[#0A3B91] block">Wallet Topup</span>
                        <span className="text-[7px] text-slate-400 block mt-0.5">Topup</span>
                      </div>
                    </div>
                    <span className="bg-[#10B981] text-white px-2.5 py-0.5 rounded-full text-[6.5px] font-extrabold uppercase shadow-sm">Succeed</span>
                  </div>

                  {/* Transaction metrics grid */}
                  <div className="grid grid-cols-2 gap-2 text-[7.5px] text-slate-400 bg-white p-2.5 rounded-2xl border border-slate-100 shadow-inner">
                    <div className="bg-[#F8FAFC] border border-slate-100/50 rounded-xl p-2">
                      <span className="text-slate-400 font-bold block uppercase text-[6px] tracking-wider">Amount</span>
                      <span className="font-extrabold text-[#10B981] block mt-0.5 text-[8.5px]">+â‚¦800.00</span>
                    </div>
                    <div className="bg-[#F8FAFC] border border-slate-100/50 rounded-xl p-2">
                      <span className="text-slate-400 font-bold block uppercase text-[6px] tracking-wider">Transaction Date</span>
                      <span className="font-bold text-slate-700 block mt-0.5 text-[7px]">27 May 2026, 11:16 AM</span>
                    </div>
                    <div className="bg-[#F8FAFC] border border-slate-100/50 rounded-xl p-2">
                      <span className="text-slate-400 font-bold block uppercase text-[6px] tracking-wider">Balance Before</span>
                      <span className="font-bold text-slate-700 block mt-0.5">â‚¦0.00</span>
                    </div>
                    <div className="bg-[#F8FAFC] border border-slate-100/50 rounded-xl p-2">
                      <span className="text-slate-400 font-bold block uppercase text-[6px] tracking-wider">Balance After</span>
                      <span className="font-bold text-slate-700 block mt-0.5">â‚¦800.00</span>
                    </div>
                    <div className="col-span-2 bg-[#F8FAFC] border border-slate-100/50 rounded-xl p-2">
                      <span className="text-slate-400 font-bold block uppercase text-[6px] tracking-wider">Transaction No</span>
                      <div className="flex justify-between items-center text-slate-700 mt-0.5">
                        <span className="font-mono text-[7px] truncate max-w-[155px]">b83e0a51-8995-4bfc-bd4e-5e409790ff47</span>
                        <Icon data-lucide="copy" className="w-3.5 h-3.5 text-[#1295E6] hover:text-[#0A3B91] cursor-pointer transition-colors shrink-0" />
                      </div>
                    </div>
                  </div>

                  {/* Secure footer */}
                  <div className="flex items-center gap-1.5 text-[6.5px] text-slate-400 justify-center">
                    <Icon data-lucide="shield" className="w-3 h-3 text-[#1295E6]" />
                    <span>Your transaction is secured with end-to-end encryption</span>
                  </div>
                </div>
              </div>
            </div>
            <span className="block text-center mt-3 text-xs font-bold text-slate-500 uppercase tracking-wider">7. Transaction Details</span>
          </div>
        </div>

    {/* SECTION 9 â€” ADMIN & SUPPLIER SYSTEM */}
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-[#1295E6] uppercase tracking-wider font-semibold">Web Console Control Towers</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-darkSlate">Admin & Supplier Ecosystems</h2>
          <p className="text-slate-500 text-sm">
            BuildersPool integrates multi-channel operations. Toggle below to inspect the web management systems for Platform Admin and Materials Manufacturers.
          </p>

          {/* Interactive Switch Tab Buttons */}
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 mt-4">
            <button data-action="eco-admin" id="eco-tab-admin" className="px-6 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 bg-white text-[#0A3B91] shadow-sm">
              <span className="flex items-center gap-1.5">
                <Icon data-lucide="sliders" className="w-4 h-4" /> Platform Admin Workspace
              </span>
            </button>
            <button data-action="eco-supplier" id="eco-tab-supplier" className="px-6 py-2.5 rounded-xl font-bold text-xs text-slate-500 hover:text-[#0A3B91] transition-all duration-300">
              <span className="flex items-center gap-1.5">
                <Icon data-lucide="store" className="w-4 h-4" /> Materials Supplier Portal
              </span>
            </button>
          </div>
        </div>

        {/* Tab Panels (Coded Dashboard mockups) */}
        <div className="relative min-h-[460px] w-full">
          
          {/* PORTAL 1: Platform Admin Dashboard Layout */}
          <div id="eco-panel-admin" className="w-full bg-[#0F172A] rounded-[32px] border border-slate-800 p-6 sm:p-8 shadow-2xl text-slate-300 transition-all duration-500 space-y-6">
            <div className="flex flex-wrap justify-between items-center gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-[#1295E6] font-bold text-[10px] uppercase tracking-widest block">ADMIN OPERATING CONSOLE</span>
                <h3 className="text-lg font-extrabold text-white">BuildersPool Platform Control Tower</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs text-slate-400 font-mono">System Integrity Secured</span>
              </div>
            </div>

            {/* Dashboard Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                <span className="text-[9px] font-bold text-slate-400 block uppercase">TOTAL LOCKED ESCROW</span>
                <span className="text-xl font-extrabold text-[#1295E6] block mt-1">$1.45M</span>
                <span className="text-[9px] text-emerald-400 block mt-1">â–² 14.5% this month</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                <span className="text-[9px] font-bold text-slate-400 block uppercase">ACTIVE SOURCING POOLS</span>
                <span className="text-xl font-extrabold text-white block mt-1">42 Campaigns</span>
                <span className="text-[9px] text-[#1295E6] block mt-1">3,400 Tons of aggregates</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                <span className="text-[9px] font-bold text-slate-400 block uppercase">DISPUTE SUCCESS RATE</span>
                <span className="text-xl font-extrabold text-emerald-400 block mt-1">98.2%</span>
                <span className="text-[9px] text-slate-400 block mt-1">Average resolution: 42 hrs</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                <span className="text-[9px] font-bold text-slate-400 block uppercase">SYSTEM SAVINGS GENERATED</span>
                <span className="text-xl font-extrabold text-[#F97316] block mt-1">$384K</span>
                <span className="text-[9px] text-emerald-400 block mt-1">â–² $45k this week</span>
              </div>
            </div>

            {/* Table Widget (Audits) */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 overflow-x-auto">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Live Platform Sourcing Audits</h4>
                <button className="bg-[#0A3B91] hover:bg-[#1295E6] text-white text-[9px] font-bold px-3 py-1.5 rounded-lg transition-all">Export Log</button>
              </div>
              <table className="w-full text-left text-[11px] font-mono">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-500 font-sans">
                    <th className="pb-2">TXID</th>
                    <th className="pb-2">CAMPAIGN</th>
                    <th className="pb-2">COMMERCIAL VOLUME</th>
                    <th className="pb-2">ESCROW VALUE</th>
                    <th className="pb-2">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="py-2.5 text-[#1295E6]">#TX-904</td>
                    <td>OPC Cement Pool #802</td>
                    <td>5,000 Bags</td>
                    <td className="text-emerald-400 font-bold">$36,000.00</td>
                    <td><span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full text-[8px] font-semibold font-sans">Escrow Locked</span></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-[#1295E6]">#TX-903</td>
                    <td>TMT Steel Pool #304</td>
                    <td>250 Tons</td>
                    <td className="text-emerald-400 font-bold">$147,500.00</td>
                    <td><span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full text-[8px] font-semibold font-sans">Escrow Locked</span></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-[#1295E6]">#TX-902</td>
                    <td>Concrete Pool #401</td>
                    <td>1,200 Cubic M</td>
                    <td className="text-rose-400 font-bold">$84,000.00</td>
                    <td><span className="bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded-full text-[8px] font-semibold font-sans">Dispute Review</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* PORTAL 2: Materials Supplier Dashboard Layout (Hidden by default) */}
          <div id="eco-panel-supplier" className="w-full bg-[#0F172A] rounded-[32px] border border-slate-800 p-6 sm:p-8 shadow-2xl text-slate-300 transition-all duration-500 space-y-6 hidden">
            <div className="flex flex-wrap justify-between items-center gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-emerald-400 font-bold text-[10px] uppercase tracking-widest block">SUPPLIER MANAGEMENT SYSTEM</span>
                <h3 className="text-lg font-extrabold text-white">Lafarge Holcim â€” Manufacturing Hub</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-xs text-slate-400 font-mono">Bidding API Operational</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                <span className="text-[9px] font-bold text-slate-400 block uppercase">PLEDGED CONTRACT VALUE</span>
                <span className="text-xl font-extrabold text-emerald-400 block mt-1">$485,900.00</span>
                <span className="text-[9px] text-[#1295E6] block mt-1">Fully secured in Escrow</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                <span className="text-[9px] font-bold text-slate-400 block uppercase">COMPLETED DELIVERIES</span>
                <span className="text-xl font-extrabold text-white block mt-1">1,820 Tons</span>
                <span className="text-[9px] text-emerald-400 block mt-1">100% Client sign-offs</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                <span className="text-[9px] font-bold text-slate-400 block uppercase">MANUFACTURING LOADS</span>
                <span className="text-xl font-extrabold text-[#F97316] block mt-1">3 Pools Locked</span>
                <span className="text-[9px] text-slate-400 block mt-1">Cement Pool #CEM-802 queue</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                <span className="text-[9px] font-bold text-slate-400 block uppercase">AVG SETTLEMENT TIME</span>
                <span className="text-xl font-extrabold text-white block mt-1">1.8 Days</span>
                <span className="text-[9px] text-[#1295E6] block mt-1">Fast automated payout release</span>
              </div>
            </div>

            {/* Manufacturing Dispatch Tracker */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Live Manufacturing & Logistics Dispatch Queue</h4>
              <div className="space-y-3">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex flex-wrap justify-between items-center gap-3">
                  <div>
                    <span className="font-bold text-white text-xs block">Premium OPC Cement Pool (CEM-802)</span>
                    <span className="text-[9px] text-slate-500">Destination: Sector 4 Jobsite Â· Quantity: 5,000 Bags</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">Escrow Verified ($36,000)</span>
                    <button className="bg-[#1295E6] hover:bg-[#0D5FD3] text-white text-[9px] font-bold px-3 py-1.5 rounded-lg transition-all">Schedule Dispatch</button>
                  </div>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex flex-wrap justify-between items-center gap-3">
                  <div>
                    <span className="font-bold text-white text-xs block">Fine Aggregate River Sand (SND-104)</span>
                    <span className="text-[9px] text-slate-500">Destination: Bridge Foundation Site Â· Quantity: 120 Trucks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">Escrow Verified ($14,500)</span>
                    <button className="bg-emerald-500 text-white text-[9px] font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1"><Icon data-lucide="truck" className="w-3 h-3" /> Dispatch Out</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    {/* SECTION 10 â€” OUR CONTRIBUTION */}
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Split structure Left (Heading) Right (Checklist) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-[#0D5FD3] uppercase tracking-wider font-semibold">Project Delivery</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-darkSlate">What We Delivered</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our multidisciplinary engineering and UX design units designed, mapped, coded, and audited the complete BuildersPool ecosystem from raw specification documents.
            </p>
            <div className="bg-[#EAF4FF] border border-[#1295E6]/20 p-4 rounded-3xl flex gap-3">
              <Icon data-lucide="check-circle" className="w-6 h-6 text-[#1295E6] mt-0.5 shrink-0" />
              <p className="text-slate-600 text-xs leading-relaxed">
                We delivered a high-availability software framework connecting regional logistics channels, banking escrow vaults, and supplier inventories.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-[32px] border border-slate-100 p-6 sm:p-8 shadow-premium">
            <h3 className="text-lg font-bold text-brand-darkSlate mb-6 border-b border-slate-100 pb-4">Architectural Accomplishments</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Point 1 */}
              <div className="flex gap-3">
                <Icon data-lucide="shield-check" className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-brand-darkSlate">Scalable Sourcing Pools</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Coordinated buyer grouping structure.</p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-3">
                <Icon data-lucide="shield-check" className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-brand-darkSlate">Escrow-Secure Wallets</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Integrated multi-sig locks architecture.</p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-3">
                <Icon data-lucide="shield-check" className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-brand-darkSlate">Direct Supplier Integrations</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Automated dispatch queues for manufacturers.</p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="flex gap-3">
                <Icon data-lucide="shield-check" className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-brand-darkSlate">Automated Escrow Rules</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Dissolution limits and instant refunds.</p>
                </div>
              </div>

              {/* Point 5 */}
              <div className="flex gap-3">
                <Icon data-lucide="shield-check" className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-brand-darkSlate">Dispute Resolution Vaults</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Fair trade escrow holding mechanisms.</p>
                </div>
              </div>

              {/* Point 6 */}
              <div className="flex gap-3">
                <Icon data-lucide="shield-check" className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-brand-darkSlate">Mobile-First UI Design</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Premium visual flows and transitions.</p>
                </div>
              </div>

              {/* Point 7 */}
              <div className="flex gap-3">
                <Icon data-lucide="shield-check" className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-brand-darkSlate">Admin Oversight Web Suite</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Logistics dashboards and complete logs.</p>
                </div>
              </div>

              {/* Point 8 */}
              <div className="flex gap-3">
                <Icon data-lucide="shield-check" className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-brand-darkSlate">Third-Party Logistics Sync</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Direct APIs mapping vehicle routes.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    {/* SECTION 11 â€” SUCCESS METRICS */}
    <section id="metrics" className="py-24 bg-[#0A3B91] text-white relative overflow-hidden">
      {/* Blue ambient mesh overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0D5FD3] via-[#0A3B91] to-[#0A3B91] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-bold text-[#1295E6] uppercase tracking-wider">Project Impact</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Commercial Success Metrics</h2>
          <p className="text-slate-300 text-sm">
            BuildersPool platform statistics reflect outstanding improvements in logistics efficiency, escrow transactions safety, and business cost savings.
          </p>
        </div>

        {/* 5 Premium Metrics Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6" id="counters-section" data-aos-delay="200">
          
          {/* Stat 1 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 text-center space-y-2">
            <span className="text-[#1295E6] block"><Icon data-lucide="clock" className="w-6 h-6 mx-auto" /></span>
            <span className="block text-3xl font-extrabold" id="counter-procure">0</span>
            <p className="text-slate-300 text-[10px] uppercase font-semibold leading-relaxed tracking-wider">Procurement Speed</p>
          </div>

          {/* Stat 2 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 text-center space-y-2">
            <span className="text-[#22C55E] block"><Icon data-lucide="shield-check" className="w-6 h-6 mx-auto" /></span>
            <span className="block text-3xl font-extrabold">$<span id="counter-escrow">0</span>K</span>
            <p className="text-slate-300 text-[10px] uppercase font-semibold leading-relaxed tracking-wider">Escrow Transactions</p>
          </div>

          {/* Stat 3 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 text-center space-y-2">
            <span className="text-emerald-400 block"><Icon data-lucide="trending-up" className="w-6 h-6 mx-auto" /></span>
            <span className="block text-3xl font-extrabold"><span id="counter-savings">0</span>%</span>
            <p className="text-slate-300 text-[10px] uppercase font-semibold leading-relaxed tracking-wider">Average Savings</p>
          </div>

          {/* Stat 4 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 text-center space-y-2">
            <span className="text-rose-400 block"><Icon data-lucide="slash" className="w-6 h-6 mx-auto" /></span>
            <span className="block text-3xl font-extrabold">-<span id="counter-disputes">0</span>%</span>
            <p className="text-slate-300 text-[10px] uppercase font-semibold leading-relaxed tracking-wider">Fewer Disputes</p>
          </div>

          {/* Stat 5 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 text-center col-span-2 lg:col-span-1 space-y-2">
            <span className="text-[#1295E6] block"><Icon data-lucide="check" className="w-6 h-6 mx-auto" /></span>
            <span className="block text-3xl font-extrabold" id="counter-ops">0</span>
            <p className="text-slate-300 text-[10px] uppercase font-semibold leading-relaxed tracking-wider">Active Regional Pools</p>
          </div>

        </div>
      </div>
    </section>


    {/* SECTION 12 â€” TECHNOLOGY STACK */}
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-[#1295E6] uppercase tracking-wider font-semibold">Technical Architecture</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-darkSlate">The Technology Stack</h2>
          <p className="text-slate-500 text-sm">
            BuildersPool operates over enterprise-grade components, ensuring maximum database performance and transaction execution speed.
          </p>
        </div>

        {/* Tech Pills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          
          {/* React */}
          <div className="bg-slate-50 hover:bg-slate-900 border border-slate-100 rounded-3xl p-6 text-center transition-all duration-300 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all">
              <Icon data-lucide="code" className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm block text-brand-darkSlate group-hover:text-white transition-colors">React</span>
            <span className="text-[9px] text-slate-400 block mt-0.5">Dynamic Frontend Framework</span>
          </div>

          {/* Next.js */}
          <div className="bg-slate-50 hover:bg-slate-900 border border-slate-100 rounded-3xl p-6 text-center transition-all duration-300 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all">
              <Icon data-lucide="layers" className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm block text-brand-darkSlate group-hover:text-white transition-colors">Next.js</span>
            <span className="text-[9px] text-slate-400 block mt-0.5">SaaS Server-Side Rendering</span>
          </div>

          {/* Tailwind CSS */}
          <div className="bg-slate-50 hover:bg-slate-900 border border-slate-100 rounded-3xl p-6 text-center transition-all duration-300 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all">
              <Icon data-lucide="layout" className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm block text-brand-darkSlate group-hover:text-white transition-colors">Tailwind CSS</span>
            <span className="text-[9px] text-slate-400 block mt-0.5">Utility UI System</span>
          </div>

          {/* Node.js */}
          <div className="bg-slate-50 hover:bg-slate-900 border border-slate-100 rounded-3xl p-6 text-center transition-all duration-300 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all">
              <Icon data-lucide="terminal" className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm block text-brand-darkSlate group-hover:text-white transition-colors">Node.js</span>
            <span className="text-[9px] text-slate-400 block mt-0.5">Core Backend Architecture</span>
          </div>

          {/* MongoDB */}
          <div className="bg-slate-50 hover:bg-slate-900 border border-slate-100 rounded-3xl p-6 text-center transition-all duration-300 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all">
              <Icon data-lucide="database" className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm block text-brand-darkSlate group-hover:text-white transition-colors">MongoDB</span>
            <span className="text-[9px] text-slate-400 block mt-0.5">NoSQL Transaction Logs</span>
          </div>

          {/* Razorpay / Fintech API */}
          <div className="bg-slate-50 hover:bg-slate-900 border border-slate-100 rounded-3xl p-6 text-center transition-all duration-300 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all">
              <Icon data-lucide="credit-card" className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm block text-brand-darkSlate group-hover:text-white transition-colors">Razorpay/Paystack</span>
            <span className="text-[9px] text-slate-400 block mt-0.5">Fintech Escrow Accounts</span>
          </div>

          {/* REST API */}
          <div className="bg-slate-50 hover:bg-slate-900 border border-slate-100 rounded-3xl p-6 text-center transition-all duration-300 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all">
              <Icon data-lucide="activity" className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm block text-brand-darkSlate group-hover:text-white transition-colors">REST API Gateway</span>
            <span className="text-[9px] text-slate-400 block mt-0.5">Inter-Service Channels</span>
          </div>

          {/* AWS Cloud */}
          <div className="bg-slate-50 hover:bg-slate-900 border border-slate-100 rounded-3xl p-6 text-center transition-all duration-300 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all">
              <Icon data-lucide="cloud" className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm block text-brand-darkSlate group-hover:text-white transition-colors">AWS Cloud hosting</span>
            <span className="text-[9px] text-slate-400 block mt-0.5">Fully Redundant Servers</span>
          </div>

        </div>
      </div>
    </section>


    {/* SECTION 13 â€” FINAL CTA */}
    <section id="cta" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Dark gradient mesh overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0A3B91] via-transparent to-transparent pointer-events-none opacity-60"></div>
      <div className="absolute w-[600px] h-[600px] bg-[#1295E6] rounded-full filter blur-[140px] top-[-300px] right-[-300px] pointer-events-none opacity-40"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
          <Icon data-lucide="sparkles" className="w-4 h-4 text-[#1295E6]" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">Enterprise-Ready Trade Infrastructure</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Letâ€™s Build Trusted Procurement Systems
        </h2>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Transform construction supply-chain operations into an audited, secure, and highly transparent digital escrow experience. Partner with the industry leading platform.
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a href="#" className="bg-gradient-to-r from-[#0D5FD3] to-[#1295E6] text-white font-semibold px-8 py-4 rounded-2xl shadow-glow hover:shadow-lg hover:-translate-y-0.5 transition-all-300 flex items-center gap-2">
            <span>Book Platform Consultation</span>
            <Icon data-lucide="calendar" className="w-4 h-4" />
          </a>
          <a href="#showcase" className="bg-white/5 border border-white/10 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-2xl shadow-premium hover:-translate-y-0.5 transition-all-300 flex items-center gap-2">
            <span>Start Your Platform</span>
            <Icon data-lucide="arrow-right" className="w-4 h-4" />
          </a>
        </div>

        {/* System trust badges */}
        <div className="pt-12 border-t border-slate-800/80 flex flex-wrap justify-center items-center gap-8 text-[11px] text-slate-500 uppercase tracking-widest font-semibold">
          <span>âœ” Escrow Safety Guaranteed</span>
          <span>âœ” Verified Direct Logistics</span>
          <span>âœ” Strict Trade Vetting Laws</span>
        </div>
      </div>
    </section>


    {/* SECTION 14 â€” FOOTER */}
    <footer className="bg-[#0A1833] text-slate-400 py-16 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
        
        {/* Col 1: Logo and Pitch */}
        <div className="lg:col-span-2 space-y-6">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0A3B91] to-[#1295E6] flex items-center justify-center text-white">
              <Icon data-lucide="layers" className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-lg text-white tracking-tight">Builders<span className="text-[#1295E6]">Pool</span></span>
              <span className="block text-[8px] font-semibold text-slate-400 tracking-widest uppercase">Case Study</span>
            </div>
          </a>
          <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
            BuildersPool is the premier, audited commercial purchasing platform protecting trade capital, supply pipelines, and vendor delivery milestones.
          </p>
          {/* Socials Icons */}
          <div className="flex gap-4">
            <a href="#" className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center text-slate-400 hover:text-white border border-slate-800 transition-all"><Icon data-lucide="twitter" className="w-4.5 h-4.5" /></a>
            <a href="#" className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center text-slate-400 hover:text-white border border-slate-800 transition-all"><Icon data-lucide="linkedin" className="w-4.5 h-4.5" /></a>
            <a href="#" className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center text-slate-400 hover:text-white border border-slate-800 transition-all"><Icon data-lucide="github" className="w-4.5 h-4.5" /></a>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="space-y-4">
          <h4 className="font-bold text-xs uppercase text-white tracking-wider">Product Case Study</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#about" className="hover:text-white transition-colors">About Solution</a></li>
            <li><a href="#problem" className="hover:text-white transition-colors">Understanding Challenge</a></li>
            <li><a href="#features" className="hover:text-white transition-colors">Core Capabilities</a></li>
            <li><a href="#escrow" className="hover:text-white transition-colors">Escrow Protections</a></li>
          </ul>
        </div>

        {/* Col 3: Operational Links */}
        <div className="space-y-4">
          <h4 className="font-bold text-xs uppercase text-white tracking-wider">Ecosystem Consoles</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#showcase" className="hover:text-white transition-colors">Mobile App Features</a></li>
            <li><a href="#workflow" className="hover:text-white transition-colors">Smart Sourcing Steps</a></li>
            <li><a href="#metrics" className="hover:text-white transition-colors">Impact & Numbers</a></li>
            <li><a href="#cta" className="hover:text-white transition-colors">Consultations</a></li>
          </ul>
        </div>

        {/* Col 4: Contact details */}
        <div className="space-y-4">
          <h4 className="font-bold text-xs uppercase text-white tracking-wider">Corporate Trade Office</h4>
          <ul className="space-y-2.5 text-xs">
            <li className="flex items-center gap-2"><Icon data-lucide="mail" className="w-4 h-4 text-[#1295E6]" /> trade@builderspool.com</li>
            <li className="flex items-center gap-2"><Icon data-lucide="phone" className="w-4 h-4 text-[#1295E6]" /> +1 (800) 902-1049</li>
            <li className="flex items-center gap-2"><Icon data-lucide="map-pin" className="w-4 h-4 text-[#1295E6]" /> Trade Plaza, London, EC2Y</li>
          </ul>
        </div>

      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs gap-4 text-slate-500">
        <span>Â© 2026 BuildersPool. All rights reserved. Registered Smart Escrow Agent.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Trade Escrow</a>
        </div>
      </div>
    </footer>

  </div>

  {/* AOS Scroll Animations JavaScript CDN */}
  

  {/* Main JavaScript Logic Block */}
      </main>
    </>
  );
}


