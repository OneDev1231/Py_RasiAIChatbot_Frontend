"use client";

import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Pricing from "@/components/home/pricing";
import Footer from "@/components/home/footer";
import CTA from "@/components/home/cta";
import HowItWorks from "@/components/home/how-it-works";
import Header from "@/components/home/header";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main className="isolate">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
