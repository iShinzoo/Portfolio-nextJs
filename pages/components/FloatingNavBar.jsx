"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Import icons for the hamburger menu

const FloatingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  return (
    <motion.nav
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed top-4 left-4 z-50"
    >
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" /> // Close icon when menu is open
        ) : (
          <Menu className="w-6 h-6 text-white" /> // Hamburger icon when menu is closed
        )}
      </button>

      {/* Navbar Links */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-2 flex flex-col gap-2 p-3 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 shadow-lg"
        >
          <Link
            href="#hero"
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
          >
            About
          </Link>
          <Link
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
          >
            Contact
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default FloatingNavbar;