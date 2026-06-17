"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function HotNumbersChart({
  data,
}: {
  data: any[];
}) {
  return (
    <div style={{ width: "100%", height: 320 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>

          <defs>
            <linearGradient
              id="barGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#8B5CF6"
              />
              <stop
                offset="100%"
                stopColor="#3B82F6"
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke="#1e293b"
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="number"
            stroke="#94a3b8"
          />

          <YAxis
            stroke="#94a3b8"
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "12px",
              color: "#fff",
            }}
          />

          <Bar
            dataKey="count"
            fill="url(#barGradient)"
            radius={[10, 10, 0, 0]}
          />

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}