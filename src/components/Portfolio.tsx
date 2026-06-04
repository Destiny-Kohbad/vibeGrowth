import { useState } from "react";
import { ArrowUpRight, Code, Zap, Sparkles, Star, Smartphone, Laptop } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PortfolioItem } from "../types";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects: PortfolioItem[] = [
    {
      id: "case-shopify-glow",
      title: "Neon Cosmetics Brand Store",
      category: "ecommerce",
      description: "Complete Shopify store overhaul, custom-coded cart drawer with upsells, and list segmentation flow integration.",
      tags: ["E-Commerce Store", "Shopify Setup", "Klaviyo List Flow"],
      results: "+244% Conversion & +$32k order value",
      tech: ["Shopify Liquid", "Klaviyo Flows", "CSS Grid"],
      image: "cyan"
    },
    {
      id: "case-funnel-coach",
      title: "Mindset Academy Gated Course",
      category: "automation",
      description: "Polished high-converting opt-in page, Circle.so community portal, and automatic onboarding email triggers.",
      tags: ["Course Setup", "Circle.so Portal", "ConvertKit Flows"],
      results: "3,800+ Active Premium Members",
      tech: ["Circle.so API", "ConvertKit", "Wix Editor-X"],
      image: "purple"
    },
    {
      id: "case-web-realestate",
      title: "Apex Prestige Luxury Authority",
      category: "webdev",
      description: "Modern search-engine optimized WordPress site showcasing dynamic multi-family listings with sleek sliders.",
      tags: ["WordPress Development", "SEO Engineering", "Lead Generation"],
      results: "4x Average Booking Conversions",
      tech: ["WordPress Core", "Elementor Pro", "Tailwind CSS"],
      image: "teal"
    },
    {
      id: "case-lead-saas",
      title: "FlowSync SaaS Pitch Funnel",
      category: "automation",
      description: "Zero-distraction interactive visual calculator page built on Wix with automated custom quote PDF delivery.",
      tags: ["Landing Page Setup", "Wix Velo Code", "ActiveCampaign API"],
      results: "28.4% Cold Visitor Sign-up Rate",
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
    <section className="py-20 sm:py-28 relative overflow-hidden" id="portfolio-section">
      {/* Background flare */}
      <div className="absolute top-[40%] left-[5%] w-[450px] h-[450px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-xs font-mono uppercase tracking-widest">
            <Star size={12} className="animate-spin-slow" />
            Proof of Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight">
            Case Studies that Speeches for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-blue">
              Our Track Record
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            We don't just build layouts; we build workflows that collect leads, generate money, and automate repetitive customer relations. Read about our top projects below.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12 sm:mb-16" id="portfolio-filters">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === f.id
                  ? "bg-white text-slate-950 font-bold shadow-md"
                  : "bg-white/5 border border-glass text-gray-400 hover:text-white"
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
                className="group relative bg-glass border border-glass rounded-2xl overflow-hidden flex flex-col justify-between"
                id={`project-card-${project.id}`}
              >
                
                {/* Custom Vector Simulated App Interface as Image */}
                <div className={`h-48 sm:h-56 relative overflow-hidden flex items-center justify-center border-b border-glass p-6 ${
                  project.image === "cyan" ? "bg-gradient-to-br from-cyan-950/40 via-blue-950/20 to-black/40" :
                  project.image === "purple" ? "bg-gradient-to-br from-purple-950/40 via-violet-950/20 to-black/40" :
                  project.image === "teal" ? "bg-gradient-to-br from-teal-950/40 via-emerald-950/20 to-black/40" :
                  "bg-gradient-to-br from-pink-950/40 via-rose-950/20 to-black/40"
                }`}>
                  
                  {/* Subtle moving particle nodes */}
                  <div className="absolute inset-0 cyber-grid opacity-10" />

                  {/* Absolute positioning mockups */}
                  <div className="relative w-full max-w-[280px] h-[140px] bg-slate-900/90 border border-white/10 rounded-xl p-4 shadow-xl flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span className="text-[9px] font-mono text-indigo-400 tracking-wider font-bold">VGS SYSTEM PORTAL</span>
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-rose-500/60" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500/60" />
                      </div>
                    </div>
                    
                    {/* Inner custom visualizer */}
                    <div className="space-y-2 py-1">
                      <p className="text-[10px] text-zinc-400 leading-none truncate">Target: {project.title}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-mono font-bold text-emerald-400">{project.results.split(" ")[0]}</span>
                        <span className="text-[9px] text-zinc-400">{project.results.split(" ").slice(1).join(" ")}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="text-[8px] px-1.5 py-0.5 bg-white/5 border border-white/5 text-zinc-400 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Overlay icon hover effect */}
                  <a
                    href={`https://wa.me/17042145434?text=Hi%20VibeGrowth%20Solution,%20I%20saw%20your%20case%20study%20"${project.title}"%20and%20want%20something%20similar%20for%20my%20business!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-30 px-6 text-center cursor-pointer"
                    id={`project-overlay-${project.id}`}
                  >
                    <ArrowUpRight size={24} className="text-accent-teal animate-bounce mb-2" />
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
                        className="text-[9px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-white/5 border border-glass text-zinc-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-extrabold text-white group-hover:text-accent-teal transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics Banner */}
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                    <span className="text-xs text-zinc-300">Verified Result Outcome:</span>
                    <span className="text-xs font-bold text-emerald-400 font-mono flex items-center gap-1">
                      <Zap size={12} className="fill-emerald-400" />
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
          <p className="text-xs sm:text-sm text-zinc-400 font-light mb-4">
            Want to see live interactive links of these premium sites?
          </p>
          <a
            href="https://wa.me/17042145434?text=Hi! I saw your portfolio and want to check live links of WordPress/Shopify stores you built."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-accent-teal hover:underline cursor-pointer"
            id="portfolio-check-links-btn"
          >
            Request Live Portfolios on WhatsApp &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
