import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

import Result from "@/models/Result";
import Prediction from "@/models/Prediction";
import Lottery from "@/models/Lottery";

export async function GET() {
  try {
    await connectDB();

    const results = await Result.find();

    if (results.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No lottery results found",
        },
        { status: 404 }
      );
    }

    const lottery = await Lottery.findOne();

    const frequency: Record<number, number> = {};

    results.forEach((result) => {
      result.winningNumbers.forEach((num: number) => {
        frequency[num] = (frequency[num] || 0) + 1;
      });
    });

    const topNumbers = Object.entries(frequency)
      .map(([number, count]) => ({
        number: Number(number),
        count,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    const predictedNumbers = topNumbers.map(
      (item) => item.number
    );

    const savedPrediction =
      await Prediction.create({
        lotteryId: lottery?._id,

        predictedNumbers,

        confidence: 70,

        risk: "Medium",

        modelUsed: "Frequency Model V1",

        status: "Pending",

        actualNumbers: [],

        matchedCount: 0,

        accuracy: 0,
      });

    return NextResponse.json({
      success: true,

      prediction: savedPrediction,

      predictedNumbers,

      confidence:
        savedPrediction.confidence,

      risk:
        savedPrediction.risk,

      model:
        savedPrediction.modelUsed,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );

  }
}