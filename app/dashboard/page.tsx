"use client";

import { useEffect, useState } from "react";



export default function DashboardPage() {

    const [latestResult, setLatestResult] = useState<any>(null);
    const [hotNumbers, setHotNumbers] = useState<any[]>([]);
    const [coldNumbers, setColdNumbers] = useState<any[]>([]);
    
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
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="border rounded-xl p-6">
          <h2>Total Users</h2>
          <p className="text-3xl font-bold">
            {stats.totalUsers}
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h2>Total Lotteries</h2>
          <p className="text-3xl font-bold">
            {stats.totalLotteries}
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h2>Total Results</h2>
          <p className="text-3xl font-bold">
            {stats.totalResults}
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h2>Total Predictions</h2>
          <p className="text-3xl font-bold">
            {stats.totalPredictions}
          </p>
        </div>


      </div>
      <div className="border rounded-xl p-6 mt-6">
  <h2 className="text-xl font-bold mb-3">
    Latest Result
  </h2>

  {latestResult ? (
    <>
      <p className="mb-2">
        Lottery: {latestResult.lotteryId?.name}
      </p>

      <p className="text-2xl font-bold">
        {latestResult.winningNumbers?.join(" - ")}
      </p>

      <p className="mt-2 text-sm text-gray-500">
        {latestResult.drawDate}
      </p>
    </>
  ) : (
    <p>Loading...</p>
  )}
</div>
<div className="border rounded-xl p-6 mt-6">
  <h2 className="text-xl font-bold mb-4">
    Hot Numbers
  </h2>

  <div className="flex flex-wrap gap-3">
    {hotNumbers.slice(0, 5).map((item) => (
      <div
        key={item.number}
        className="px-4 py-2 border rounded-lg font-bold"
      >
        {item.number}
      </div>
    ))}
    
  </div>
</div>

<div className="border rounded-xl p-6 mt-6">
  <h2 className="text-xl font-bold mb-4">
    Cold Numbers
  </h2>

  <div className="flex flex-wrap gap-3">
    {coldNumbers.slice(0, 5).map((item) => (
      <div
        key={item.number}
        className="px-4 py-2 border rounded-lg font-bold"
      >
        {item.number}
      </div>
    ))}
  </div>
</div>
    </div>

    
  );
}