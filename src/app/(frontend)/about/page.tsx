import type { Metadata } from "next";
import { Header } from "@/src/app/components/common/Header";
import { Footer } from "@/src/app/components/common/Footer";
import Page from "@/src/app/components/services/Page";
import StoryCTA from "@/src/app/components/about/StoryCTA";

export const metadata: Metadata = {
  title: "About Us | Rent My Home",
  description:
    "Learn who we are and what drives Rent My Home — trusted by 300+ landlords across Auckland and Waikato.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Page />
      <StoryCTA />
      <Footer />
    </main>
  );
}
