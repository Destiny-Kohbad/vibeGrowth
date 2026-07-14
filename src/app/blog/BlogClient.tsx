"use client";

import { useRouter } from "next/navigation";
import BlogSection from "../../components/BlogSection";

export default function BlogClient() {
  const router = useRouter();

  return (
    <BlogSection
      onContactClick={() => {
        router.push("/contact");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    />
  );
}
