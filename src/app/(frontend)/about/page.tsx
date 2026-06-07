import { Header } from "@/src/app/components/common/Header";
import { Footer } from "@/src/app/components/common/Footer";
import Hero from "@/src/app/components/about/Hero";
import Timeline from "@/src/app/components/about/Timeline";
import Values from "@/src/app/components/about/Values";
import StoryCTA from "@/src/app/components/about/StoryCTA";

export const metadata = {
  title: "Our Story | Rent My Home",
  description:
    "Learn how Rent My Home was built from the ground up to give Kiwi landlords the communication and support they deserve.",
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
