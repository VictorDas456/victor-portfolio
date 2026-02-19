"use client";

import IglooLayout from "../components/IglooLayout";

export default function AboutPage() {
  return (
    <IglooLayout>
      <section className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold">About Me</h1>

        <p className="mt-10 text-gray-300 text-lg max-w-3xl leading-relaxed">
          I’m Victor Das — a Product Manager with 3+ years of experience building
          SaaS products across Healthcare, Education, and Analytics.
          <br />
          <br />
          My work sits at the intersection of product strategy, execution, and
          measurable business impact.
        </p>

        {/* STATS */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {[
            { num: "3+", label: "Years Experience" },
            { num: "10+", label: "Product Launches" },
            { num: "40%", label: "Efficiency Gains Delivered" },
          ].map((s, i) => (
            <div
              key={i}
              className="p-10 rounded-[2rem] bg-white/5 border border-white/10"
            >
              <h2 className="text-5xl font-bold">{s.num}</h2>
              <p className="mt-4 text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </IglooLayout>
  );
}
