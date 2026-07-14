import { Metadata } from "next";
import Hero from "../components/Hero";
import Platforms from "../components/Platforms";
import ServicesSection from "../components/ServicesSection";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import BottomActionBanner from "../components/BottomActionBanner";

export const metadata: Metadata = {
  title: "VibeGrowth Solution | Custom Web Systems, Funnels & Automations by CEO Destiny Ayeni",
  description: "We build digital systems that grow your business online under Founder & CEO Destiny Ayeni. Custom web systems, automated lead qualifiers, and synchronized email flows.",
  alternates: {
    canonical: "/",
  }
};

export default function HomePage() {
  return (
    <div id="home-view">
      {/* Landing Hero */}
      <Hero />

      {/* Supported Tech Platforms Showcase */}
      <Platforms />

      {/* Services Preview Grid */}
      <div className="border-t border-zinc-100">
        <ServicesSection />
      </div>

      {/* Past Projects Portfolio Showcase */}
      <div className="border-t border-zinc-100 bg-zinc-50/30">
        <Portfolio />
      </div>

      {/* Interactive Reviews Deck */}
      <Testimonials />

      {/* Secondary Bottom Banner Action CTA */}
      <BottomActionBanner />
    </div>
  );
}
