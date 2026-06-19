"use client";

import { useEffect, useState } from "react";

import HotNumbersChart from "../../src/components/HotNumbersChart";
import Sidebar from "../../components/layouts/Sidebar";
import Navbar from "../../components/layouts/Navbar";

import { useRouter } from "next/navigation";



export default function DashboardPage() {
  const router = useRouter();

useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    router.push("/login");
  }
}, []);

    const [latestResult, setLatestResult] = useState<any>(null);
    const [hotNumbers, setHotNumbers] = useState<any[]>([]);
    const [coldNumbers, setColdNumbers] = useState<any[]>([]);
    const [latestPrediction, setLatestPrediction] =
  useState<any>(null);
  const [accuracyData, setAccuracyData] =
  useState<any>(null);
  const [predictionHistory, setPredictionHistory] =
  useState<any[]>([]);
    
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

        fetch("http://localhost:3000/api/dashboard/latest-result")
    .then((res) => res.json())
    .then((data) => {
      setLatestResult(data.latestResult);
    });

    fetch("http://localhost:3000/api/analytics/hot-numbers")
  .then((res) => res.json())
  .then((data) => {
    setHotNumbers(data.hotNumbers);
  });

  fetch("http://localhost:3000/api/analytics/cold-numbers")
  .then((res) => res.json())
  .then((data) => {
    setColdNumbers(data.coldNumbers);
  });

  fetch("http://localhost:3000/api/dashboard/latest-prediction")
  .then((res) => res.json())
  .then((data) => {
    setLatestPrediction(data.prediction);
  });
  fetch("http://localhost:3000/api/analytics/accuracy")
  .then((res) => res.json())
  .then((data) => {
    setAccuracyData(data);
  });
  fetch("http://localhost:3000/api/predictions/history")
  .then((res) => res.json())
  .then((data) => {
    setPredictionHistory(data.predictions);
  });
  }, []);

  return (
      <div className="flex">
    <Sidebar />

    <main className="flex-1 min-h-screen bg-slate-950 text-white">
      <Navbar />

   <div className="p-8">

  <div className="mb-6 rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 px-8 py-5 shadow-xl">
   <h1 className="text-3xl font-bold text-white">
      Welcome Back, Sanya 👋
    </h1>

    <p className="text-cyan-100 text-sm mt-1">
      Real-Time Lottery Intelligence & Prediction Platform
    </p>
  </div>

      

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

  {/* Users */}
  <div className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-blue-950 to-slate-900 border border-blue-800 shadow-xl">
    <div className="flex items-center gap-3 mb-5">
      <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-2xl">
        👤
      </div>

      <p className="text-slate-300 text-sm">
        Total Users
      </p>
    </div>

    <h2 className="text-5xl font-bold text-white">
      {stats.totalUsers}
    </h2>
  </div>

  {/* Lotteries */}
  <div className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-purple-950 to-slate-900 border border-purple-800 shadow-xl">
    <div className="flex items-center gap-3 mb-5">
      <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-2xl">
        🎰
      </div>

      <p className="text-slate-300 text-sm">
        Total Lotteries
      </p>
    </div>

    <h2 className="text-5xl font-bold text-white">
      {stats.totalLotteries}
    </h2>
  </div>

  {/* Results */}
  <div className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-emerald-950 to-slate-900 border border-emerald-800 shadow-xl">
    <div className="flex items-center gap-3 mb-5">
      <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-2xl">
        📄
      </div>

      <p className="text-slate-300 text-sm">
        Total Results
      </p>
    </div>

    <h2 className="text-5xl font-bold text-white">
      {stats.totalResults}
    </h2>
  </div>

  {/* Predictions */}
  <div className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-orange-950 to-slate-900 border border-orange-800 shadow-xl">
    <div className="flex items-center gap-3 mb-5">
      <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-2xl">
        🎯
      </div>

      <p className="text-slate-300 text-sm">
        Total Predictions
      </p>
    </div>

    <h2 className="text-5xl font-bold text-white">
      {stats.totalPredictions}
    </h2>
  </div>

</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

  {/* Latest Draw */}
  <div className="rounded-3xl p-6 bg-[#111827] border border-slate-800 shadow-xl">

    <div className="flex justify-between items-center mb-6">
      <h3 className="text-xl font-semibold">
        Latest Draw
      </h3>

      <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
        LIVE
      </span>
    </div>

    <div className="flex gap-3 flex-wrap mb-6">
      {latestResult?.winningNumbers?.map((num:number) => (
        <div
          key={num}
          className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold"
        >
          {num}
        </div>
      ))}
    </div>

    <div className="flex justify-between text-sm text-slate-400">
      <span>
        Lottery: {latestResult?.lotteryId?.name}
      </span>

      <span>
        {latestResult?.drawDate}
      </span>
    </div>

  </div>

  {/* Prediction */}
  <div className="rounded-3xl p-6 bg-[#111827] border border-slate-800 shadow-xl">

    <div className="flex justify-between items-center mb-6">
      <h3 className="text-xl font-semibold">
        AI Prediction
      </h3>

      <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-400 text-xs">
        AI MODEL
      </span>
    </div>

    <div className="flex gap-3 flex-wrap mb-6">
      {latestPrediction?.predictedNumbers?.map((num:number) => (
        <div
          key={num}
          className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center text-xl font-bold"
        >
          {num}
        </div>
      ))}
    </div>

    <div className="grid grid-cols-2 gap-4">

      <div className="bg-slate-900 rounded-xl p-3">
        <p className="text-xs text-slate-400">
          Confidence
        </p>

        <p className="text-2xl font-bold text-pink-400">
          {latestPrediction?.confidence}%
        </p>
      </div>

      <div className="bg-slate-900 rounded-xl p-3">
        <p className="text-xs text-slate-400">
          Model Used
        </p>

        <p className="font-semibold">
          {latestPrediction?.modelUsed}
        </p>
      </div>

    </div>

  </div>

<div className="grid lg:grid-cols-2 gap-6 mb-8">

  {/* HOT NUMBERS */}
  <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-5">

    <div className="flex items-center justify-between mb-5">
      <h3 className="font-semibold text-white flex items-center gap-2">
        🔥 Hot Numbers
      </h3>

      <button className="text-xs px-3 py-1 rounded-lg border border-slate-700 text-slate-400">
        View All
      </button>
    </div>

    <div className="flex gap-4 flex-wrap">

      {hotNumbers.slice(0, 5).map((item) => (
        <div
          key={item.number}
          className="flex flex-col items-center"
        >

          <div className="w-14 h-14 rounded-full border border-orange-500 text-white font-bold flex items-center justify-center bg-orange-500/10">
            {item.number}
          </div>

          {"count" in item && (
            <span className="text-xs text-slate-500 mt-2">
              {item.count} times
            </span>
          )}

        </div>
      ))}

    </div>

  </div>

  {/* COLD NUMBERS */}
  <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-5">

    <div className="flex items-center justify-between mb-5">
      <h3 className="font-semibold text-white flex items-center gap-2">
        ❄️ Cold Numbers
      </h3>

      <button className="text-xs px-3 py-1 rounded-lg border border-slate-700 text-slate-400">
        View All
      </button>
    </div>

    <div className="flex gap-4 flex-wrap">

      {coldNumbers.slice(0, 5).map((item) => (
        <div
          key={item.number}
          className="flex flex-col items-center"
        >

          <div className="w-14 h-14 rounded-full border border-cyan-500 text-white font-bold flex items-center justify-center bg-cyan-500/10">
            {item.number}
          </div>

          {"count" in item && (
            <span className="text-xs text-slate-500 mt-2">
              {item.count} times
            </span>
          )}

        </div>
      ))}

    </div>

  </div>

</div>
  <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6 mt-6 shadow-xl hover:border-cyan-500 transition-all duration-300">

  <div className="flex items-center justify-between mb-6">

    <h2 className="text-xl font-bold text-white flex items-center gap-2">
      📊 Hot Numbers Analytics
    </h2>

    <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 text-xs">
      Analytics
    </span>

  </div>

  <div className="bg-slate-950/40 rounded-2xl p-4">
    <HotNumbersChart data={hotNumbers} />
  </div>

</div>
</div>
<div className="grid lg:grid-cols-3 gap-6 mt-6">

  {/* Latest Prediction */}
  <div className="lg:col-span-2 bg-[#111827] border border-slate-800 rounded-3xl p-6 shadow-xl">

    <h2 className="text-xl font-bold mb-4 text-white">
      🎯 Latest Prediction
    </h2>

    {latestPrediction && (
      <>
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">
          {latestPrediction.predictedNumbers?.join(" - ")}
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-slate-900 rounded-xl p-4">
            <p className="text-slate-400 text-sm">
              Confidence
            </p>

            <p className="text-2xl font-bold text-white">
              {latestPrediction.confidence}%
            </p>
          </div>

          <div className="bg-slate-900 rounded-xl p-4">
            <p className="text-slate-400 text-sm">
              Model
            </p>

            <p className="text-white font-semibold">
              {latestPrediction.modelUsed}
            </p>
          </div>

        </div>
      </>
    )}

  </div>

  {/* Accuracy */}
  <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6 shadow-xl">

    <h2 className="text-xl font-bold mb-4 text-white">
      🎯 Prediction Accuracy
    </h2>

    {accuracyData && (
      <>
        <div className="flex justify-center items-center h-40">

          <div className="w-32 h-32 rounded-full border-[10px] border-emerald-400 flex items-center justify-center">

            <div className="text-center">
              <h2 className="text-3xl font-bold text-white">
                {accuracyData?.overallAccuracy?.toFixed(1) ?? "0.0"}%
              </h2>

              <p className="text-xs text-slate-400">
                Accuracy
              </p>
            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 pt-4 flex justify-between">
          <span className="text-slate-400">
            Matched Numbers
          </span>

          <span className="font-bold text-white">
            {accuracyData.matchedCount}/5
          </span>
        </div>
      </>
    )}

  </div>

</div>
<div className="bg-[#111827] border border-slate-800 rounded-3xl p-6 mt-8 shadow-xl">

  <div className="flex items-center justify-between mb-6">

    <div>
      <h2 className="text-2xl font-bold text-white">
        📜 Prediction History
      </h2>

      <p className="text-slate-400 text-sm mt-1">
        Previous AI Predictions
      </p>
    </div>

    <div className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 text-sm">
      {predictionHistory.length} Records
    </div>

  </div>

  <div className="overflow-x-auto">

    <table className="w-full">

      <thead>

        <tr className="border-b border-slate-700">

          <th className="py-4 text-left text-slate-400">
  Date
</th>

<th className="py-4 text-left text-slate-400">
  Prediction
</th>

<th className="py-4 text-left text-slate-400">
  Actual Result
</th>

<th className="py-4 text-center text-slate-400">
  Matches
</th>

<th className="py-4 text-center text-slate-400">
  Accuracy
</th>

<th className="py-4 text-center text-slate-400">
  Status
</th>

        </tr>

      </thead>

      <tbody>

        {predictionHistory.map((item) => (

          <tr
            key={item._id}
            className="border-b border-slate-800 hover:bg-slate-900/50 transition"
          >

            <td className="py-4">
  {new Date(item.createdAt).toLocaleDateString()}
</td>

<td className="py-4 font-medium text-cyan-400">
  {item.predictedNumbers?.join(" - ")}
</td>

<td className="py-4 text-slate-300">
  {item.actualNumbers?.length
    ? item.actualNumbers.join(" - ")
    : "Waiting..."}
</td>

<td className="text-center">

  <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-sm">

    {item.status === "Completed"
      ? item.matchedCount
      : "--"}

  </span>

</td>

<td className="text-center">

  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">

    {item.status === "Completed"
      ? `${item.accuracy}%`
      : "--"}

  </span>

</td>

<td className="text-center">

  <span
    className={`px-3 py-1 rounded-full text-sm ${
      item.status === "Completed"
        ? "bg-green-500/10 text-green-400"
        : "bg-yellow-500/10 text-yellow-400"
    }`}
  >

    {item.status}

  </span>

</td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

</div>

          </div>
    </main>
  </div>
);
}