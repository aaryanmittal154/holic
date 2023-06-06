"use client";
import { motion } from "framer-motion";

export default function Hero() {
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
    <div className="pt-10 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <motion.div
            className="pt-8 px-4 sm:px-6 lg:px-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              style={neonText}
              variants={itemVariants}
              className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl"
            >
              Holic AI: Services
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              Ignite your digital journey with our custom-crafted web and mobile
              solutions. Experience the perfect fusion of creativity,
              technology, and bespoke design. Your imagination, our innovation.
              Lets make it uniquely yours!
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div className="rounded-md shadow">
                <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200 md:py-4 md:text-lg md:px-10">
                  Learn More
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="pt-10 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:pr-12 lg:pl-12">
        <video
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-78 rounded-lg"
          src="/Services/services.mp4"
          alt="Holic AI Modern Tech Consultancy"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
}
