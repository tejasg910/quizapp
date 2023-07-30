import { NextResponse } from "next/server";

import mongoose from "mongoose";

import User from "@/app/models/User";
import { connectDb } from "../config/db";

export async function GET(request) {
  // Set up MongoDB connection using Mongoose

  try {
    await connectDb();

    const users = await User.find().sort({ createdAt: -1 }).limit(10);

    return NextResponse.json(
      {
        success: true,
        data: users,
      },
      { status: 200 }
    );
  } catch (error) {
    // Mongoose automatically handles client close when you finish/error

    await mongoose.disconnect();

    return NextResponse.json(
      {
        success: false,
        message: "Somwthing went wrong",
      },
      { status: 500 }
    );
  }
}
