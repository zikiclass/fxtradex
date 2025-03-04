import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";
import { passwordSchema } from "../../../validationSchemas";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function PUT(req) {
  try {
    const body = await req.json();
    const session = await getServerSession(authOptions);

    const validation = passwordSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({
        error: "Password should be at least 4 characters",
        status: 400,
      });
    }

    // Fetch the user from Prisma
    const user = await prisma.register.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({
        error: "User not found",
        status: 404,
      });
    }

    // Compare old password with stored hashed password
    const isPasswordValid = await bcrypt.compare(body.password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({
        error: "Current password is incorrect",
        status: 400,
      });
    }

    // Check if new password matches confirm password
    if (body.newPassword !== body.confirmPassword) {
      return NextResponse.json({
        error: "New password does not match confirmation password",
        status: 400,
      });
    }

    // Hash the new password
    const hashedNewPassword = await bcrypt.hash(body.newPassword, 10);

    // Update the password in Prisma
    const updatePassword = await prisma.register.update({
      where: { email: session.user.email },
      data: { password: hashedNewPassword },
    });

    if (updatePassword) {
      return NextResponse.json("Password updated", { status: 200 });
    }

    return NextResponse.json({
      error: "Failed to update password",
      status: 500,
    });
  } catch (error) {
    console.error("Error updating password:", error);
    return NextResponse.json({
      error: "Internal Server Error",
      status: 500,
    });
  }
}
