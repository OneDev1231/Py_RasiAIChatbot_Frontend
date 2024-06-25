"use client";

import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Pricing from "@/components/home/pricing";
import Footer from "@/components/home/footer";
import CTA from "@/components/home/cta";
import GetStarted from "@/components/home/get-started";

export default function Home() {
  return (
    <div className="bg-white">
      {/*  <Header /> */}
      <main className="isolate">
        <Hero />
        <Features />
        <GetStarted />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
