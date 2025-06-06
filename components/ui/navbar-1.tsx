"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Services",
    href: "services",
  },
  {
    name: "Contact",
    href: "contact",
  },
];

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-center w-full py-6 px-4 z-50 absolute">
      <div className="flex items-center justify-between px-6 py-3 bg-white rounded-full shadow-lg w-full md:max-w-[80%] lg:max-w-[80%] relative z-10">
        <div className="flex items-center">
          <motion.div
            className="w-auto h-8 mr-6 flex items-center gap-2"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <Image src="/ameraa.webp" alt="Logo" width={40} height={40} />
            <h1 className="md:text-2xl text-lg font-medium tracking-tighter text-yellow-400">Ameera Finnway</h1>
          </motion.div>
        </div>

<div className="flex items-center gap-[4rem]">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-sm hover:cursor-pointer   transition-all duration-200 ">
                {item.name}
              </div>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA Button */}

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="inline-flex hover:cursor-pointer items-center justify-center px-5 py-2 text-sm text-black bg-yellow-200 rounded-full transition-colors">
            Get Started
          </div>
        </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden flex items-center p-2 bg-yellow-200 rounded-md"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="h-6 w-6 text-black" />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-neutral-950 z-50 pt-24 px-6 lg:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
              <h1 className="text-2xl text-neutral-200 font-medium ">
                Scooter
              </h1>
            </div>
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6 text-neutral-300" />
            </motion.button>
            <div className="flex flex-col space-y-6 pt-[4rem]">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-sm hover:cursor-pointer text-neutral-300 hover:text-white  transition-all duration-200 ">
                    {item.name}
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6"
              >
                <div
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-black bg-white rounded-full hover:bg-gray-800 transition-colors "
                  onClick={toggleMenu}
                >
                  Get Started
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Navbar1 };
