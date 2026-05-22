"use client";

import { useState } from "react";
import { Header } from "../components/common/Header";
import { CTA } from "../components/home/CTA";
import { Footer } from "../components/common/Footer";
import Hero from "../components/home/Hero";
import { Reviews } from "../components/home/Reviews";
import { Stats } from "../components/home/Stats";
import { WhyChoose } from "../components/home/WhyChoose";
import { Road } from "../components/home/Road";
import Banner from "../components/home/Banner";
import { AppraisalPopup } from "../components/common/AppraisalPopup";

export default function Home() {
  const [isAppraisalPopupOpen, setIsAppraisalPopupOpen] = useState(false);
  const [skipLocationStep, setSkipLocationStep] = useState(false);

  const openDefaultAppraisal = () => {
    setSkipLocationStep(false);
    setIsAppraisalPopupOpen(true);
  };

  const openHeroAppraisal = () => {
    setSkipLocationStep(true);
    setIsAppraisalPopupOpen(true);
  };

  const closeAppraisal = () => {
    setIsAppraisalPopupOpen(false);
    setSkipLocationStep(false);
  };

  return (
    <main>
      <Header onOpenAppraisalAction={openDefaultAppraisal} />
      <Hero onOpenAppraisal={openHeroAppraisal} />
      <Stats />
      <Banner />
      <WhyChoose />
      <CTA onOpenAppraisal={openDefaultAppraisal} />
      <Reviews />
      <Footer />
      <AppraisalPopup
        isOpen={isAppraisalPopupOpen}
        onClose={closeAppraisal}
        skipLocationStep={skipLocationStep}
      />
    </main>
  );
}
