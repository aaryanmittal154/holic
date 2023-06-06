"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function AboutUs() {
  const [hovered, setHovered] = useState(false);

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
    show: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
  };

  // Styling
  const gradientBackground = {
    backgroundImage: "linear-gradient(to right, #000000, #434343, #000000)",
    color: "white",
  };

  const neonText = {
    textShadow:
      "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14",
  };

  const neonButton = {
    background: "none",
    border: `1px solid ${hovered ? "#00FF00" : "#90EE90"}`,
    color: `${hovered ? "#00FF00" : "#90EE90"}`,
    textShadow: `0 0 10px ${hovered ? "##00FF00" : "#90EE90"}`,
  };

  return (
    <motion.div
      style={gradientBackground}
      className="py-16"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2
            style={neonText}
            variants={itemVariants}
            className="text-base font-semibold tracking-wide uppercase"
          >
            About Us
          </motion.h2>
          <motion.h3
            style={neonText}
            variants={itemVariants}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl"
          >
            A commitment to innovation
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-2xl text-xl lg:mx-auto"
          >
            At Holic AI, we blend strategy, design, and engineering to bring you
            the best solutions. We believe in driving business growth through
            technological innovation and have a passion for pushing boundaries
            and challenging the status quo.
          </motion.p>
        </div>
        <motion.div
          variants={itemVariants}
          className="mt-10 flex justify-center items-center"
        >
          <Link href="/about">
            <motion.button
              variants={itemVariants}
              whileHover="hover"
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              style={neonButton}
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
