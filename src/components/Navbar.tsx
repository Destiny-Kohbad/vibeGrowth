import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, PhoneCall, Sparkles, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import VibeGrowthLogo from "./VibeGrowthLogo";

interface NavbarProps {
  onOpenEstimator?: () => void;
}

export default function Navbar({ onOpenEstimator }: NavbarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "services", label: "Our Services", path: "/services" },
    { id: "portfolio", label: "Portfolio", path: "/portfolio" },
    { id: "about", label: "About", path: "/about" },
    { id: "blog", label: "Blog Insights", path: "/blog" },
    { id: "contact", label: "Contact & Leads", path: "/contact" },
  ];

  const currentPath = location.pathname;
  let activeTab = "home";
  if (currentPath === "/services") activeTab = "services";
  else if (currentPath === "/portfolio") activeTab = "portfolio";
  else if (currentPath === "/about") activeTab = "about";
  else if (currentPath.startsWith("/blog")) activeTab = "blog";
  else if (currentPath === "/contact") activeTab = "contact";

  const handleMobileClick = (path: string, toggleMenu: () => void) => {
    navigate(path);
    toggleMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          
          {/* Brand Logo with VibeGrowth icon */}
          <div 
            onClick={handleLogoClick}
            className="flex items-center gap-3 cursor-pointer group"
            id="nav-logo-container"
          >
            <VibeGrowthLogo size={42} className="group-hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-zinc-950 group-hover:text-blue-600 transition-colors duration-300">
                VibeGrowth
              </span>
              <span className="font-mono text-[9px] tracking-[0.18em] text-blue-600 uppercase font-bold">
                Small Business Scale
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-50 border border-zinc-200/60 rounded-full px-2 py-1" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`relative px-4 py-2 rounded-full font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive ? "text-blue-600 font-bold" : "text-zinc-600 hover:text-zinc-900"
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-bg"
                      className="absolute inset-0 bg-blue-50/80 border border-blue-100/60 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Group Buttons */}
          <div className="hidden lg:flex items-center gap-3" id="desktop-cta-group">
            {onOpenEstimator && (
              <button
                onClick={onOpenEstimator}
                className="px-4 py-2 rounded-xl bg-white border border-zinc-200 text-xs font-semibold hover:bg-zinc-50 text-zinc-800 inline-flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                id="navbar-estimator-btn"
              >
                <Sparkles size={13} className="text-blue-600 animate-pulse" />
                Cost Estimator
              </button>
            )}

            <a
              href="https://wa.me/17042145434"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl bg-zinc-950 hover:bg-blue-600 text-white font-bold text-xs inline-flex items-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-sm cursor-pointer"
              id="navbar-whatsapp-cta"
            >
              <MessageSquare size={14} className="fill-white/10" />
              Free SEO Consult
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
function MobileNavToggle({ navItems, activeTab, handleMobileClick, onOpenEstimator }: {
  navItems: Array<{id: string, label: string, path: string}>,
  activeTab: string,
  handleMobileClick: (path: string, toggle: () => void) => void,
  onOpenEstimator?: () => void
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden flex items-center gap-2">
      {onOpenEstimator && (
        <button
          onClick={onOpenEstimator}
          className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100 text-[11px] font-semibold text-blue-600 flex items-center gap-1 cursor-pointer"
          id="mobile-quick-estimator-btn"
        >
          <Sparkles size={11} />
          Estimate
        </button>
      )}

      <button
        onClick={toggleMenu}
        className="p-2 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer"
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
            className="absolute top-16 left-0 right-0 border-b border-zinc-200 bg-white px-4 py-5 space-y-3 shadow-2xl z-50 auto-close"
            id="mobile-dropdown-menu"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleMobileClick(item.path, toggleMenu)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-all flex items-center justify-between cursor-pointer ${
                      isActive 
                        ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-bold" 
                        : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                    }`}
                    id={`mobile-nav-item-${item.id}`}
                  >
                    {item.label}
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-zinc-100 flex flex-col gap-2">
              <a
                href="https://wa.me/17042145434"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
                className="w-full py-3 px-4 rounded-xl bg-zinc-950 hover:bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2"
                id="mobile-cta-whatsapp"
              >
                <PhoneCall size={14} />
                WhatsApp Direct: +17042145434
              </a>
              <p className="text-[11px] text-zinc-500 text-center">
                VibeGrowth &bull; Helping Small Businesses Scale
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
