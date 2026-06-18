import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

import Prediction from "@/models/Prediction";
import Result from "@/models/Result";

export async function GET() {
  try {
    await connectDB();

    // Latest Prediction
    const prediction = await Prediction.findOne()
      .sort({ createdAt: -1 });

    // Latest Result
    const result = await Result.findOne()
      .sort({ createdAt: -1 });

    // Overall Accuracy
    const overallStats =
      await Prediction.aggregate([
        {
          $match: {
            status: "Completed",
          },
        },
        {
          $group: {
            _id: null,
            avgAccuracy: {
              $avg: "$accuracy",
            },
            totalPredictions: {
              $sum: 1,
            },
            avgMatches: {
              $avg: "$matchedCount",
            },
          },
        },
      ]);

    let latestAccuracy = 0;
    let matchedCount = 0;
    let actualNumbers: number[] = [];
    let predictedNumbers: number[] = [];

    if (prediction && result) {

      const matched =
        prediction.predictedNumbers.filter(
          (num: number) =>
            result.winningNumbers.includes(num)
        );

      matchedCount = matched.length;

      latestAccuracy =
        (matched.length /
          prediction.predictedNumbers.length) *
        100;

      actualNumbers =
        result.winningNumbers;

      predictedNumbers =
        prediction.predictedNumbers;
    }

    return NextResponse.json({
      success: true,

      latestPrediction:
        predictedNumbers,

      latestResult:
        actualNumbers,

      latestMatchedCount:
        matchedCount,

      latestAccuracy:
        Number(
          latestAccuracy.toFixed(2)
        ),

      overallAccuracy:
        Number(
          (
            overallStats[0]
              ?.avgAccuracy || 0
          ).toFixed(2)
        ),

      totalPredictions:
        overallStats[0]
          ?.totalPredictions || 0,

      averageMatches:
        Number(
          (
            overallStats[0]
              ?.avgMatches || 0
          ).toFixed(2)
        ),
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