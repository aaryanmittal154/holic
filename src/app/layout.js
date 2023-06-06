import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Holic AI",
    default: "Holic AI", // a default is required when creating a template
  },
  description:
    "Welcome to Holic AI, your leading tech consultancy specializing in AI-driven solutions for business growth. Explore our wide array of services, including web and mobile app development, SEO optimization, and digital marketing. Start your digital transformation journey and learn with us in the cutting-edge tech landscape.",
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
  metadataBase: new URL("https://holic.ai/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    title: "Holic AI",
    description:
      "Welcome to Holic AI, your leading tech consultancy specializing in AI-driven solutions for business growth. Explore our wide array of services, including web and mobile app development, SEO optimization, and digital marketing. Start your digital transformation journey and learn with us in the cutting-edge tech landscape.",
    images: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
