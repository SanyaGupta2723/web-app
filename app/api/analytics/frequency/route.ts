import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Result from "@/models/Result";

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

    return NextResponse.json({
      success: true,
      totalDraws: results.length,
      frequency,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}