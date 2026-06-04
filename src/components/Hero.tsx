import { MessageSquare, ArrowRight, Zap, Play, Sparkles, CheckCircle2, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onSetActiveTab: (tab: string) => void;
  onOpenEstimator?: () => void;
}

export default function Hero({ onSetActiveTab, onOpenEstimator }: HeroProps) {
  const stats = [
    { value: "48h-72h", label: "Average Delivery Time" },
    { value: "+240%", label: "Average Traffic Boost" },
    { value: "$2.4M+", label: "Client Revenue Generated" },
    { value: "99.2%", label: "Client Love Rate" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 sm:py-24" id="hero-section">
      
      {/* Dynamic tech glowing backgrounds */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-accent-purple/10 blur-[80px] sm:blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[5%] w-[250px] h-[250px] sm:w-[450px] sm:h-[450px] rounded-full bg-accent-blue/10 blur-[80px] sm:blur-[120px]" />
        
        {/* Cyber grid background */}
        <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
        
        {/* Subtle radial center spotlight overlay */}
        <div className="absolute inset-0 radial-glow pointer-events-none" />
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
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-violet-500/20 text-accent-teal"
              id="hero-tagline-badge"
            >
              <Sparkles size={14} className="animate-spin-slow text-violet-400" />
              <span className="font-mono text-xs font-semibold tracking-wider uppercase text-zinc-200">
                Premium Digital Growth Studio
              </span>
            </motion.div>

            {/* Giant Futuristic Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1]"
                id="hero-main-title"
              >
                We Build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-accent-blue to-accent-teal text-glow-purple">
                  Digital Systems
                </span>{" "}
                That Grow Your Business Online.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-gray-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl"
                id="hero-subtext"
              >
                No templates or generic designs. VibeGrowth Solution crafts high-converting funnel, web systems, Klaviyo list automation, and customized online community setups that turn strangers into loyal, paying fans.
              </motion.p>
            </div>

            {/* Trust Bullet List */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg text-sm text-zinc-300"
              id="hero-trust-bullets"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-accent-teal flex-shrink-0" />
                <span>100% Custom Tailored Optimization</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-accent-teal flex-shrink-0" />
                <span>Ready-To-Sell Automation Sequences</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-accent-teal flex-shrink-0" />
                <span>Fast 1-on-1 Personalized Workflows</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-accent-teal flex-shrink-0" />
                <span>Transparent Deliverage & Zero Fluff</span>
              </div>
            </motion.div>

            {/* Action Call To Buttons */}
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
                className="py-4 px-8 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-emerald-500/10 cursor-pointer"
                id="hero-whatsapp-btn"
              >
                <MessageSquare size={20} className="fill-slate-950/80" />
                Hire Me on WhatsApp
              </a>

              <button
                onClick={() => onSetActiveTab("services")}
                className="py-4 px-8 rounded-xl bg-white/5 border border-glass hover:bg-white/10 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                id="hero-services-btn"
              >
                View Services & Pricing
                <ArrowRight size={16} className="text-accent-purple" />
              </button>
            </motion.div>

            {/* Micro Estimate Prompt */}
            {onOpenEstimator && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                onClick={onOpenEstimator}
                className="text-xs text-slate-400 hover:text-accent-teal inline-flex items-center gap-1.5 transition-colors font-mono"
                id="hero-estimator-prompt"
              >
                <Zap size={12} className="text-accent-teal animate-bounce" />
                Curious about scope and costs? Try our interactive Project Cost Estimator &rarr;
              </motion.button>
            )}

          </div>

          {/* Interactive 3D Visual Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[400px]" id="hero-graphic-col">
            <div className="absolute inset-0 radial-glow pointer-events-none scale-150" />
            
            {/* Main Mockup Glassmorphic Screen */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[400px] h-[340px] bg-glass border border-glass rounded-2xl p-6 shadow-2xl overflow-hidden animate-float-slow select-none text-left flex flex-col justify-between"
              id="hero-core-panel"
            >
              {/* Fake web controls */}
              <div className="flex items-center justify-between border-b border-glass pb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/75" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/75" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/75" />
                </div>
                <span className="font-mono text-[10px] text-gray-400 px-3 py-1 rounded-md bg-white/5 border border-glass">
                  vibegrowthsolution.com
                </span>
              </div>

              {/* High end content preview */}
              <div className="space-y-3 my-4">
                <div className="text-[11px] font-mono text-accent-teal tracking-wider uppercase font-bold flex items-center gap-1">
                  <TrendingUp size={12} />
                  LIVE METRICS METRIC_ENG_0a
                </div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight flex items-baseline gap-1">
                  +312.4%
                  <span className="text-[11px] text-emerald-400 font-normal font-sans tracking-normal ml-1">
                    Conversion Rate
                  </span>
                </div>
                {/* Visual bar graph representation */}
                <div className="w-full bg-white/5 h-2.5 rounded-full overflow-hidden relative">
                  <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full w-[84%] animate-pulse" />
                </div>
                <p className="text-[12px] text-zinc-400 leading-normal">
                  Conversion-centric frameworks carefully designed for Wix, Shopify, Klaviyo & WordPress deployment.
                </p>
              </div>

              {/* Mini user profile with digital card */}
              <div className="bg-white/5 border border-glass rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold text-xs">
                    VGS
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-none">Available Projects</p>
                    <p className="text-[10px] text-zinc-400 mt-1">Accepting leads today</p>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  ACTIVE
                </span>
              </div>
            </motion.div>

            {/* Additional overlapping 3D item: Floating Lead Form Card */}
            <motion.div
              initial={{ x: 30, y: 40, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-4 right-1 max-w-[210px] bg-glass border border-glass-glow rounded-xl p-4 shadow-xl z-20 animate-float-medium text-left"
              id="hero-floating-analytics"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-sm bg-accent-purple/20 flex items-center justify-center text-accent-purple">
                  <Zap size={14} className="fill-accent-purple" />
                </div>
                <span className="font-mono text-[10px] font-bold text-gray-300">SYSTEM FLOW</span>
              </div>
              <p className="text-[11px] text-zinc-400">Mail / Automated funnel setup ready within 5 days.</p>
              <div className="mt-3 flex gap-1 justify-end">
                <span className="text-[9px] font-bold text-white bg-indigo-500/30 px-2 py-0.5 rounded">⚡ Shopify</span>
                <span className="text-[9px] font-bold text-white bg-pink-500/30 px-2 py-0.5 rounded">✉️ Klaviyo</span>
              </div>
            </motion.div>

            {/* Overlapping items: Badge */}
            <motion.div
              initial={{ x: -25, y: -25, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -top-6 left-2 max-w-[150px] bg-glass border border-glass rounded-lg py-2 px-3 shadow-md z-20 text-center"
              id="hero-badge-rate"
            >
              <span className="text-[18px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-blue font-display">
                5★ Rated
              </span>
              <p className="text-[9px] text-zinc-400 font-mono uppercase mt-0.5">Top Rated Freelancer</p>
            </motion.div>
          </div>

        </div>

        {/* Brand stats ticker bottom */}
        <div className="mt-20 sm:mt-24 border-t border-glass pt-10 sm:pt-12" id="hero-stats-row">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 tracking-tight">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="text-center md:text-left flex flex-col justify-center gap-1 pl-4 border-l border-zinc-900"
                id={`hero-stat-card-${i}`}
              >
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-zinc-400 uppercase tracking-widest leading-none">
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
