"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, XIcon } from "lucide-react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok) {
        setEmailSubmitted(true);
      } else {
        console.error("Error:", resData.error);
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section
      className="min-h-screen text-white py-20 relative overflow-hidden"
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {" "}
          {/* Increased gap to gap-12 (48px) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h5 className="text-xl font-bold mb-4">Let&apos;s Connect</h5>
            <p className="text-gray-400 mb-6">
              I’m actively exploring new opportunities and would love to
              connect! Feel free to reach out—whether you have a question, a
              collaboration idea, or just want to say hello. I’ll do my best to
              get back to you promptly!
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/iShinzoo"
                target="_blank"
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                <GithubIcon className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/krishnathakur1/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                <LinkedinIcon className="w-6 h-6" />
              </Link>
              <Link
                href="https://x.com/i_krsna4"
                target="_blank"
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                <XIcon className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {emailSubmitted ? (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully! 🎉
              </p>
            ) : (
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="text-white block mb-2 text-sm font-medium"
                  >
                    Your email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg block w-full p-2.5"
                    placeholder="work.krsna4@gmail.com"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="text-white block text-sm mb-2 font-medium"
                  >
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg block w-full p-2.5"
                    placeholder="Just saying hello"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="text-white block text-sm mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg block w-full p-2.5"
                    placeholder="Let's talk about..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600/80 to-purple-400/80 hover:bg-purple-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
