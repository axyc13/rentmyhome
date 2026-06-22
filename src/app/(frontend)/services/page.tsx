import type { Metadata } from "next";
import { Header } from "@/src/app/components/common/Header";
import { Footer } from "@/src/app/components/common/Footer";
import Hero from "@/src/app/components/services/Hero";
import ServicesIntro from "@/src/app/components/services/ServicesIntro";
import FullServiceManagement from "@/src/app/components/services/FullServiceManagement";
import ServiceCards from "@/src/app/components/services/ServiceCards";
import WhyChooseServices from "@/src/app/components/services/WhyChooseServices";
import AreasWeService from "@/src/app/components/services/AreasWeService";
import AppraisalBand from "@/src/app/components/services/AppraisalBand";
import ServicesCTA from "@/src/app/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Our Services | Rent My Home",
  description:
    "Professional residential property management services across Auckland and Waikato — tenant sourcing, rent collection, compliance, maintenance and more.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ServicesIntro />
      <FullServiceManagement />
      <ServiceCards />
      <WhyChooseServices />
      <AreasWeService />
      <AppraisalBand />
      <ServicesCTA />
      <Footer />
    </main>
  );
}
