"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Cpu, Network } from "lucide-react";
import ContactForm from "./ContactForm";
import FloatingWhatsApp from "./FloatingWhatsApp";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { EstimatorProvider, useEstimator } from "./EstimatorContext";

export default function EstimatorWrapper({ children }: { children: React.ReactNode }) {
  return (
    <EstimatorProvider>
      <EstimatorContent>{children}</EstimatorContent>
    </EstimatorProvider>
  );
}

function EstimatorContent({ children }: { children: React.ReactNode }) {
  const { isEstimatorOpen, setIsEstimatorOpen } = useEstimator();

  return (
    <div className="bg-white min-h-screen relative font-sans text-zinc-900 overflow-x-hidden selection:bg-blue-100 selection:text-zinc-900" id="vibe-growth-app">
      {/* Decorative light background grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-blue-50/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 cyber-grid opacity-5" />
      </div>

      <Navbar onOpenEstimator={() => setIsEstimatorOpen(true)} />
      
      <main className="relative z-10">{children}</main>

      <FloatingWhatsApp />
      
      <Footer />

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
    </div>
  );
}
