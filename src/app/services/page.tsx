import { Metadata } from "next";
import ServicesSection from "../../components/ServicesSection";
import Platforms from "../../components/Platforms";
import Testimonials from "../../components/Testimonials";

export const metadata: Metadata = {
  title: "Our Systems & Services | VibeGrowth Solution by CEO Destiny Ayeni",
  description: "Explore professional custom development services led by CEO Destiny Ayeni. Custom web systems, interactive estimators, Klaviyo triggers, and conversion-focused design.",
  alternates: {
    canonical: "/services",
  }
};

export default function ServicesPage() {
  return (
    <div id="services-view">
      <ServicesSection />
      <Platforms />
      <Testimonials />
    </div>
  );
}
