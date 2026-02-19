"use client";

import IglooLayout from "../components/IglooLayout";
import Link from "next/link";

export default function ContactPage() {
  return (
    <IglooLayout>
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-6xl font-bold">Let’s Connect</h1>

        <p className="mt-10 text-gray-300 text-lg max-w-2xl mx-auto">
          I’m open to Product roles, collaborations, and high-impact SaaS
          opportunities.
        </p>

        <div className="mt-16 space-y-6 text-lg text-gray-200">
          <p>📩 victordas4567@gmail.com</p>
          <p>📍 Guwahati, India</p>
          <Link
            href="https://linkedin.com"
            className="underline underline-offset-4 hover:text-gray-300"
          >
            LinkedIn Profile →
          </Link>
        </div>

        <div className="mt-20">
          <Link
            href="/work"
            className="px-10 py-4 rounded-2xl bg-white text-black font-semibold hover:opacity-80 transition"
          >
            Explore My Work →
          </Link>
        </div>
      </section>
    </IglooLayout>
  );
}
