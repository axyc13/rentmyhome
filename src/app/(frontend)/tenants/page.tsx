import type { Metadata } from "next";
import { Header } from "@/src/app/components/common/Header";
import { Footer } from "@/src/app/components/common/Footer";
import TenantHero from "@/src/app/components/tenants/TenantHero";
import TenantFormSection from "@/src/app/components/tenants/TenantFormSection";
import LegalCTA from "@/src/app/components/legal/LegalCTA";
import { Tenancy } from "@/src/app/components/common/Tenancy";

export const metadata: Metadata = {
  title: "Tenant Hub | Rent My Home",
  description:
    "Apply for tenancy with Rent My Home. Find professionally managed rental properties across Auckland and Waikato with fast responses and clear communication.",
};

export default function Tenants() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <TenantHero />
      <TenantFormSection />
      <Tenancy />
      <LegalCTA
        title="Need Help Finding A Rental?"
        description="Our team is here to help quality tenants secure professionally managed homes across Auckland and Waikato."
        buttonLabel="Speak With Our Team"
      />
      <Footer />
    </main>
  );
}
