// components/WebServices.js
"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  AiOutlineCode,
  AiOutlineCloudSync,
  AiOutlineSetting,
} from "react-icons/ai";
import { FiLayout, FiShoppingCart } from "react-icons/fi";
import { RiSearchEyeLine } from "react-icons/ri";
import { BiRocket } from "react-icons/bi";

const futuristicText = {
  textShadow:
    "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14",
};

const WebServices = () => {
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

  const services = [
    {
      name: "Web Design",
      description:
        "We create visually stunning, highly usable and accessible designs that help your brand stand out.",
      icon: <FiLayout size={48} />,
    },
    {
      name: "SEO Optimization",
      description:
        "Boost your site's rankings and visibility on search engines with our expert SEO strategies.",
      icon: <RiSearchEyeLine size={48} />,
    },
    {
      name: "Content Management System",
      description:
        "Manage your website's content easily and effectively with our robust CMS solutions.",
      icon: <AiOutlineCloudSync size={48} />,
    },
    {
      name: "Web Development",
      description:
        "From front-end to back-end, we develop websites that are scalable, secure and user-friendly.",
      icon: <AiOutlineCode size={48} />,
    },
    {
      name: "E-Commerce Solutions",
      description:
        "Turn your website into a profitable online store with our innovative e-commerce solutions.",
      icon: <FiShoppingCart size={48} />,
    },
    {
      name: "Digital Marketing",
      description:
        "Reach your target audience and increase your sales with our digital marketing strategies.",
      icon: <AiOutlineSetting size={48} />,
    },
  ];

  return (
    <motion.section
      className="bg-black text-neon-green py-16"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <BiRocket className="h-16 w-16 text-neon-green animate-pulse" />
          <h2
            className="text-2xl text-neon-green font-semibold tracking-wide uppercase"
            style={futuristicText}
          >
            Web Services
          </h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">
            Empowering your online presence
          </p>
          <p className="mt-4 max-w-2xl text-2xl text-gray-400 lg:mx-auto">
            From web design to SEO optimization, we provide a wide range of
            services to elevate your business on the web.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
          {services.map((service, index) => (
            <div className="relative" key={index}>
              <dt>
                <div className="absolute flex items-center justify-center h-16 w-16 rounded-md bg-neon-green text-white">
                  {service.icon}
                </div>
                <p
                  className="ml-16 text-2xl leading-6 font-medium text-neon-green"
                  style={futuristicText}
                >
                  {service.name}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-lg text-gray-400">
                {service.description}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WebServices;
