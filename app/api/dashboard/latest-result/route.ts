import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Result from "@/models/Result";

export async function GET() {
  try {
    await connectDB();

    const latestResult = await Result.findOne()
      .sort({ createdAt: -1 })
      .populate("lotteryId");

    return NextResponse.json({
      success: true,
      latestResult,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}