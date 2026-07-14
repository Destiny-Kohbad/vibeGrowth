import { Metadata } from "next";
import Portfolio from "../../components/Portfolio";
import Platforms from "../../components/Platforms";
import Testimonials from "../../components/Testimonials";

export const metadata: Metadata = {
  title: "Our Portfolio & Case Studies | VibeGrowth Solution",
  description: "Explore our custom development projects, Shopify e-commerce transformations, WordPress search engines, and Wix custom automations designed for small businesses.",
  alternates: {
    canonical: "/portfolio",
  }
};

export default function PortfolioPage() {
  return (
    <div id="portfolio-view">
      <Portfolio />
      <Platforms />
      <Testimonials />
    </div>
  );
}
