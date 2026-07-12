import { Mail, MessageSquare, ArrowUp, Sparkles, MapPin, Award } from "lucide-react";
import VibeGrowthLogo from "./VibeGrowthLogo";

interface FooterProps {
  onSetActiveTab: (tab: string) => void;
  activeTab: string;
}

export default function Footer({ onSetActiveTab, activeTab }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { id: "home", label: "Home Base" },
    { id: "services", label: "System Services" },
    { id: "about", label: "Brand Values" },
    { id: "contact", label: "Request Proposal" }
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 relative overflow-hidden" id="page-footer">
      <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 text-left">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-8 border-b border-zinc-900">
          
          {/* Brand Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <VibeGrowthLogo size={36} />
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-sm tracking-tight text-white uppercase">VIBEGROWTH</span>
                <span className="font-mono text-[9px] tracking-widest text-blue-500 uppercase font-bold">SOLUTION</span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs font-normal leading-relaxed max-w-sm">
              Helping businesses, e-commerce founders, and creators grow online through polished conversion-focused web systems, Klaviyo triggers, and automated funnels.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
              <MapPin size={12} className="text-zinc-600" />
              <span>Worldwide Digital Optimization Agency</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">Brand Map</h4>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onSetActiveTab(item.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`text-xs hover:text-white transition-all cursor-pointer ${
                      activeTab === item.id ? "text-blue-500 font-semibold" : "text-zinc-400 font-light"
                    }`}
                    id={`footer-link-${item.id}`}
                  >
                    {item.label} &rarr;
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact coordinates & details */}
          <div className="md:col-span-4 space-y-4 text-xs">
            <h4 className="font-mono font-bold uppercase tracking-wider text-zinc-300">Channels</h4>
            
            <div className="space-y-2 text-zinc-400 font-normal">
              <p className="flex items-center gap-2">
                <Mail size={12} className="text-blue-500" />
                <span>hello@vibegrowthsolution.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare size={12} className="text-blue-500" />
                <span>WhatsApp: +1 (704) 214-5434</span>
              </p>
            </div>

            {/* Quick badge */}
            <div className="inline-flex items-center gap-1 bg-white/5 border border-zinc-800 px-2.5 py-1 rounded text-[10px] font-mono tracking-tight text-blue-400">
              <Award size={10} />
              <span>Expert Shopify & Wix Partners</span>
            </div>
          </div>

        </div>

        {/* Lower row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-zinc-500">
          <div className="space-y-1 text-center sm:text-left">
            <p>&copy; 2026 VibeGrowth Solution. All rights secured.</p>
            <p className="font-mono text-[9px] text-zinc-600 uppercase">
              vibegrowthsolution.com &bull; Developed by VG Pro
            </p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="p-2 bg-white/5 hover:bg-white/10 border border-zinc-800 text-zinc-400 hover:text-white rounded-xl transition-all flex items-center gap-1 font-mono text-[10px] uppercase cursor-pointer"
            id="back-to-top-footer"
          >
            <span>Back to top</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}
