import Image from "next/image";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import Hero from "src/components/About/Hero";
import OurJourney from "src/components/About/OurJourney";
import UniqueSection from "src/components/About/UniqueSection";
import Stats from "src/components/Home/Stats";
import CallToAction from "src/components/Home/CallToAction";
import BackgroundVideo from "src/components/About/BackgroundVideo";

export const metadata = {
  title: "About",
  description:
    "Discover Holic AI, a trailblazing tech consultancy leveraging AI to drive business innovation. Learn about our commitment to pushing technological boundaries, our passion for design and strategy, and how we empower clients worldwide. Start your journey towards digital transformation with Holic AI today.",
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
  metadataBase: new URL("https://holic.ai/about"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    title: "About Holic AI",
    description:
      "Discover Holic AI, a trailblazing tech consultancy leveraging AI to drive business innovation. Learn about our commitment to pushing technological boundaries, our passion for design and strategy, and how we empower clients worldwide. Start your journey towards digital transformation with Holic AI today.",
    images: "/logo.png",
  },
};

export default function About() {
  return (
    <main>
      <Navbar />
      <Hero />
      <OurJourney />
      <BackgroundVideo />
      <UniqueSection />
      <Stats />
      <CallToAction />
      <Footer />
    </main>
  );
}
