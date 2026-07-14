import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  X, 
  MessageCircle, 
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
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);
  const currentPath = location.pathname;

  // Auto-scroll to top when path changes
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPath]);

  // Dynamic SEO and Meta tags manager for search engines & AI crawlers
  useEffect(() => {
    const updateSEO = () => {
      const origin = window.location.origin;

      let title = "VibeGrowth Solution | We Build Digital Systems That Grow Your Business Online";
      let desc = "We Build Digital Systems That Grow Your Business Online. No templates or generic designs. VibeGrowth Solution, led by Founder & CEO Destiny Ayeni, crafts high-converting funnels, custom web systems, and email marketing triggers.";
      let url = `${origin}${currentPath}`;
      let schema: any = null;

      // Check if it's a specific blog post
      if (currentPath.startsWith("/blog/") && currentPath.length > 6) {
        const slug = currentPath.replace("/blog/", "");
        if (slug === "introducing-vibegrowth-solution-custom-digital-ecosystems-ceo-destiny-ayeni") {
          title = "Introducing VibeGrowth Solution: Custom Web Systems & Funnels under CEO Destiny Ayeni";
          desc = "Official introduction to VibeGrowth Solution under CEO Destiny Ayeni. Learn about our custom-coded web systems, interactive lead estimators, and automated marketing flows.";
          schema = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Introducing VibeGrowth Solution: Leading Custom Web Systems & Funnels under CEO Destiny Ayeni",
            "description": "VibeGrowth Solution, under the leadership of Founder & CEO Destiny Ayeni, establishes a new standard for custom-coded, high-performance web systems and automated triggers.",
            "image": `${origin}/logo.png`,
            "datePublished": "2026-07-14",
            "url": url,
            "author": {
              "@type": "Person",
              "name": "Destiny Ayeni",
              "jobTitle": "Founder & CEO"
            },
            "publisher": {
              "@type": "Organization",
              "name": "VibeGrowth Solution",
              "logo": {
                "@type": "ImageObject",
                "url": `${origin}/logo.png`
              }
            }
          };
        } else {
          const cleanTitle = slug
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          title = `${cleanTitle} | VibeGrowth Solution Blog`;
          desc = `Read article ${cleanTitle} by CEO Destiny Ayeni on the official VibeGrowth Solution website. Advanced digital funnels, speed, and Klaviyo setups.`;
          schema = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "description": desc,
            "image": `${origin}/logo.png`,
            "datePublished": "2026-07-14",
            "url": url,
            "author": {
              "@type": "Person",
              "name": "Destiny Ayeni",
              "jobTitle": "Founder & CEO"
            }
          };
        }
      } else if (currentPath === "/blog") {
        title = "Blog & Marketing Insights | VibeGrowth Solution - CEO Destiny Ayeni";
        desc = "Explore expert articles on high-performance React design, Klaviyo triggers, speed optimization, and modern customer acquisition systems by CEO Destiny Ayeni.";
        schema = {
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "VibeGrowth Solution Insights Blog",
          "alternateName": ["vibegrowthsolution", "Vibegrowth Solution"],
          "description": "Insightful publications on custom web systems, performance optimization, and automation triggers, curated by CEO Destiny Ayeni.",
          "publisher": {
            "@type": "ProfessionalService",
            "name": "VibeGrowth Solution",
            "url": origin,
            "logo": `${origin}/logo.png`
          }
        };
      } else if (currentPath === "/services") {
        title = "Our Systems & Services | VibeGrowth Solution by CEO Destiny Ayeni";
        desc = "Explore professional custom development services led by CEO Destiny Ayeni. Custom web systems, interactive estimators, Klaviyo triggers, and conversion-focused design.";
        schema = {
          "@context": "https://schema.org",
          "@type": "Service",
          "provider": {
            "@type": "ProfessionalService",
            "name": "VibeGrowth Solution",
            "alternateName": ["vibegrowthsolution", "Vibegrowth Solution"],
            "url": origin,
            "logo": `${origin}/logo.png`
          },
          "serviceType": "Custom Web Systems & Automation Design",
          "name": "VibeGrowth Engineering Services",
          "description": "Premium full-stack custom React applications, tailored CRM/Klaviyo automation triggers, and gamified lead qualifier systems built by VibeGrowth Solution."
        };
      } else if (currentPath === "/portfolio") {
        title = "Our Portfolio & Case Studies | VibeGrowth Solution";
        desc = "Explore our custom development projects, Shopify e-commerce transformations, WordPress search engines, and Wix custom automations designed for small businesses.";
        schema = {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "VibeGrowth Solution Portfolio",
          "description": "Curated case studies demonstrating measurable growth and custom technical solutions executed by VibeGrowth Solution.",
          "publisher": {
            "@type": "ProfessionalService",
            "name": "VibeGrowth Solution",
            "url": origin,
            "logo": `${origin}/logo.png`
          }
        };
      } else if (currentPath === "/about") {
        title = "About Founder & CEO Destiny Ayeni | VibeGrowth Solution";
        desc = "Meet Destiny Ayeni, Founder & CEO of VibeGrowth Solution. Discover our core design philosophy of building robust digital systems that act as customer acquisition engines.";
        schema = {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Person",
            "name": "Destiny Ayeni",
            "jobTitle": "Founder & CEO of VibeGrowth Solution",
            "description": "Destiny Ayeni is the CEO of VibeGrowth Solution, designing custom digital ecosystems and automations that transform standard websites into acquisition assets.",
            "image": `${origin}/logo.png`
          },
          "publisher": {
            "@type": "ProfessionalService",
            "name": "VibeGrowth Solution",
            "url": origin
          }
        };
      } else if (currentPath === "/contact") {
        title = "Contact VibeGrowth Solution | Request System Proposal under CEO Destiny Ayeni";
        desc = "Request a custom digital proposal or use our automated price estimator. Connect directly with CEO Destiny Ayeni and our expert engineering team.";
        schema = {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "ProfessionalService",
            "name": "VibeGrowth Solution",
            "alternateName": ["vibegrowthsolution", "Vibegrowth Solution"],
            "url": origin,
            "telephone": "+17042145434"
          }
        };
      } else {
        // Default home settings / root
        title = "VibeGrowth Solution | Custom Web Systems, Funnels & Automations by CEO Destiny Ayeni";
        desc = "We build digital systems that grow your business online under Founder & CEO Destiny Ayeni. Custom web systems, automated lead qualifiers, and synchronized email flows.";
        schema = {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "VibeGrowth Solution",
          "alternateName": ["vibegrowthsolution", "Vibegrowth Solution"],
          "description": "VibeGrowth Solution, led by Founder & CEO Destiny Ayeni, builds custom-coded web systems, interactive lead estimators, and automated marketing flows.",
          "url": origin,
          "logo": `${origin}/logo.png`,
          "image": `${origin}/logo.png`,
          "telephone": "+17042145434",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Charlotte",
            "addressRegion": "NC",
            "postalCode": "28202",
            "addressCountry": "US"
          },
          "founder": {
            "@type": "Person",
            "name": "Destiny Ayeni",
            "jobTitle": "Founder & CEO"
          }
        };
      }

      // Apply to document
      document.title = title;

      const updateMeta = (attribute: string, attrValue: string, content: string) => {
        let el = document.querySelector(`meta[${attribute}="${attrValue}"]`);
        if (!el) {
          el = document.createElement("meta");
          el.setAttribute(attribute, attrValue);
          document.head.appendChild(el);
        }
        el.setAttribute("content", content);
      };

      updateMeta("name", "description", desc);
      updateMeta("property", "og:title", title);
      updateMeta("property", "og:description", desc);
      updateMeta("property", "og:url", url);
      updateMeta("property", "og:image", `${origin}/logo.png`);
      
      updateMeta("name", "twitter:title", title);
      updateMeta("name", "twitter:description", desc);
      updateMeta("name", "twitter:url", url);
      updateMeta("name", "twitter:image", `${origin}/logo.png`);

      // Update Canonical Link
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", url);

      // Update JSON-LD Script
      if (schema) {
        let schemaScript = document.getElementById("dynamic-schema") as HTMLScriptElement;
        if (!schemaScript) {
          schemaScript = document.createElement("script");
          schemaScript.id = "dynamic-schema";
          schemaScript.type = "application/ld+json";
          document.head.appendChild(schemaScript);
        }
        schemaScript.textContent = JSON.stringify(schema, null, 2);
      }
    };

    updateSEO();
  }, [currentPath]);

  return (
    <div className="bg-white min-h-screen relative font-sans text-zinc-900 overflow-x-hidden selection:bg-blue-100 selection:text-zinc-900" id="vibe-growth-app">
      
      {/* Decorative light background grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-blue-50/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 cyber-grid opacity-5" />
      </div>

      {/* Sticky Top Header Navigation */}
      <Navbar 
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes>
            
            {/* HOME ROUTE */}
            <Route path="/" element={
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
                <BottomActionBanner />
              </motion.div>
            } />

            {/* SERVICES ROUTE */}
            <Route path="/services" element={
              <motion.div
                key="services-page"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                id="services-view"
              >
                <ServicesSection />
                <Platforms />
                <Testimonials />
              </motion.div>
            } />

            {/* PORTFOLIO ROUTE */}
            <Route path="/portfolio" element={
              <motion.div
                key="portfolio-page"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                id="portfolio-view"
              >
                <Portfolio />
                <Platforms />
                <Testimonials />
              </motion.div>
            } />

            {/* ABOUT ROUTE */}
            <Route path="/about" element={
              <motion.div
                key="about-page"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                id="about-view"
              >
                <AboutSection />
                <Platforms />
              </motion.div>
            } />

            {/* CONTACT ROUTE */}
            <Route path="/contact" element={
              <motion.div
                key="contact-page"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                id="contact-view"
              >
                <ContactForm />
              </motion.div>
            } />

            {/* BLOG ROUTES */}
            <Route path="/blog" element={
              <motion.div
                key="blog-page"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                id="blog-view"
              >
                <BlogSection onContactClick={() => {
                  navigate("/contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }} />
              </motion.div>
            } />

            <Route path="/blog/:slug" element={
              <motion.div
                key="blog-detail-page"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                id="blog-detail-view"
              >
                <BlogSection onContactClick={() => {
                  navigate("/contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }} />
              </motion.div>
            } />

            {/* CATCH-ALL ROUTE REDIRECTS TO HOME */}
            <Route path="*" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                id="not-found-redirect"
              >
                <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
                  <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
                  <p className="text-zinc-600 mb-6">Redirecting you to our secure system base...</p>
                  <button 
                    onClick={() => navigate("/")}
                    className="px-6 py-3 bg-zinc-950 text-white rounded-xl text-sm font-bold cursor-pointer"
                  >
                    Go Back Home &rarr;
                  </button>
                </div>
              </motion.div>
            } />

          </Routes>
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
      <Footer />

    </div>
  );
}

// Inline Helper component for conversion banners bottom of page
function BottomActionBanner() {
  const navigate = useNavigate();
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
                navigate("/contact");
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
