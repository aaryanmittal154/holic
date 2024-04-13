"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MobileServices = () => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  const neonText = {
    textShadow:
      "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14",
  };

  return (
    <motion.section
      className="bg-black py-16 flex flex-col md:flex-row"
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
        },
        hidden: { opacity: 0, y: 72 },
      }}
    >
      <div className="w-full md:w-1/2 md:pr-12 md:pl-12">
        <video
          className="w-full h-auto object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-lg"
          src="/Services/mobile.mp4"
          alt="Mobile Services Coming Soon"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full md:w-1/2 text-black">
        <div className="lg:text-center">
          <motion.h2
            style={neonText}
            className="text-base font-semibold tracking-wide uppercase"
          >
            Insight Engine - Coming Soon
          </motion.h2>
          <motion.p
            style={neonText}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl"
          >
            Advanced Predictive Analytics for Web Interactions
          </motion.p>
          <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto text-justify">
            We are thrilled to announce the upcoming launch of Insight Engine, a
            revolutionary web service designed to transform how businesses
            understand and engage with their online audiences. Insight Engine
            leverages cutting-edge predictive analytics and AI to analyze web
            interaction data in real-time, providing deep insights that predict
            user behavior and enhance decision-making.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto text-justify">
            This powerful tool will enable you to anticipate customer needs,
            optimize user experience, and increase conversion rates by
            delivering personalized content and recommendations before users
            even request them. Insight Engine has intuitive dashboards and
            reporting tools make it easy to harness the power of big data for
            strategic advantage. Stay tuned!
          </p>
        </div>
        {/* ...rest of your content */}
      </div>
    </motion.section>
  );
};

export default MobileServices;
