"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { 
  Send, 
  Mail, 
  MessageSquare, 
  CheckCircle, 
  Smartphone, 
  Plus, 
  ArrowRight, 
  DollarSign, 
  Clock, 
  Activity, 
  Sparkles 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactFormProps {
  initialProjectType?: string;
  isModalStyle?: boolean;
}

export default function ContactForm({ initialProjectType = "web-design", isModalStyle = false }: ContactFormProps) {
  // Form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: initialProjectType,
    message: "",
    customBudget: "1500",
    phone: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [estimateScope, setEstimateScope] = useState({
    webPages: 5,
    wantsKlaviyo: true,
    wantsSEO: true,
    wantsCopywriting: false
  });

  // Calculate dynamic pricing estimate to simulate a genuine, premium professional pricing calculator
  const calculateRate = () => {
    let base = 0;
    switch (formData.projectType) {
      case "web-design":
        // Base starting price of 250 for a professional project scope, plus 80 dollars per page
        base = 250 + (estimateScope.webPages * 80);
        if (estimateScope.wantsSEO) base += 80;
        break;
      case "custom-code":
        // Custom coded apps have premium code-level development, starting at 350 plus 90 dollars per page
        base = 350 + (estimateScope.webPages * 90);
        if (estimateScope.wantsSEO) base += 80;
        break;
      case "email-marketing":
        base = 300;
        if (estimateScope.wantsKlaviyo) base += 120;
        if (estimateScope.wantsCopywriting) base += 100;
        break;
      case "funnel":
        base = 350;
        if (estimateScope.wantsSEO) base += 80;
        if (estimateScope.wantsCopywriting) base += 120;
        break;
      case "shopify":
        base = 450 + (estimateScope.webPages * 80);
        if (estimateScope.wantsSEO) base += 80;
        break;
      case "graphics":
        base = 250;
        break;
      case "communities":
        base = 400;
        if (estimateScope.wantsCopywriting) base += 150;
        break;
      default:
        base = 500;
    }
    // Capped between 250 and 1000 according to user limits
    return Math.max(250, Math.min(1000, base));
  };

  const getEstimatedDays = () => {
    switch (formData.projectType) {
      case "web-design": return "6 - 10 business days";
      case "custom-code": return "6 - 12 business days";
      case "email-marketing": return "4 - 7 business days";
      case "funnel": return "5 - 8 business days";
      case "shopify": return "9 - 15 business days";
      case "graphics": return "2 - 4 business days";
      case "communities": return "7 - 12 business days";
      default: return "5 - 8 days";
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Simulate database delivery / lead triggers
    console.log("Saving lead information:", {
      ...formData,
      estimate: calculateRate(),
      scopeSelected: estimateScope,
      submittedAt: new Date().toISOString()
    });

    setIsSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    // Generate text representing selected metrics & contact data to optimize leads directly into freelancer phone!
    const textMessage = `Hello VibeGrowth Solution! 👋\n\nI just filled out a quote proposal on vibegrowthsolution.com:\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone || "Not specified"}\n*Project Type:* ${formData.projectType}\n*Scope Estimate:* $${calculateRate()}\n*Brief Message:* ${formData.message || "Ready to get started!"}\n\nLet's schedule a call!`;
    window.open(`https://wa.me/17042145434?text=${encodeURIComponent(textMessage)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={`${isModalStyle ? "py-4" : "py-20 sm:py-28 bg-white border-b border-zinc-200/60"} relative`} id="contact-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Only show if not inline modal style) */}
        {!isModalStyle && (
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-mono uppercase tracking-widest font-bold">
              <Activity size={12} className="animate-pulse" />
              Let's Build Systems
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-zinc-950 tracking-tight">
              Ready to Accelerate Growth?
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-normal">
              Submit your project details below to receive a custom proposal roadmap or hook up immediately on WhatsApp for a personalized digital audit.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column Left: Contact Details & Lead Calculator */}
          <div className="lg:col-span-5 space-y-6" id="contact-details-col">
            
            {/* Direct Channels Cards */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 space-y-4 shadow-sm">
              <h3 className="text-lg font-display font-extrabold text-zinc-950">Direct Communication</h3>
              
              <div className="space-y-3">
                {/* Email Address */}
                <a 
                  href="mailto:hello@vibegrowthsolution.com"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 transition-colors group cursor-pointer"
                  id="direct-email-link"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 duration-200">
                    <Mail size={16} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-mono text-zinc-500 uppercase leading-none">Primary Email Address</p>
                    <p className="text-sm font-semibold text-zinc-950 mt-1">hello@vibegrowthsolution.com</p>
                  </div>
                </a>

                {/* WhatsApp Chat link */}
                <a 
                  href="https://wa.me/17042145434"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 transition-colors group cursor-pointer"
                  id="direct-whatsapp-link"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 duration-200">
                    <MessageSquare size={16} className="fill-blue-600/10" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-mono text-zinc-500 uppercase leading-none font-bold">Interactive WhatsApp</p>
                    <p className="text-sm font-semibold text-zinc-950 mt-1">+1 (704) 214-5434</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Interactive Dynamic Price & Scoping Estimate Slider widget */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 space-y-4 relative overflow-hidden shadow-sm" id="scope-matrix-widget">
              {/* Abs decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/45 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-blue-600 tracking-wider uppercase flex items-center gap-1">
                  <Sparkles size={11} />
                  Interactive Setup Calculator
                </span>
                <span className="text-[10px] text-zinc-500 font-mono uppercase bg-zinc-50 px-2 py-0.5 rounded border border-zinc-200">
                  ESTIMATE SYSTEM
                </span>
              </div>

              {/* Dynamic Quote Box result */}
              <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-xl space-y-2 text-center">
                <p className="text-[11px] text-zinc-500 font-mono uppercase leading-none">Estimated Investment Budget</p>
                <div className="flex items-center justify-center gap-1 py-1.5">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  <span className="text-3xl font-display font-extrabold text-blue-600">
                    {calculateRate()}
                  </span>
                  <span className="text-xs text-zinc-500 self-end mb-1">USD</span>
                </div>
                
                <div className="flex items-center justify-center gap-4 text-[10px] text-zinc-400 border-t border-zinc-200 pt-2 font-mono">
                  <span className="flex items-center gap-1 text-zinc-500">
                    <Clock size={11} className="text-blue-600" />
                    {getEstimatedDays()}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                  <span className="text-zinc-500">Includes Support</span>
                </div>
              </div>

              {/* Scoping Options depending on Active Project Type */}
              <div className="space-y-3 pt-2 text-left text-xs text-zinc-700">
                <p className="font-bold text-zinc-800 text-[11px] font-mono uppercase tracking-tighter">Tune Selected Scope Parameters:</p>

                {(formData.projectType === "web-design" || formData.projectType === "shopify" || formData.projectType === "custom-code") && (
                  <div className="space-y-3 bg-zinc-50 p-3 rounded-lg border border-zinc-200">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-zinc-600">Number of Custom Pages: <strong className="text-blue-600">{estimateScope.webPages}</strong></span>
                      <input 
                        type="range" 
                        min="1" 
                        max="15" 
                        value={estimateScope.webPages}
                        onChange={(e) => setEstimateScope(prev => ({...prev, webPages: parseInt(e.target.value)}))}
                        className="w-24 accent-blue-600 cursor-pointer"
                        id="web-pages-range"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-zinc-600">Wants SEO Setup (+ $80)</span>
                      <input 
                        type="checkbox" 
                        checked={estimateScope.wantsSEO}
                        onChange={(e) => setEstimateScope(prev => ({...prev, wantsSEO: e.target.checked}))}
                        className="w-4 h-4 rounded text-blue-600 bg-white border-zinc-300 cursor-pointer accent-blue-600"
                        id="seo-checkbox"
                      />
                    </div>
                  </div>
                )}

                {formData.projectType === "email-marketing" && (
                  <div className="space-y-3 bg-zinc-50 p-3 rounded-lg border border-zinc-200">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-zinc-600">Include Advanced Klaviyo flows (+ $120)</span>
                      <input 
                        type="checkbox" 
                        checked={estimateScope.wantsKlaviyo}
                        onChange={(e) => setEstimateScope(prev => ({...prev, wantsKlaviyo: e.target.checked}))}
                        className="w-4 h-4 rounded text-blue-600 bg-white border-zinc-300 cursor-pointer accent-blue-600"
                        id="klaviyo-checkbox"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-zinc-600">Need Professional Copywriting (+ $100)</span>
                      <input 
                        type="checkbox" 
                        checked={estimateScope.wantsCopywriting}
                        onChange={(e) => setEstimateScope(prev => ({...prev, wantsCopywriting: e.target.checked}))}
                        className="w-4 h-4 rounded text-blue-600 bg-white border-zinc-300 cursor-pointer accent-blue-600"
                        id="copy-checkbox"
                      />
                    </div>
                  </div>
                )}

                {formData.projectType === "funnel" && (
                  <div className="space-y-3 bg-zinc-50 p-3 rounded-lg border border-zinc-200">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-zinc-600">Include Tracking Pixels (+ $80)</span>
                      <input 
                        type="checkbox" 
                        checked={estimateScope.wantsSEO}
                        onChange={(e) => setEstimateScope(prev => ({...prev, wantsSEO: e.target.checked}))}
                        className="w-4 h-4 rounded text-blue-600 bg-white border-zinc-300 cursor-pointer accent-blue-600"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-zinc-600">Include High-Convert Copywriting (+ $120)</span>
                      <input 
                        type="checkbox" 
                        checked={estimateScope.wantsCopywriting}
                        onChange={(e) => setEstimateScope(prev => ({...prev, wantsCopywriting: e.target.checked}))}
                        className="w-4 h-4 rounded text-blue-600 bg-white border-zinc-300 cursor-pointer accent-blue-600"
                      />
                    </div>
                  </div>
                )}

                {formData.projectType === "communities" && (
                  <div className="space-y-3 bg-zinc-50 p-3 rounded-lg border border-zinc-200">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-zinc-600">Setup Lessons Copylists (+ $150)</span>
                      <input 
                        type="checkbox" 
                        checked={estimateScope.wantsCopywriting}
                        onChange={(e) => setEstimateScope(prev => ({...prev, wantsCopywriting: e.target.checked}))}
                        className="w-4 h-4 rounded text-blue-600 bg-white border-zinc-300 cursor-pointer accent-blue-600"
                      />
                    </div>
                  </div>
                )}

                <p className="text-[10px] text-zinc-400 italic">
                  Note: Budgets are flexible. We work around clients' budgets during kickoff call.
                </p>
              </div>
            </div>

          </div>

          {/* Column Right: Elegant Form Panel with Succ State */}
          <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-2xl p-6 sm:p-10 relative shadow-sm" id="contact-form-col">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="lead-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-left"
                  id="target-lead-form"
                >
                  <div className="space-y-1.5 border-b border-zinc-100 pb-3">
                    <h3 className="text-xl font-display font-extrabold text-zinc-950">Project Proposal Setup</h3>
                    <p className="text-xs text-zinc-500">Tell us what you are scaling. Typically replies in less than 2 hours.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name-input" className="block text-xs font-mono uppercase text-zinc-500 tracking-wider font-semibold">
                        Your Full Name *
                      </label>
                      <input 
                        type="text" 
                        id="name-input"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. David Aland"
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all duration-200"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email-input" className="block text-xs font-mono uppercase text-zinc-500 tracking-wider font-semibold">
                        Your Professional Email *
                      </label>
                      <input 
                        type="email" 
                        id="email-input"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="david@company.com"
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Project Type Selection Dropdown */}
                    <div className="space-y-2">
                      <label htmlFor="project-type-input" className="block text-xs font-mono uppercase text-zinc-500 tracking-wider font-semibold">
                        Project Core Focus
                      </label>
                      <select 
                        id="project-type-input"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all duration-200 cursor-pointer"
                      >
                        <option value="custom-code">Custom Coded Web Apps & Sites ($0 Hosting)</option>
                        <option value="web-design">Website (WordPress / Wix)</option>
                        <option value="email-marketing">Email Marketing Setup (Klaviyo)</option>
                        <option value="funnel">Landing Funnel Setup</option>
                        <option value="shopify">Shopify Development & Speed</option>
                        <option value="graphics">Graphic Design & Thumbnails</option>
                        <option value="communities">Course & Circle Community Portals</option>
                      </select>
                    </div>

                    {/* Phone for fast WhatsApp fallback */}
                    <div className="space-y-2">
                      <label htmlFor="phone-input" className="block text-xs font-mono uppercase text-zinc-500 tracking-wider font-semibold">
                        WhatsApp Number (Optional)
                      </label>
                      <input 
                        type="text" 
                        id="phone-input"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (704) 214-5434"
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message-input" className="block text-xs font-mono uppercase text-zinc-500 tracking-wider font-semibold">
                      Brief project goals or description
                    </label>
                    <textarea 
                      id="message-input"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi VibeGrowth, I need to setup a high-converting landing page to connect to my email newsletters..."
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-zinc-950 text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors duration-200 shadow-sm cursor-pointer"
                    id="lead-submit-btn"
                  >
                    <Send size={15} />
                    Let's Work Together
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8 py-8 text-center"
                  id="lead-success-panel"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle size={32} />
                  </div>
                  
                  <div className="space-y-3 max-w-lg mx-auto">
                    <h3 className="text-2xl font-display font-extrabold text-zinc-950">Proposal Received Flawlessly!</h3>
                    <p className="text-sm text-zinc-600 font-normal leading-relaxed">
                      Thanks, <strong className="text-zinc-900">{formData.name}</strong>. We've compiled your customized project scope details (estimated at <strong className="text-blue-600">${calculateRate()} USD</strong>).
                    </p>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      Our experts are already analyzing your domain. To fast-track scheduling, you can immediately initiate a secure direct WhatsApp chat using your compiled parameters!
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-950 hover:bg-blue-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2.5 shadow-sm cursor-pointer"
                      id="success-whatsapp-forward"
                    >
                      <MessageSquare size={16} className="fill-white/10" />
                      Forward Parameters to WhatsApp Instant
                    </button>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-zinc-500 hover:text-zinc-950 transition-colors cursor-pointer"
                      id="reset-form-btn"
                    >
                      &larr; Back to scoping form
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
