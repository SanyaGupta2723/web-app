import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();

    const {
  name,
  email,
  password,
  role,
  adminCode,
} = await req.json();
console.log({
  name,
  email,
  role,
  adminCode,
});

    if (!name || !email || !password) {

      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

          if (role === "admin") {
  if (adminCode !== "REALTRACK2026") {
    return NextResponse.json(
      {
        message: "Invalid Admin Access Code",
      },
      { status: 400 }
    );
  }
}

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return NextResponse.json(
      {
        success: true,
        message: "User Registered Successfully",
        user,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}