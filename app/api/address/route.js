import { NextResponse } from "next/server";
import userSchema from "../_models/signup";
import { connect } from "@/db";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { address } = await req.json();
  try {
    // Get the JWT token from the Authorization header
    const token = req.headers.get("Authorization");

    if (!token) {
      throw new Error("Unauthorized: Token not provided");
    }
    // Verify the JWT token
    const decodedToken = jwt.verify(token, process.env.USER_JWT_SECRET);

    // If verification succeeds, extract the email from the decoded token
    const email = decodedToken.email;

    // Connect to the database
    await connect();

    const updatedDocument = await userSchema.findOneAndUpdate(
      { email, email },
      { $push: { addresses: address } },
      { new: true }
    );

    // Return user data along with token
    return NextResponse.json({ updatedDocument }, { status: 200 });
  } catch (error) {
    // Handle errors
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
