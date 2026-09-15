import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PurchaseSection from "../components/PurchaseSection";
import TokenDetails from "../components/TokenDetails";
import HowToBuy from "../components/HowToBuy";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Presale() {
  return (
    <>
      <Navbar />

      <Hero />

      <PurchaseSection />

      <TokenDetails />

      <HowToBuy />

      <Features />

      <CTA />

      <Footer />
    </>
  );
}

export default Presale;