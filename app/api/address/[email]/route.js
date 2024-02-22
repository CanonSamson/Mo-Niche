import { NextResponse } from "next/server";
import userSchema from "../../_models/signup";
import { connect } from "@/db";
import jwt from "jsonwebtoken";

export async function PATCH(req, { params }) {
  const data = await req.json();
  const { email } = params;
  try {
    // Get the JWT token from the Authorization header
    const token = req.headers.get("Authorization");

    // Verify the JWT token
    const decodedToken = jwt.verify(token, process.env.USER_JWT_SECRET);

    // If verification succeeds, extract the email from the decoded token
    const userEmail = decodedToken.email;

    // Check if the email in the token matches the requested email
    if (userEmail !== email)
      throw new Error(
        "Unauthorized: Token email does not match requested email"
      );

    // Connect to the database
    await connect();

   F
    const updatedDocument = await userSchema.findOneAndUpdate(
      { email },
      { $push: { addresses: data } },
      { new: true }
    );
    // Return user data along with token
    return NextResponse.json({ ...updatedDocument }, { status: 200 });
  } catch (error) {
    // Handle errors
    return NextResponse.error(error, { status: 500 });
  }
}
