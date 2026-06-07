import { Header } from "@/src/app/components/common/Header";
import { Footer } from "@/src/app/components/common/Footer";
import LegalHero from "@/src/app/components/legal/LegalHero";
import LegalCTA from "@/src/app/components/legal/LegalCTA";
import PrivacyPage from "@/src/app/components/privacy/Page";

export const metadata = {
  title: "Privacy Policy | Rent My Home",
  description:
    "Learn how Rent My Home collects, uses, and safeguards your personal information.",
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <LegalHero
        label="LEGAL INFORMATION"
        title="Privacy Policy"
        description="At Rent My Home, we value transparency, trust, and the protection of your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our website and services."
      />
      <PrivacyPage />
      <LegalCTA
        title="Your Trust Matters To Us"
        description="At Rent My Home, transparency and communication are at the heart of everything we do — including how we protect and manage your personal information."
        buttonLabel="Contact Our Team"
      />
      <Footer />
    </main>
  );
}
