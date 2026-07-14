import { Metadata } from "next";
import BlogClient from "../BlogClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  
  let title = "VibeGrowth Solution Blog";
  let desc = "Read expert insights on high-converting web systems, funnels, and marketing triggers on the official VibeGrowth Solution blog.";
  
  if (slug === "introducing-vibegrowth-solution-custom-digital-ecosystems-ceo-destiny-ayeni") {
    title = "Introducing VibeGrowth Solution: Custom Web Systems & Funnels under CEO Destiny Ayeni";
    desc = "Official introduction to VibeGrowth Solution under CEO Destiny Ayeni. Learn about our custom-coded web systems, interactive lead estimators, and automated marketing flows.";
  } else if (slug) {
    const cleanTitle = slug
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    title = `${cleanTitle} | VibeGrowth Solution Blog`;
    desc = `Read article "${cleanTitle}" by CEO Destiny Ayeni on the official VibeGrowth Solution website. Advanced digital funnels, speed, and Klaviyo setups.`;
  }
  
  return {
    title,
    description: desc,
    alternates: {
      canonical: `/blog/${slug}`,
    }
  };
}

export default function BlogDetailPage() {
  return (
    <div id="blog-detail-view">
      <BlogClient />
    </div>
  );
}
