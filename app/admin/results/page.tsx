"use client";

import { useEffect, useState } from "react";

interface Result {
  _id: string;
  drawDate: string;
  winningNumbers: number[];
  jackpot: number;
  lotteryId?: {
    name?: string;
  };
}

export default function ResultsPage() {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchResults = async () => {
    try {
      const res = await fetch("/api/results");
      const data = await res.json();

      if (data.success) {
        setResults(data.results);
      }
    } catch (error) {
      console.error("Error fetching results:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Results Management
          </h1>
          <p className="text-slate-400">
            Manage lottery results
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-medium">
          Add Result
        </button>
      </div>

      {/* Table */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
        {loading ? (
          <div className="p-6 text-center text-slate-400">
            Loading...
          </div>
        ) : results.length === 0 ? (
          <div className="p-6 text-center text-slate-400">
            No Results Found
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-slate-800">
              <tr>
                <th className="text-left p-4 text-slate-300">
                  Lottery
                </th>

                <th className="text-left p-4 text-slate-300">
                  Draw Date
                </th>

                <th className="text-left p-4 text-slate-300">
                  Winning Numbers
                </th>

                <th className="text-left p-4 text-slate-300">
                  Jackpot
                </th>
              </tr>
            </thead>

            <tbody>
              {results.map((result) => (
                <tr
                  key={result._id}
                  className="border-t border-slate-800"
                >
                  <td className="p-4 text-white">
                    {result.lotteryId?.name || "N/A"}
                  </td>

                  <td className="p-4 text-slate-300">
                    {result.drawDate}
                  </td>

                  <td className="p-4">
                    <div className="flex gap-2 flex-wrap">
                      {result.winningNumbers.map(
                        (num, index) => (
                          <span
                            key={index}
                            className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                          >
                            {num}
                          </span>
                        )
                      )}
                    </div>
                  </td>

                  <td className="p-4 text-green-400 font-semibold">
                    ₹{result.jackpot?.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}