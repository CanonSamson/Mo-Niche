import { useTransporter } from "@/utils/emailHooks";

require("dotenv").config();

export async function POST(req) {
  const { email } = await req.json();

  const html = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mo Niche Fashion</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      text-align: center;
      background-color: #f4f4f4;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .logo {
      margin-bottom: 20px;
    }
    .message {
      margin-bottom: 30px;
    }
    .button {
      display: inline-block;
      background-color: black;
      color: #ffffff;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;
    }
    .footer {
      margin-top: 30px;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="container">
  <img width="200px" height="200px" src="https://firebasestorage.googleapis.com/v0/b/mytenantconnect-c9d73.appspot.com/o/logo-v1-black.png?alt=media&token=e62d5d7f-611f-4914-b130-6ed31751eb3a" alt="Mo Niche Fashion" class="logo">

    <h1>Dear Mo Niche Lady,</h1>
    <div class="message">
      <p>We understand the importance of wearing high-end fashion that reflects your unique style and personality. That’s why we are committed to providing you with top-notch garments and designs, tailored to your specific proportions.</p>
      <p>We believe that every individual deserves to experience the luxury of perfectly fitting clothing without compromising their budget.</p>
      <p>Whether you are attending a special event, a business meeting, or simply want to look your best, our team of skilled tailors is committed to creating bespoke outfits that will enhance your natural confidence and style.</p>
      <p>Remember! It’s all in the DETAILS.</p>
    </div>
    <a href="#" class="button">Explore Our Collections</a>
    <div class="footer">
      <p>Thank you for considering Mo Niche. We look forward to the opportunity to serve you and create exquisite fashion pieces that are tailored exclusively for you.</p>
      <p>We Love YOU!</p>
    </div>
  </div>
</body>
</html>

  `;

  try {
    const transporter = await useTransporter();

    const mailOptions = {
      from: "process.env.NEXT_PUBLIC_EMAIL",
      to: email,
      subject: `Dear Mo Niche Lady!`,
      html: html,
    };

    const info = await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify(info));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
}
