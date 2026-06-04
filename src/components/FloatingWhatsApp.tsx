import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Award, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);

  // Automatically show a proactive badge prompt after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasPrompted(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleStartChat = () => {
    const message = encodeURIComponent("Hi VibeGrowth Solution! I'm interested in growing my business. Can we talk about a project?");
    window.open(`https://wa.me/17042145434?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {/* Proactive chat notification prompt */}
        {hasPrompted && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="mb-3 max-w-[280px] bg-glass p-4 rounded-2xl border border-glass shadow-2xl backdrop-blur-md relative"
            id="wa-badge-prompt"
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setHasPrompted(false);
              }}
              className="absolute top-2 right-2 text-gray-500 hover:text-white transition-colors"
              id="close-badge-prompt"
            >
              <X size={14} />
            </button>
            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 mt-1.5 animate-ping" />
              <div>
                <p className="text-xs font-semibold text-emerald-400">VibeGrowth Live Support</p>
                <p className="text-sm text-gray-300 font-medium mt-1">
                  💡 Let's scale today! Get a free custom roadmap & project estimate.
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(true);
                setHasPrompted(false);
              }}
              className="mt-2 text-xs text-accent-teal hover:underline font-bold flex items-center gap-1"
              id="badge-chat-btn"
            >
              Chat Instant on WhatsApp &rarr;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.93 }}
            className="w-[330px] rounded-2xl bg-glass-heavy border border-glass shadow-2xl overflow-hidden mb-4"
            id="wa-chat-window"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-violet-950 to-indigo-950 border-b border-glass flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  {/* Clean SVG avatar with V logo */}
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-display font-semibold text-white tracking-widest text-shadow-purple">
                    VG
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0d111c]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-100 flex items-center gap-1">
                    VibeGrowth Solution
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400 fill-blue-400/20" />
                  </h4>
                  <p className="text-[11px] text-gray-400 flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Online &bull; Instant Support
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                id="close-chat-window"
              >
                <X size={16} />
              </button>
            </div>

            {/* Quick trust proof cards */}
            <div className="px-4 py-2 bg-indigo-500/10 border-b border-glass flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-accent-teal" />
              <span className="text-[11px] text-zinc-300 font-medium">99% Client Satisfaction &bull; Expert Team</span>
            </div>

            {/* Simulated Chat Messages */}
            <div className="p-4 space-y-3 max-h-[220px] overflow-y-auto scrollbar-hidden bg-zinc-950/20">
              <div className="bg-white/5 border border-glass p-3 rounded-2xl rounded-tl-none max-w-[90%]">
                <p className="text-[12px] text-zinc-300 leading-relaxed">
                  Hey there! 👋 Welcome to VibeGrowth Solution.
                </p>
              </div>
              <div className="bg-white/5 border border-glass p-3 rounded-2xl rounded-tl-none max-w-[90%]">
                <p className="text-[12px] text-zinc-300 leading-relaxed">
                  We build premium digital systems, websites, automation, and funnels. Ready to turn your site into a high-converting growth engine?
                </p>
                <div className="mt-2 text-[10px] text-indigo-400 font-bold font-mono">
                  🔥 Active Projects: 4 slots left this month
                </div>
              </div>
            </div>

            {/* CTA action input footer */}
            <div className="p-4 border-t border-glass bg-zinc-950/40">
              <button
                onClick={handleStartChat}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-lg shadow-emerald-500/10"
                id="wa-cta-engage"
              >
                <MessageCircle size={18} className="fill-slate-950" />
                Start Chat on WhatsApp
                <Send size={14} className="ml-1" />
              </button>
              <p className="text-[10px] text-gray-500 text-center mt-2.5">
                Will open WhatsApp to chat with +1 (704) 214-5434
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating action button (FAB) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 flex items-center justify-center shadow-xl hover:scale-110 duration-200 cursor-pointer relative group border border-emerald-300/20 active:scale-95 z-50 neon-shadow-blue"
        whileTap={{ scale: 0.95 }}
        id="wa-floating-trigger"
        aria-label="Contact us on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 opacity-25 blur-md group-hover:opacity-55 transition duration-300" />
        <MessageCircle size={30} className="relative z-10 fill-slate-950 text-slate-950" />
        
        {/* Unread message dot */}
        {!isOpen && !hasPrompted && (
          <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-rose-500 text-white font-bold text-[10px] rounded-full flex items-center justify-center border-2 border-slate-950">
            1
          </span>
        )}
      </motion.button>
    </div>
  );
}
