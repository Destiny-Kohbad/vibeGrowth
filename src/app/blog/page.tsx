import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog & Marketing Insights | VibeGrowth Solution - CEO Destiny Ayeni",
  description: "Explore expert articles on high-performance React design, Klaviyo triggers, speed optimization, and modern customer acquisition systems by CEO Destiny Ayeni.",
  alternates: {
    canonical: "/blog",
  }
};

export default function BlogPage() {
  return (
    <div id="blog-view">
      <BlogClient />
    </div>
  );
}
