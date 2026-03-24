import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Appraisal } from "../components/Appraisal";
import { Reviews } from "../components/Reviews";
import { Tenancy } from "../components/Tenancy";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Reviews />
      <Tenancy />
      <Appraisal />
      <Footer />
    </main>
  );
}
