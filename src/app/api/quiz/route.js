import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";

import { connectDb } from "../config/db";
import Quiz from "@/app/models/Quiz";

export async function GET(request) {
  // Set up MongoDB connection using Mongoose

  try {
    await connectDb();
    const query = { title: "Your Quiz Title" };
    const quiz = await Quiz.findOne(query);

    console.log(quiz);
    return NextResponse.json({ name: "Tejas" });
  } finally {
    // Mongoose automatically handles client close when you finish/error
    await mongoose.disconnect();
  }
}
