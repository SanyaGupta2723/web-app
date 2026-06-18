import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Result from "@/models/Result";
import Prediction from "@/models/Prediction";


// GET RESULTS
export async function GET() {
  
  try {
    await connectDB();

    const results = await Result.find()
      .populate("lotteryId")
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      results,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}


// ADD RESULT
export async function POST(req: Request) {
  try {
    await connectDB();

    const {
      lotteryId,
      drawDate,
      winningNumbers,
      jackpot,
    } = await req.json();

    const result = await Result.create({
      lotteryId,
      drawDate,
      winningNumbers,
      jackpot,
    });

    // FIND ALL PENDING PREDICTIONS

const predictions = await Prediction.find({
  lotteryId,
  status: "Pending",
});

for (const prediction of predictions) {

  const matches =
    prediction.predictedNumbers.filter(
      (num: number) =>
        winningNumbers.includes(num)
    );

  const matchedCount =
    matches.length;

  const accuracy =
    Number(
      ((matchedCount / 5) * 100).toFixed(2)
    );

  prediction.actualNumbers =
    winningNumbers;

  prediction.matchedCount =
    matchedCount;

  prediction.accuracy =
    accuracy;

  prediction.status =
    "Completed";

  await prediction.save();
}

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}