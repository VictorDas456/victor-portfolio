"use client";

import IglooLayout from "../components/IglooLayout";
import { motion } from "framer-motion";

export default function EcosystemPage() {
  const domains = [
    "HealthTech Platforms",
    "EdTech Growth Systems",
    "SaaS Analytics Products",
    "Agile Delivery & Execution",
    "Data Strategy + Observability",
  ];

  return (
    <IglooLayout>
      <section className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold">Ecosystem</h1>

        <p className="mt-10 text-gray-300 text-lg max-w-3xl">
          I’ve worked across multiple industries, building scalable digital
          ecosystems with product-first thinking.
        </p>

        <div className="mt-20 grid md:grid-cols-2 gap-10">
          {domains.map((d, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="p-12 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-white/30 transition"
            >
              <h2 className="text-2xl font-semibold">{d}</h2>
              <p className="mt-4 text-gray-400">
                Building strategy, execution frameworks, and measurable impact.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </IglooLayout>
  );
}
