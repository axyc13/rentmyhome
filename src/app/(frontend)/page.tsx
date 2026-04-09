import { Header } from "../components/common/Header";
import { Hero } from "../components/home/Hero";
import { Appraisal } from "../components/common/Appraisal";
import { Reviews } from "../components/home/Reviews";
import { Tenancy } from "../components/home/Tenancy";
import { Footer } from "../components/common/Footer";

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
