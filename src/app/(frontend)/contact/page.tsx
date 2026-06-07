import type { Metadata } from "next";
import { Header } from "@/src/app/components/common/Header";
import { Footer } from "@/src/app/components/common/Footer";
import ContactHero from "@/src/app/components/contact/ContactHero";
import WhyContact from "@/src/app/components/contact/WhyContact";
import LegalCTA from "@/src/app/components/legal/LegalCTA";

export const metadata: Metadata = {
  title: "Contact Us | Rent My Home",
  description:
    "Get in touch with the Rent My Home team. We're here to help landlords and tenants across Auckland and Waikato.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ContactHero />
      <WhyContact />
      <LegalCTA
        title="Ready To Experience Better Property Management?"
        description="Join hundreds of landlords across Auckland and Waikato who trust Rent My Home for reliable, modern, and stress-free property management."
        buttonLabel="Get Free Rental Appraisal"
      />
      <Footer />
    </main>
  );
}
