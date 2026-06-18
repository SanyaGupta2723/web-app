"use client";

import { useEffect, useState } from "react";
import LandingNavbar from "@/components/landing/LandingPage";

export default function AnalyticsPage() {

    const [accuracyData, setAccuracyData] = useState<any>(null);

  const [stats, setStats] = useState({
    
    totalUsers: 0,
    totalPredictions: 0,
    totalResults: 0,
    totalLotteries: 0,
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/dashboard/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data.stats);
      });
      fetch("http://localhost:3000/api/analytics/accuracy")
  .then((res) => res.json())
  .then((data) => {
    setAccuracyData(data);
  });
  }, []);

  return (

  <div className="min-h-screen bg-[#030B1F] text-white">

    <LandingNavbar />

    {/* Analytics Content */}
      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex px-5 py-2 rounded-full border border-cyan-500 text-cyan-400 mb-8">
              ⚡ Advanced Lottery Analytics
            </div>

            <h1 className="text-6xl font-bold leading-tight">

              Behind Every
              <br />

              Prediction

              <br />

              There Is An

              <span className="text-cyan-400">
                {" "}AI Engine
              </span>

            </h1>

            <p className="text-slate-400 text-xl mt-8 leading-9">

              Our analytics engine processes
              thousands of historical results
              to discover trends, patterns and
              prediction opportunities.

            </p>

          </div>

          {/* RIGHT */}

          <div>

            <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-8">

              <h3 className="text-cyan-400 text-xl font-semibold mb-6">
                AI Processing Core
              </h3>

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-slate-900 rounded-xl p-4">
                  Historical Results
                </div>

                <div className="bg-slate-900 rounded-xl p-4">
                  Frequency Analysis
                </div>

                <div className="bg-slate-900 rounded-xl p-4">
                  Trend Detection
                </div>

                <div className="bg-slate-900 rounded-xl p-4">
                  Smart Predictions
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-[#0F172A] rounded-3xl border border-slate-800 p-8">
            <h2 className="text-4xl font-bold text-cyan-400">
              {stats.totalUsers}
            </h2>
            <p className="text-slate-400 mt-2">
              Active Users
            </p>
          </div>

          <div className="bg-[#0F172A] rounded-3xl border border-slate-800 p-8">
            <h2 className="text-4xl font-bold text-violet-400">
              {stats.totalPredictions}
            </h2>
            <p className="text-slate-400 mt-2">
              Predictions
            </p>
          </div>

          <div className="bg-[#0F172A] rounded-3xl border border-slate-800 p-8">
            <h2 className="text-4xl font-bold text-emerald-400">
              {stats.totalResults}
            </h2>
            <p className="text-slate-400 mt-2">
              Results
            </p>
          </div>

          <div className="bg-[#0F172A] rounded-3xl border border-slate-800 p-8">
            <h2 className="text-4xl font-bold text-orange-400">
              {stats.totalLotteries}
            </h2>
            <p className="text-slate-400 mt-2">
              Lotteries
            </p>
          </div>

        </div>

      </section>
      {/* PREDICTION ENGINE PIPELINE */}

<section className="max-w-7xl mx-auto px-6 pb-20">

  <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-8">

    <h2 className="text-3xl font-bold mb-3">
      Our Prediction Engine Pipeline
    </h2>

    <p className="text-slate-400 mb-10">
      A powerful 5-step AI process that transforms raw lottery data
      into intelligent predictions.
    </p>

    <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

      {/* STEP 1 */}

      <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl p-6">

        <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-xl mb-4">
          01
        </div>

        <h3 className="font-semibold text-lg mb-3">
          Collect Data
        </h3>

        <p className="text-slate-400 text-sm">
          Historical lottery results are collected and prepared.
        </p>

      </div>

      {/* STEP 2 */}

      <div className="bg-slate-900 border border-violet-500/30 rounded-2xl p-6">

        <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center text-xl mb-4">
          02
        </div>

        <h3 className="font-semibold text-lg mb-3">
          Frequency Analysis
        </h3>

        <p className="text-slate-400 text-sm">
          Number occurrence frequency is analyzed.
        </p>

      </div>

      {/* STEP 3 */}

      <div className="bg-slate-900 border border-blue-500/30 rounded-2xl p-6">

        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-xl mb-4">
          03
        </div>

        <h3 className="font-semibold text-lg mb-3">
          Trend Detection
        </h3>

        <p className="text-slate-400 text-sm">
          Hot and cold trends are identified automatically.
        </p>

      </div>

      {/* STEP 4 */}

      <div className="bg-slate-900 border border-orange-500/30 rounded-2xl p-6">

        <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-xl mb-4">
          04
        </div>

        <h3 className="font-semibold text-lg mb-3">
          AI Processing
        </h3>

        <p className="text-slate-400 text-sm">
          AI models process patterns and generate insights.
        </p>

      </div>

      {/* STEP 5 */}

      <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-6">

        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-xl mb-4">
          05
        </div>

        <h3 className="font-semibold text-lg mb-3">
          Smart Prediction
        </h3>

        <p className="text-slate-400 text-sm">
          Final prediction numbers are generated.
        </p>

      </div>

    </div>

  </div>

</section>
{/* MODEL PERFORMANCE + AI INSIGHTS */}

<section className="max-w-7xl mx-auto px-6 pb-20">

  <div className="grid xl:grid-cols-2 gap-8">

    {/* PERFORMANCE */}

    <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        Model Performance
      </h2>

      <div className="flex items-center justify-center">

        <div className="relative w-64 h-64">

          <div className="absolute inset-0 rounded-full border-[14px] border-slate-700"></div>

          <div
            className="absolute inset-0 rounded-full border-[14px] border-cyan-400"
            style={{
              clipPath: "inset(0 0 40% 0)",
            }}
          ></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <h2 className="text-5xl font-bold text-cyan-400">
              {accuracyData?.accuracy?.toFixed(2) || 0}%
            </h2>

            <p className="text-slate-400 mt-2">
              Accuracy
            </p>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-6 mt-10">

        <div className="bg-slate-900 rounded-xl p-4">
          <p className="text-slate-400 text-sm">
            Matched Numbers
          </p>

          <p className="text-2xl font-bold mt-2">
            {accuracyData?.matchedCount || 0}/5
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-4">
          <p className="text-slate-400 text-sm">
            Model Status
          </p>

          <p className="text-2xl font-bold mt-2 text-emerald-400">
            Active
          </p>
        </div>

      </div>

    </div>

    {/* AI INSIGHTS */}

    <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        AI Insights
      </h2>

      <div className="space-y-5">

        <div className="bg-slate-900 rounded-2xl p-5 border border-cyan-500/20">

          <h3 className="text-cyan-400 font-semibold">
            📈 Trend Analysis
          </h3>

          <p className="text-slate-400 mt-3">
            Hot numbers are currently showing
            increased activity patterns.
          </p>

        </div>

        <div className="bg-slate-900 rounded-2xl p-5 border border-violet-500/20">

          <h3 className="text-violet-400 font-semibold">
            🧠 AI Observation
          </h3>

          <p className="text-slate-400 mt-3">
            Frequency-based predictions are
            outperforming historical averages.
          </p>

        </div>

        <div className="bg-slate-900 rounded-2xl p-5 border border-emerald-500/20">

          <h3 className="text-emerald-400 font-semibold">
            🎯 Prediction Signal
          </h3>

          <p className="text-slate-400 mt-3">
            Several recurring combinations
            have been detected by the AI.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
<section className="max-w-7xl mx-auto px-6 pb-20">

  <div className="grid lg:grid-cols-2 gap-6">

    {/* Pattern Analysis */}
    <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-6">

      <h2 className="text-xl font-bold mb-5">
        Live Pattern Analysis
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-slate-900 rounded-xl p-4">
          <p className="text-sm text-slate-400">Trend Strength</p>
          <p className="text-2xl font-bold text-emerald-400 mt-2">
            76%
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-4">
          <p className="text-sm text-slate-400">Consistency</p>
          <p className="text-2xl font-bold text-cyan-400 mt-2">
            68%
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-4">
          <p className="text-sm text-slate-400">Randomness</p>
          <p className="text-2xl font-bold text-violet-400 mt-2">
            42%
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-4">
          <p className="text-sm text-slate-400">Signal Quality</p>
          <p className="text-2xl font-bold text-orange-400 mt-2">
            81%
          </p>
        </div>

      </div>

    </div>

{/* Heatmap */}
<div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-6">

  <h2 className="text-xl font-bold mb-5">
    Number Behavior Heatmap
  </h2>

  <div className="grid grid-cols-10 gap-3">

    {Array.from({ length: 40 }).map((_, i) => (
      <div
        key={i}
        className={`
          w-8 h-8 rounded-lg
          ${
            i % 7 === 0
              ? "bg-pink-500/80"
              : i % 5 === 0
              ? "bg-violet-500/60"
              : "bg-slate-800"
          }
        `}
      />
    ))}

  </div>

</div>

  </div>

</section>
{/* CTA SECTION */}

<section className="max-w-7xl mx-auto px-6 pb-20">

  <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 p-12">

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_40%)]"></div>

    <div className="relative text-center">

      <div className="inline-flex px-5 py-2 rounded-full border border-cyan-500 text-cyan-400 mb-6">
        🚀 Ready To Go Further?
      </div>

      <h2 className="text-5xl font-bold mb-6">
        Unlock Full Analytics
      </h2>

      <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">

        Access prediction history,
        real-time dashboards,
        advanced analytics,
        AI generated insights
        and much more.

      </p>

      <div className="flex justify-center gap-5 flex-wrap">

        <button
          onClick={() => window.location.href="/login"}
          className="px-8 py-4 rounded-2xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
        >
          Login
        </button>

        <button
          onClick={() => window.location.href="/register"}
          className="px-8 py-4 rounded-2xl border border-slate-700 hover:border-cyan-500 transition"
        >
          Create Account
        </button>

      </div>

    </div>

  </div>

</section>

    </div>
  );
}