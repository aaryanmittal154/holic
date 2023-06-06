"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };
  const gradientBackground = {
    backgroundImage: "linear-gradient(to right, #000000, #434343, #000000)",
    color: "white",
  };

  return (
    <motion.div
      className="py-16"
      style={gradientBackground}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold tracking-tight sm:text-4xl text-center"
          variants={textVariants}
          style={{
            textShadow:
              "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14",
          }}
        >
          Ready to innovate with Holic AI?
        </motion.h2>
        <motion.p
          className="mt-4 text-lg leading-6 text-indigo-200 text-center"
          variants={textVariants}
          style={{
            textShadow:
              "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14",
          }}
        >
          Contact us now and start your digital transformation journey.
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center"
          variants={textVariants}
        >
          <Link href="/contact">
            <motion.div
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              style={{
                boxShadow: "0 0 1rem #39ff14",
                textShadow: "0 0 1rem #39ff14",
              }}
            >
              Embark on Journey
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
