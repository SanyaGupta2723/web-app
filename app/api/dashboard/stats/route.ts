import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import User from "@/models/User";
import Lottery from "@/models/Lottery";
import Result from "@/models/Result";
import Prediction from "@/models/Prediction";

export async function GET() {
  try {
    await connectDB();

    const totalUsers = await User.countDocuments();
    const totalLotteries = await Lottery.countDocuments();
    const totalResults = await Result.countDocuments();
    const totalPredictions =
      await Prediction.countDocuments();

    return NextResponse.json({
      success: true,
      stats: {
        totalUsers,
        totalLotteries,
        totalResults,
        totalPredictions,
      },
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}