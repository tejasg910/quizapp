import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";

import { connectDb } from "../../config/db";
import Quiz from "@/app/models/Quiz";

export async function GET(request) {
  // Set up MongoDB connection using Mongoose

  try {
    await connectDb();

    const quizzess = await Quiz.find({});

    return NextResponse.json({
      success: true,
      data: quizzess,
    });
  } catch (error) {
    // Mongoose automatically handles client close when you finish/error

    await mongoose.disconnect();

    return NextResponse.json({
      success: false,
      message: "Somwthing went wrong",
    });
  }
}
