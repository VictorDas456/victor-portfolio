"use client";

import IglooLayout from "./components/IglooLayout";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <IglooLayout>
      {/* ===============================
          STEP 2 — FULL HERO SCREEN
      =============================== */}
      <section className="max-w-6xl mx-auto text-center min-h-[90vh] flex flex-col justify-center">
        {/* ===============================
            STEP 3 — FUTURISTIC TITLE GLOW
        =============================== */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-9xl font-extrabold tracking-tight
          text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400"
        >
          Victor Das
        </motion.h1>

        {/* Subtitle */}
        <p className="mt-10 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Product Manager building futuristic SaaS experiences across
          HealthTech, EdTech, and Analytics — focused on measurable outcomes.
        </p>

        {/* ===============================
            STEP 4 — SPACE UI BUTTONS
        =============================== */}
        <div className="mt-14 flex justify-center gap-6">
          {/* Primary Button */}
          <Link
            href="/work"
            className="px-10 py-4 rounded-2xl bg-white/90 text-black font-semibold
            hover:bg-white transition shadow-lg shadow-white/10"
          >
            View Work →
          </Link>

          {/* Secondary Button */}
          <Link
            href="/contact"
            className="px-10 py-4 rounded-2xl border border-white/20
            hover:border-white/40 hover:bg-white/10 transition backdrop-blur-xl"
          >
            Let’s Talk
          </Link>
        </div>
      </section>

      {/* ===============================
          STEP 5 — FEATURE CARDS WITH SPACE TEXTURE
      =============================== */}
      <section className="mt-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Strategy",
            desc: "Roadmaps, prioritization, and stakeholder alignment.",
          },
          {
            title: "Execution",
            desc: "Shipping high-impact features with cross-functional teams.",
          },
          {
            title: "Outcomes",
            desc: "Growth, retention, analytics, and measurable product wins.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-10 rounded-[2rem] bg-white/5 border border-white/10
            backdrop-blur-xl hover:bg-white/10 transition
            bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"
          >
            <h3 className="text-2xl font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-4 text-gray-400 text-lg leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </section>
    </IglooLayout>
  );
}
