import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/db";
import { User } from "../../../models/users";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required." },
        { status: 400 }
      );
    }
    await connectMongo();
    const user = await User.findOne({ email });
    const token = jwt.sign(
      { email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password." },
        { status: 401 }
      );
    }

    if (user) {
      const response = NextResponse.json(
        { result: true, message: "Login successful", role: user.role },
        { status: 200 }
      );
      response.cookies.set("token", token, {
        httpOnly: true,
        path: "/",
        maxAge: "1h",
      });
      return response;
    } else {
      return NextResponse.json(
        {
          result: false,
          message: "Invalid email or password.",
        },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error." },
      { status: 500 }
    );
  }
}
