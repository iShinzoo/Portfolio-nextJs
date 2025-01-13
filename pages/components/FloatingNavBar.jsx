"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const FloatingNavbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed top-4 left-4 transform -translate-y-1/2 z-50"
    >
      <div className="flex flex-col gap-4 p-3 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 shadow-lg">
        <Link
          href="#hero"
          className="text-gray-400 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="text-gray-400 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
        >
          About
        </Link>
        <Link
          href="#skills"
          className="text-gray-400 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
        >
          Skills
        </Link>
        <Link
          href="#projects"
          className="text-gray-400 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="text-gray-400 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
        >
          Contact
        </Link>
      </div>
    </motion.nav>
  );
};

export default FloatingNavbar;