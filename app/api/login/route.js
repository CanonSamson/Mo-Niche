import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import userSchema from "../_models/signup";
const bcrypt = require("bcrypt");
import { connect } from "@/db";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const lowerCaseEmail = email.toLowerCase();
    // Validate the email and password
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    await connect();

    // Check if the user exists in the database and validate the password
    const user = await userSchema.findOne({ email: lowerCaseEmail });

    if (!user)
      return NextResponse.json(
        { error: "User is not registered" },
        { status: 404 }
      );

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // If authentication succeeds, generate a JWT token
    const token = jwt.sign({ email }, process.env.USER_JWT_SECRET);

    // Return the token and any other relevant user data
    return NextResponse.json(
      { token, user: { email, fullName: user.fullName } },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error occurred during login:", error);
    return NextResponse.json(
      { error: "Internal Server Error", msg: error.message },
      { status: 500 }
    );
  }
}
