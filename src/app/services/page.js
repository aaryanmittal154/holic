import Image from "next/image";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import Hero from "src/components/Services/Hero";
import WebServices from "src/components/Services/WebServices";
import MobileServices from "src/components/Services/MobileServices";
import WebFeatures from "src/components/Services/WebFeatures";
import WebProcess from "src/components/Services/WebProcess";
import UniqueSellingPoint from "src/components/Services/UniqueSellingPoint";
import Stats from "src/components/Home/Stats";
import CallToAction from "src/components/Home/CallToAction";

export const metadata = {
  title: "Services",
  description:
    "Dive into the vast range of services offered by Holic AI. From cutting-edge web and mobile app development to expert SEO optimization and dynamic digital marketing solutions, we equip businesses for success in the digital era. Explore how our innovative AI-driven solutions can elevate your online presence and business growth.",
  generator: "Holic AI",
  applicationName: "Holic AI Tech Consulting",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Holic AI",
    "AI Tech Consultancy",
    "AI-driven Solutions",
    "Web Development Services",
    "Mobile App Development",
    "SEO Optimization Services",
    "Digital Marketing Solutions",
    "E-Commerce Solutions",
    "Business Digital Transformation Journey",
    "Next-Generation Learning Experience",
  ],
  colorScheme: "dark",
  creator: "Holic AI",
  publisher: "Holic AI",
  metadataBase: new URL("https://holic.ai/services"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    title: "Services | Holic AI",
    description:
      "Dive into the vast range of services offered by Holic AI. From cutting-edge web and mobile app development to expert SEO optimization and dynamic digital marketing solutions, we equip businesses for success in the digital era. Explore how our innovative AI-driven solutions can elevate your online presence and business growth.",
    images: "/logo.png",
  },
};

export default function Services() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WebServices />
      <WebFeatures />
      <MobileServices />
      <WebProcess />
      <Stats />
      <UniqueSellingPoint />
      <CallToAction />
      <Footer />
    </main>
  );
}
