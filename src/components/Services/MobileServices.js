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
            Mobile Services - Coming Soon
          </motion.h2>
          <motion.p
            style={neonText}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl"
          >
            Expanding to Mobile Applications
          </motion.p>
          <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto text-justify">
            Get set for a groundbreaking announcement - we are entering the
            thrilling sphere of mobile applications! As part of our mission to
            provide seamless, on-the-go access, we are packing the best of our
            services into an intuitive app that will transform your digital
            interactions.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto text-justify">
            Immerse yourself in a smooth, immersive user experience that is
            coming your way, driven by our relentless innovation and technical
            expertise. Something spectacular is about to drop on your screens.
            Stay tuned!
          </p>
        </div>
        {/* ...rest of your content */}
      </div>
    </motion.section>
  );
};

export default MobileServices;
