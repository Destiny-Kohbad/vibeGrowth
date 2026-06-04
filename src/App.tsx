import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  X, 
  MessageCircle, 
  CheckCircle, 
  HelpCircle, 
  ArrowUpRight, 
  ChevronRight, 
  Check, 
  Cpu, 
  Network 
} from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import Platforms from "./components/Platforms";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import AboutSection from "./components/AboutSection";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);

  // Auto-scroll to top when active tab changes
  useEffect(() => {
    window.scrollTo({ top: 0});
  }, [activeTab]);

  return (
    <div className="bg-primary-dark min-h-screen relative font-sans text-gray-100 overflow-x-hidden selection:bg-accent-purple/30 selection:text-white" id="vibe-growth-app">
      
      {/* Decorative Sophisticated Dark background glow blobs & grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-purple-900/30 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[5%] right-[-10%] w-[50vw] h-[50vh] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-[20%] right-[10%] w-[35vw] h-[35vh] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 cyber-grid opacity-15" />
      </div>

      {/* Sticky Top Header Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              id="home-view"
            >
              {/* Landing Hero */}
              <Hero 
                onSetActiveTab={setActiveTab} 
                onOpenEstimator={() => setIsEstimatorOpen(true)}
              />

              {/* Supported Tech Platforms Showcase */}
              <Platforms />

              {/* Services Preview Grid */}
              <div className="border-t border-glass">
                <ServicesSection />
              </div>

              {/* Past Projects Portfolio Showcase */}
              <div className="border-t border-glass bg-zinc-950/20">
                <Portfolio />
              </div>

              {/* Interactive Reviews Deck */}
              <Testimonials />

              {/* Secondary Bottom Banner Action CTA */}
              <BottomActionBanner onSetActiveTab={setActiveTab} />
            </motion.div>
          )}

          {activeTab === "services" && (
            <motion.div
              key="services-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              id="services-view"
            >
              {/* Comprehensive interactive services index with filter pills */}
              <ServicesSection />
              <Platforms />
              <Testimonials />
            </motion.div>
          )}

          {activeTab === "about" && (
            <motion.div
              key="about-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              id="about-view"
            >
              {/* Freelancer Story, specialized skills presentation */}
              <AboutSection />
              <Platforms />
            </motion.div>
          )}

          {activeTab === "contact" && (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              id="contact-view"
            >
              {/* Main detailed lead scoring contact form with individual sliders */}
              <ContactForm />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Interactive Project Cost Estimator Modal Screen */}
      <AnimatePresence>
        {isEstimatorOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md" id="global-estimator-overlay">
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 30 }}
              className="relative w-full max-w-2xl bg-glass border border-glass-glow rounded-2xl max-h-[90vh] overflow-y-auto scrollbar-hidden shadow-2xl"
              id="estimator-modal-inner"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-glass flex items-center justify-between bg-gradient-to-r from-violet-950/20 to-indigo-950/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent-teal/15 text-accent-teal flex items-center justify-center">
                    <Cpu size={16} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-display font-extrabold text-white">System Cost Calculator</h3>
                    <p className="text-[11px] text-zinc-400 font-sans">VibeGrowth custom framework estimator</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsEstimatorOpen(false)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  id="estimator-close-btn"
                  aria-label="Close modal dialog"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Form integration inside modal */}
              <div className="p-6">
                <p className="text-zinc-300 text-xs sm:text-sm font-light mb-4">
                  Define your parameters below. Our custom interactive estimator will generate instant scope recommendations. Submit to register interest or talk to our live engineers!
                </p>
                <ContactForm isModalStyle={true} />
              </div>

              {/* Footer row */}
              <div className="px-6 py-4.5 bg-zinc-950/40 border-t border-glass flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-zinc-500 font-mono flex items-center gap-1">
                  <Network size={12} className="text-zinc-600" />
                  Secure calculation &mdash; Zero commitment required
                </span>
                <button
                  onClick={() => setIsEstimatorOpen(false)}
                  className="text-zinc-300 hover:text-white transition-colors text-xs font-bold"
                  id="estimator-modal-dismiss"
                >
                  Dismiss Calculator &rarr;
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Persistent global sticky Floating WhatsApp chat bubble */}
      <FloatingWhatsApp />

      {/* Global Page Footer */}
      <Footer onSetActiveTab={setActiveTab} activeTab={activeTab} />

    </div>
  );
}

// Inline Helper component for conversion banners bottom of page
function BottomActionBanner({ onSetActiveTab }: { onSetActiveTab: (tab: string) => void }) {
  const handleConsultWhatsApp = () => {
    const textMsg = "Hi VibeGrowth Solution! I want to claim my free digital audit consultation slot for my business.";
    window.open(`https://wa.me/17042145434?text=${encodeURIComponent(textMsg)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 relative overflow-hidden" id="bottom-banner-cta">
      {/* Background visual spotlight */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-gradient-to-tr from-violet-950/50 via-slate-900/90 to-indigo-950/50 border border-glass-glow rounded-3xl p-8 sm:p-14 text-center space-y-8 shadow-2xl">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 border border-glass text-xs font-mono uppercase text-accent-teal">
              <Sparkles size={11} className="animate-pulse" />
              Limited Open slots this month
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white tracking-tight">
              Let's Build Something That Grows Your Business
            </h2>
            
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
              Do not waste money on generic lookbooks that don't generate clicks or emails. Partner with a dedicated digital freelancer force that connects all structural pieces: premium development, flows, checkouts and integrations.
            </p>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            <button
              onClick={handleConsultWhatsApp}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide rounded-xl inline-flex items-center justify-center gap-2.5 shadow-lg hover:scale-105 duration-200 cursor-pointer"
              id="banner-whatsapp-direct"
            >
              <MessageCircle size={18} className="fill-slate-950/20" />
              Book Free Strategy Call
            </button>

            <button
              onClick={() => {
                onSetActiveTab("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-glass text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-white/10 duration-200 cursor-pointer"
              id="banner-proposal-trigger"
            >
              Get Custom Quotation &rarr;
            </button>

          </div>

          <p className="text-[11px] text-zinc-500 font-mono uppercase tracking-wider">
            ⚡ Quick Kickoff &bull; 1-on-1 direct delivery &bull; No outsourced agency slow-downs
          </p>

        </div>
      </div>
    </section>
  );
}
