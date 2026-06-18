"use client";

import Navbar from "@/components/landing/LandingPage";
import Footer from "@/components/landing/Footer";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#030B1F] text-white">

      <Navbar />

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-20 pb-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <div className="inline-flex px-5 py-2 rounded-full border border-violet-500 text-violet-400 mb-8">

              ✨ How It Works

            </div>

            <h1 className="text-6xl font-bold leading-tight">

              From Raw Data

              <br />

              To

              <span className="text-violet-400">
                {" "}Smart Predictions
              </span>

            </h1>

            <p className="text-slate-400 text-xl mt-8 leading-8">

              Understand the complete AI-powered
              prediction workflow and see how
              LotteryAI transforms historical data
              into intelligent insights.

            </p>

            <div className="flex gap-6 mt-10">

              <div className="bg-[#0F172A] border border-slate-800 rounded-2xl px-6 py-4">

                <p className="text-violet-400 font-semibold">
                  AI Powered
                </p>

                <p className="text-slate-400 text-sm mt-2">
                  Machine Learning Models
                </p>

              </div>

              <div className="bg-[#0F172A] border border-slate-800 rounded-2xl px-6 py-4">

                <p className="text-cyan-400 font-semibold">
                  Secure
                </p>

                <p className="text-slate-400 text-sm mt-2">
                  Reliable Processing
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="relative bg-[#0F172A] border border-violet-500/20 rounded-3xl h-[450px] flex items-center justify-center overflow-hidden">

              <div className="absolute w-72 h-72 bg-violet-500/20 blur-[120px]"></div>

              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-6xl font-bold shadow-[0_0_60px_rgba(139,92,246,0.5)]">

                AI

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* THE AI JOURNEY */}

<section className="max-w-7xl mx-auto px-6 pb-24">

  <div className="flex items-center justify-center gap-4 mb-12">

    <div className="w-20 h-px bg-violet-500"></div>

    <span className="text-violet-400 font-semibold tracking-[0.3em] text-sm">
      THE AI JOURNEY
    </span>

    <div className="w-20 h-px bg-violet-500"></div>

  </div>

  <div className="flex flex-wrap xl:flex-nowrap items-center justify-center gap-3">

    {/* STEP 1 */}

    <div className="relative w-[170px] h-[200px] bg-[#0F172A] border border-violet-500/20 rounded-3xl p-4 flex flex-col items-center justify-center text-center">

      <span className="absolute top-4 left-4 text-slate-500 text-sm font-bold">
        01
      </span>

      <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center text-3xl mb-4">
        🗄️
      </div>

      <h3 className="font-bold text-lg mb-2">
        Raw Results
      </h3>

      <p className="text-xs text-slate-400">
        Historical Data
      </p>

    </div>

    <div className="hidden xl:block text-violet-500 text-4xl">
      →
    </div>

    {/* STEP 2 */}

    <div className="relative w-[170px] h-[200px] bg-[#0F172A] border border-violet-500/20 rounded-3xl p-4 flex flex-col items-center justify-center text-center">

      <span className="absolute top-4 left-4 text-slate-500 text-sm font-bold">
        02
      </span>

      <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center text-3xl mb-4">
        🔻
      </div>

      <h3 className="font-bold text-lg mb-2">
        Data Cleaning
      </h3>

      <p className="text-xs text-slate-400">
        Clean Dataset
      </p>

    </div>

    <div className="hidden xl:block text-violet-500 text-4xl">
      →
    </div>

    {/* STEP 3 */}

    <div className="relative w-[170px] h-[200px] bg-[#0F172A] border border-violet-500/20 rounded-3xl p-4 flex flex-col items-center justify-center text-center">

      <span className="absolute top-4 left-4 text-slate-500 text-sm font-bold">
        03
      </span>

      <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center text-3xl mb-4">
        🔍
      </div>

      <h3 className="font-bold text-lg mb-2">
        Frequency Scan
      </h3>

      <p className="text-xs text-slate-400">
        Hot & Cold Numbers
      </p>

    </div>

    <div className="hidden xl:block text-violet-500 text-4xl">
      →
    </div>

    {/* STEP 4 */}

    <div className="relative w-[170px] h-[200px] bg-[#0F172A] border border-violet-500/20 rounded-3xl p-4 flex flex-col items-center justify-center text-center">

      <span className="absolute top-4 left-4 text-slate-500 text-sm font-bold">
        04
      </span>

      <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center text-3xl mb-4">
        ⚙️
      </div>

      <h3 className="font-bold text-lg mb-2">
        Pattern Engine
      </h3>

      <p className="text-xs text-slate-400">
        AI Analysis
      </p>

    </div>

    <div className="hidden xl:block text-violet-500 text-4xl">
      →
    </div>

    {/* STEP 5 */}

    <div className="relative w-[170px] h-[200px] bg-[#0F172A] border border-cyan-500/30 rounded-3xl p-4 flex flex-col items-center justify-center text-center">

      <span className="absolute top-4 left-4 text-cyan-400 text-sm font-bold">
        05
      </span>

      <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-3xl mb-4">
        🎯
      </div>

      <h3 className="font-bold text-lg text-cyan-400 mb-2">
        AI Prediction
      </h3>

      <p className="text-xs text-slate-400">
        Smart Forecast
      </p>

    </div>

  </div>

</section>

{/* PREDICTION LIFECYCLE */}

<section className="max-w-7xl mx-auto px-6 pb-24">

  <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-10">

    <h2 className="text-5xl font-bold text-center mb-4">
      Prediction Lifecycle
    </h2>

    <p className="text-center text-slate-400 mb-16">
      Every prediction follows a structured AI workflow.
    </p>

    <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-4">

      {/* STEP 1 */}

      <div className="text-center w-[180px]">

        <p className="text-cyan-400 text-sm font-bold mb-4">
          STEP 01
        </p>

        <div className="
          w-24 h-24 mx-auto rounded-full
          bg-cyan-500/10
          border border-cyan-500/30
          flex items-center justify-center
          text-4xl mb-5
          hover:scale-110
          hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]
          transition-all duration-300
        ">
          📥
        </div>

        <h3 className="font-bold text-2xl">
          Collect
        </h3>

        <p className="text-slate-400 text-sm mt-3">
          Gather historical lottery results.
        </p>

      </div>

      <div className="hidden lg:flex items-center">

        <div className="w-10 h-[2px] bg-cyan-500"></div>

        <span className="text-cyan-400 text-3xl">
          →
        </span>

      </div>

      {/* STEP 2 */}

      <div className="text-center w-[180px]">

        <p className="text-violet-400 text-sm font-bold mb-4">
          STEP 02
        </p>

        <div className="
          w-24 h-24 mx-auto rounded-full
          bg-violet-500/10
          border border-violet-500/30
          flex items-center justify-center
          text-4xl mb-5
          hover:scale-110
          hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]
          transition-all duration-300
        ">
          🔍
        </div>

        <h3 className="font-bold text-2xl">
          Analyze
        </h3>

        <p className="text-slate-400 text-sm mt-3">
          Detect number frequency & behavior.
        </p>

      </div>

      <div className="hidden lg:flex items-center">

        <div className="w-10 h-[2px] bg-violet-500"></div>

        <span className="text-violet-400 text-3xl">
          →
        </span>

      </div>

      {/* STEP 3 */}

      <div className="text-center w-[180px]">

        <p className="text-pink-400 text-sm font-bold mb-4">
          STEP 03
        </p>

        <div className="
          w-24 h-24 mx-auto rounded-full
          bg-pink-500/10
          border border-pink-500/30
          flex items-center justify-center
          text-4xl mb-5
          hover:scale-110
          hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]
          transition-all duration-300
        ">
          📊
        </div>

        <h3 className="font-bold text-2xl">
          Score
        </h3>

        <p className="text-slate-400 text-sm mt-3">
          Assign confidence scores.
        </p>

      </div>

      <div className="hidden lg:flex items-center">

        <div className="w-10 h-[2px] bg-pink-500"></div>

        <span className="text-pink-400 text-3xl">
          →
        </span>

      </div>

      {/* STEP 4 */}

      <div className="text-center w-[180px]">

        <p className="text-blue-400 text-sm font-bold mb-4">
          STEP 04
        </p>

        <div className="
          w-24 h-24 mx-auto rounded-full
          bg-blue-500/10
          border border-blue-500/30
          flex items-center justify-center
          text-4xl mb-5
          hover:scale-110
          hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]
          transition-all duration-300
        ">
          🤖
        </div>

        <h3 className="font-bold text-2xl">
          Predict
        </h3>

        <p className="text-slate-400 text-sm mt-3">
          Generate smart combinations.
        </p>

      </div>

      <div className="hidden lg:flex items-center">

        <div className="w-10 h-[2px] bg-blue-500"></div>

        <span className="text-blue-400 text-3xl">
          →
        </span>

      </div>

      {/* STEP 5 */}

      <div className="text-center w-[180px]">

        <p className="text-emerald-400 text-sm font-bold mb-4">
          STEP 05
        </p>

        <div className="
          w-24 h-24 mx-auto rounded-full
          bg-emerald-500/10
          border border-emerald-500/30
          flex items-center justify-center
          text-4xl mb-5
          hover:scale-110
          hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]
          transition-all duration-300
        ">
          ✅
        </div>

        <h3 className="font-bold text-2xl">
          Validate
        </h3>

        <p className="text-slate-400 text-sm mt-3">
          Compare against actual results.
        </p>

      </div>

    </div>

  </div>

</section>
{/* AI DECISION ENGINE */}

<section className="max-w-7xl mx-auto px-6 pb-24">

  <div className="text-center mb-12">

    <h2 className="text-4xl font-bold">
      AI Decision Engine
    </h2>

    <p className="text-slate-400 mt-4">
      Multiple intelligence layers work together to create predictions.
    </p>

  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

    {/* Card 1 */}

    <div className="bg-[#0F172A] border border-cyan-500/20 rounded-3xl p-6">

      <h3 className="text-xl font-bold text-cyan-400 mb-4">
        Probability Engine
      </h3>

      <p className="text-slate-400 text-sm leading-7 mb-6">
        Calculates probability scores using historical draw frequency.
      </p>

      <div className="w-full h-2 rounded-full bg-slate-800">

        <div className="h-2 rounded-full bg-cyan-400 w-[88%]"></div>

      </div>

      <p className="mt-3 text-cyan-400 font-semibold">
        88%
      </p>

    </div>

    {/* Card 2 */}

    <div className="bg-[#0F172A] border border-violet-500/20 rounded-3xl p-6">

      <h3 className="text-xl font-bold text-violet-400 mb-4">
        Pattern Recognition
      </h3>

      <p className="text-slate-400 text-sm leading-7 mb-6">
        Detects repeating combinations and behavioral patterns.
      </p>

      <div className="w-full h-2 rounded-full bg-slate-800">

        <div className="h-2 rounded-full bg-violet-400 w-[92%]"></div>

      </div>

      <p className="mt-3 text-violet-400 font-semibold">
        92%
      </p>

    </div>

    {/* Card 3 */}

    <div className="bg-[#0F172A] border border-pink-500/20 rounded-3xl p-6">

      <h3 className="text-xl font-bold text-pink-400 mb-4">
        Trend Detection
      </h3>

      <p className="text-slate-400 text-sm leading-7 mb-6">
        Monitors rising and declining number activity.
      </p>

      <div className="w-full h-2 rounded-full bg-slate-800">

        <div className="h-2 rounded-full bg-pink-400 w-[85%]"></div>

      </div>

      <p className="mt-3 text-pink-400 font-semibold">
        85%
      </p>

    </div>

    {/* Card 4 */}

    <div className="bg-[#0F172A] border border-emerald-500/20 rounded-3xl p-6">

      <h3 className="text-xl font-bold text-emerald-400 mb-4">
        Confidence Scoring
      </h3>

      <p className="text-slate-400 text-sm leading-7 mb-6">
        Generates confidence levels for each prediction.
      </p>

      <div className="w-full h-2 rounded-full bg-slate-800">

        <div className="h-2 rounded-full bg-emerald-400 w-[94%]"></div>

      </div>

      <p className="mt-3 text-emerald-400 font-semibold">
        94%
      </p>

    </div>

  </div>

</section>


{/* CTA */}

<section className="max-w-7xl mx-auto px-6 pb-24">

  <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-950 via-slate-900 to-cyan-950 p-14 text-center">

    <h2 className="text-5xl font-bold mb-6">
      Ready To Experience LotteryAI?
    </h2>

    <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
      Start exploring AI-powered lottery analytics,
      predictions and real-time insights.
    </p>

    <div className="flex justify-center gap-5 flex-wrap">

      <button
        onClick={() => window.location.href="/register"}
        className="px-8 py-4 rounded-2xl bg-violet-500 hover:bg-violet-400 transition font-semibold"
      >
        Create Account
      </button>

      <button
        onClick={() => window.location.href="/login"}
        className="px-8 py-4 rounded-2xl border border-slate-700 hover:border-cyan-500 transition"
      >
        Login
      </button>

    </div>

  </div>

</section>
{/* WHAT MAKES OUR AI DIFFERENT */}

<section className="max-w-7xl mx-auto px-6 pb-24">

  <div className="text-center mb-14">

    <h2 className="text-4xl font-bold">
      What Makes Our AI Different?
    </h2>

    <p className="text-slate-400 mt-4">
      Built with multiple layers of analysis instead of simple random guessing.
    </p>

  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

    <div className="bg-[#0F172A] border border-violet-500/20 rounded-3xl p-6">

      <div className="text-4xl mb-4">
        📊
      </div>

      <h3 className="text-xl font-bold mb-3">
        Historical Analysis
      </h3>

      <p className="text-slate-400 text-sm leading-6">
        Studies thousands of previous lottery results to identify recurring behavior.
      </p>

    </div>

    <div className="bg-[#0F172A] border border-cyan-500/20 rounded-3xl p-6">

      <div className="text-4xl mb-4">
        🔥
      </div>

      <h3 className="text-xl font-bold mb-3">
        Hot & Cold Tracking
      </h3>

      <p className="text-slate-400 text-sm leading-6">
        Detects numbers that are frequently or rarely appearing.
      </p>

    </div>

    <div className="bg-[#0F172A] border border-blue-500/20 rounded-3xl p-6">

      <div className="text-4xl mb-4">
        🧠
      </div>

      <h3 className="text-xl font-bold mb-3">
        Pattern Learning
      </h3>

      <p className="text-slate-400 text-sm leading-6">
        Recognizes hidden trends and number relationships.
      </p>

    </div>

    <div className="bg-[#0F172A] border border-pink-500/20 rounded-3xl p-6">

      <div className="text-4xl mb-4">
        🎯
      </div>

      <h3 className="text-xl font-bold mb-3">
        Confidence Score
      </h3>

      <p className="text-slate-400 text-sm leading-6">
        Every prediction includes a confidence percentage.
      </p>

    </div>

  </div>

</section>

<Footer />

    </div>
  );
}