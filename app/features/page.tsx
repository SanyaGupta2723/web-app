"use client";

import LandingNavbar from "@/components/landing/LandingPage";
import { useEffect, useState } from "react";
import Footer from "@/components/landing/Footer";



export default function FeaturesPage() {
    const [stats, setStats] = useState({
  totalUsers: 0,
  totalLotteries: 0,
  totalResults: 0,
  totalPredictions: 0,

  
});

useEffect(() => {
  fetch("http://localhost:3000/api/dashboard/stats")
    .then((res) => res.json())
    .then((data) => {
      setStats(data.stats);
    });
}, []);
  return (

    
    <div className="min-h-screen bg-[#030B1F] text-white">

      <LandingNavbar />

      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">

        <div className="text-center">

          <div className="inline-flex px-5 py-2 rounded-full border border-cyan-500 text-cyan-400 mb-8">
            ⚡ Powerful Features
          </div>

          <h1 className="text-6xl font-bold leading-tight">

            Everything You Need

            <br />

            To Predict

            <span className="text-cyan-400">
              {" "}Smarter
            </span>

          </h1>

          <p className="text-slate-400 text-xl max-w-3xl mx-auto mt-8">

            Discover powerful tools designed to analyze lottery data,
            identify trends and improve your chances.

          </p>

        </div>

      </section>
     {/* CORE FEATURES */}

<section className="max-w-7xl mx-auto px-6 pb-20">

  <div className="text-center mb-12">

    <h2 className="text-4xl font-bold">
      Core Features
    </h2>

    <p className="text-slate-400 mt-3">
      Advanced analytics and AI-powered tools to help you make smarter predictions
    </p>

  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-6 gap-4">

    {/* Card 1 */}
    <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/50 transition">

      <div className="text-cyan-400 text-3xl mb-4">
        🧠
      </div>

      <h3 className="font-semibold mb-3">
        AI Predictions
      </h3>

      <p className="text-xs text-slate-400 leading-6">
        Generate intelligent lottery number predictions using advanced AI algorithms.
      </p>

    </div>

    {/* Card 2 */}
    <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-5 hover:border-orange-500/50 transition">

      <div className="text-orange-400 text-3xl mb-4">
        🔥
      </div>

      <h3 className="font-semibold mb-3">
        Hot Numbers
      </h3>

      <p className="text-xs text-slate-400 leading-6">
        Track the most frequently drawn numbers in real-time.
      </p>

    </div>

    {/* Card 3 */}
    <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-5 hover:border-blue-500/50 transition">

      <div className="text-blue-400 text-3xl mb-4">
        ❄️
      </div>

      <h3 className="font-semibold mb-3">
        Cold Numbers
      </h3>

      <p className="text-xs text-slate-400 leading-6">
        Identify rarely appearing numbers and hidden opportunities.
      </p>

    </div>

    {/* Card 4 */}
    <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-5 hover:border-pink-500/50 transition">

      <div className="text-pink-400 text-3xl mb-4">
        🎯
      </div>

      <h3 className="font-semibold mb-3">
        Accuracy Tracking
      </h3>

      <p className="text-xs text-slate-400 leading-6">
        Monitor prediction performance with detailed accuracy metrics.
      </p>

    </div>

    {/* Card 5 */}
    <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/50 transition">

      <div className="text-emerald-400 text-3xl mb-4">
        📈
      </div>

      <h3 className="font-semibold mb-3">
        Trend Analysis
      </h3>

      <p className="text-xs text-slate-400 leading-6">
        Analyze long-term and short-term lottery trends.
      </p>

    </div>

    {/* Card 6 */}
    <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-5 hover:border-yellow-500/50 transition">

      <div className="text-yellow-400 text-3xl mb-4">
        ⚡
      </div>

      <h3 className="font-semibold mb-3">
        Real-Time Updates
      </h3>

      <p className="text-xs text-slate-400 leading-6">
        Get instant updates whenever new results are available.
      </p>

    </div>

  </div>

</section>
{/* DASHBOARD PREVIEW */}

<section className="max-w-7xl mx-auto px-6 pb-20">
    

  <div className="text-center mb-12">

    <h2 className="text-4xl font-bold">
      Powerful Dashboard
    </h2>

    <p className="text-slate-400 mt-3">
      Monitor predictions, analytics and trends from one place.
    </p>

  </div>

  <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-8">

    <div className="grid lg:grid-cols-3 gap-6">

  {/* Chart */}

  <div className="lg:col-span-2 bg-slate-900 rounded-2xl p-6">

    <div className="flex items-end gap-4 h-48">

      <div className="w-10 bg-cyan-500 rounded-t-xl h-28"></div>
      <div className="w-10 bg-cyan-500 rounded-t-xl h-36"></div>
      <div className="w-10 bg-cyan-500 rounded-t-xl h-24"></div>
      <div className="w-10 bg-cyan-500 rounded-t-xl h-40"></div>
      <div className="w-10 bg-cyan-500 rounded-t-xl h-32"></div>
      <div className="w-10 bg-cyan-500 rounded-t-xl h-44"></div>
      <div className="w-10 bg-cyan-500 rounded-t-xl h-26"></div>

    </div>

  </div>

  {/* Right Side */}

  <div className="space-y-4">

    <div className="bg-slate-900 rounded-2xl p-5">

      <p className="text-slate-400 text-sm">
        Accuracy Rate
      </p>

      <h3 className="text-3xl font-bold text-emerald-400 mt-2">
        89.4%
      </h3>

    </div>

    <div className="bg-slate-900 rounded-2xl p-5">

      <p className="text-slate-400 text-sm">
        AI Model
      </p>

      <h3 className="text-xl font-bold text-cyan-400 mt-2">
        Frequency Analysis
      </h3>

    </div>

    <div className="bg-slate-900 rounded-2xl p-5">

      <p className="text-slate-400 text-sm">
        Status
      </p>

      <h3 className="text-xl font-bold text-green-400 mt-2">
        ● Live
      </h3>

    </div>

  </div>

</div>

  </div>

</section>
{/* FAQ SECTION */}

<section className="max-w-5xl mx-auto px-6 pb-20">

  <div className="text-center mb-12">

    <h2 className="text-4xl font-bold">
      Frequently Asked Questions
    </h2>

    <p className="text-slate-400 mt-3">
      Common questions about LotteryAI
    </p>

  </div>

  <div className="space-y-4">

    <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6">
      <h3 className="font-semibold text-lg">
        How are predictions generated?
      </h3>

      <p className="text-slate-400 mt-3">
        Predictions are generated using frequency analysis,
        trend detection and AI-driven pattern recognition.
      </p>
    </div>

    <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6">
      <h3 className="font-semibold text-lg">
        Are predictions guaranteed?
      </h3>

      <p className="text-slate-400 mt-3">
        No. Lottery results are random.
        Analytics helps identify patterns but cannot guarantee outcomes.
      </p>
    </div>

    <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6">
      <h3 className="font-semibold text-lg">
        How often is data updated?
      </h3>

      <p className="text-slate-400 mt-3">
        Results, trends and analytics are updated in real-time whenever new draws are added.
      </p>
    </div>

  </div>

</section>
        <Footer />
    </div>
  );
}