import mongoose from "mongoose";

const { Schema } = mongoose;

const addressSchema = new Schema(
  {
    phoneNumber: {
      type: String,
    },
    name: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    addresses: [addressSchema],
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
