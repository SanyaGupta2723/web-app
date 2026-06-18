"use client";

import Navbar from "@/components/landing/LandingPage";
import Footer from "@/components/landing/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#030B1F] text-white">

      <Navbar />

      <section className="max-w-7xl mx-auto px-6 pt-20 pb-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex px-4 py-2 rounded-full border border-cyan-500/20 text-cyan-400 text-sm mb-6">
              ABOUT US
            </div>

            <h1 className="text-5xl font-bold leading-tight">

              Understanding Numbers.

              <br />

              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">

                Empowering Decisions.

              </span>

            </h1>

            <p className="text-slate-400 mt-6 text-lg leading-8 max-w-xl">

              LotteryAI helps players make smarter
              decisions using historical data,
              pattern recognition and advanced AI.

            </p>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute w-64 h-64 bg-violet-500/20 blur-[80px] rounded-full"></div>

              <div className="relative w-72 h-72 rounded-full border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 flex items-center justify-center">

                <div className="text-center">

                  <div className="text-7xl mb-3">
                    AI
                  </div>

                  <p className="text-slate-400">
                    Analytics Engine
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* OUR STORY */}

<section className="max-w-7xl mx-auto px-6 pb-20">

  <div className="bg-[#0F172A] border border-slate-800 rounded-3xl overflow-hidden">

    <div className="grid lg:grid-cols-2">

      {/* LEFT */}

      <div className="p-10">

        <div className="w-16 h-16 rounded-full border border-cyan-500/30 flex items-center justify-center text-3xl mb-6">
          🎯
        </div>

        <h2 className="text-3xl font-bold mb-6">
          Our Story
        </h2>

        <p className="text-slate-400 leading-8">

          We noticed that most lottery tools
          depended on random guesses.

          <br /><br />

          We wanted to build something different.

          A platform focused on transparency,
          pattern recognition and data-driven insights.

          <br /><br />

          Our goal is simple:

          help users understand lottery behavior
          instead of relying purely on luck.

        </p>

      </div>

      {/* RIGHT */}

      <div className="p-10 flex items-center">

        <div className="w-full">

          {/* Fake Chart */}

          <div className="h-64 relative">

            {/* Bars */}

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between">

              <div className="w-8 h-16 bg-cyan-500/20 rounded-t"></div>
              <div className="w-8 h-24 bg-cyan-500/30 rounded-t"></div>
              <div className="w-8 h-20 bg-cyan-500/20 rounded-t"></div>
              <div className="w-8 h-32 bg-violet-500/30 rounded-t"></div>
              <div className="w-8 h-28 bg-cyan-500/20 rounded-t"></div>
              <div className="w-8 h-40 bg-violet-500/40 rounded-t"></div>
              <div className="w-8 h-48 bg-cyan-500/40 rounded-t"></div>

            </div>

            {/* Trend Line */}

            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 200"
            >
              <path
                d="M10 180 C80 160,100 100,150 120 S220 80,260 90 S320 40,390 20"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="3"
              />
            </svg>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* OUR JOURNEY */}

<section className="max-w-7xl mx-auto px-6 pb-20">

  <div className="text-center mb-14">

    <h2 className="text-4xl font-bold">
      Our Journey
    </h2>

    <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

  </div>

  <div className="relative">

    {/* Line */}

    <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-slate-700"></div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* 2024 */}

      <div className="text-center">

        <div className="w-20 h-20 mx-auto rounded-full border border-cyan-500/30 bg-[#0F172A] flex items-center justify-center text-3xl mb-5">

          💡

        </div>

        <h3 className="font-bold text-xl">
          2024
        </h3>

        <p className="text-white mt-2">
          Idea Started
        </p>

        <p className="text-slate-400 text-sm mt-3">
          Explored lottery trends
          and recurring patterns.
        </p>

      </div>

      {/* 2025 */}

      <div className="text-center">

        <div className="w-20 h-20 mx-auto rounded-full border border-violet-500/30 bg-[#0F172A] flex items-center justify-center text-3xl mb-5">

          🗄️

        </div>

        <h3 className="font-bold text-xl">
          2025
        </h3>

        <p className="text-white mt-2">
          Data Collection
        </p>

        <p className="text-slate-400 text-sm mt-3">
          Gathered and processed
          years of lottery results.
        </p>

      </div>

      {/* 2026 */}

      <div className="text-center">

        <div className="w-20 h-20 mx-auto rounded-full border border-pink-500/30 bg-[#0F172A] flex items-center justify-center text-3xl mb-5">

          🧠

        </div>

        <h3 className="font-bold text-xl">
          2026
        </h3>

        <p className="text-white mt-2">
          AI Development
        </p>

        <p className="text-slate-400 text-sm mt-3">
          Built intelligent models
          for pattern recognition.
        </p>

      </div>

      {/* Today */}

      <div className="text-center">

        <div className="w-20 h-20 mx-auto rounded-full border border-emerald-500/30 bg-[#0F172A] flex items-center justify-center text-3xl mb-5">

          🚀

        </div>

        <h3 className="font-bold text-xl">
          Today
        </h3>

        <p className="text-white mt-2">
          LotteryAI Platform
        </p>

        <p className="text-slate-400 text-sm mt-3">
          Helping users discover
          smarter lottery insights.
        </p>

      </div>

    </div>

  </div>

</section>
{/* OUR VALUES */}

<section className="max-w-7xl mx-auto px-6 pb-20">

  <div className="text-center mb-12">

    <h2 className="text-4xl font-bold">
      Our Values
    </h2>

    <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

  </div>

  <div className="grid md:grid-cols-3 gap-6">

    {/* Transparency */}

    <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition">

      <div className="w-14 h-14 rounded-full border border-cyan-500/30 flex items-center justify-center text-2xl mb-5">
        🛡️
      </div>

      <h3 className="text-xl font-bold mb-3">
        Transparency
      </h3>

      <p className="text-slate-400 leading-7">
        We believe in clear analytics,
        understandable insights and honest data.
      </p>

    </div>

    {/* Innovation */}

    <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 hover:border-violet-500/40 transition">

      <div className="w-14 h-14 rounded-full border border-violet-500/30 flex items-center justify-center text-2xl mb-5">
        ⚡
      </div>

      <h3 className="text-xl font-bold mb-3">
        Innovation
      </h3>

      <p className="text-slate-400 leading-7">
        Continuously improving AI models
        and analytics capabilities.
      </p>

    </div>

    {/* User First */}

    <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/40 transition">

      <div className="w-14 h-14 rounded-full border border-emerald-500/30 flex items-center justify-center text-2xl mb-5">
        👥
      </div>

      <h3 className="text-xl font-bold mb-3">
        User First
      </h3>

      <p className="text-slate-400 leading-7">
        Everything we build focuses on helping
        users make smarter decisions.
      </p>

    </div>

  </div>

</section>
        <Footer />
    </div>
  );
}
