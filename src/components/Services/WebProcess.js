"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaRegLightbulb,
  FaPencilRuler,
  FaCogs,
  FaRocket,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and target audience to inform our design process.",
    icon: FaRegLightbulb,
  },
  {
    id: 2,
    title: "Design",
    description:
      "Our team creates user-centric designs that align with your brand and engage your audience.",
    icon: FaPencilRuler,
  },
  {
    id: 3,
    title: "Development",
    description:
      "Once the designs are finalized, we develop your website using the latest web technologies.",
    icon: FaCogs,
  },
  {
    id: 4,
    title: "Launch",
    description:
      "After thorough testing, we ensure a smooth launch and offer ongoing support for any future needs.",
    icon: FaRocket,
  },
];

const futuristicText = {
  textShadow:
    "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14",
};

const WebProcess = () => {
  return (
    <motion.section
      className="py-16 px-4 sm:px-6 lg:px-8 lg:py-24 bg-black text-white"
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
          Our Process
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                className="relative flex flex-col items-center text-center p-6 rounded-lg shadow-lg bg-black transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-green-700"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                whileHover={{ scale: 1.1 }}
              >
                {index !== 0 && (
                  <svg
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full h-8 w-8 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M22.6 5.6l-1.6-1.6L0 25l21.2 21.2 1.6-1.6L3.2 25z"></path>
                  </svg>
                )}
                {Icon && (
                  <Icon
                    className="mb-4 text-white transition-all duration-500 ease-in-out hover:text-green-500"
                    size={48}
                  />
                )}
                <h3
                  className="mt-2 text-lg font-semibold text-white transition-all duration-500 ease-in-out hover:text-green-500"
                  style={futuristicText}
                >
                  {step.title}
                </h3>
                <p className="mt-4 text-md text-gray-300 transition-all duration-500 ease-in-out hover:text-white">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default WebProcess;
