"use client";

import HeroButton from "../ui/HeroButton";
import PrimaryButton from "../ui/PrimaryButton";
import { NavbarDemo } from "./NavbarDemo";
import { motion } from "framer-motion";
import {
  containerVariants,
  fadeInUpVariants,
  gridVariants,
} from "../ui/MotionVariants";


export default function Hero() {

  return (
    <div className=" w-full relative bg-white overflow-hidden">
      {/* Animated Subtle Diagonal Fade Grid Background */}
      <motion.div
        className="absolute inset-0 "
        variants={gridVariants}
        initial="hidden"
        animate="visible"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(209, 213, 219, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(209, 213, 219, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 100% at 0% 0%, #000 40%, transparent 80%)",
          maskImage:
            "radial-gradient(ellipse 100% 100% at 0% 0%, #000 40%, transparent 80%)",
        }}
      />

      {/* Main Content Container */}
      <motion.div
        className="relative  items-center justify-center text-center pt-[120px] md:pt-[150px] pb-[30px] sm:pb-[50px] flex flex-col w-full max-w-[1366px] mx-auto px-4 sm:px-8 md:px-[60px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Navbar - Slides in from top */}
        <motion.div className="absolute left-0  w-full h-full">
          <div>
            <NavbarDemo />
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="max-w-[900px]">
          {/* Hero Button - Animated entry */}
          <motion.div variants={fadeInUpVariants}>
            <HeroButton name="The Future of AI is Agentic - Launching Soon" />
          </motion.div>

          {/* Main Heading - Staggered word animation */}
          <motion.div variants={fadeInUpVariants}>
            <motion.p
              className="text-4xl lg:text-6xl font-extrabold pt-7 text-neutral-900"
              initial="hidden"
              animate="visible"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
Building the Next Generation of
              </motion.span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Autonomous AI Agents
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Description - Fade in with slight delay */}
          <motion.p
            className="text-base sm:text-lg text-gray-600 py-7 max-w-2xl mx-auto"
            variants={fadeInUpVariants}
          >
            AxalionXAI is pioneering the next wave of AI with our advanced Agentic AI platform.
            Experience intelligent systems that think, learn, and act autonomously to solve complex problems.
          </motion.p>
        </div>

        {/* Action Buttons - Animated with hover effects */}
        <motion.div className="flex flex-row gap-6" variants={fadeInUpVariants}>
          <motion.div>
            <PrimaryButton
              name="Join Waitlist"
              onClick={() => window.open("#waitlist", "_self")}
            />
          </motion.div>

          <motion.div>
            <PrimaryButton
              variant="secondary"
              name="Learn More"
              onClick={() => window.open("#features", "_self")}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
