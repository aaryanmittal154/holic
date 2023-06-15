"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
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

  return (
    <motion.footer
      className="bg-black text-white py-12 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.nav
          className="flex justify-between space-x-8"
          variants={itemVariants}
        >
          <div>
            <h5 className="text-sm font-semibold tracking-wider uppercase neon-text-blue">
              About Us
            </h5>
            <p className="mt-2 text-sm text-gray-300">
              Holic AI is a leading AI and technology consultancy, helping
              businesses to innovate and transform in the digital age.
            </p>
          </div>
          <div>
            <h5 className="text-sm font-semibold tracking-wider uppercase neon-text-blue">
              Contact
            </h5>
            <ul className="mt-2 space-y-2">
              <li>
                <p className="text-sm text-gray-300">Email: team@holicai.com</p>
              </li>
              {/* <li>
                <p className="text-sm text-gray-300">Phone: +1 123 456 7890</p>
              </li> */}
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold tracking-wider uppercase neon-text-blue">
              Quick Links
            </h5>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/">
                  <div className="text-sm text-gray-300 hover:text-white">
                    Home
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <div className="text-sm text-gray-300 hover:text-white">
                    Services
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <div className="text-sm text-gray-300 hover:text-white">
                    About Us
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div className="text-sm text-gray-300 hover:text-white">
                    Contact Us
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </motion.nav>
        <motion.div
          className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between"
          variants={itemVariants}
        >
          <div className="flex space-x-6 md:order-2">
            {/* Add your social media links here */}
          </div>
          <p className="mt-8 text-sm text-gray-300 text-center md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Holic AI. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
