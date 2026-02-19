"use client";

import IglooLayout from "../components/IglooLayout";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "../data/projects";



export default function WorkPage() {
 const projects = [
  {
    slug: "healthcare-saas",
    title: "🚑 Healthcare SaaS Platform",
    metric: "40% faster reporting",
    desc: "Built scalable dashboards and improved operational efficiency across clinical workflows.",
  },
  {
    slug: "edtech-growth",
    title: "🎓 EdTech Engagement Growth",
    metric: "+20% engagement",
    desc: "Designed KPI-driven roadmap and improved learner retention through feature optimization.",
  },
];


  return (
    <IglooLayout>
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold"
      >
        My Work
      </motion.h1>

      <p className="mt-10 text-gray-300 text-lg max-w-3xl">
        Selected product initiatives across SaaS, HealthTech, and analytics —
        focused on measurable outcomes.
      </p>

      {/* Work Grid */}
      <div className="mt-20 grid md:grid-cols-2 gap-12">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            className="p-12 rounded-[2.5rem] bg-white/5 border border-white/10 
hover:border-white/40 hover:bg-white/10 
shadow-lg hover:shadow-white/10 
transition duration-500"

          >
            <h2 className="text-2xl font-semibold">{p.title}</h2>

            {/* Metric Badge */}
            <p className="mt-4 inline-block px-4 py-2 rounded-full text-sm bg-white/10 text-gray-200">
              {p.metric}
            </p>

            <p className="mt-6 text-gray-400 text-lg">{p.desc}</p>

            {/* Button */}
        <Link
  href={`/work/${p.slug}`}
  className="mt-10 inline-block text-white underline underline-offset-4 hover:text-gray-300 transition"
>
  View Case Study →
</Link>

          </motion.div>
        ))}
      </div>
    </IglooLayout>
  );
}
