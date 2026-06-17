import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

import Result from "@/models/Result";
import Prediction from "@/models/Prediction";

export async function GET() {
  try {
    await connectDB();

    const results = await Result.find();

    const frequency: Record<number, number> = {};

    results.forEach((result) => {
      result.winningNumbers.forEach((num: number) => {
        frequency[num] = (frequency[num] || 0) + 1;
      });
    });

    const predictedNumbers = Object.entries(frequency)
      .sort((a, b) => Number(b[1]) - Number(a[1]))
      .slice(0, 5)
      .map(([num]) => Number(num));

    const prediction = await Prediction.create({
      predictedNumbers,
      confidence: 75,
      risk: "Medium",
      modelUsed: "Frequency Analysis",
    });

    return NextResponse.json({
      success: true,
      prediction,
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Server Error" },
      { status: 500 }
    );
  }
}