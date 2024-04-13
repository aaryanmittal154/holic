"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  BiMobile,
  BiTransfer,
  BiBuildingHouse,
  BiGlobe,
  BiRobot,
  BiShieldQuarter,
  BiTargetLock,
  BiChart,
  BiCog,
  BiWrench,
} from "react-icons/bi";
import { RiCustomerService2Line } from "react-icons/ri";

const features = [
  {
    id: 1,
    title: "Business Intelligence and Analytics",
    description:
      "Our AI tools analyze vast amounts of data to deliver profound insights, helping you make informed decisions that drive business growth. This includes predictive analytics and trend identification to stay ahead in your industry.",
    icon: BiChart, // Placeholder, replace with actual icon import
  },
  {
    id: 2,
    title: "Automated Customer Support",
    description:
      "We deploy AI-driven chatbots that are capable of operating 24/7, ensuring that your customer service is always responsive, reducing wait times and improving overall satisfaction.",
    icon: RiCustomerService2Line, // Placeholder, replace with actual icon import
  },
  {
    id: 3,
    title: "Fraud Detection and Security",
    description:
      "Utilizing cutting-edge AI algorithms, our systems enhance your security measures by providing real-time fraud detection across all platforms, safeguarding your transactions and sensitive data.",
    icon: BiShieldQuarter, // Placeholder, replace with actual icon import
  },
  {
    id: 4,
    title: "Personalized Marketing",
    description:
      "By leveraging AI, we craft marketing strategies that adapt in real-time to consumer behavior and preferences, significantly improving engagement and conversion rates through highly targeted content.",
    icon: BiTargetLock, // Placeholder, replace with actual icon import
  },
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
          Unique Features & Benefits
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
