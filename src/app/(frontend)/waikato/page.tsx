import React from "react";
import { Header } from "../../components/common/Header";
import { Footer } from "../../components/common/Footer";
import { Hero } from "../../components/waikato/Hero";
import { Appraisal } from "../../components/common/Appraisal";
import { Tenancy } from "../../components/common/Tenancy";
import { Reviews } from "../../components/home/Reviews";

export default function Waikato() {
  return (
    <div>
      <Header />
      <Hero />
      <Reviews location="waikato" />
      <Tenancy />
      <Footer />
    </div>
  );
}
