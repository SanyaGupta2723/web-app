import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

console.log(process.env.MONGODB_URI);

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log("✅ MongoDB Connected");

    const Result = mongoose.models.Result || mongoose.model(
      "Result",
      new mongoose.Schema({}, { strict: false })
    );

    await Result.deleteMany({});

    const lotteryId = "6a3263f52f5ac685c59f2d45";

    const results = [];

    for (let i = 1; i <= 50; i++) {
      results.push({
        lotteryId,
        drawDate: `2026-06-${String(i % 30 || 30).padStart(2, "0")}`,
        winningNumbers: [
          Math.floor(Math.random() * 50) + 1,
          Math.floor(Math.random() * 50) + 1,
          Math.floor(Math.random() * 50) + 1,
          Math.floor(Math.random() * 50) + 1,
          Math.floor(Math.random() * 50) + 1,
        ],
        jackpot: Math.floor(Math.random() * 1000000),
      });
    }

    await Result.insertMany(results);

    console.log("🎉 50 Results Inserted");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seed();