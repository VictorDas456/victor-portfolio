"use client";

import { motion } from "framer-motion";

export default function Loader({ done }: { done: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-black ${
        done ? "pointer-events-none" : ""
      }`}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-gray-400 tracking-[0.4em] text-sm uppercase">
          Loading
        </p>

        <h1 className="mt-4 text-4xl md:text-6xl font-bold">
          Victor Das
        </h1>

        <motion.div
          className="mt-10 h-[2px] w-[220px] bg-white/10 overflow-hidden rounded-full mx-auto"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="h-full w-1/2 bg-white/60"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
