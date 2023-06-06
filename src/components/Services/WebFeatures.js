"use client";
import React from "react";
import { motion } from "framer-motion";
import { BiMobile, BiTransfer, BiBuildingHouse, BiGlobe } from "react-icons/bi";

const features = [
  {
    id: 1,
    title: "Responsive Design",
    description:
      "We ensure your website looks great on all devices, improving user experience and accessibility.",
    icon: BiMobile,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Our designs prioritize usability and user satisfaction, leading to higher engagement rates.",
    icon: BiTransfer,
  },
  {
    id: 3,
    title: "Brand Integration",
    description:
      "We create designs that align seamlessly with your brand, reinforcing brand identity and consistency.",
    icon: BiBuildingHouse,
  },
  {
    id: 4,
    title: "SEO-Friendly",
    description:
      "Our websites are designed to be search engine friendly to help improve your online visibility.",
    icon: BiGlobe,
  },
  // Add more features as needed
];

const futuristicText = {
  textShadow:
    "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14",
};

const WebDesignFeatures = () => {
  return (
    <motion.section
      className="bg-black text-neon-green py-16 px-4 sm:px-6 lg:px-8 lg:py-24"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-3xl font-extrabold text-white sm:text-4xl"
          style={futuristicText}
        >
          Features & Benefits of Our Web Design Services
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                className="flex flex-col items-center text-center border border-green-700 p-4 rounded-lg bg-black transition duration-300 ease-in-out transform hover:scale-105"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                whileHover={{ scale: 1.05 }}
              >
                {Icon && <Icon className="mb-4 text-white" size={48} />}
                <h3
                  className="mt-2 font-semibold text-white text-2xl"
                  style={futuristicText}
                >
                  {feature.title}
                </h3>
                <p className="mt-4 text-xl text-md text-white">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default WebDesignFeatures;
