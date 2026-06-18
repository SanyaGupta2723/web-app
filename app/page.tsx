"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">

      <div className="max-w-5xl text-center px-6">

        <div className="inline-block px-4 py-2 rounded-full border border-cyan-500 text-cyan-400 mb-6">
          AI Powered Lottery Prediction Platform
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          LotteryAI
        </h1>

        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10">
          Real-Time Lottery Analytics, Hot & Cold Number Tracking,
          Prediction Accuracy Monitoring and AI Driven Insights.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <button
            onClick={() => router.push("/login")}
            className="px-8 py-4 rounded-2xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
          >
            Login
          </button>

          <button
            onClick={() => router.push("/register")}
            className="px-8 py-4 rounded-2xl border border-slate-700 hover:border-cyan-500 transition"
          >
            Sign Up
          </button>

        </div>

      </div>

    </div>
  );
}