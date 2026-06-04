import { Menu, X, PhoneCall, Code, Sparkles, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenEstimator?: () => void;
}

export default function Navbar({ activeTab, setActiveTab, onOpenEstimator }: NavbarProps) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Our Services" },
    { id: "about", label: "About Brand" },
    { id: "contact", label: "Contact & Leads" },
  ];

  const handleMobileClick = (tabId: string, toggleMenu: () => void) => {
    setActiveTab(tabId);
    toggleMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogoClick = () => {
    setActiveTab("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const menuState = {
    isOpen: false,
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-glass bg-glass/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          
          {/* Brand Logo with customized VG layout */}
          <div 
            onClick={handleLogoClick}
            className="flex items-center gap-3 cursor-pointer group"
            id="nav-logo-container"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-purple to-accent-blue flex items-center justify-center font-display font-black text-xl text-white tracking-tighter shadow-lg shadow-violet-500/20 group-hover:scale-105 duration-200">
                VG
              </div>
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-tr from-accent-purple to-accent-blue opacity-30 blur-sm group-hover:opacity-75 transition duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-sm sm:text-base tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 transition-all duration-300">
                VIBEGROWTH
              </span>
              <span className="font-mono text-[10px] tracking-[0.25em] text-accent-teal uppercase">
                SOLUTION
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-glass rounded-full px-2 py-1" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`relative px-4 py-2 rounded-full font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-bg"
                      className="absolute inset-0 bg-gradient-to-r from-accent-purple/30 to-accent-blue/30 border border-violet-500/20 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* CTA Group Buttons */}
          <div className="hidden lg:flex items-center gap-3" id="desktop-cta-group">
            {onOpenEstimator && (
              <button
                onClick={onOpenEstimator}
                className="px-4 py-2 rounded-xl bg-white/5 border border-glass text-xs font-semibold hover:bg-white/10 text-accent-teal inline-flex items-center gap-1.5 transition-all"
                id="navbar-estimator-btn"
              >
                <Sparkles size={13} className="text-accent-teal animate-pulse" />
                Cost Estimator
              </button>
            )}

            <a
              href="https://wa.me/17042145434"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue hover:from-accent-purple/90 hover:to-accent-blue/90 text-white font-bold text-xs inline-flex items-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md shadow-purple-500/10 cursor-pointer"
              id="navbar-whatsapp-cta"
            >
              <MessageSquare size={14} className="fill-white/10" />
              Hire Us Free Consult
            </a>
          </div>

          {/* Mobile Navigation Trigger Toggle - state inside Navbar */}
          <MobileNavToggle 
            navItems={navItems}
            activeTab={activeTab}
            handleMobileClick={handleMobileClick}
            onOpenEstimator={onOpenEstimator}
          />

        </div>
      </div>
    </header>
  );
}

// Inner helper client Component for handling mobile toggle state cleanly in React
import { useState } from "react";
function MobileNavToggle({ navItems, activeTab, handleMobileClick, onOpenEstimator }: {
  navItems: Array<{id: string, label: string}>,
  activeTab: string,
  handleMobileClick: (tabId: string, toggle: () => void) => void,
  onOpenEstimator?: () => void
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden flex items-center gap-2">
      {onOpenEstimator && (
        <button
          onClick={onOpenEstimator}
          className="px-3 py-1.5 rounded-lg bg-indigo-500/20 border border-glass text-[11px] font-semibold text-accent-teal flex items-center gap-1"
          id="mobile-quick-estimator-btn"
        >
          <Sparkles size={11} />
          Estimate
        </button>
      )}

      <button
        onClick={toggleMenu}
        className="p-2 rounded-xl bg-white/5 border border-glass text-gray-400 hover:text-white transition-colors"
        id="mobile-menu-trigger"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 right-0 border-b border-glass bg-glass-heavy backdrop-blur-xl px-4 py-5 space-y-3 shadow-2xl z-50 auto-close"
            id="mobile-dropdown-menu"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleMobileClick(item.id, toggleMenu)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-all flex items-center justify-between ${
                      isActive 
                        ? "bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 text-white border-l-4 border-accent-purple" 
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                    id={`mobile-nav-item-${item.id}`}
                  >
                    {item.label}
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-accent-purple" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-glass flex flex-col gap-2">
              <a
                href="https://wa.me/17042145434"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue hover:from-accent-purple/90 hover:to-accent-blue/90 text-white font-bold text-xs flex items-center justify-center gap-2"
                id="mobile-cta-whatsapp"
              >
                <PhoneCall size={14} />
                WhatsApp Direct: +17042145434
              </a>
              <p className="text-[11px] text-gray-500 text-center">
                VibeGrowth Solution &bull; Digital Freelancer
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
