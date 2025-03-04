// src/app/api/auth/authOptions.js

import prisma from "../../../../prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
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

          return passwordsMatch ? user : null;
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

          return passwordsMatch ? admin : null;
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
