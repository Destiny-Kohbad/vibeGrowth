import { Sparkles, Milestone, CheckCircle, ShieldCheck, Zap, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  const values = [
    {
      title: "Google SEO On-Page Blueprint",
      description: "We optimize all header tags, content semantic nodes, and viewport sizes to ensure Google ranking crawl bots can index and match local intent perfectly."
    },
    {
      title: "Highly Interconnected Tech Systems",
      description: "Our sites represent dynamic funnels. We connect your custom Shopify/WordPress platform cleanly to email marketing lists, CRM pipelines, and booking slots."
    },
    {
      title: "1-on-1 Personalized Workflows",
      description: "Skip dealing with massive slow-moving corporate agencies. Talk directly to a growth-focused specialist who implements features in real-time."
    }
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden text-left bg-[#fcfbf7] border-y border-zinc-200/60" id="about-section">
      {/* Subtle light-blue atmospheric hints */}
      <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] bg-blue-50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[250px] h-[250px] bg-zinc-100 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column Left: Visual branding presentation */}
          <div className="lg:col-span-5 relative" id="about-visuals-col">
            
            {/* Simulated Brand Badge Card (No VG initials) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative p-8 rounded-2xl bg-white border border-zinc-200 shadow-xl space-y-6"
              id="about-brand-badge-card"
            >
              {/* Fake web tags */}
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                <span className="font-mono text-[9px] text-blue-600 uppercase tracking-widest leading-none font-bold">DIGITAL SPECIALIST</span>
                <span className="text-[10px] text-zinc-400 font-mono">EST. 2021</span>
              </div>

              {/* Central high resolution brand growth representation - No VG initials as requested */}
              <div className="flex flex-col items-center justify-center p-8 bg-[#fcfbf7] rounded-xl relative border border-zinc-200/80 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <TrendingUp size={32} className="text-blue-600 animate-float-medium" />
                </div>
                <h4 className="font-display font-extrabold text-sm tracking-wider text-zinc-900 uppercase">VibeGrowth</h4>
                <p className="font-mono text-[9px] tracking-[0.25em] text-blue-600 uppercase font-bold text-center">Helping small businesses scale</p>
              </div>

              {/* Quick statistics checklist */}
              <div className="space-y-3 pt-2 text-xs text-zinc-600">
                <div className="flex items-center gap-2.5">
                  <CheckCircle size={14} className="text-blue-600" />
                  <span>5★ Overall Freelance Satisfaction Rate</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle size={14} className="text-blue-600" />
                  <span>35+ Global Client Systems Orchestrated</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle size={14} className="text-blue-600" />
                  <span>WordPress, Wix, Shopify & Custom Coded Apps</span>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Column Right: Story and Brand Identity */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8" id="about-copy-col">

            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-mono uppercase tracking-widest font-bold">
                <Milestone size={12} />
                Helping small businesses scale
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-zinc-950 tracking-tight leading-tight">
                An Expert Freelance Force Built to{" "}
                <span className="text-blue-600">
                  Solve Google Ranking & Conversions
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-zinc-600 font-normal text-sm sm:text-base leading-relaxed">
              <p>
                A beautiful design means absolutely nothing if it fails to convert browsers into clients or rank where potential customers are searching. Regrettably, most standard web templates represent offline flyers that have simply been uploaded to the cloud without any SEO metadata.
              </p>
              <p>
                At <strong className="text-zinc-950 font-bold">VibeGrowth</strong>, we operate as a specialized digital freelancer brand that bridges the gap between clean visual interfaces and search engine indexing. We combine our expertise in custom coded web apps & sites (hosted with no extra subscription fees) and popular builders (Wix, WordPress, Shopify) with automated funnel optimization and Google Search Console indexing to build customized, scalable web properties starting at just $80/page.
              </p>
              <p className="font-mono text-xs sm:text-sm text-blue-600 font-extrabold lg:border-l-2 lg:border-blue-600 lg:pl-4">
                Our mission is straightforward: to help small businesses scale with customized workflows that drive authority, index flawlessly on Google, and capture maximum lead volume.
              </p>
            </div>

            {/* Core Brand Value list representation */}
            <div className="space-y-4 pt-4" id="about-values">
              <h4 className="font-display font-extrabold text-zinc-950 text-base sm:text-lg">What Sets Us Apart</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((v, idx) => (
                  <div key={idx} className="p-4 bg-white border border-zinc-200 rounded-xl space-y-1 shadow-sm">
                    <h5 className="text-xs sm:text-sm font-bold text-zinc-900 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      {v.title}
                    </h5>
                    <p className="text-[11px] sm:text-xs text-zinc-500 leading-normal font-normal">{v.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final signature/CTA call */}
            <div className="pt-4 flex flex-col sm:flex-row shadow-sm gap-4 items-center">
              <a
                href="https://wa.me/17042145434?text=Hi%20VibeGrowth,%20I'm%20impressed%20by%20your%20philosophic%20approach!%20Let's%20work%20together."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-xl bg-zinc-950 hover:bg-blue-600 text-white font-extrabold text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer transition-colors duration-300"
                id="about-philosophic-cta"
              >
                Hire on WhatsApp
                <Zap size={14} className="text-white fill-white" />
              </a>
              <span className="text-xs text-zinc-500">
                Or write us at: <a href="mailto:hello@vibegrowthsolution.com" className="text-zinc-900 font-medium hover:underline">hello@vibegrowthsolution.com</a>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
