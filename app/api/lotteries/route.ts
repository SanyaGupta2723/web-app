import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Lottery from "@/models/Lottery";


// GET ALL LOTTERIES
export async function GET() {
  try {
    await connectDB();

    const lotteries = await Lottery.find();

    return NextResponse.json({
      success: true,
      lotteries,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}


// ADD LOTTERY
export async function POST(req: Request) {
  try {
    await connectDB();

    const { name, drawTime, ticketPrice } =
      await req.json();

    if (!name || !drawTime || !ticketPrice) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const lottery = await Lottery.create({
      name,
      drawTime,
      ticketPrice,
    });

    return NextResponse.json({
      success: true,
      lottery,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}