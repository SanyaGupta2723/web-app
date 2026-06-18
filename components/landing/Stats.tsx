"use client";

import { useEffect, useState } from "react";

export default function Stats() {

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
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">

      <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-10">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 text-center">

          <div>
            <h2 className="text-5xl font-bold text-cyan-400">
              {stats.totalUsers}
            </h2>

            <p className="text-slate-400 mt-3">
              Active Users
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-violet-400">
              {stats.totalPredictions}
            </h2>

            <p className="text-slate-400 mt-3">
              Predictions
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-emerald-400">
              {stats.totalResults}
            </h2>

            <p className="text-slate-400 mt-3">
              Results
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-orange-400">
              {stats.totalLotteries}
            </h2>

            <p className="text-slate-400 mt-3">
              Lotteries
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}