import { Header } from "../components/common/Header";
import { Hero } from "../components/home/Hero";
import { Appraisal } from "../components/common/Appraisal";
import { Tenancy } from "../components/home/Tenancy";
import { Footer } from "../components/common/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Tenancy />
      <Appraisal />
      <Footer />
    </main>
  );
}
