import { Header } from "@/src/app/components/common/Header";
import { Footer } from "@/src/app/components/common/Footer";
import LegalHero from "@/src/app/components/legal/LegalHero";
import LegalCTA from "@/src/app/components/legal/LegalCTA";
import TermsPage from "@/src/app/components/terms/Page";

export const metadata = {
  title: "Terms of Use | Rent My Home",
  description:
    "These Terms of Use govern your access to and use of the Rent My Home website, services, and online content.",
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <LegalHero
        label="LEGAL INFORMATION"
        title="Terms Of Use"
        description="These Terms of Use govern your access to and use of the Rent My Home website, services, and online content. By accessing our website, you agree to comply with the terms outlined below."
      />
      <TermsPage />
      <LegalCTA
        title="Need Help Or Have Questions?"
        description="Our team is always available to answer questions regarding our services, website policies, or property management support across Auckland and Waikato."
        buttonLabel="Contact Our Team"
      />
      <Footer />
    </main>
  );
}
