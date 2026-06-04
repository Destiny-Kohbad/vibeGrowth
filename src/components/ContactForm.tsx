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
    <section className={`${isModalStyle ? "py-4" : "py-20 sm:py-28"} relative bg-primary-dark`} id="contact-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Only show if not inline modal style) */}
        {!isModalStyle && (
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-xs font-mono uppercase tracking-widest">
              <Activity size={12} className="animate-pulse" />
              Let's Build Systems
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight">
              Ready to Accelerate Growth?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light">
              Submit your project details below to receive a custom proposal roadmap or hook up immediately on WhatsApp for a personalized Vibe audit.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column Left: Contact Details & Lead Calculator */}
          <div className="lg:col-span-5 space-y-6" id="contact-details-col">
            
            {/* Direct Channels Cards */}
            <div className="bg-glass border border-glass rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-display font-extrabold text-white">Direct Communication</h3>
              
              <div className="space-y-3">
                {/* Email Address */}
                <a 
                  href="mailto:hello@vibegrowthsolution.com"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-glass hover:bg-white/10 transition-colors group cursor-pointer"
                  id="direct-email-link"
                >
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-105 duration-200">
                    <Mail size={16} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-mono text-zinc-400 uppercase leading-none">Primary Email Address</p>
                    <p className="text-sm font-semibold text-white mt-1">hello@vibegrowthsolution.com</p>
                  </div>
                </a>

                {/* WhatsApp Chat link */}
                <a 
                  href="https://wa.me/17042145434"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors group cursor-pointer"
                  id="direct-whatsapp-link"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 duration-200">
                    <MessageSquare size={16} className="fill-emerald-400/10" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-mono text-emerald-400 uppercase leading-none">Interactive WhatsApp</p>
                    <p className="text-sm font-semibold text-white mt-1">+1 (704) 214-5434</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Interactive Dynamic Price & Scoping Estimate Slider widget */}
            <div className="bg-glass-heavy border border-glass-glow rounded-2xl p-6 space-y-4 relative overflow-hidden" id="scope-matrix-widget">
              {/* Abs decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-teal/10 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-accent-teal tracking-wider uppercase flex items-center gap-1">
                  <Sparkles size={11} />
                  Interactive Setup Calculator
                </span>
                <span className="text-[10px] text-zinc-500 font-mono uppercase bg-white/5 px-2 py-0.5 rounded">
                  ESTIMATE SYSTEM
                </span>
              </div>

              {/* Dynamic Quote Box result */}
              <div className="bg-zinc-950/40 border border-glass p-4 rounded-xl space-y-2 text-center">
                <p className="text-[11px] text-zinc-400 font-mono uppercase leading-none">Estimated Investment Budget</p>
                <div className="flex items-center justify-center gap-1 py-1.5">
                  <DollarSign className="w-5 h-5 text-accent-teal" />
                  <span className="text-3xl font-display font-black text-white text-shadow-purple">
                    {calculateRate()}
                  </span>
                  <span className="text-xs text-zinc-400 self-end mb-1">USD</span>
                </div>
                
                <div className="flex items-center justify-center gap-4 text-[10px] text-zinc-400 border-t border-zinc-900 pt-2 font-mono">
                  <span className="flex items-center gap-1">
                    <Clock size={11} className="text-accent-purple" />
                    {getEstimatedDays()}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                  <span>Includes Support</span>
                </div>
              </div>

              {/* Scoping Options depending on Active Project Type */}
              <div className="space-y-3 pt-2 text-left text-xs text-zinc-300">
                <p className="font-bold text-zinc-200 text-[11px] font-mono uppercase tracking-tighter">Tune Selected Scope Parameters:</p>

                {(formData.projectType === "web-design" || formData.projectType === "shopify") && (
                  <div className="space-y-3 bg-white/5 p-3 rounded-lg border border-glass">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px]">Number of Custom Pages: <strong className="text-accent-teal">{estimateScope.webPages}</strong></span>
                      <input 
                        type="range" 
                        min="1" 
                        max="15" 
                        value={estimateScope.webPages}
                        onChange={(e) => setEstimateScope(prev => ({...prev, webPages: parseInt(e.target.value)}))}
                        className="w-24 accent-violet-500 cursor-pointer"
                        id="web-pages-range"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-[11px]">Wants SEO Setup (+ $80)</span>
                      <input 
                        type="checkbox" 
                        checked={estimateScope.wantsSEO}
                        onChange={(e) => setEstimateScope(prev => ({...prev, wantsSEO: e.target.checked}))}
                        className="w-4 h-4 rounded text-accent-purple bg-zinc-900 border-glass cursor-pointer"
                        id="seo-checkbox"
                      />
                    </div>
                  </div>
                )}

                {formData.projectType === "email-marketing" && (
                  <div className="space-y-3 bg-white/5 p-3 rounded-lg border border-glass">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px]">Include Advanced Klaviyo flows (+ $120)</span>
                      <input 
                        type="checkbox" 
                        checked={estimateScope.wantsKlaviyo}
                        onChange={(e) => setEstimateScope(prev => ({...prev, wantsKlaviyo: e.target.checked}))}
                        className="w-4 h-4 rounded text-accent-purple bg-zinc-900 border-glass cursor-pointer"
                        id="klaviyo-checkbox"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[11px]">Need Professional Copywriting (+ $100)</span>
                      <input 
                        type="checkbox" 
                        checked={estimateScope.wantsCopywriting}
                        onChange={(e) => setEstimateScope(prev => ({...prev, wantsCopywriting: e.target.checked}))}
                        className="w-4 h-4 rounded text-accent-purple bg-zinc-900 border-glass cursor-pointer"
                        id="copy-checkbox"
                      />
                    </div>
                  </div>
                )}

                {formData.projectType === "funnel" && (
                  <div className="space-y-3 bg-white/5 p-3 rounded-lg border border-glass">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px]">Include Tracking Pixels (+ $80)</span>
                      <input 
                        type="checkbox" 
                        checked={estimateScope.wantsSEO}
                        onChange={(e) => setEstimateScope(prev => ({...prev, wantsSEO: e.target.checked}))}
                        className="w-4 h-4 rounded text-accent-purple bg-zinc-900 border-glass cursor-pointer"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[11px]">Include High-Convert Copywriting (+ $120)</span>
                      <input 
                        type="checkbox" 
                        checked={estimateScope.wantsCopywriting}
                        onChange={(e) => setEstimateScope(prev => ({...prev, wantsCopywriting: e.target.checked}))}
                        className="w-4 h-4 rounded text-accent-purple bg-zinc-900 border-glass cursor-pointer"
                      />
                    </div>
                  </div>
                )}

                {formData.projectType === "communities" && (
                  <div className="space-y-3 bg-white/5 p-3 rounded-lg border border-glass">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px]">Setup Lessons Copylists (+ $150)</span>
                      <input 
                        type="checkbox" 
                        checked={estimateScope.wantsCopywriting}
                        onChange={(e) => setEstimateScope(prev => ({...prev, wantsCopywriting: e.target.checked}))}
                        className="w-4 h-4 rounded text-accent-purple bg-zinc-900 border-glass cursor-pointer"
                      />
                    </div>
                  </div>
                )}

                <p className="text-[10px] text-zinc-500 italic">
                  Note: Budgets are flexible. We work around clients' budgets during kickoff call.
                </p>
              </div>
            </div>

          </div>

          {/* Column Right: Elegant Form Panel with Succ State */}
          <div className="lg:col-span-7 bg-glass border border-glass rounded-2xl p-6 sm:p-10 relative" id="contact-form-col">
            
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
                  <div className="space-y-1.5 border-b border-zinc-800 pb-3">
                    <h3 className="text-xl font-display font-extrabold text-white">Project Proposal Setup</h3>
                    <p className="text-xs text-zinc-400">Tell us what you are scaling. Typically replies in less than 2 hours.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name-input" className="block text-xs font-mono uppercase text-zinc-400 tracking-wider">
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
                        className="w-full px-4 py-3 bg-zinc-950/60 border border-glass rounded-xl text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email-input" className="block text-xs font-mono uppercase text-zinc-400 tracking-wider">
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
                        className="w-full px-4 py-3 bg-zinc-950/60 border border-glass rounded-xl text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Project Type Selection Dropdown */}
                    <div className="space-y-2">
                      <label htmlFor="project-type-input" className="block text-xs font-mono uppercase text-zinc-400 tracking-wider">
                        Project Core Focus
                      </label>
                      <select 
                        id="project-type-input"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-950/60 border border-glass rounded-xl text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 transition-colors cursor-pointer"
                      >
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
                      <label htmlFor="phone-input" className="block text-xs font-mono uppercase text-zinc-400 tracking-wider">
                        WhatsApp Number (Optional)
                      </label>
                      <input 
                        type="text" 
                        id="phone-input"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (704) 214-5434"
                        className="w-full px-4 py-3 bg-zinc-950/60 border border-glass rounded-xl text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message-input" className="block text-xs font-mono uppercase text-zinc-400 tracking-wider">
                      Brief project goals or description
                    </label>
                    <textarea 
                      id="message-input"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi VibeGrowth, I need to setup a high-converting landing page to connect to my email newsletters..."
                      className="w-full px-4 py-3 bg-zinc-950/60 border border-glass rounded-xl text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform duration-200 shadow-lg shadow-purple-500/10 cursor-pointer"
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
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle size={32} />
                  </div>
                  
                  <div className="space-y-3 max-w-lg mx-auto">
                    <h3 className="text-2xl font-display font-extrabold text-white">Proposal Received Flawlessly!</h3>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed">
                      Thanks, <strong className="text-white">{formData.name}</strong>. We've compiled your customized project scope details (estimated at <strong className="text-emerald-400">${calculateRate()} USD</strong>).
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Our experts are already analyzing your domain. To fast-track scheduling, you can immediately initiate a secure direct WhatsApp chat using your compiled parameters!
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-500/20 cursor-pointer"
                      id="success-whatsapp-forward"
                    >
                      <MessageSquare size={16} className="fill-slate-950/40" />
                      Forward Parameters to WhatsApp Instant
                    </button>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-zinc-500 hover:text-white transition-colors"
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
