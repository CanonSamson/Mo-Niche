import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connect } from "@/db";
import userSchema from "../_models/signup";
const bcrypt = require("bcrypt");

export async function POST(req) {
  try {
    const { fullName, email, password } = await req.json();

    if (!fullName || !email || !password) {
      return NextResponse.json(
        { error: "User details are not complete" },
        { status: 400 }
      );
    }

    await connect();

    const token = jwt.sign({ email, password }, process.env.USER_JWT_SECRET);
    const hashedPassword = await bcrypt.hash(password, 13);

    await userSchema.create({ fullName, email, password: hashedPassword });

    return NextResponse.json({ fullName, email, token }, { status: 201 });
  } catch (error) {
    console.error("Error occurred during user creation:", error);
    return NextResponse.json(
      { error: "Internal Server Error", msg: error.message },
      { status: 500 }
    );
  }
}
