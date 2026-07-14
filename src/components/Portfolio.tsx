"use client";

import { useState } from "react";
import { ArrowUpRight, Code, Zap, Sparkles, Star, Smartphone, Laptop, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PortfolioItem } from "../types";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects: PortfolioItem[] = [
    {
      id: "case-shopify-glow",
      title: "Premium E-Commerce Overhaul",
      category: "ecommerce",
      description: "Complete Shopify store redesign, custom-coded cart drawer with upsells, and list segmentation flow integration.",
      tags: ["E-Commerce Store", "Shopify Setup", "Klaviyo List Flow"],
      results: "+244% Conversion Boost",
      tech: ["Shopify Liquid", "Klaviyo Flows", "CSS Grid"],
      image: "cyan"
    },
    {
      id: "case-funnel-coach",
      title: "SaaS & Academy Gated Course",
      category: "automation",
      description: "Polished high-converting opt-in page, automated membership portal, and automatic onboarding email triggers.",
      tags: ["Course Setup", "Membership Portal", "ConvertKit Flows"],
      results: "3,800+ Active Members",
      tech: ["Custom APIs", "ConvertKit", "Wix Editor-X"],
      image: "purple"
    },
    {
      id: "case-web-realestate",
      title: "Apex Prestige Search Optimization",
      category: "webdev",
      description: "Modern search-engine optimized WordPress site showcasing dynamic multi-family listings with on-page schema mapping.",
      tags: ["WordPress Development", "SEO Engineering", "Lead Generation"],
      results: "4x Google Ranking Hits",
      tech: ["WordPress Core", "Elementor Pro", "Tailwind CSS"],
      image: "teal"
    },
    {
      id: "case-lead-saas",
      title: "Automated Lead Pitch Funnel",
      category: "automation",
      description: "Zero-distraction interactive visual estimator page built on Wix with automated custom pricing delivery.",
      tags: ["Landing Page Setup", "Wix Velo Code", "ActiveCampaign API"],
      results: "28.4% Cold Lead Capture",
      tech: ["Wix Velo CJS", "ActiveCampaign", "Custom CSS"],
      image: "pink"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "webdev", label: "WordPress & Wix Dev" },
    { id: "ecommerce", label: "Shopify E-Commerce" },
    { id: "automation", label: "Funnels & Academies" }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-zinc-200/60" id="portfolio-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-mono uppercase tracking-widest font-bold">
            <Star size={12} className="animate-spin-slow" />
            Proof of Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-zinc-950 tracking-tight">
            Case Studies of Real{" "}
            <span className="text-blue-600">
              Small Business Scaling
            </span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-normal leading-relaxed">
            We don't just build layouts; we build custom-coded systems that rank on Google, collect leads, and automate customer pipelines.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12 sm:mb-16" id="portfolio-filters">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === f.id
                  ? "bg-zinc-950 text-white font-bold shadow-sm"
                  : "bg-zinc-50 border border-zinc-200 text-zinc-600 hover:text-zinc-950"
              }`}
              id={`portfolio-filter-btn-${f.id}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cases Grid representation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="portfolio-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white border border-zinc-200 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-300"
                id={`project-card-${project.id}`}
              >
                
                {/* Clean, low-contrast graphic headers */}
                <div className="h-48 sm:h-56 relative overflow-hidden flex items-center justify-center border-b border-zinc-100 p-6 bg-zinc-50">
                  <div className="absolute inset-0 cyber-grid opacity-10" />

                  {/* Clean Mockup Panels - No VGS/VG tags */}
                  <div className="relative w-full max-w-[280px] h-[140px] bg-white border border-zinc-200 rounded-xl p-4 shadow-sm flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                      <span className="text-[9px] font-mono text-blue-600 tracking-wider font-bold">PERFORMANCE PORTAL</span>
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-blue-100" />
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                      </div>
                    </div>
                    
                    {/* Inner custom visualizer */}
                    <div className="space-y-2 py-1">
                      <p className="text-[10px] text-zinc-500 leading-none truncate">System: {project.title}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-mono font-bold text-blue-600">{project.results.split(" ")[0]}</span>
                        <span className="text-[9px] text-zinc-500 font-medium">{project.results.split(" ").slice(1).join(" ")}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.tech.slice(0, 2).map((t, idx) => (
                        <span key={idx} className="text-[8px] px-1.5 py-0.5 bg-zinc-50 border border-zinc-200 text-zinc-500 rounded font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Overlay icon hover effect */}
                  <a
                    href={`https://wa.me/17042145434?text=Hi%20VibeGrowth,%20I%20saw%20your%20case%20study%20"${project.title}"%20and%20want%20something%20similar%20for%20my%20business!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-zinc-950/95 flex flex-col items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-30 px-6 text-center cursor-pointer"
                    id={`project-overlay-${project.id}`}
                  >
                    <ArrowUpRight size={24} className="text-blue-500 animate-bounce mb-2" />
                    <span className="text-xs font-bold text-white">Ask for similar system flow &rarr;</span>
                    <p className="text-[10px] text-zinc-400 mt-2">Get custom roadmap to copy these metrics</p>
                  </a>
                </div>

                {/* Info block */}
                <div className="p-6 sm:p-8 space-y-4">
                  
                  {/* Category Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-[9px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-zinc-100 border border-zinc-200 text-zinc-600 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-extrabold text-zinc-950 group-hover:text-blue-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics Banner */}
                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between">
                    <span className="text-xs text-zinc-600">Verified Result Outcome:</span>
                    <span className="text-xs font-bold text-blue-600 font-mono flex items-center gap-1">
                      <Zap size={12} className="fill-blue-600 text-blue-600" />
                      {project.results}
                    </span>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Direct WhatsApp Action Link Bottom */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm text-zinc-500 font-normal mb-4">
            Want to see live interactive links of these premium sites?
          </p>
          <a
            href="https://wa.me/17042145434?text=Hi! I saw your portfolio and want to check live links of WordPress/Shopify stores you built."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer font-mono"
            id="portfolio-check-links-btn"
          >
            Request Live Portfolios on WhatsApp &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
