import React from "react";
import { Header } from "../../components/common/Header";
import { Footer } from "../../components/common/Footer";
import { Hero } from "../../components/auckland/Hero";
import { Appraisal } from "../../components/common/Appraisal";
import { Tenancy } from "../../components/home/Tenancy";
import { Reviews } from "../../components/home/Reviews";

export default function Auckland() {
  return (
    <div>
      <Header />
      <Hero />
      <Reviews location="auckland" />
      <Tenancy />
      <Appraisal />
      <Footer />
    </div>
  );
}
