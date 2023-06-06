"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
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
  };

  const neonText = {
    textShadow:
      "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14",
  };

  return (
    <motion.section
      className="py-32 text-black"
      style={{
        backgroundImage:
          'linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/Contact/conhero.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-8">
        <motion.h1
          className="text-6xl font-extrabold tracking-tight sm:text-7xl text-center"
          variants={itemVariants}
          style={neonText}
        >
          Get in Touch with Us Today
        </motion.h1>
        <motion.p
          className="mt-6 text-xl leading-relaxed text-indigo-200 text-center sm:text-3xl"
          variants={itemVariants}
        >
          We're ready to lead you into the future of AI and tech consulting.
          Let's work together!
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Hero;
