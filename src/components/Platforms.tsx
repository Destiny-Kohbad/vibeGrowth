import { useState } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { motion } from "motion/react";
import { PlatformItem } from "../types";

export default function Platforms() {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);

  const platforms: PlatformItem[] = [
    {
      name: "WordPress",
      iconName: "W",
      category: "CMS",
      color: "from-blue-600 to-indigo-700",
      highlight: "Custom code architecture & Elementor/Divi scaling"
    },
    {
      name: "Wix",
      iconName: "Wx",
      category: "CMS",
      color: "from-amber-400 to-orange-500",
      highlight: "Velo custom code engines & dynamic pages"
    },
    {
      name: "Shopify",
      iconName: "S",
      category: "CMS",
      color: "from-emerald-500 to-green-600",
      highlight: "High-AOV checkouts & responsive store layout optimization"
    },
    {
      name: "Klaviyo",
      iconName: "Kl",
      category: "Marketing",
      color: "from-rose-500 to-pink-600",
      highlight: "Behavioural trigger automation flows & predictive AI segmentation"
    },
    {
      name: "Mailchimp",
      iconName: "Mc",
      category: "Marketing",
      color: "from-yellow-400 to-amber-500",
      highlight: "Responsive design templates & list health cleanup"
    },
    {
      name: "ConvertKit",
      iconName: "Ck",
      category: "Marketing",
      color: "from-indigo-500 to-purple-600",
      highlight: "Creator newsletters, broadcast schedules, & tag system automation"
    },
    {
      name: "Beehiiv",
      iconName: "Bh",
      category: "Marketing",
      color: "from-teal-400 to-emerald-500",
      highlight: "Growth-loop referral hubs, premium subscriptions, & newsletters"
    },
    {
      name: "Teachable",
      iconName: "Te",
      category: "Community",
      color: "from-red-500 to-rose-600",
      highlight: "Interactive digital course curriculums & modular files download"
    },
    {
      name: "Circle.so",
      iconName: "Ci",
      category: "Community",
      color: "from-violet-500 to-purple-700",
      highlight: "Forum structures, group spaces, & active member interactions"
    }
  ];

  return (
    <section className="py-20 bg-zinc-950/40 border-y border-glass relative" id="platforms-section">
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Small subtitle summary row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 sm:mb-16 border-b border-glass pb-10">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-accent-teal flex items-center justify-center md:justify-start gap-1.5">
              <Zap size={12} />
              Interoperable Stack
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              We Breathe These Ecosystems
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm font-light">
              We do not specialize in single isolated languages. VibeGrowth Solution integrates entire tech ecosystems seamlessly to turn browsers into buying customers.
            </p>
          </div>

          <div className="flex items-center gap-6 text-zinc-400 bg-white/5 border border-glass py-4 px-6 rounded-2xl font-mono text-xs text-left" id="platforms-summary-stats">
            <div>
              <p className="text-xl font-bold font-display text-white">100%</p>
              <p className="text-[10px] text-zinc-500 uppercase mt-0.5">Integration Rate</p>
            </div>
            <div className="w-px h-8 bg-zinc-800" />
            <div>
              <p className="text-xl font-bold font-display text-white">9+</p>
              <p className="text-[10px] text-zinc-500 uppercase mt-0.5">Core Tools Mastered</p>
            </div>
            <div className="w-px h-8 bg-zinc-800" />
            <div>
              <p className="text-xl font-bold font-display text-white">Zero</p>
              <p className="text-[10px] text-zinc-400 uppercase mt-0.5">Template Reliance</p>
            </div>
          </div>
        </div>

        {/* Interactive Platform Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4" id="platforms-grid">
          {platforms.map((platform) => {
            const isHovered = hoveredPlatform === platform.name;
            return (
              <div
                key={platform.name}
                onMouseEnter={() => setHoveredPlatform(platform.name)}
                onMouseLeave={() => setHoveredPlatform(null)}
                className="relative group cursor-pointer flex flex-col items-center justify-center p-4 rounded-xl bg-glass border border-glass hover:border-violet-500/20 hover:bg-white/5 transition-all duration-300"
                id={`platform-card-${platform.name.replace(".", "")}`}
              >
                {/* Simulated Platform Icon (Letter-styled logo inside mini orb) */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-tr ${platform.color} flex items-center justify-center font-display font-black text-lg text-white shadow-md shadow-violet-500/10 mb-3 group-hover:scale-105 transition-transform duration-200`}>
                  {platform.iconName}
                </div>

                <span className="text-xs font-semibold text-zinc-200 tracking-tight text-center truncate w-full group-hover:text-white">
                  {platform.name}
                </span>
                
                <span className="text-[9px] font-mono text-zinc-500 uppercase mt-1 tracking-wider">
                  {platform.category}
                </span>

                {/* Simulated Glow Background */}
                <span className="absolute -inset-px rounded-xl bg-gradient-to-br from-violet-500/0 to-cyan-500/0 group-hover:from-violet-500/5 group-hover:to-cyan-500/5 transition duration-300 pointer-events-none -z-10" />
              </div>
            );
          })}
        </div>

        {/* Dynamic platform focus overlay explanation */}
        <div className="mt-8 min-h-[50px]" id="platforms-interactive-explain">
          <div className="bg-glass-heavy border border-glass rounded-xl p-4 flex items-center justify-center text-center">
            {hoveredPlatform ? (
              <div className="text-xs sm:text-sm text-zinc-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-teal animate-ping" />
                <span className="font-bold text-white">{hoveredPlatform} Optimization:</span>
                <span className="font-light italic">{platforms.find(p => p.name === hoveredPlatform)?.highlight}</span>
              </div>
            ) : (
              <span className="text-[11px] sm:text-xs text-zinc-500 font-mono flex items-center gap-2">
                <ShieldCheck size={14} className="text-zinc-600" />
                Hover or tap any platform Badge above to see how we tune it for VibeGrowth systems.
              </span>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
