"use client";

import { Radio, RadioGroup } from "@headlessui/react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import LogoCloud from "@/components/home/logo-cloud";
import Features from "@/components/home/features";
import Testimonials from "@/components/home/testimonials";
import Pricing from "@/components/home/pricing";
import FAQS from "@/components/home/faqs";
import Footer from "@/components/home/footer";
import Product from "@/components/home/product";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main className="isolate">
        <Hero />
        <LogoCloud />
        <Product />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQS />
      </main>
      <Footer />
    </div>
  );
}
