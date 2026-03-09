import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Appraisal } from "./components/appraisal";
import { Reviews } from "./components/reviews";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Reviews />
      <Appraisal />
      <Footer />
    </main>
  );
}
