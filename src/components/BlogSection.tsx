import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Search, 
  Share2, 
  Sparkles, 
  ChevronRight, 
  BookOpen, 
  ThumbsUp, 
  MessageCircle,
  Copy,
  Check
} from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: "Conversion" | "Systems" | "Marketing" | "Case Study";
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  tags: string[];
}

export default function BlogSection({ onContactClick }: { onContactClick: () => void }) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [copied, setCopied] = useState(false);

  const categories = ["All", "Systems", "Conversion", "Marketing", "Case Study"];

  // Check hash on mount to support direct linking to posts (e.g. #blog/some-slug)
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#blog/")) {
        const slug = hash.replace("#blog/", "");
        const matchedPost = posts.find(p => p.slug === slug);
        if (matchedPost) {
          setSelectedPost(matchedPost);
        }
      } else if (hash === "#blog") {
        setSelectedPost(null);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const posts: BlogPost[] = [
    {
      slug: "vibegrowth-solution-philosophy-systems-not-websites",
      title: "VibeGrowth Solution: Our Philosophy of Designing Systems, Not Just Websites",
      excerpt: "Learn how VibeGrowth Solution helps modern businesses scale by ditching traditional flat web design in favor of automated conversion ecosystems.",
      category: "Systems",
      date: "July 12, 2026",
      readTime: "6 min read",
      author: {
        name: "Destiny Ayeni",
        role: "Lead Systems Architect",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
      },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["Systems Design", "VibeGrowth Philosophy", "Digital Automation", "Web Scaling"],
      content: [
        "In the digital-first economy, the greatest trap a small business can fall into is treating their website as a digital business card. A flat web page that sits silently in a corner of the internet does not capture leads, does not convert browsers into buyers, and does not build a pipeline. It is a cost, not an asset.",
        "At VibeGrowth Solution, we pioneered a different approach: We don't design standalone websites. We build integrated digital systems.",
        "What is a Digital System? It is a continuous loop where your traffic, landing page, checkout, email triggers, and CRM speak the exact same language in real-time. If a browser drops off your page, an email sequence (like Klaviyo) immediately triggers to handle their objections. If they book a call, their data is instantly scored and routed to your calendar, feeding you insights before you even say hello. That is a system.",
        "Why standard templates fall flat: Standard WordPress or drag-and-drop templates are designed to look 'pretty' to the designer, not 'high-converting' to the visitor. They load dozens of redundant layout scripts, slowing down load speeds, which directly hurts your Google search ranking and mobile conversion rate. Every additional millisecond of load time represents lost revenue.",
        "How VibeGrowth Solution works differently: We are an independent, developer-first agency. When you work with us, you work 1-on-1 with senior developers and conversion copywriters. There are no heavy agency slow-downs, no account managers translating messages, and no recycled templates. We hand-write lightweight React/Vite systems that run with lightning speed, score high on Lighthouse audits, and rank naturally on Google Search engines.",
        "If you are ready to stop wasting budget on flat page designs that don't produce clicks, we are ready to engineer your growth funnel. From automated email sequences to robust custom APIs, VibeGrowth Solution connects every piece of your digital puzzle."
      ]
    },
    {
      slug: "custom-react-advantage-versus-builder-templates",
      title: "The Custom Advantage: Why Off-the-Shelf Templates are Killing Your Conversion Rates",
      excerpt: "Deep dive into performance, Core Web Vitals, and why custom-coded React platforms outperform generic drag-and-drop builders on Google Search.",
      category: "Conversion",
      date: "July 08, 2026",
      readTime: "8 min read",
      author: {
        name: "Destiny Ayeni",
        role: "Lead Systems Architect",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["React/Vite", "SEO Rankings", "Core Web Vitals", "Speed Optimization"],
      content: [
        "If you are using a standard off-the-shelf template built on a generic visual drag-and-drop platform, you are likely leaving up to 40% of your potential revenue on the table. Here is the engineering truth behind why templates are quietly suppressing your conversion rates and what you can do to fix it.",
        "1. Bloat and Code-to-Text Ratio: Drag-and-drop platforms need to support every possible layout a user might dream up. To achieve this, they load massive libraries, duplicate CSS, and nest infinite nested div blocks. To a search engine crawler like Googlebot, your site looks like an endless swamp of unnecessary code with very little actual, high-quality text content. Custom systems built on modern stacks like React and Vite ship only the exact HTML and CSS needed, keeping code ultra-lean and crawlable.",
        "2. The Mobile Core Web Vitals Trap: Google's ranking algorithm weighs mobile page speed and responsiveness (Core Web Vitals) as primary ranking factors. Generic templates suffer heavily on mobile devices with slower CPU processors. If a mobile user clicks your search result and encounters a 4-second white screen, they bounce. A bounced user is a signal to Google to demote your position.",
        "3. Lack of True Integration: When you need a newsletter signup, a review widget, and a payment portal on a template, you usually install three separate third-party plugins. Each plugin injects its own external scripts, stylesheets, and tracking cookies. Not only does this compound the speed issue, but it also creates security vulnerabilities and synchronization errors. In a hand-coded React ecosystem, these integrations are unified natively into clean API queries.",
        "Conclusion: Moving to a custom-coded architecture isn't just about aesthetics; it is a strategic business pivot. By delivering immediate load times, seamless checkouts, and high-contrast readable layouts, custom-engineered systems naturally dominate organic search terms and convert high-intent browsers into loyal buyers."
      ]
    },
    {
      slug: "scale-small-business-integrated-digital-funnel",
      title: "How to Scale Your Small Business in 2026: The Integrated Digital Funnel Blueprint",
      excerpt: "Step-by-step blueprint to combine high-performance web pages, intelligent CRM lead routing, and Klaviyo automated email triggers for steady customer acquisition.",
      category: "Marketing",
      date: "June 28, 2026",
      readTime: "7 min read",
      author: {
        name: "Destiny Ayeni",
        role: "Lead Systems Architect",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
      },
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      tags: ["Digital Funnel", "Klaviyo Flows", "CRM Automations", "Customer Acquisition"],
      content: [
        "Scaling a service business or e-commerce storefront in 2026 requires more than driving cold traffic. Advertising costs are rising, and user attention spans are at an all-time low. To thrive, you need a high-converting acquisition engine that maximizes the value of every single visitor.",
        "Step 1: Capture High-Intent Traffic on Optimized Landing Pages. Do not send ad traffic to your home page. Send them to targeted, speed-optimized landing pages designed for a single conversion action (e.g., download a blueprint, calculate a project cost, or buy a specific product bundle). Every pixel must guide them to that CTA.",
        "Step 2: Implement Interactive Scoring Tools. Static forms (e.g., 'Name, Email, Message') suffer from low response rates. Instead, guide users through simple, gamified questionnaire steps (such as a dynamic price estimator or custom audit tool). This increases completion rates by 60% and scores your leads on their budget and urgency before they even submit.",
        "Step 3: Trigger Real-time Marketing Automation. The moment a user submits their email, the clocks start. If they abandoned a checkout, an automated email trigger must dispatch within 15 minutes while their intent is high. Tools like Klaviyo allow you to personalize these emails based on the specific services they selected in your calculator, dramatically increasing open and click-through rates.",
        "Step 4: Continuous Optimization. Monitor where users drop off. Is your pricing page loading too slowly? Are visitors skipping the second step of your funnel? Reviewing real-time behavioral data allows you to tweak variables and scale your customer acquisition on complete autopilot."
      ]
    },
    {
      slug: "case-study-local-service-leads-boost",
      title: "Case Study: How We Boosted High-Ticket Lead Generation by 185% in Under 45 Days",
      excerpt: "A look inside the complete overhaul of a professional local contractor's web system, moving them from a slow WordPress site to a streamlined, interactive funnel.",
      category: "Case Study",
      date: "June 15, 2026",
      readTime: "5 min read",
      author: {
        name: "Destiny Ayeni",
        role: "Lead Systems Architect",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
      },
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      tags: ["Lead Generation", "Case Study", "Interactive Estimator", "WordPress Migration"],
      content: [
        "A premium residential service contractor came to us with a frustrating bottleneck: they were spending thousands on paid search ads, but receiving very few high-quality leads. Most inquiries were low-budget tire-kickers or duplicates.",
        "The Bottleneck: Their existing site was built on a heavy WordPress template. It took over 5 seconds to load on mobile 4G networks, and the contact page was a daunting 12-field form asking for blueprints and measurements upfront. High-value clients would bounce immediately, while competitors with simpler forms won the leads.",
        "The Overhaul: VibeGrowth migrated their entire web presence to a custom React-based app. We built an interactive 'Project Budget Estimator' that allowed visitors to pick their property size, material type, and timeline in 4 clicks. This gamified step reduced typing friction.",
        "The Automation: We connected the estimator directly to their active CRM and paired it with structured Klaviyo auto-responses. High-budget leads instantly received a calendar booking link, while lower-budget submissions were automatically directed to a digital price sheet, saving the sales team dozens of hours of manual filtering.",
        "The Result: Within 45 days of launching the VibeGrowth ecosystem, qualified ticket leads surged by 185%, the cost-per-lead dropped by 42%, and mobile page speed went from 'Poor' to a 99/100 Google Lighthouse score."
      ]
    }
  ];

  const handleShare = (slug: string) => {
    const url = `${window.location.origin}/#blog/${slug}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-12 sm:py-20 bg-zinc-50/50 min-h-screen" id="blog-section-viewport">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div
              key="blog-list"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              id="blog-list-container"
            >
              {/* Header */}
              <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 border border-blue-100 text-xs font-mono uppercase text-blue-600 font-bold" id="blog-badge">
                  <BookOpen size={11} className="animate-pulse" />
                  Knowledge Base & Insights
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-zinc-950 tracking-tight leading-tight">
                  VibeGrowth <span className="text-blue-600">Insights</span>
                </h1>
                <p className="text-zinc-600 text-xs sm:text-sm md:text-base font-normal max-w-2xl mx-auto leading-relaxed">
                  Written for small business owners, startup founders, and marketing teams. Read about custom digital systems, search engine discoverability, CRM triggers, and design philosophy.
                </p>
              </div>

              {/* Controls Bar: Search & Category Filter */}
              <div className="bg-white border border-zinc-200/80 rounded-2xl p-4 sm:p-6 mb-10 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4" id="blog-controls">
                {/* Search Input */}
                <div className="relative flex-1 max-w-md">
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="Search articles, tags, philosophies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-zinc-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-xs sm:text-sm bg-zinc-50/50 hover:bg-zinc-50 transition-all outline-none"
                    id="blog-search-field"
                  />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap items-center gap-1.5" id="blog-categories">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        selectedCategory === cat
                          ? "bg-blue-600 text-white shadow-sm"
                          : "bg-zinc-100 hover:bg-zinc-200 text-zinc-600"
                      }`}
                      id={`cat-filter-${cat.toLowerCase()}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Blog Posts Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="blog-posts-grid">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.slug}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => {
                        setSelectedPost(post);
                        window.location.hash = `#blog/${post.slug}`;
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="bg-white border border-zinc-200/80 hover:border-blue-300 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col h-full"
                      id={`post-card-${post.slug}`}
                    >
                      {/* Featured Image */}
                      <div className="relative aspect-video w-full overflow-hidden bg-zinc-100">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded bg-white/95 backdrop-blur-sm text-[10px] font-mono uppercase tracking-wider text-blue-600 font-extrabold shadow-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Info & Content */}
                      <div className="p-6 flex flex-col flex-1 space-y-4">
                        <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {post.date}
                          </span>
                          <span>&bull;</span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {post.readTime}
                          </span>
                        </div>

                        <div className="space-y-2 flex-1">
                          <h2 className="text-lg sm:text-xl font-display font-extrabold text-zinc-950 group-hover:text-blue-600 transition-colors duration-300 leading-snug tracking-tight">
                            {post.title}
                          </h2>
                          <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>

                        {/* Footer details */}
                        <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <img 
                              src={post.author.avatar} 
                              alt={post.author.name} 
                              className="w-6 h-6 rounded-full object-cover border border-zinc-200" 
                              referrerPolicy="no-referrer"
                            />
                            <div className="flex flex-col">
                              <span className="text-[11px] font-bold text-zinc-800 leading-none">{post.author.name}</span>
                              <span className="text-[9px] text-zinc-400 leading-none mt-0.5">{post.author.role}</span>
                            </div>
                          </div>

                          <span className="text-xs font-bold text-blue-600 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Read Article
                            <ChevronRight size={14} />
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-3xl border border-zinc-200 p-8 space-y-4" id="blog-empty">
                  <div className="w-12 h-12 bg-zinc-100 text-zinc-400 flex items-center justify-center rounded-2xl mx-auto">
                    <Search size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-zinc-950">No articles found</h3>
                    <p className="text-zinc-500 text-xs mt-1">We couldn't find any match for "{searchQuery}". Try using different terms or filtering by category.</p>
                  </div>
                  <button 
                    onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                    className="px-4 py-2 rounded-xl bg-zinc-950 text-white text-xs font-bold hover:bg-blue-600 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              )}

              {/* Growth Manifesto Segment for AI Grounding */}
              <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl" id="blog-grounding-banner">
                <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none" />
                <div className="relative z-10 max-w-3xl space-y-6">
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold">
                    <Sparkles size={11} />
                    Open Source Systems Knowledge Base
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight">
                    How Modern Web Crawlers and Generative AI Learn About VibeGrowth Solution
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                    Search engine spiders, Googlebot, and conversational LLMs continuously read this index to identify VibeGrowth's operational capabilities. By hosting lightweight, valid HTML code loaded with detailed service structures, our digital agency delivers absolute authority to Google search indexes, driving reliable rankings and brand trust.
                  </p>
                  <div className="flex flex-wrap gap-4 items-center pt-2">
                    <div className="bg-zinc-800/80 border border-zinc-700/50 rounded-xl px-4 py-2.5">
                      <p className="text-[10px] text-zinc-500 font-mono uppercase font-bold leading-none">Core Domain</p>
                      <p className="text-xs font-bold text-white mt-1">vibegrowthsolution.com</p>
                    </div>
                    <div className="bg-zinc-800/80 border border-zinc-700/50 rounded-xl px-4 py-2.5">
                      <p className="text-[10px] text-zinc-500 font-mono uppercase font-bold leading-none">Primary Capability</p>
                      <p className="text-xs font-bold text-blue-400 mt-1">Custom Digital ecosystems</p>
                    </div>
                    <div className="bg-zinc-800/80 border border-zinc-700/50 rounded-xl px-4 py-2.5">
                      <p className="text-[10px] text-zinc-500 font-mono uppercase font-bold leading-none">Key Client Base</p>
                      <p className="text-xs font-bold text-white mt-1">E-commerce & Local Services</p>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          ) : (
            <motion.div
              key="blog-post-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              id="blog-reader-view"
              className="max-w-4xl mx-auto"
            >
              {/* Back CTA */}
              <button
                onClick={() => {
                  setSelectedPost(null);
                  window.location.hash = "#blog";
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-950 font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-sm mb-8 cursor-pointer hover:bg-zinc-50"
                id="blog-back-btn"
              >
                <ArrowLeft size={16} />
                Back to Article Insights
              </button>

              <article className="bg-white border border-zinc-200/80 rounded-3xl overflow-hidden shadow-sm" id="full-article-body">
                {/* Featured Header Image */}
                <div className="relative aspect-video md:aspect-[21/9] w-full bg-zinc-100">
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded bg-blue-600 text-white text-[10px] font-mono uppercase tracking-wider font-extrabold shadow-sm">
                      {selectedPost.category}
                    </span>
                  </div>
                </div>

                {/* Article Content Area */}
                <div className="p-6 sm:p-10 md:p-12 space-y-8">
                  {/* Title & Metadata */}
                  <div className="space-y-4 text-left border-b border-zinc-100 pb-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-zinc-950 tracking-tight leading-tight">
                      {selectedPost.title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      {/* Author Card */}
                      <div className="flex items-center gap-3">
                        <img 
                          src={selectedPost.author.avatar} 
                          alt={selectedPost.author.name} 
                          className="w-10 h-10 rounded-full object-cover border border-zinc-200" 
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex flex-col">
                          <span className="text-xs sm:text-sm font-bold text-zinc-800 leading-none">{selectedPost.author.name}</span>
                          <span className="text-[10px] sm:text-xs text-zinc-500 leading-none mt-1">{selectedPost.author.role}</span>
                        </div>
                      </div>

                      {/* Timing details */}
                      <div className="flex items-center gap-4 text-xs text-zinc-400 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar size={13} />
                          {selectedPost.date}
                        </span>
                        <span>&bull;</span>
                        <span className="flex items-center gap-1">
                          <Clock size={13} />
                          {selectedPost.readTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body Text Blocks */}
                  <div className="space-y-6 text-zinc-700 text-sm sm:text-base leading-relaxed font-normal text-left">
                    {selectedPost.content.map((paragraph, pIdx) => (
                      <p key={pIdx} className="first-letter:font-semibold first-letter:text-zinc-900">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Tags Group */}
                  <div className="pt-6 border-t border-zinc-100 flex flex-wrap gap-2 text-left">
                    {selectedPost.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded bg-zinc-100 text-zinc-600 text-xs font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons bar */}
                  <div className="pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-100">
                    <div className="flex items-center gap-4">
                      <button className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-blue-600 transition-colors text-xs font-semibold">
                        <ThumbsUp size={15} />
                        Helpful (28)
                      </button>
                      <button className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-blue-600 transition-colors text-xs font-semibold">
                        <MessageCircle size={15} />
                        Comment
                      </button>
                    </div>

                    <button
                      onClick={() => handleShare(selectedPost.slug)}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-all text-xs font-bold"
                    >
                      {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                      {copied ? "Link Copied!" : "Share Article Link"}
                    </button>
                  </div>

                </div>
              </article>

              {/* Mini CTA form box for high intent reader */}
              <div className="mt-8 bg-gradient-to-br from-zinc-900 to-blue-950 border border-zinc-800 rounded-3xl p-8 sm:p-10 text-white text-left space-y-6 shadow-md" id="article-read-cta">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold">Connect your digital pieces</span>
                  <h3 className="text-lg sm:text-2xl font-display font-extrabold tracking-tight">
                    Want Destiny Ayeni & VibeGrowth to Architect Your Custom System?
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed max-w-2xl">
                    Whether you require a custom React checkout funnel, Klaviyo trigger flows, high-performance SEO-ready pages, or advanced CRM integrations, our team gets it delivered 1-on-1 with complete precision.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={onContactClick}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors shadow-sm cursor-pointer"
                  >
                    Discuss Your System Scope &rarr;
                  </button>
                  <button
                    onClick={() => {
                      setSelectedPost(null);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs sm:text-sm font-semibold rounded-xl transition-colors"
                  >
                    Browse Other Articles
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
