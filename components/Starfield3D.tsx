"use client";

import { motion } from "framer-motion";

export default function Starfield3D() {
  return (
    <motion.div
      className="absolute inset-0 -z-30 opacity-20"
      animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/stardust.png')",
      }}
    />
  );
}
