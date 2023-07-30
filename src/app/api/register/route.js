import User from "@/app/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDb, disConnect } from "../config/db";

export async function POST(request) {
  try {
    const { username, email, password, age } = await request.json();
    await connectDb();
    if (!username || !email || !password || !age) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide all details",
        },
        { status: 400 }
      );
    }
    const getuser = await User.findOne({ email });

    if (getuser) {
      return NextResponse.json(
        {
          success: false,
          message: "This user already exists",
        },
        { status: 409 }
      );
    }

    //hasing password

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await new User({ username, email, password: hash, age });

    user.save();

    return NextResponse.json(
      {
        success: true,
        message: "Registered successfully",
      },
      { status: 200 }
    );
  } catch (err) {
    await disConnect();
    console.log(err);
    return NextResponse.json(
      {
        success: false,
        message: "Error occured",
      },
      { status: 500 }
    );
  }
}
