"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaDollarSign, FaRocket } from "react-icons/fa";

const uniquePoints = [
  {
    id: 1,
    title: "Best Rates",
    description:
      "We pride ourselves on offering the most competitive rates in the industry, providing superior value for your investment.",
    icon: FaDollarSign,
  },
  {
    id: 2,
    title: "Faster Builds",
    description:
      "Our expert team is committed to delivering your website faster without compromising on quality.",
    icon: FaRocket,
  },
];

const futuristicText = {
  textShadow:
    "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14",
};

const UniqueSellingPoint = () => {
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
          Our Unique Selling Points
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {uniquePoints.map((point) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.id}
                className="relative flex flex-col items-center text-center p-6 rounded-lg shadow-lg bg-black transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-green-700"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                whileHover={{ scale: 1.1 }}
              >
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
                  {point.title}
                </h3>
                <p className="mt-4 text-md text-gray-200 transition-all duration-500 ease-in-out hover:text-white">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        <p className="mt-6 text-xl text-gray-200 text-justify">
          We understand that each client is unique and has different needs. As
          such, we provide our price estimates and timelines after a detailed
          consultation with you to understand your requirements better. Our
          focus is on delivering value and ensuring your satisfaction.
        </p>
      </div>
    </motion.section>
  );
};

export default UniqueSellingPoint;
