"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Work", path: "/work" },
    { name: "Ecosystem", path: "/ecosystem" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ===============================
          TOP NAVBAR
      =============================== */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl">
        <div className="flex items-center justify-between px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
          {/* Logo */}
          <Link href="/" className="font-semibold tracking-wide text-white">
            Victor Das
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-gray-300 text-sm">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="hover:text-white transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* ===============================
          MOBILE FULLSCREEN MENU
      =============================== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-8 right-10 text-white text-3xl"
            >
              ✕
            </button>

            {/* Menu Links */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-10 text-3xl font-semibold text-white"
            >
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className="hover:text-gray-300 transition"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>

            {/* Footer Text */}
            <p className="absolute bottom-10 text-gray-500 text-sm">
              © {new Date().getFullYear()} Victor Das — Product Portfolio
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
