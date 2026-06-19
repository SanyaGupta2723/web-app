
"use client";

import { useState } from "react";




export default function Navbar() {
  const [loading, setLoading] = useState(false);
  const generatePrediction = async () => {
  try {
    setLoading(true);

    const res = await fetch(
      "/api/predictions/generate"
    );

    const data = await res.json();

    console.log(data);

    if (data.success) {
      alert("Prediction Generated Successfully");

      window.location.reload();
    }

  } catch (error) {
    console.log(error);
    alert("Failed to generate prediction");
  } finally {
    setLoading(false);
  }
};
  return (
    <header className="h-24 px-8 flex items-center justify-between border-b border-slate-800 bg-[#081120]">

      {/* Left Side */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Lottery Dashboard
        </h1>

        <p className="text-slate-400 mt-1">
          Real-Time Lottery Intelligence Platform
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Date */}
        <div className="bg-[#111827] border border-slate-800 rounded-xl px-5 py-3">
          <p className="text-slate-300 text-sm">
            📅 {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Notification */}
        <button className="w-12 h-12 rounded-xl bg-[#111827] border border-slate-800 hover:border-cyan-500 transition flex items-center justify-center">
          🔔
        </button>

        {/* Generate Prediction */}
        <button
  onClick={generatePrediction}
  disabled={loading}
  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition"
>
  {loading
    ? "Generating..."
    : "⚡ Generate Prediction"}
</button>

        {/* Profile */}
        <div className="flex items-center gap-3 ml-2">

          <div className="text-right">
            <p className="text-white font-medium">
              Sanya Gupta
            </p>

            <p className="text-xs text-slate-400">
              Admin
            </p>
          </div>

          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-black">
            S
          </div>
           

        </div>

      </div>
    </header>
  );
}