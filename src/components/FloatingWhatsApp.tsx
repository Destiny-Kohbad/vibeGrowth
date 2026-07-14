"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Award, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import VibeGrowthLogo from "./VibeGrowthLogo";

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
            className="mb-3 max-w-[280px] bg-white p-4 rounded-2xl border border-zinc-200 shadow-2xl relative text-left"
            id="wa-badge-prompt"
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setHasPrompted(false);
              }}
              className="absolute top-2 right-2 text-zinc-400 hover:text-zinc-800 transition-colors cursor-pointer"
              id="close-badge-prompt"
            >
              <X size={14} />
            </button>
            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-1.5 animate-ping" />
              <div>
                <p className="text-xs font-bold text-blue-600">VibeGrowth Live Support</p>
                <p className="text-sm text-zinc-700 font-medium mt-1">
                  💡 Let's scale today! Get a free custom roadmap & project estimate.
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(true);
                setHasPrompted(false);
              }}
              className="mt-2 text-xs text-blue-600 hover:underline font-bold flex items-center gap-1 cursor-pointer"
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
            className="w-[330px] rounded-2xl bg-white border border-zinc-200 shadow-2xl overflow-hidden mb-4"
            id="wa-chat-window"
          >
            {/* Header */}
            <div className="p-4 bg-zinc-950 text-white border-b border-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  {/* Clean avatar with VibeGrowth logo */}
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <VibeGrowthLogo size={28} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-zinc-950" />
                </div>
                <div className="text-left">
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
                className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-gray-400 hover:text-white transition-colors cursor-pointer"
                id="close-chat-window"
              >
                <X size={16} />
              </button>
            </div>

            {/* Quick trust proof cards */}
            <div className="px-4 py-2 bg-blue-50 border-b border-zinc-100 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[11px] text-blue-700 font-semibold">99% Client Satisfaction &bull; Expert Team</span>
            </div>

            {/* Simulated Chat Messages */}
            <div className="p-4 space-y-3 max-h-[220px] overflow-y-auto scrollbar-hidden bg-zinc-50 text-left">
              <div className="bg-white border border-zinc-200 p-3 rounded-2xl rounded-tl-none max-w-[90%] shadow-sm">
                <p className="text-[12px] text-zinc-700 leading-relaxed font-normal">
                  Hey there! 👋 Welcome to VibeGrowth Solution.
                </p>
              </div>
              <div className="bg-white border border-zinc-200 p-3 rounded-2xl rounded-tl-none max-w-[90%] shadow-sm">
                <p className="text-[12px] text-zinc-700 leading-relaxed font-normal">
                  We build premium digital systems, websites, automation, and funnels. Ready to turn your site into a high-converting growth engine?
                </p>
                <div className="mt-2 text-[10px] text-blue-600 font-bold font-mono uppercase">
                  🔥 Active Projects: 4 slots left this month
                </div>
              </div>
            </div>

            {/* CTA action input footer */}
            <div className="p-4 border-t border-zinc-200 bg-white">
              <button
                onClick={handleStartChat}
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-sm"
                id="wa-cta-engage"
              >
                <MessageCircle size={18} className="fill-white/10" />
                Start Chat on WhatsApp
                <Send size={14} className="ml-1" />
              </button>
              <p className="text-[10px] text-zinc-400 text-center mt-2.5">
                Will open WhatsApp to chat with +1 (704) 214-5434
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating action button (FAB) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl hover:scale-110 duration-200 cursor-pointer relative group border border-blue-500/20 active:scale-95 z-50"
        whileTap={{ scale: 0.95 }}
        id="wa-floating-trigger"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={30} className="relative z-10 fill-white/10 text-white" />
        
        {/* Unread message dot */}
        {!isOpen && !hasPrompted && (
          <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-rose-500 text-white font-bold text-[10px] rounded-full flex items-center justify-center border-2 border-white">
            1
          </span>
        )}
      </motion.button>
    </div>
  );
}
