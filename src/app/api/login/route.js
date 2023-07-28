import User from "@/app/models/User";
import { NextResponse } from "next/server";
import { connectDb, disConnect } from "../config/db";
import bcrypt from "bcryptjs";
export async function POST(request) {
  try {
    const { email, password } = await request.json();
    await connectDb();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({
        success: true,
        message: "This email is not registered, Please check your email",
      });
    }

    //checking hash
    const isPasswordMath = await bcrypt.compare(password, user.password);
    if (!isPasswordMath) {
      return NextResponse.json({
        success: false,
        message: "Inavlid credentials",
      });
    }

    return NextResponse.json({
      success: true,
      message: `Welcome back ${user.username}`,
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
