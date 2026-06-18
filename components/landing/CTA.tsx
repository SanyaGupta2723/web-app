"use client";

import { useRouter } from "next/navigation";

export default function CTA() {
  const router = useRouter();

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">

      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 p-10">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_40%)]" />

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">

          <div>

            <h2 className="text-4xl font-bold mb-3">
              Join Thousands of
              <span className="text-cyan-400">
                {" "}Smart Players
              </span>
            </h2>

            <p className="text-slate-400 text-lg">
              Start your journey with LotteryAI and
              unlock powerful analytics and predictions.
            </p>

          </div>

          <div className="flex gap-4">

            <button
              onClick={() => router.push("/about")}
              className="px-8 py-4 rounded-2xl border border-slate-700 hover:border-cyan-500 transition"
            >
              Learn More
            </button>

            <button
              onClick={() => router.push("/register")}
              className="px-8 py-4 rounded-2xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
            >
              Get Started →
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}