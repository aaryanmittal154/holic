"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaRegLightbulb, FaRegHandshake } from "react-icons/fa";

const OurJourney = () => {
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
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  const whileHover = {
    scale: 1.1,
    transition: { duration: 0.2 },
  };

  const neonText = {
    textShadow:
      "0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14, 0 0 40px #39FF14",
  };

  const neonIcon = {
    textShadow:
      "0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 15px #39FF14, 0 0 20px #39FF14",
  };

  return (
    <motion.section
      className="py-16 text-gray-100"
      style={{
        backgroundColor: "#000",
      }}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-6xl font-extrabold tracking-tight text-center mb-10"
          variants={itemVariants}
          style={neonText}
        >
          Our Journey
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg leading-6 items-center"
          variants={itemVariants}
        >
          {[
            {
              Icon: FaRocket,
              title: "Introduction",
              description:
                "Holic AI was born from a need for a unique and powerful AI solution that could revolutionize the tech industry. Founded by a group of tech enthusiasts and experts, our journey began with the goal of helping businesses.",
            },
            {
              Icon: FaRegLightbulb,
              title: "Challenges Overcame",
              description:
                "Our journey was filled with numerous challenges. Adapting to the rapidly changing tech world and meeting the unique needs of each client was not an easy feat. But with each hurdle we overcame, our expertise grew and our solutions became more robust.",
            },
            {
              Icon: FaRegHandshake,
              title: "Our Expertise",
              description:
                "Today, Holic AI stands as a testament to our unwavering commitment to innovation. Our technical expertise spans a wide range of AI and tech solutions, helping businesses of all sizes reach their full potential in the digital age.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={whileHover}
              className="p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col justify-between h-full"
            >
              <div className="flex flex-col items-center mb-4">
                <item.Icon
                  className="text-green-400 h-12 w-12"
                  style={neonIcon}
                />
                <h3 className="text-3xl font-semibold mt-2" style={neonText}>
                  {item.title}
                </h3>
              </div>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurJourney;
