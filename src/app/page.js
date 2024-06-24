"use client";

import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Pricing from "@/components/home/pricing";
import FAQS from "@/components/home/faqs";
import Footer from "@/components/home/footer";
import Product from "@/components/home/product";
import CTA from "@/components/home/cta";

export default function Home() {
  return (
    <div className="bg-white">
      {/*  <Header /> */}
      <main className="isolate">
        <Hero />
        <Features />
        <Product />
        <Pricing />
        <FAQS />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
