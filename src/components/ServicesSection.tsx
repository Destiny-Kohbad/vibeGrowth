import { useState } from "react";
import { 
  Globe, 
  Mail, 
  Layers, 
  ShoppingBag, 
  Palette, 
  Users, 
  ArrowUpRight, 
  CheckCircle, 
  Sparkles, 
  Clock, 
  TrendingUp, 
  MessageSquare 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ServiceItem } from "../types";

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
  showAllInitially?: boolean;
}

export default function ServicesSection({ showAllInitially = true }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const services: ServiceItem[] = [
    {
      id: "web-design",
      title: "Website Design & Development",
      shortDescription: "Polished, blazing fast custom websites designed with optimized layouts to rank on Google search result pages.",
      fullDescription: "Your website is your 24/7 digital storefront. We craft award-winning user experiences on WordPress, Wix, and customized CMS tools. Each page is engineered with conversion optimization, SEO structure, mobile flexibility, and ultra-short loading speeds.",
      iconName: "Globe",
      benefits: [
        "WordPress, Wix, and custom web development ($80/page)",
        "On-page Google SEO structure & meta tagging included",
        "100% responsive layout optimized for mobile-first visitors",
        "Blazing fast performance & Core Web Vitals optimization"
      ],
      metrics: "Average 4.1s to 1.1s speed boost",
      averageProjectTime: "5 - 9 business days",
      category: "development"
    },
    {
      id: "email-marketing",
      title: "Email Marketing & List Automation",
      shortDescription: "Automate cash-flow from your list with advanced flows, newsletter systems, and segmentation.",
      fullDescription: "Turn cold visitors into recurring buyers without paying for ads. We write, build, and deploy automated sequences (welcome flows, abandoned cart recovery, browse abandonment) using Klaviyo, Mailchimp, ConvertKit, or Beehiiv.",
      iconName: "Mail",
      benefits: [
        "Advanced segmentation based on user buying behavior",
        "High-performance welcome flows & abandoned checkout sequences",
        "A/B tested campaign strategy & copy writing",
        "Email delivery health diagnostic & domain reputation recovery"
      ],
      metrics: "30% - 45% attribution rate average",
      averageProjectTime: "4 - 7 business days",
      category: "marketing"
    },
    {
      id: "funnels-landing",
      title: "High-Converting Funnel & Landing Pages",
      shortDescription: "Precision-engineered target funnels tailored to sell one specific product, service, or lead magnet.",
      fullDescription: "Ditch complex sitemaps. If you want direct actions, you need a streamlined landing page funnel. We build state-of-the-art opt-in, sales, webinar, and booking funnels focusing purely on user click-paths and optimized psychology.",
      iconName: "Layers",
      benefits: [
        "Zero-distraction layouts tailored around a single direct CTA",
        "Speed-optimized custom landing templates with smooth scroll effects",
        "Lead capture magnets & scheduling forms integration",
        "Analytics and pixel tracking (Meta, Google, TikTok)"
      ],
      metrics: "Average 24% opt-in conversion rate",
      averageProjectTime: "3 - 5 business days",
      category: "automation"
    },
    {
      id: "shopify",
      title: "Shopify Store Dev & Speed Optimization",
      shortDescription: "Custom Shopify layout building, checkout optimizers, and app architecture integrations.",
      fullDescription: "E-commerce is a science. We build custom Shopify experiences tailored to increase your Average Order Value (AOV) and lifetime retention. Includes setup of Shopify templates, payment gateways, upsell systems, and speed tuning.",
      iconName: "ShoppingBag",
      benefits: [
        "Theme development & visual customization matching your exact brand",
        "Upsell, subscription, and bundling application configuration",
        "Mobile cart drawer redesign & fast checkout logic",
        "Comprehensive collection filters & custom checkout triggers"
      ],
      metrics: "Plus 44% Average Order Value (AOV)",
      averageProjectTime: "7 - 14 business days",
      category: "development"
    },
    {
      id: "graphics-branding",
      title: "High-End Visual Assets & Graphic Design",
      shortDescription: "High-click YouTube thumbnails, branding identity, custom banners, and static advertising assets.",
      fullDescription: "Stand out in crowded digital feeds. We design thumb-stopping digital assets that capture attention immediately. Whether you need an official logo system, bespoke social graphics, or high-conversion YouTube thumbnails.",
      iconName: "Palette",
      benefits: [
        "High-CTR YouTube thumbnails focusing on psychology and contrast",
        "Consistent social media asset packages (banners, profiles)",
        "Elegant logo design & typography style guides",
        "High-contrast vectors, mockups, and client presentation design"
      ],
      metrics: "+38% organic Click-Through Rate",
      averageProjectTime: "2 - 4 business days",
      category: "design"
    },
    {
      id: "course-communities",
      title: "Course Portals & Community Setup",
      shortDescription: "Establish private networks, membership systems, and lessons using Teachable, Skool or Circle.so.",
      fullDescription: "Monetize your professional knowledge. We construct interactive online digital academies and social learning ecosystems using Teachable, Circle.so, and similar tools. Handles file architectures, gated pricing, and forum setups.",
      iconName: "Users",
      benefits: [
        "Complete lesson setup, module assets, and onboarding flow",
        "Gated membership tiers with Stripe/PayPal payment structures",
        "Automatic member triggers & gamified leaderboards",
        "Domain mapping & customized notification emails"
      ],
      metrics: "Simple plug-and-play lesson hosting",
      averageProjectTime: "5 - 10 business days",
      category: "automation"
    }
  ];

  const categories = [
    { id: "all", label: "All Systems" },
    { id: "development", label: "Dev & Code" },
    { id: "marketing", label: "Email & Funnels" },
    { id: "design", label: "Graphics & Branding" },
    { id: "automation", label: "Automation & Courses" }
  ];

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(s => s.category === activeCategory);

  const renderIcon = (iconName: string) => {
    const iconProps = { className: "w-6 h-6 text-blue-600" };
    switch (iconName) {
      case "Globe": return <Globe {...iconProps} />;
      case "Mail": return <Mail {...iconProps} />;
      case "Layers": return <Layers {...iconProps} />;
      case "ShoppingBag": return <ShoppingBag {...iconProps} />;
      case "Palette": return <Palette {...iconProps} />;
      case "Users": return <Users {...iconProps} />;
      default: return <Globe {...iconProps} />;
    }
  };

  const getWhatsAppLink = (serviceTitle: string) => {
    const text = `Hi VibeGrowth, I'm interested in your "${serviceTitle}" service! Can we discuss my project?`;
    return `https://wa.me/17042145434?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-white" id="services-section">
      {/* Background soft styling hints */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-blue-50/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-zinc-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-mono uppercase tracking-widest font-bold">
            <Sparkles size={12} className="animate-pulse" />
            Our Systems & Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-zinc-950 tracking-tight">
            Digital Transformation Engineered to{" "}
            <span className="text-blue-600">
              Scale Your Revenue
            </span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Forget standard designs that fail to convert or rank. We deliver Google-optimized web assets and marketing workflows designed with clean semantics to close clients.
          </p>
        </div>

        {/* Category Filter Pills in Blue, White, Black */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 sm:mb-16" id="services-categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-zinc-950 text-white shadow-sm"
                  : "bg-zinc-50 border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
              }`}
              id={`cat-pill-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid with animations (White styling) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="services-grid">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, i) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative bg-white border border-zinc-200 hover:border-blue-300 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                id={`service-card-${service.id}`}
              >
                <div>
                  {/* Top-row: Icon & Metrics badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-100">
                      {renderIcon(service.iconName)}
                    </div>
                    
                    {/* Unique conversion indicators */}
                    <div className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-mono font-bold flex items-center gap-1">
                      <TrendingUp size={10} />
                      {service.metrics}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-display font-extrabold text-zinc-950 group-hover:text-blue-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-xs sm:text-sm mt-3 leading-relaxed font-normal">
                    {service.shortDescription}
                  </p>

                  <div className="h-px bg-zinc-100 my-5" />

                  {/* Core Benefits */}
                  <ul className="space-y-2.5 mb-6">
                    {service.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-2.5 text-xs text-zinc-600 font-normal">
                        <CheckCircle size={13} className="text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA & Meta Footer */}
                <div className="mt-4 space-y-4">
                  {/* Scope estimate timeframe */}
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono">
                    <Clock size={12} />
                    <span>Avg. Setup: {service.averageProjectTime}</span>
                  </div>

                  {/* Direct Contact Button (Blue / Black themed) */}
                  <a
                    href={getWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-zinc-950 text-white font-bold text-xs inline-flex items-center justify-center gap-2 transition-all duration-300 hover:bg-blue-600 cursor-pointer shadow-sm"
                    id={`service-cta-btn-${service.id}`}
                  >
                    <MessageSquare size={13} className="fill-white/10" />
                    Hire For {service.title}
                    <ArrowUpRight size={13} className="text-white" />
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Cream color section (Requested alternating background box) */}
        <div className="mt-16 bg-[#fcfbf7] border border-zinc-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm" id="services-summary-prompt">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-zinc-950 flex items-center justify-center md:justify-start gap-2">
              <Sparkles size={16} className="text-blue-600 animate-pulse" />
              Need a completely custom enterprise workflow or Google SEO campaign?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 font-normal max-w-2xl">
              We design multi-platform ecosystems integrating Google Search Console optimization, custom schema data structures, email automation sequences, and custom dashboards.
            </p>
          </div>
          <a
            href="https://wa.me/17042145434"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-zinc-950 hover:bg-blue-600 text-white font-bold text-xs duration-200 shadow-sm flex items-center gap-2 cursor-pointer"
            id="services-custom-query-cta"
          >
            Get Custom Free Quote
            <ArrowUpRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
