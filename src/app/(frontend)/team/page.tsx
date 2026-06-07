import type { Metadata } from "next";
import { Header } from "@/src/app/components/common/Header";
import { Footer } from "@/src/app/components/common/Footer";
import Hero from "@/src/app/components/team/Hero";
import FounderMessage from "@/src/app/components/team/FounderMessage";
import TeamGrid from "@/src/app/components/team/TeamGrid";
import TeamValues from "@/src/app/components/team/TeamValues";
import LegalCTA from "@/src/app/components/legal/LegalCTA";

export const metadata: Metadata = {
  title: "Our Team | Rent My Home",
  description:
    "Meet the real people behind Rent My Home — a team built around communication, trust, and genuine care for landlords and tenants.",
};

export default function Team() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FounderMessage />
      <TeamGrid />
      <TeamValues />
      <LegalCTA
        title="Work With A Team That Actually Cares"
        description="From Auckland to Waikato, RMH is trusted by landlords who want modern communication, proactive management, and real people they can rely on."
        buttonLabel="Talk To Our Team"
      />
      <Footer />
    </main>
  );
}
