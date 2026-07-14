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
import BlogSection from "./components/BlogSection";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);

  // Read hash on mount and listen to changes to allow routing (e.g. #blog, #services, #about)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#blog")) {
        setActiveTab("blog");
      } else if (hash === "#services") {
        setActiveTab("services");
      } else if (hash === "#about") {
        setActiveTab("about");
      } else if (hash === "#contact") {
        setActiveTab("contact");
      } else if (hash === "#home" || !hash) {
        setActiveTab("home");
      }
    };

    handleHashChange(); // Run on mount
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Auto-scroll to top when active tab changes
  useEffect(() => {
    window.scrollTo({ top: 0});
  }, [activeTab]);

  return (
    <div className="bg-white min-h-screen relative font-sans text-zinc-900 overflow-x-hidden selection:bg-blue-100 selection:text-zinc-900" id="vibe-growth-app">
      
      {/* Decorative light background grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-blue-50/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 cyber-grid opacity-5" />
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
              <div className="border-t border-zinc-100">
                <ServicesSection />
              </div>

              {/* Past Projects Portfolio Showcase */}
              <div className="border-t border-zinc-100 bg-zinc-50/30">
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

          {activeTab === "blog" && (
            <motion.div
              key="blog-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              id="blog-view"
            >
              <BlogSection onContactClick={() => {
                setActiveTab("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Interactive Project Cost Estimator Modal Screen */}
      <AnimatePresence>
        {isEstimatorOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-sm" id="global-estimator-overlay">
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 30 }}
              className="relative w-full max-w-2xl bg-white border border-zinc-200 rounded-2xl max-h-[90vh] overflow-y-auto scrollbar-hidden shadow-2xl"
              id="estimator-modal-inner"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-zinc-100 flex items-center justify-between bg-zinc-50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    <Cpu size={16} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-display font-extrabold text-zinc-950">System Cost Calculator</h3>
                    <p className="text-[11px] text-zinc-500 font-sans">VibeGrowth Custom Price Estimator</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsEstimatorOpen(false)}
                  className="p-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-950 transition-colors cursor-pointer"
                  id="estimator-close-btn"
                  aria-label="Close modal dialog"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Form integration inside modal */}
              <div className="p-6">
                <p className="text-zinc-600 text-xs sm:text-sm font-normal mb-4">
                  Define your parameters below. Our interactive estimator will generate instant scope recommendations. Submit to register interest or talk to us instantly!
                </p>
                <ContactForm isModalStyle={true} />
              </div>

              {/* Footer row */}
              <div className="px-6 py-4.5 bg-zinc-50 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-zinc-400 font-mono flex items-center gap-1">
                  <Network size={12} className="text-zinc-400" />
                  Secure calculation &mdash; Zero commitment required
                </span>
                <button
                  onClick={() => setIsEstimatorOpen(false)}
                  className="text-zinc-600 hover:text-zinc-950 transition-colors text-xs font-bold"
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
    const textMsg = "Hi VibeGrowth! I want to claim my free digital audit consultation slot for my business.";
    window.open(`https://wa.me/17042145434?text=${encodeURIComponent(textMsg)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 bg-white" id="bottom-banner-cta">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-[#fcfbf7] border border-zinc-200 rounded-3xl p-8 sm:p-14 text-center space-y-8 shadow-sm">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 border border-blue-100 text-xs font-mono uppercase text-blue-600 font-bold">
              <Sparkles size={11} className="animate-pulse" />
              Limited Open slots this month
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-zinc-950 tracking-tight">
              Let's Build Something That Grows Your Business
            </h2>
            
            <p className="text-zinc-600 text-xs sm:text-sm font-normal leading-relaxed">
              Do not waste money on generic templates that don't generate clicks, rank on Google, or capture emails. Partner with a dedicated digital freelancer force that connects all structural pieces: premium development, flows, checkouts and integrations.
            </p>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            <button
              onClick={handleConsultWhatsApp}
              className="w-full sm:w-auto px-8 py-4 bg-zinc-950 hover:bg-blue-600 text-white font-bold text-xs sm:text-sm tracking-wide rounded-xl inline-flex items-center justify-center gap-2.5 shadow-sm transition-all duration-300 hover:scale-[1.03] cursor-pointer"
              id="banner-whatsapp-direct"
            >
              <MessageCircle size={18} className="fill-white/10" />
              Book Free Strategy Call
            </button>

            <button
              onClick={() => {
                onSetActiveTab("contact");
                window.location.hash = "#contact";
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-white border border-zinc-200 text-zinc-800 font-bold text-xs sm:text-sm rounded-xl hover:bg-zinc-100 duration-200 cursor-pointer shadow-sm"
              id="banner-proposal-trigger"
            >
              Get Custom Quotation &rarr;
            </button>

          </div>

          <p className="text-[11px] text-zinc-400 font-mono uppercase tracking-wider font-semibold">
            ⚡ Quick Kickoff &bull; 1-on-1 direct delivery &bull; No outsourced agency slow-downs
          </p>

        </div>
      </div>
    </section>
  );
}
