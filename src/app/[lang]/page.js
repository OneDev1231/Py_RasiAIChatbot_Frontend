import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Pricing from "@/components/home/pricing";
import Footer from "@/components/home/footer";
import CTA from "@/components/home/cta";
import HowItWorks from "@/components/home/how-it-works";
import Header from "@/components/home/header";
import { getDictionary } from "@/lib/get-dictionary";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="bg-white">
      <Header dictionary={dictionary?.home?.header} currentLang={lang} />
      <main className="isolate">
        <Hero dictionary={dictionary?.home?.hero} />
        <Features dictionary={dictionary?.home?.features} />
        <HowItWorks dictionary={dictionary?.home?.how_it_works} />
        <Pricing dictionary={dictionary?.home?.pricing} />
        <CTA dictionary={dictionary?.home?.cta} />
      </main>
      <Footer dictionary={dictionary?.home?.footer} />
    </div>
  );
}
