import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { sendMail } from "@/lib/sendMail";

export async function POST(req: Request) {
  try {
    await connectDB();

    const {
      name,
      email,
      subject,
      message,
    } = await req.json();

    if (
      !name ||
      !email ||
      !subject ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    await sendMail({
      name,
      email,
      subject,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
      contact,
    });

  } catch (error) {

    console.log("CONTACT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}