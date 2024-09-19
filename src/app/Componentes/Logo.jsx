"use client";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Logo() {
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 2,
      },
    },
  };
  const barraAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  return (
    <Link id="logo" href="/">
      <motion.span
        initial="hidden"
        animate="visible"
        variants={containerAnimation}
        className=" text-2xl sm:text-3xl text-colors-titulo font-bold hover:text-white transition-all"
      >
        {"<ArthurGomes.dev/>".split("").map((letra, index) => (
          <motion.span key={index} variants={letterAnimation}>
            {letra}
          </motion.span>
        ))}
      </motion.span>
      <motion.span
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
          delay: 2,
        }}
        variants={barraAnimation}
        className=" text-2xl sm:text-3xl text-colors-titulo font-bold"
      >
        |
      </motion.span>
    </Link>
  );
}
