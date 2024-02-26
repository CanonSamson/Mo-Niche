import { NextResponse } from "next/server";
import { connect } from "@/db";
import newsLetterSchema from "../_models/news-letter";

export async function POST(req) {
  try {
    const { email } = await req.json();
    const lowerCaseEmail = email.toLowerCase();

    if (!email) {
      return NextResponse.json({ error: "Email is Required" }, { status: 400 });
    }

    await connect();

    // Check if the email already exists in the database
    const existingUser = await newsLetterSchema.findOne({
      email: lowerCaseEmail,
    });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    await newsLetterSchema.create({
      email: lowerCaseEmail,
    });

    return NextResponse.json({ email: lowerCaseEmail }, { status: 201 });
  } catch (error) {
    console.error("Error occurred during user creation:", error);
    return NextResponse.json(
      { error: "Internal Server Error", msg: error.message },
      { status: 500 }
    );
  }
}
