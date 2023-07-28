import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";

import { connectDb } from "../../config/db";
import Quiz from "@/app/models/Quiz";

export async function POST(request) {
  // Set up MongoDB connection using Mongoose

  try {
    const { title, questions } = await request.json();
    await connectDb();

    const quiz = await new Quiz({ title, questions });

    quiz.save();

    return NextResponse.json({
      success: true,
      message: "Quiz created successfully",
    });
  } catch (error) {
    // Mongoose automatically handles client close when you finish/error
    await mongoose.disconnect();
  }
}
