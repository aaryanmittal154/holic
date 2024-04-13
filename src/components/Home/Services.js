"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Automated Customer Support",
      description:
        "Deploy AI-driven chatbots to offer 24/7 customer support and instant responses, streamlining client interactions.",
      icon: "🤖",
    },
    {
      title: "Fraud Detection and Security",
      description:
        "Utilize cutting-edge AI algorithms to enhance your security measures, preventing fraud across all platforms.",
      icon: "🛡️",
    },
    {
      title: "Personalized Marketing",
      description:
        "Implement AI to craft tailored marketing strategies that dynamically adjust to consumer behavior and preferences.",
      icon: "🎯",
    },
    {
      title: "Business Intelligence and Analytics",
      description:
        "Harness powerful AI tools to analyze vast amounts of data, offering profound insights that drive business growth.",
      icon: "📊",
    },
    {
      title: "Web Development",
      description:
        "From front-end to back-end, we develop websites that are scalable, secure and user-friendly.",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description:
        "We develop mobile apps that are fast, responsive and user-friendly. We also offer cross-platform development.",
      icon: "📱",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.1 } },
  };

  const Button = ({ children }) => (
    <button className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      {children}
    </button>
  );

  return (
    <motion.div
      className="py-16 bg-black text-white"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
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
            Services
          </motion.h2>
          <motion.h3
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"
            style={{
              textShadow:
                "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14",
            }}
          >
            Empower Your Future
          </motion.h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Unleash the potential of your business with our cutting-edge
            technological solutions designed for the future.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative space-y-4"
              variants={itemVariants}
              whileHover="hover"
            >
              <div
                style={{
                  textShadow:
                    "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14",
                }}
                className="flex items-center justify-center text-indigo-500 text-6xl"
              >
                {service.icon}
              </div>
              <h4 className="text-lg leading-6 font-medium text-gray-200">
                {service.title}
              </h4>
              <p className="text-base text-gray-400">{service.description}</p>
              <Link href="/services">
                <Button>Learn More</Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
