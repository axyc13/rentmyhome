import { Header } from "../components/common/Header";
import { CTA } from "../components/home/CTA";
import { Footer } from "../components/common/Footer";
import Hero from "../components/home/Hero";
import { Reviews } from "../components/home/Reviews";
import { Stats } from "../components/home/Stats";
import { WhyChoose } from "../components/home/WhyChoose";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <WhyChoose />
      <CTA />
      <Reviews />
      <Footer />
    </main>
  );
}
