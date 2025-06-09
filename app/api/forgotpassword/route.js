import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/db";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { User } from "../../../models/users";

export async function POST(req) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }
    await connectMongo();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const token = crypto.randomBytes(32).toString("hex");
    const expiry = Date.now() + 1000 * 60 * 15;
    user.resetToken = token;
    user.resetTokenExpiry = expiry;
    await user.save();
    const resetLink = `http://localhost:3000/resetpassword?token=${token}`;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
    });
    await transporter.sendMail({
      from: `"GyanEdge Support" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: "Reset your password",
      html: `
        <p>You requested a password reset.</p>
        <p>Click below to reset your password. This link is valid for 15 minutes:</p>
        <a href="${resetLink}">${resetLink}</a>
      `,
    });
    return NextResponse.json(
      { message: "Reset link sent to email" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Forgot password error:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
