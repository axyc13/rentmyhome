import type { Metadata } from "next";
import { Header } from "@/src/app/components/common/Header";
import { Footer } from "@/src/app/components/common/Footer";
import Hero from "@/src/app/components/about/Hero";
import Timeline from "@/src/app/components/about/Timeline";
import Values from "@/src/app/components/about/Values";
import StoryCTA from "@/src/app/components/about/StoryCTA";

export const metadata: Metadata = {
  title: "Our Story | Rent My Home",
  description:
    "How Rent My Home began — built from real relationships, long days, and a commitment to changing property management in Auckland and Waikato.",
};

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Timeline />
      <Values />
      <StoryCTA />
      <Footer />
    </main>
  );
}
