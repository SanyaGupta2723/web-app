import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Prediction from "@/models/Prediction";

export async function GET() {
  await connectDB();

  const prediction = await Prediction.findOne()
    .sort({ createdAt: -1 });

  return NextResponse.json({
    success: true,
    prediction,
  });
}