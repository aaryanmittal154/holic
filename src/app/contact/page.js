import Image from "next/image";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import Hero from "src/components/Contact/Hero";
import ContactForm from "src/components/Contact/ContactForm";
import ContactDetails from "src/components/Contact/ContactDetails";

export const metadata = {
  title: "Contact Us",
  description:
    "Ready to ignite your digital transformation with Holic AI? Connect with our team of tech experts. We're here to discuss your project needs, answer your questions, and guide you towards innovative solutions that drive business growth. Start your conversation with Holic AI today.",
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
  metadataBase: new URL("https://holic.ai/contact"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    title: "Contact Holic AI",
    description:
      "Ready to ignite your digital transformation with Holic AI? Connect with our team of tech experts. We're here to discuss your project needs, answer your questions, and guide you towards innovative solutions that drive business growth. Start your conversation with Holic AI today.",
    images: "/logo.png",
  },
};

export default function Services() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ContactForm />
      <ContactDetails />
      <Footer />
    </main>
  );
}
