import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Prediction from "@/models/Prediction";

export async function GET() {
  await connectDB();

  const predictions = await Prediction.find()
    .sort({ createdAt: -1 });

  return NextResponse.json({
    success: true,
    predictions,
  });
}