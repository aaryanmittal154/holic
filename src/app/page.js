import { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import AboutUs from "../components/Home/AboutUs";
import Services from "../components/Home/Services";
import CaseStudies from "../components/Home/CaseStudies";
import CallToAction from "../components/Home/CallToAction";
import Stats from "../components/Home/Stats";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <AboutUs />
        <Services />
        <Stats />
        <CaseStudies />
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
}
