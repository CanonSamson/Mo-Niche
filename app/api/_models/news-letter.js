import mongoose from "mongoose";

const { Schema } = mongoose;

const newsLetterSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.NewsLetter ||
  mongoose.model("NewsLetter", newsLetterSchema);
