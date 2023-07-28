import User from "@/app/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDb, disConnect } from "../config/db";

export async function POST(request) {
  try {
    const { username, email, password, age } = await request.json();
    await connectDb();

    const getuser = await User.findOne({ email });

    if (getuser) {
      return NextResponse.json({
        success: false,
        message: "This user already exists",
      });
    }

    //hasing password

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await new User({ username, email, password: hash, age });

    user.save();

    return NextResponse.json({
      success: true,
      message: "Registered successfully",
    });
  } catch (err) {
    await disConnect();
    console.log(err);
    return NextResponse.json({
      success: false,
      message: "Error occured",
    });
  }
}
