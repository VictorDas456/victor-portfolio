"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SpaceWarp() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 -z-20"
      style={{
        background:
          "radial-gradient(circle at center, rgba(99,102,241,0.08), transparent 70%)",
      }}
      animate={{
        scale: 1 + scrollY / 3000,
        opacity: 0.35,
      }}
      transition={{ type: "spring", stiffness: 30 }}
    />
  );
}
