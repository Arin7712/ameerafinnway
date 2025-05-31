'use client';

import { BadgeSwitcher } from "@/components/BadgeSwtitcher";
import { Button } from "@/components/ui/button";
import { Navbar1 } from "@/components/ui/navbar-1";
import { ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
    },
  }),
};

// Animation for emblem pop-up effect
const popUpVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay = 0) => ({
    opacity: 0.06,
    scale: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  return (
    <div className="relative h-screen bg-stone-100 overflow-hidden">
      {/* Background emblem images with animation */}
      <motion.div
        variants={popUpVariant}
        initial="hidden"
        animate="visible"
        custom={0.2}
        className="absolute top-[20%] left-0 z-0 pointer-events-none"
      >
        <Image
          src="/emblem.png"
          alt="Emblem"
          width={500}
          height={300}
          className="md:opacity-100 opacity-0"
        />
      </motion.div>

      <motion.div
        variants={popUpVariant}
        initial="hidden"
        animate="visible"
        custom={0.4}
        className="absolute top-[20%] right-0 z-0 pointer-events-none"
      >
        <Image
          src="/emblem.png"
          alt="Emblem"
          width={500}
          height={300}
          className="md:opacity-100 opacity-0"
        />
      </motion.div>

      {/* <Navbar1 /> */}

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-[100vh] md:px-0 px-6">
        <div className="flex flex-col gap-4 md:gap-6 items-center justify-center text-center max-w-lg md:max-w-3xl">
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            <BadgeSwitcher />
          </motion.div>

          <motion.h1
            className="md:text-5xl text-2xl md:font-normal font-medium leading-tighter"
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            Your Projects, Powered by <br />{" "}
            <span className="">Government Banks</span>
          </motion.h1>

          <motion.p
            className="md:max-w-xl md:text-sm text-sm"
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            custom={0.6}
          >
            We Help Secure ₹25–100 Cr in Project Funding Through Trusted
            Government Banks, Supporting Business Growth Across India.
          </motion.p>

          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            custom={0.8}
          >
            <Button className="rounded-full bg-yellow-200 text-black text-sm font-normal px-6 shadow-sm hover:bg-yellow-200 hover:cursor-pointer">
              Apply Now<span className="ml-1">→</span> 
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
