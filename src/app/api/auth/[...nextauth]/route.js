import nodemailer from "nodemailer";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from "../../../../../prisma/client";

const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        if (credentials?.role === "user") {
          if (!credentials?.email || !credentials?.password) return null;

          const user = await prisma.register.findUnique({
            where: { email: credentials.email },
          });

          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (passwordsMatch) {
            // After successful login, send the email
            await sendSignInEmail(user.email);
            return user;
          }

          return null;
        } else if (credentials?.role === "admin") {
          if (!credentials?.email || !credentials?.password) return null;

          const admin = await prisma.admin.findUnique({
            where: { email: credentials.email },
          });

          if (!admin) return null;

          const currentDate = new Date();
          await prisma.admin.update({
            where: { email: credentials.email },
            data: { lastLogin: currentDate },
          });

          const passwordsMatch = await bcrypt.compare(
            credentials.password,
            admin.password
          );

          if (passwordsMatch) {
            // After successful login, send the email
            // await sendSignInEmail(admin.email);
            return admin;
          }

          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
  database: process.env.DATABASE_URL,
};

async function sendSignInEmail(userEmail) {
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: "465",
    secure: "465",
    auth: {
      user: "support@mt5indexpro.com",
      pass: "Mt5Index@2025",
    },
  });

  // HTML Email content with inline CSS
  const mailOptions = {
    from: "support@mt5indexpro.com", // Sender address
    to: userEmail, // User's email
    subject: "MT5 Index Pro - Successful Sign-In", // Subject line
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign-In Confirmation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f9;
      margin: 0;
      padding: 0;
    }
    .container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      padding: 20px;
    }
    .header {
      text-align: center;
      padding-bottom: 20px;
    }
    .header img {
      max-width: 150px;
    }
    .content {
      text-align: center;
      font-size: 16px;
      color: #333333;
      line-height: 1.5;
      padding-bottom: 20px;
    }
    .cta-button {
      background-color: #1a73e8;
      color: #ffffff;
      padding: 15px 25px;
      border-radius: 5px;
      text-decoration: none;
      font-weight: bold;
    }
    .footer {
      text-align: center;
      font-size: 14px;
      color: #888888;
      margin-top: 30px;
    }
    .footer a {
      color: #1a73e8;
      text-decoration: none;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="header">
      <img src="https://www.mt5indexpro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.6d381394.png&w=828&q=75" alt="MT5 Index Pro Logo">
    </div>

    <div class="content">
      <h2>Welcome Back to MT5 Index Pro!</h2>
      <p>We wanted to let you know that you have successfully logged into your MT5 Index Pro account. If this was you, there's no further action needed.</p>
      <p>If you did not attempt to sign in or believe your account has been accessed without your permission, please contact our support team immediately.</p>
      <a href="mailto:support@mt5indexpro.com" class="cta-button">Contact Support</a>
    </div>

    <div class="footer">
      <p>Best regards,</p>
      <p>The MT5 Index Pro Team</p>
      <p><a href="https://mt5indexpro.com" target="_blank">Visit our website</a></p>
    </div>
  </div>

</body>
</html>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Sign-in confirmation email sent to:", userEmail);
  } catch (error) {
    console.error("Error sending sign-in email:", error);
  }
}

// Handle GET and POST requests for NextAuth
export const GET = (req, res) => NextAuth(req, res, authOptions);
export const POST = (req, res) => NextAuth(req, res, authOptions);
