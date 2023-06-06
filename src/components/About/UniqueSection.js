// components/UniqueSection.js
"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaCogs, FaLightbulb, FaHeadset } from "react-icons/fa";

const UniqueSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cards = [
    {
      title: "Experience and Expertise:",
      desc: "We bring decades of combined experience in AI and tech solutions, offering our clients unparalleled expertise.",
      icon: <FaRocket size={30} />,
    },
    {
      title: "Custom Solutions for all:",
      desc: "We understand that every business is unique. That's why we offer custom AI solutions tailored to meet your specific business needs.",
      icon: <FaCogs size={30} />,
    },
    {
      title: "Commitment to Innovation:",
      desc: "At Holic AI, we believe in constantly pushing the boundaries of what's possible. We're committed to staying at the forefront of technological advancements.",
      icon: <FaLightbulb size={30} />,
    },
    {
      title: "Outstanding Customer Service:",
      desc: "We believe that our job isn't done until our clients are completely satisfied. Our team is dedicated to providing you with exceptional customer service every step of the way.",
      icon: <FaHeadset size={30} />,
    },
  ];

  return (
    <motion.section
      className="py-4 sm:py-8 md:py-16 text-white font-mono"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      style={{
        background: "#000000",
        boxShadow: "0 0 10px #00ff00",
      }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-center mb-6 md:mb-10 col-span-full"
          variants={itemVariants}
          style={{
            textShadow: "0 0 10px #00ff00",
            transform: "skewY(-3deg)",
          }}
        >
          What Makes Holic AI Unique
        </motion.h2>
        {cards.map((card, index) => (
          <motion.div
            className="mt-4 p-2 md:p-4 rounded-lg bg-blue-200 bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg text-white"
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgb(0,255,0)" }}
          >
            <div className="flex items-center space-x-2 md:space-x-3">
              {card.icon}
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                {card.title}
              </h3>
            </div>
            <p className="text-sm md:text-lg">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default UniqueSection;
