"use client";

import IglooLayout from "../../components/IglooLayout";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

/* ✅ Import projects from one data source */
import { projects } from "../../data/projects";

export default function WorkDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  /* ✅ Find matching project by slug */
  const project = projects.find((p) => p.slug === slug);

  /* ----------------------------------------
     If Project Not Found
  ---------------------------------------- */
  if (!project) {
    return (
      <IglooLayout>
        <section className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold">Case Study Not Found</h1>
          <p className="mt-6 text-gray-400 text-lg">
            This project doesn’t exist yet.
          </p>

          <Link
            href="/work"
            className="inline-block mt-10 underline text-white hover:text-gray-300 transition"
          >
            ← Back to Work
          </Link>
        </section>
      </IglooLayout>
    );
  }

  /* ----------------------------------------
     Case Study Page Layout
  ---------------------------------------- */
  return (
    <IglooLayout>
      {/* HEADER */}
      <section className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold"
        >
          {project.title}
        </motion.h1>

        {/* Metric Badge */}
        <p className="mt-6 inline-block px-6 py-2 rounded-full bg-white/10 text-gray-200">
          {project.metric}
        </p>

        {/* Summary */}
        <p className="mt-10 text-gray-300 text-lg leading-relaxed max-w-3xl">
          {project.summary}
        </p>
      </section>

      {/* PROBLEM → SOLUTION → IMPACT */}
      <section className="mt-24 max-w-5xl mx-auto grid gap-16">
        {/* Problem */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <h2 className="text-3xl font-semibold">The Problem</h2>
          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            {project.problem}
          </p>
        </motion.div>

        {/* Solution */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <h2 className="text-3xl font-semibold">The Solution</h2>
          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            {project.solution}
          </p>
        </motion.div>

        {/* Impact */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <h2 className="text-3xl font-semibold">Impact</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {project.impact.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <p className="text-lg font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Focus Areas / Stack */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <h2 className="text-3xl font-semibold">Focus Areas</h2>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.stack.map((tag, i) => (
              <span
                key={i}
                className="px-6 py-2 rounded-full bg-white/10 text-gray-200 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* BACK BUTTON */}
      <div className="mt-20 text-center">
        <Link
          href="/work"
          className="text-white underline underline-offset-4 hover:text-gray-300 transition"
        >
          ← Back to Work
        </Link>
      </div>
    </IglooLayout>
  );
}
