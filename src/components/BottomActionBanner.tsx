"use client";

import { useRouter } from "next/navigation";
import { Sparkles, MessageCircle } from "lucide-react";

export default function BottomActionBanner() {
  const router = useRouter();
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
                router.push("/contact");
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
