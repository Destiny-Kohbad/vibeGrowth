import { Sparkles, Milestone, CheckCircle, ShieldCheck, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  const values = [
    {
      title: "Psychology-First Conversion Layouts",
      description: "We do not copy standard templates. Every button placing, color gradient, and visual whitespace we build is deliberate to direct user attention."
    },
    {
      title: "Highly Interconnected Tech Systems",
      description: "Our sites represent dynamic funnels. We connect your custom Shopify/WordPress platform cleanly to Klaviyo lists, Calendly APIs, and gated memberships."
    },
    {
      title: "1-on-1 Personalized Workflows",
      description: "Skip dealing with massive slow-moving corporate agencies. Talk directly to specialists who implement and code features in real-time."
    }
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden text-left" id="about-section">
      {/* Background neon elements */}
      <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] bg-accent-purple/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[250px] h-[250px] bg-accent-blue/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column Left: Visual branding presentation */}
          <div className="lg:col-span-5 relative" id="about-visuals-col">
            <div className="absolute inset-0 radial-glow pointer-events-none" />

            {/* Simulated 3D Brand Logo Layout inside Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative p-8 rounded-2xl bg-glass border border-glass-glow shadow-2xl space-y-6"
              id="about-brand-badge-card"
            >
              {/* Fake web tags */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <span className="font-mono text-[9px] text-accent-teal uppercase tracking-widest leading-none font-bold">DIGITAL FREELANCER</span>
                <span className="text-[10px] text-zinc-500 font-mono">EST. 2021</span>
              </div>

              {/* Central high resolution brand graphic representation */}
              <div className="flex flex-col items-center justify-center p-8 bg-zinc-950/40 rounded-xl relative border border-white/5">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-accent-purple to-accent-blue flex items-center justify-center font-display font-black text-4xl text-white tracking-tighter shadow-xl shadow-purple-500/20 mb-3 animate-float-medium">
                  VG
                </div>
                <h4 className="font-display font-black text-sm tracking-widest text-white uppercase mt-2">VIBEGROWTH</h4>
                <p className="font-mono text-[9px] tracking-[0.3em] text-accent-teal uppercase">SOLUTION</p>
              </div>

              {/* Quick statistics checklist */}
              <div className="space-y-3 pt-2 text-xs text-zinc-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle size={14} className="text-accent-teal" />
                  <span>5★ Overall Freelance Satisfaction Rate</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle size={14} className="text-accent-teal" />
                  <span>35+ Global Client Systems Orchestrated</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle size={14} className="text-accent-teal" />
                  <span>WordPress, Wix & Shopify Pro Integrators</span>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Column Right: Story and Brand Identity */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8" id="about-copy-col">

            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-xs font-mono uppercase tracking-widest">
                <Milestone size={12} />
                The VibeGrowth Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-tight">
                An Expert Freelance Force Built to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">
                  Solve Online Conversions
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-zinc-300 font-light text-sm sm:text-base leading-relaxed">
              <p>
                A beautiful design means absolutely nothing if it fails to convert browsers into leads. Regrettably, most standard web layouts represent offline flyers that have simply been uploaded to the cloud. You do not just need pages; you need high-performing digital systems.
              </p>
              <p>
                At <strong className="text-white font-semibold">VibeGrowth Solution</strong>, we operate as a specialized digital freelancer brand that bridges the gap between high-end visual design and rigorous technical execution. We combine our expertise in website development (Wix, WordPress, Shopify) with automated funnel optimization and Behavioural email systems (Klaviyo) to build automated digital ecosystem growth loops.
              </p>
              <p className="font-mono text-xs sm:text-sm text-accent-teal font-extrabold lg:border-l-2 lg:border-accent-teal lg:pl-4">
                Our mission is straightforward: to help elite businesses setup customized workflows that drive authority, automate repetitive actions, and capture maximum digital value.
              </p>
            </div>

            {/* Core Brand Value list representation */}
            <div className="space-y-4 pt-4" id="about-values">
              <h4 className="font-display font-extrabold text-white text-base sm:text-lg">What Sets VibeGrowth Solution Apart</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((v, idx) => (
                  <div key={idx} className="p-4 bg-zinc-950/20 border border-glass rounded-xl space-y-1">
                    <h5 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      {v.title}
                    </h5>
                    <p className="text-[11px] sm:text-xs text-zinc-400 leading-normal font-light">{v.description}</p>
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
                className="py-3.5 px-6 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue text-white font-black text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer"
                id="about-philosophic-cta"
              >
                Hire Us On WhatsApp Direct
                <Zap size={14} className="text-accent-teal fill-accent-teal" />
              </a>
              <span className="text-xs text-zinc-400">
                Or write us at: <a href="mailto:hello@vibegrowthsolution.com" className="text-white hover:underline">hello@vibegrowthsolution.com</a>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
