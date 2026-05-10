import React from "react";
import PropertyManagers from "@/src/app/components/team/PropertyManagers";
import { Header } from "@/src/app/components/common/Header";
import { Footer } from "@/src/app/components/common/Footer";
import Hero from "@/src/app/components/team/Hero";

export default function Team() {
  return (
    <div>
      <Header />
      <Hero />
      <PropertyManagers />
      <Footer />
    </div>
  );
}
