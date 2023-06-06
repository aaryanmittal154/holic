"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CaseStudies() {
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
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const caseStudy = {
    name: "Holic AI Course",
    description:
      "Become a SuperFast Web Developer using AI Tools. Holic provides next-generation learning experiences by integrating cutting-edge AI technology. With personalized learning paths, adaptive quizzes, and intelligent recommendations, you will master web development faster than ever regardless of your background.",
    link: "https://www.holicai.com/",
    logo: "/logo.png", // Replace with your logo URL
  };

  return (
    <motion.div
      className="py-16 bg-black text-white"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2
            className="text-base font-semibold tracking-wide uppercase"
            style={{
              textShadow:
                "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14",
            }}
          >
            Featured Course
          </motion.h2>
          <motion.h3
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"
            style={{
              textShadow:
                "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14",
            }}
          >
            {caseStudy.name}
          </motion.h3>
        </div>
        <div className="mt-10">
          <motion.div
            className="mb-10 p-6 rounded-lg shadow-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="flex items-center">
              <img
                src={caseStudy.logo}
                alt="Holic AI Logo"
                className="h-16 w-16 mr-4"
              />
              <h4 className="text-2xl font-bold">{caseStudy.name}</h4>
            </div>
            <p className="mt-2 text-base">{caseStudy.description}</p>
            <Link href={caseStudy.link}>
              <motion.div
                className="mt-4 inline-flex items-center cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                Embrace The Future{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
