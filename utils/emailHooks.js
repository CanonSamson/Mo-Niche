const nodemailer = require("nodemailer");

require("dotenv").config();

export const useTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "process.env.NEXT_PUBLIC_EMAIL",
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
  });
};
