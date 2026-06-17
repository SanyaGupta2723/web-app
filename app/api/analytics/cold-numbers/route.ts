import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Result from "@/models/Result";

export async function GET() {
  try {
    await connectDB();

    const results = await Result.find();

    const frequency: Record<number, number> = {};

    // 1 se 50 tak sab numbers initialize
    for (let i = 1; i <= 50; i++) {
      frequency[i] = 0;
    }

    results.forEach((result) => {
      result.winningNumbers.forEach((num: number) => {
        frequency[num] += 1;
      });
    });

    const coldNumbers = Object.entries(frequency)
      .map(([number, count]) => ({
        number: Number(number),
        count,
      }))
      .sort((a, b) => a.count - b.count)
      .slice(0, 10);

    return NextResponse.json({
      success: true,
      coldNumbers,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}