import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/db";
import { User } from "../../../models/users";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { password, token } = await req.json();
    if (!password || !token) {
      return NextResponse.json(
        { success: false, message: "Password and token are required" },
        { status: 400 }
      );
    }
    await connectMongo();
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid or expired token" },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;

    await user.save();

    return NextResponse.json(
      { success: true, message: "Password reset successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Reset password error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
