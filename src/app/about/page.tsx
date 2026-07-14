import { Metadata } from "next";
import AboutSection from "../../components/AboutSection";
import Platforms from "../../components/Platforms";

export const metadata: Metadata = {
  title: "About Founder & CEO Destiny Ayeni | VibeGrowth Solution",
  description: "Meet Destiny Ayeni, Founder & CEO of VibeGrowth Solution. Discover our core design philosophy of building robust digital systems that act as customer acquisition engines.",
  alternates: {
    canonical: "/about",
  }
};

export default function AboutPage() {
  return (
    <div id="about-view">
      <AboutSection />
      <Platforms />
    </div>
  );
}
