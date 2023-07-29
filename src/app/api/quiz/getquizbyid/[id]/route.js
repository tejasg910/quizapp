import { NextRequest, NextResponse } from "next/server";

import mongoose from "mongoose";

import { connectDb } from "../../../config/db";
import Quiz from "@/app/models/Quiz";

export async function GET(request, { params }) {
  // Set up MongoDB connection using Mongoose

  try {
    await connectDb();
    console.log(params);
    const quizzess = await Quiz.findById(params.id);

    return NextResponse.json({
      success: true,
      data: quizzess,
    });
  } catch (error) {
    // Mongoose automatically handles client close when you finish/error
    console.log(error);
    await mongoose.disconnect();

    return NextResponse.json({
      success: false,
      message: "Somwthing went wrong",
    });
  }
}
