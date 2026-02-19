"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import Navbar from "./Navbar";
import Loader from "./Loader";

import { Space_Grotesk } from "next/font/google";

/* ===============================
   FIX: Three.js MUST be Dynamic
   (Prevents Vercel SSR Crash)
=============================== */
const ThreeStarfield = dynamic(() => import("./ThreeStarfield"), {
  ssr: false,
});

/* ===============================
   FONT
=============================== */
const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function IglooLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* ===============================
     LOADER STATE
  =============================== */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  /* ===============================
     CURSOR GLOW STATE
  =============================== */
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* ===============================
          IGLOO LOADER INTRO
      =============================== */}
      <Loader done={!loading} />

      {/* ===============================
          MAIN WRAPPER
      =============================== */}
      <main
        className={`${space.className} min-h-screen text-white relative overflow-hidden`}
      >
        {/* ===============================
            REAL 3D STARFIELD (Three.js)
        =============================== */}
        <ThreeStarfield />

        {/* ===============================
            SPACE ATMOSPHERE OVERLAY
        =============================== */}
        <div className="absolute inset-0 -z-30">
          {/* Nebula Glow Orbs */}
          <div className="absolute top-[-250px] left-[-250px] w-[750px] h-[750px] bg-purple-500/25 blur-[220px] rounded-full" />

          <div className="absolute bottom-[-300px] right-[-300px] w-[750px] h-[750px] bg-blue-500/20 blur-[240px] rounded-full" />

          <div className="absolute top-[30%] right-[20%] w-[600px] h-[600px] bg-indigo-500/15 blur-[200px] rounded-full" />

          {/* Aurora Animation */}
          <motion.div
            animate={{ opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.25),transparent_60%),radial-gradient(circle_at_30%_80%,rgba(168,85,247,0.20),transparent_65%)]"
          />

          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* ===============================
            CURSOR GLOW ORB
        =============================== */}
        <motion.div
          className="pointer-events-none fixed top-0 left-0 w-[520px] h-[520px] rounded-full bg-blue-500/20 blur-[220px] -z-10"
          animate={{
            x: cursor.x - 260,
            y: cursor.y - 260,
          }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
          }}
        />

        {/* ===============================
            NAVBAR
        =============================== */}
        <Navbar />

        {/* ===============================
            PAGE CONTENT
        =============================== */}
        <div className="pt-32 px-8 max-w-7xl mx-auto">{children}</div>
      </main>
    </>
  );
}
