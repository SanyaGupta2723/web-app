"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-[#081120] border-r border-slate-800 flex flex-col justify-between">

      {/* Logo */}
      <div>
        <div className="px-8 py-8 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-xl">
              🎯
            </div>

            <div>
              <h1 className="text-3xl font-bold text-white">
                LotteryAI
              </h1>

              <p className="text-slate-400 text-sm">
                Prediction Platform
              </p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <nav className="p-5 space-y-2">

          <Link
            href="/dashboard"
            className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-cyan-500/10 border border-cyan-500 text-cyan-400 font-medium"
          >
            📊
            Dashboard
          </Link>

          <Link
            href="/predictions"
            className="flex items-center gap-4 px-5 py-4 rounded-2xl text-slate-300 hover:bg-slate-800 transition-all"
          >
            🎯
            Predictions
          </Link>

          <Link
            href="/results"
            className="flex items-center gap-4 px-5 py-4 rounded-2xl text-slate-300 hover:bg-slate-800 transition-all"
          >
            🏆
            Results
          </Link>

          <Link
            href="/analytics"
            className="flex items-center gap-4 px-5 py-4 rounded-2xl text-slate-300 hover:bg-slate-800 transition-all"
          >
            📈
            Analytics
          </Link>

          <Link
            href="/users"
            className="flex items-center gap-4 px-5 py-4 rounded-2xl text-slate-300 hover:bg-slate-800 transition-all"
          >
            👥
            Users
          </Link>

          <Link
            href="/reports"
            className="flex items-center gap-4 px-5 py-4 rounded-2xl text-slate-300 hover:bg-slate-800 transition-all"
          >
            📄
            Reports
          </Link>

          <Link
            href="/settings"
            className="flex items-center gap-4 px-5 py-4 rounded-2xl text-slate-300 hover:bg-slate-800 transition-all"
          >
            ⚙️
            Settings
          </Link>

        </nav>
      </div>

      {/* Bottom User Card */}
      <div className="p-5">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-black">
            S
          </div>

          <div>
            <p className="font-semibold text-white">
              Sanya
            </p>

            <p className="text-slate-400 text-sm">
              Admin
            </p>
          </div>

        </div>

      </div>

    </aside>
  );
}