"use client";

import { useRouter } from "next/navigation";

export default function Hero() {

  const router = useRouter();

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <div>

          <div className="inline-flex px-5 py-2 rounded-full border border-cyan-500 text-cyan-400 mb-8">

            ✨ AI Powered Lottery Prediction Platform

          </div>

          <h1 className="text-6xl xl:text-7xl font-bold leading-tight">

            Predict Smarter.

            <br />

            <span className="text-cyan-400">
              Win Better.
            </span>

          </h1>

          <p className="text-slate-400 text-xl mt-8 leading-9 max-w-xl">

            Real-time lottery analytics,
            AI driven predictions,
            hot & cold number tracking
            and accurate insights.

          </p>

          <div className="flex gap-5 mt-10">

            <button
              onClick={() => router.push("/analytics")}
              className="px-8 py-4 rounded-2xl bg-cyan-500 text-black font-semibold"
            >
              Get Started →
            </button>

            <button
              onClick={() => router.push("/analytics")}
              className="px-8 py-4 rounded-2xl border border-slate-700"
            >
              Explore Analytics
            </button>

          </div>

          <div className="flex gap-10 mt-12 text-slate-400">

            <span>⚡ Real-Time Data</span>
            <span>🤖 AI Predictions</span>
            <span>🎯 High Accuracy</span>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          {/* Main Ball */}

          <div className="mx-auto w-72 h-72 rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 shadow-[0_0_100px_rgba(34,211,238,0.4)] flex items-center justify-center">

            <h2 className="text-8xl font-bold">
              7
            </h2>

          </div>

          {/* Accuracy Card */}

          <div className="absolute top-0 left-0 bg-[#0F172A] border border-slate-800 rounded-2xl p-5 w-48">

            <p className="text-slate-400 text-sm">
              Prediction Accuracy
            </p>

            <h3 className="text-cyan-400 text-3xl font-bold mt-3">
              89.4%
            </h3>

          </div>

          {/* Hot Numbers */}

          <div className="absolute top-8 right-0 bg-[#0F172A] border border-slate-800 rounded-2xl p-5 w-48">

            <p className="text-slate-400 text-sm mb-4">
              Hot Numbers
            </p>

            <div className="flex gap-2">

              {[7,12,23,31,42].map((n) => (
                <div
                  key={n}
                  className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500 text-xs flex items-center justify-center"
                >
                  {n}
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}