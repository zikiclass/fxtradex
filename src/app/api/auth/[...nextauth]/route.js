import NextAuth from "next-auth";
import prisma from "../../../../../prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

// NextAuth configuration
const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
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

// Define GET and POST handlers for NextAuth
const handler = NextAuth(authOptions);

// Export handler to handle GET and POST requests
export { handler as GET, handler as POST };
