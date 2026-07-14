"use client";

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
      color: "bg-blue-600 text-white",
      highlight: "Custom code architecture & Elementor/Divi scaling"
    },
    {
      name: "Wix",
      iconName: "Wx",
      category: "CMS",
      color: "bg-zinc-900 text-white",
      highlight: "Velo custom code engines & dynamic pages"
    },
    {
      name: "Shopify",
      iconName: "S",
      category: "CMS",
      color: "bg-emerald-600 text-white",
      highlight: "High-AOV checkouts & responsive store layout optimization"
    },
    {
      name: "Klaviyo",
      iconName: "Kl",
      category: "Marketing",
      color: "bg-zinc-900 text-white",
      highlight: "Behavioural trigger automation flows & predictive AI segmentation"
    },
    {
      name: "Mailchimp",
      iconName: "Mc",
      category: "Marketing",
      color: "bg-amber-400 text-zinc-950",
      highlight: "Responsive design templates & list health cleanup"
    },
    {
      name: "ConvertKit",
      iconName: "Ck",
      category: "Marketing",
      color: "bg-rose-600 text-white",
      highlight: "Creator newsletters, broadcast schedules, & tag system automation"
    },
    {
      name: "Beehiiv",
      iconName: "Bh",
      category: "Marketing",
      color: "bg-zinc-950 text-white",
      highlight: "Growth-loop referral hubs, premium subscriptions, & newsletters"
    },
    {
      name: "Teachable",
      iconName: "Te",
      category: "Community",
      color: "bg-zinc-800 text-white",
      highlight: "Interactive digital course curriculums & modular files download"
    },
    {
      name: "Circle.so",
      iconName: "Ci",
      category: "Community",
      color: "bg-blue-600 text-white",
      highlight: "Forum structures, group spaces, & active member interactions"
    }
  ];

  return (
    <section className="py-20 bg-[#fcfbf7] border-y border-zinc-200/60 relative" id="platforms-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Small subtitle summary row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 sm:mb-16 border-b border-zinc-200/80 pb-10">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-blue-600 flex items-center justify-center md:justify-start gap-1.5">
              <Zap size={12} />
              Interoperable Stack
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-zinc-950">
              We Breathe These Ecosystems
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm font-normal">
              We do not specialize in single isolated languages. VibeGrowth Solution integrates entire tech ecosystems seamlessly to turn browsers into buying customers.
            </p>
          </div>

          <div className="flex items-center gap-6 text-zinc-600 bg-white border border-zinc-200 py-4 px-6 rounded-2xl font-mono text-xs text-left shadow-sm" id="platforms-summary-stats">
            <div>
              <p className="text-xl font-bold font-display text-zinc-950">100%</p>
              <p className="text-[10px] text-zinc-500 uppercase mt-0.5">Integration Rate</p>
            </div>
            <div className="w-px h-8 bg-zinc-200" />
            <div>
              <p className="text-xl font-bold font-display text-zinc-950">9+</p>
              <p className="text-[10px] text-zinc-500 uppercase mt-0.5">Core Tools Mastered</p>
            </div>
            <div className="w-px h-8 bg-zinc-200" />
            <div>
              <p className="text-xl font-bold font-display text-zinc-950">Zero</p>
              <p className="text-[10px] text-zinc-500 uppercase mt-0.5 font-semibold">Template Reliance</p>
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
                className="relative group cursor-pointer flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-zinc-200 hover:border-blue-600/30 hover:bg-zinc-50/50 transition-all duration-300 shadow-sm"
                id={`platform-card-${platform.name.replace(".", "")}`}
              >
                {/* Simulated Platform Icon (Letter-styled logo inside mini orb) */}
                <div className={`w-12 h-12 rounded-lg ${platform.color} flex items-center justify-center font-display font-black text-lg shadow-sm mb-3 group-hover:scale-105 transition-transform duration-200`}>
                  {platform.iconName}
                </div>

                <span className="text-xs font-semibold text-zinc-800 tracking-tight text-center truncate w-full group-hover:text-blue-600">
                  {platform.name}
                </span>
                
                <span className="text-[9px] font-mono text-zinc-400 uppercase mt-1 tracking-wider">
                  {platform.category}
                </span>
              </div>
            );
          })}
        </div>

        {/* Dynamic platform focus overlay explanation */}
        <div className="mt-8 min-h-[50px]" id="platforms-interactive-explain">
          <div className="bg-white border border-zinc-200 rounded-xl p-4 flex items-center justify-center text-center shadow-sm">
            {hoveredPlatform ? (
              <div className="text-xs sm:text-sm text-zinc-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                <span className="font-bold text-zinc-950">{hoveredPlatform} Optimization:</span>
                <span className="font-normal italic">{platforms.find(p => p.name === hoveredPlatform)?.highlight}</span>
              </div>
            ) : (
              <span className="text-[11px] sm:text-xs text-zinc-500 font-mono flex items-center gap-2">
                <ShieldCheck size={14} className="text-zinc-400" />
                Hover or tap any platform Badge above to see how we tune it for VibeGrowth systems.
              </span>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
