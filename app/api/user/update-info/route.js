import { NextResponse } from "next/server";
import userSchema from "../../_models/signup";
import { connect } from "@/db";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    // Get the JWT token from the Authorization header
    const token = req.headers.get("Authorization");
    const user = await req.json();
    if (!token) {
      throw new Error("Unauthorized: Token not provided");
    }
    // Verify the JWT token
    const decodedToken = jwt.verify(token, process.env.USER_JWT_SECRET);

    // If verification succeeds, extract the email from the decoded token
    const email = decodedToken.email;

    // Connect to the database
    await connect();

    // Find the user by email
    const result = await userSchema.findOneAndUpdate(
      {
        email,
      },
      { $set: { fullName: user.fullName, phoneNumber: user.phoneNumber } },
      { new: true }
    );
    // Return user data along with token
    return NextResponse.json({ ...result }, { status: 200 });
  } catch (error) {
    // Handle errors
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
