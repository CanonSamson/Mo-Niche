import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connect } from "@/db";
import userSchema from "../_models/signup";
const bcrypt = require("bcrypt");

export async function POST(req) {
  try {
    const { fullName, email, password } = await req.json();
    const lowerCaseEmail = email.toLowerCase();

    if (!fullName || !email || !password) {
      return NextResponse.json(
        { error: "User details are not complete" },
        { status: 400 }
      );
    }

    await connect();

    // Check if the email already exists in the database
    const existingUser = await userSchema.findOne({ email: lowerCaseEmail });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    const token = jwt.sign(
      { email: lowerCaseEmail, password },
      process.env.USER_JWT_SECRET
    );
    const hashedPassword = await bcrypt.hash(password, 13);

    await userSchema.create({ fullName, email: lowerCaseEmail, password: hashedPassword });

    return NextResponse.json({ fullName, email: lowerCaseEmail, token }, { status: 201 });
  } catch (error) {
    console.error("Error occurred during user creation:", error);
    return NextResponse.json(
      { error: "Internal Server Error", msg: error.message },
      { status: 500 }
    );
  }
}
