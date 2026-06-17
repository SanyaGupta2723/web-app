import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

import Prediction from "@/models/Prediction";
import Result from "@/models/Result";

export async function GET() {
  await connectDB();

  const prediction = await Prediction.findOne()
    .sort({ createdAt: -1 });

  const result = await Result.findOne()
    .sort({ createdAt: -1 });

  if (!prediction || !result) {
    return NextResponse.json({
      success: false,
    });
  }

  const matched = prediction.predictedNumbers.filter(
    (num: number) =>
      result.winningNumbers.includes(num)
  );

  const accuracy =
    (matched.length /
      prediction.predictedNumbers.length) *
    100;

  return NextResponse.json({
    success: true,
    prediction: prediction.predictedNumbers,
    actual: result.winningNumbers,
    matchedCount: matched.length,
    accuracy,
  });
}