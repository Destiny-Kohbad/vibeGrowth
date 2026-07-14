import { MessageSquare, ArrowRight, Zap, Play, Sparkles, CheckCircle2, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import VibeGrowthLogo from "./VibeGrowthLogo";

interface HeroProps {
  onSetActiveTab: (tab: string) => void;
  onOpenEstimator?: () => void;
}

export default function Hero({ onSetActiveTab, onOpenEstimator }: HeroProps) {
  const stats = [
    { value: "48h-72h", label: "Average Delivery Time" },
    { value: "+240%", label: "Average Traffic Boost" },
    { value: "Google #1", label: "SEO Search Target" },
    { value: "99.2%", label: "Client Love Rate" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 sm:py-24 bg-white" id="hero-section">
      
      {/* Pristine Light-Theme Decorative background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-blue-50/40 blur-[80px] sm:blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[5%] w-[250px] h-[250px] sm:w-[450px] sm:h-[450px] rounded-full bg-zinc-50 blur-[80px] sm:blur-[120px] pointer-events-none" />
        
        {/* Subtle Cyber grid background */}
        <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Copy Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-8" id="hero-text-col">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600"
              id="hero-tagline-badge"
            >
              <VibeGrowthLogo size={16} />
              <span className="font-mono text-xs font-bold tracking-wider uppercase">
                Premium Growth & SEO Studio
              </span>
            </motion.div>

            {/* Headline customized to user exact request */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-zinc-950 tracking-tight leading-[1.1]"
                id="hero-main-title"
              >
                Helping{" "}
                <span className="text-blue-600">
                  Small Businesses
                </span>{" "}
                Scale Online.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-zinc-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl"
                id="hero-subtext"
              >
                We build search-engine-friendly web systems, conversion funnels, and automated newsletters that rank on Google, drive consistent traffic, and convert cold visitors into local clients.
              </motion.p>
            </div>

            {/* Trust Bullet List */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg text-sm text-zinc-700"
              id="hero-trust-bullets"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                <span className="font-medium">Google SEO On-Page Optimization</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                <span className="font-medium">Responsive Mobile-First Interfaces</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                <span className="font-medium">Custom Content Delivery (Wix/Shopify)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                <span className="font-medium">High Rank Performance & Page Speed</span>
              </div>
            </motion.div>

            {/* Action Buttons styled in Blue, White, Black */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              id="hero-actions"
            >
              <a
                href="https://wa.me/17042145434"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-8 rounded-xl bg-zinc-950 hover:bg-blue-600 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-md cursor-pointer"
                id="hero-whatsapp-btn"
              >
                <MessageSquare size={20} className="fill-white/10" />
                Hire on WhatsApp
              </a>

              <button
                onClick={() => {
                  onSetActiveTab("services");
                  window.location.hash = "#services";
                }}
                className="py-4 px-8 rounded-xl bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 text-zinc-900 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                id="hero-services-btn"
              >
                View Services & Pricing
                <ArrowRight size={16} className="text-blue-600" />
              </button>
            </motion.div>

            {/* Micro Estimate Prompt */}
            {onOpenEstimator && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                onClick={onOpenEstimator}
                className="text-xs text-zinc-500 hover:text-blue-600 inline-flex items-center gap-1.5 transition-colors font-mono cursor-pointer"
                id="hero-estimator-prompt"
              >
                <Zap size={12} className="text-blue-600 animate-bounce" />
                Curious about custom page pricing? Try our interactive Cost Estimator &rarr;
              </motion.button>
            )}

          </div>

          {/* Interactive Modern Visual Column in Cream / White / Blue */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[400px]" id="hero-graphic-col">
            
            {/* Main Mockup Screen - Clean White / Cream Browser styling */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[400px] h-[340px] bg-white border border-zinc-200 rounded-2xl p-6 shadow-xl overflow-hidden animate-float-slow select-none text-left flex flex-col justify-between"
              id="hero-core-panel"
            >
              {/* Fake web controls */}
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                </div>
                <span className="font-mono text-[9px] text-zinc-400 px-3 py-1 rounded-md bg-zinc-50 border border-zinc-200">
                  vibegrowthsolution.com
                </span>
              </div>

              {/* High end content preview */}
              <div className="space-y-3 my-4">
                <div className="text-[10px] font-mono text-blue-600 tracking-wider uppercase font-bold flex items-center gap-1">
                  <TrendingUp size={12} />
                  GOOGLE SEARCH PERFORMANCE
                </div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-zinc-900 tracking-tight flex items-baseline gap-1">
                  SEO Rank #1
                  <span className="text-[11px] text-zinc-500 font-normal font-sans tracking-normal ml-1">
                    on Google
                  </span>
                </div>
                
                {/* Clean blue progress bar */}
                <div className="w-full bg-zinc-100 h-2.5 rounded-full overflow-hidden relative">
                  <div className="absolute inset-y-0 left-0 bg-blue-600 rounded-full w-[94%]" />
                </div>
                <p className="text-[11px] text-zinc-500 leading-normal">
                  Speed-optimized frameworks carefully designed for Wix, Shopify, and local business layouts.
                </p>
              </div>

              {/* Status Box - No initial VGS letters as requested */}
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <CheckCircle2 size={15} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-900 leading-none">SEO Optimized</p>
                    <p className="text-[9px] text-zinc-500 mt-1">Ready for indexing</p>
                  </div>
                </div>
                <span className="text-[9px] text-blue-600 font-mono flex items-center gap-1 bg-blue-50 px-2 py-0.5 rounded-full font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                  INDEXED
                </span>
              </div>
            </motion.div>

            {/* Overlapping items: Badge (styled cleanly) */}
            <motion.div
              initial={{ x: -25, y: -25, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -top-6 left-2 max-w-[150px] bg-white border border-zinc-200 rounded-lg py-2 px-3 shadow-lg z-20 text-center"
              id="hero-badge-rate"
            >
              <span className="text-[16px] font-bold text-blue-600 font-display">
                $80 / Page
              </span>
              <p className="text-[9px] text-zinc-500 font-mono uppercase mt-0.5">Custom Websites</p>
            </motion.div>
          </div>

        </div>

        {/* Brand stats ticker bottom */}
        <div className="mt-20 sm:mt-24 border-t border-zinc-200/80 pt-10 sm:pt-12" id="hero-stats-row">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 tracking-tight">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="text-center md:text-left flex flex-col justify-center gap-1 pl-4 border-l border-zinc-200"
                id={`hero-stat-card-${i}`}
              >
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-zinc-900">
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-zinc-500 uppercase tracking-widest leading-none">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
