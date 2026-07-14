"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Testimonial } from "../types";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: "review-1",
      name: "Marcus Thorne",
      role: "E-Commerce Founder",
      company: "Velour Activewear",
      content: "VibeGrowth Solution transformed our standard Shopify checkout and configured our Klaviyo automation sequence. In 3 weeks, our store revenue attribution spiked by 42%. Communication over WhatsApp was lightning fast. Extremely professional digital freelancer brand!",
      image: "MT",
      platform: "Direct Client",
      stars: 5
    },
    {
      id: "review-2",
      name: "Sophia Vance",
      role: "Marketing Director",
      company: "Apex Real Estate Systems",
      content: "Our old WordPress site was painfully slow and failed to gather premium leads. VibeGrowth completely re-architected it. Now the loading speed is close to instant and we have clean scheduling forms feeding directly to our CRM. Cannot recommend them enough!",
      image: "SV",
      platform: "Upwork Verified",
      stars: 5
    },
    {
      id: "review-3",
      name: "Dr. Elena Rostova",
      role: "Founder & Creator",
      company: "NeuroCore Wellness Academy",
      content: "To build a dynamic digital course portal and forum was incredibly overwhelming. VibeGrowth set up Teachable and custom Circle.so integration in less than 7 days. Our students love the clean onboarding sequence. Professional, strategic, and high-quality.",
      image: "ER",
      platform: "Direct Client",
      stars: 5
    },
    {
      id: "review-4",
      name: "Jordan Brody",
      role: "SaaS Product Lead",
      company: "FlowSync Logistics",
      content: "Excellent landing funnel design! Everything from the visual layout choices to the copy suggestions makes total sense. They understand exactly how to drive users into taking targeted action. Conversion rate on our beta list sits at a steady 28%! Outstanding.",
      image: "JB",
      platform: "Upwork Verified",
      stars: 5
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 sm:py-28 relative bg-white border-t border-zinc-200/60" id="testimonials-section">
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section header */}
        <div className="space-y-4 max-w-xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest text-blue-600 font-bold">
            <Sparkles size={11} className="text-blue-600 animate-pulse" />
            Vouching For Our Delivery
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-950 tracking-tight">
            Loved By Ambitious Brands
          </h2>
          <p className="text-zinc-600 text-xs sm:text-sm font-normal">
            We build collaborative partnerships. See what other founders, creators, and marketers say about the VibeGrowth Solution transformation workflow.
          </p>
        </div>

        {/* Carousel testimonial box */}
        <div className="relative min-h-[350px] sm:min-h-[310px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.35 }}
              className="w-full bg-[#fcfbf7] border border-zinc-200 p-6 sm:p-10 rounded-2xl text-left relative overflow-hidden flex flex-col justify-between shadow-sm"
              id={`testimonial-slide-${currentTestimonial.id}`}
            >
              {/* Giant background quotes */}
              <Quote className="absolute right-6 top-6 w-24 h-24 text-zinc-900/[0.02] pointer-events-none" />

              <div>
                {/* Visual Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(currentTestimonial.stars)].map((_, i) => (
                    <Star key={i} size={15} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Review Text Block */}
                <blockquote className="text-sm sm:text-base text-zinc-800 leading-relaxed font-normal mb-6">
                  "{currentTestimonial.content}"
                </blockquote>
              </div>

              {/* Bottom profile info row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-zinc-200 pt-6">
                <div className="flex items-center gap-3">
                  {/* Virtual initials avatar */}
                  <div className="w-10 h-10 rounded-xl bg-blue-600 font-display font-extrabold text-white flex items-center justify-center text-xs shadow-sm">
                    {currentTestimonial.image}
                  </div>
                  <div>
                    <cite className="font-display font-bold text-zinc-950 not-italic text-sm sm:text-base block">
                      {currentTestimonial.name}
                    </cite>
                    <span className="text-[11px] text-zinc-500 font-sans">
                      {currentTestimonial.role} &bull; <strong className="text-zinc-800">{currentTestimonial.company}</strong>
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-blue-50 border border-blue-100 text-[10px] font-mono tracking-tight text-blue-600 uppercase font-semibold">
                  <CheckCircle size={10} className="text-blue-600" />
                  {currentTestimonial.platform}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel indicators & toggles */}
        <div className="flex items-center justify-between mt-8" id="carousel-controls">
          <div className="flex gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? "bg-blue-600 w-6" : "bg-zinc-200 hover:bg-zinc-300"
                }`}
                id={`carousel-indicator-${idx}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 sm:p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950 transition-all cursor-pointer"
              id="carousel-prev-btn"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 sm:p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950 transition-all cursor-pointer"
              id="carousel-next-btn"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
