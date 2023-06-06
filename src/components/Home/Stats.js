"use client";
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  spring,
  useSpring,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

function Counter({ end }) {
  const [count, setCount] = useState(0);
  const springProps = useSpring(0, {
    stiffness: 100, // adjust this value to control the speed of the count
    damping: 100, // adjust this value to control the speed of the count
  });

  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
  });

  useEffect(() => {
    if (inView) {
      const unsubscribe = springProps.onChange((v) => {
        setCount(Math.floor(v * end));
      });

      springProps.set(1); // initiate the spring animation

      return unsubscribe;
    }
  }, [end, springProps, inView]);

  const xRange = [0, 1];
  const yRange = [0, end];
  const springPropsTransformed = useTransform(springProps, xRange, yRange);

  return (
    <motion.div
      ref={ref}
      className="text-6xl font-bold mb-2"
      style={{
        ...springPropsTransformed,
        textShadow:
          "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14",
      }}
    >
      {count}
    </motion.div>
  );
}

export default function Stats() {
  return (
    <div className="relative h-96">
      <video
        src="/Home/stats.mp4"
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-black opacity-70" />
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <motion.div
          initial="hidden"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 1, 1] }}
        >
          <Counter end={10} />
        </motion.div>
        <div className="uppercase tracking-widest text-xl">
          Customers Served
        </div>
        <motion.div
          initial="hidden"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 1, 1] }}
          className="mt-10"
        >
          <Counter end={5} />
        </motion.div>
        <div className="uppercase tracking-widest text-xl">
          Partners Worldwide
        </div>
      </div>
    </div>
  );
}
