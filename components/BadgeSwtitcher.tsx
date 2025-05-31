'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { CircleStop, Landmark } from "lucide-react";

const badgeTexts = [
  "High Value Funding",
  "Fast Bank Approvals",
  "Govt-Backed Loans"
];

export const BadgeSwitcher = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % badgeTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 px-5 rounded-full bg-white py-2 shadow-md w-[14rem]">
      <Landmark className="size-4 text-green-400" />
      <div className="relative h-[1.25rem] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0, position: "absolute" }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 top-[0.5] md:text-sm text-xs text-neutral-700 w-full"
          >
            {badgeTexts[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
