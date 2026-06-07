import { Header } from "@/src/app/components/common/Header";
import { Footer } from "@/src/app/components/common/Footer";
import LegalHero from "@/src/app/components/legal/LegalHero";
import LegalCTA from "@/src/app/components/legal/LegalCTA";
import FAQAccordion from "@/src/app/components/faq/FAQAccordion";

export const metadata = {
  title: "FAQs | Rent My Home",
  description:
    "Have questions about property management, rental processes, or how Rent My Home works? Find answers to the most common landlord and tenant questions.",
};

export default function FAQ() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <LegalHero
        label="FREQUENTLY ASKED QUESTIONS"
        title="Everything You Need To Know"
        description="Have questions about property management, rental processes, communication, or how Rent My Home works? Here are some of the most common questions landlords and tenants ask our team."
      />
      <FAQAccordion />
      <LegalCTA
        title="Modern Property Management Built Around Communication"
        description="Whether you own one rental property or an expanding portfolio, Rent My Home is here to simplify the process with proactive support and transparent management."
        buttonLabel="Get Free Appraisal"
      />
      <Footer />
    </main>
  );
}
