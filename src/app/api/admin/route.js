import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { getServerSession } from "next-auth";

import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body) {
      return NextResponse.json(
        { message: "Registration details not provided" },
        { status: 400 }
      );
    }
    const checkEmail = await prisma.admin.findUnique({
      where: {
        email: body.email,
      },
    });
    if (checkEmail) {
      return NextResponse.json("Email already registered", { status: 400 });
    } else {
      const hashedPassword = await bcrypt.hash(body.password, 10);
      const admin = await prisma.admin.create({
        data: {
          firstname: body.firstname,
          lastname: body.lastname,
          email: body.email,
          password: hashedPassword,
          lastLogin: new Date(),
        },
      });

      if (!admin) {
        return NextResponse.json({ message: "error" }, { status: 404 });
      }

      return NextResponse.json({ message: "success" }, { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json("Internal server error", { status: 500 });
  }
}

export async function GET(req) {
  try {
    //const body = await req.json();
    const session = await getServerSession();
    const email = session.user.email;

    const admin = await prisma.admin.findUnique({
      where: { email },
    });
    if (admin) {
      return NextResponse.json({ admin }, { status: 200 });
    } else {
      return NextResponse.json("Unable to get request", { status: 404 });
    }
  } catch (error) {
    return NextResponse.json("Internal server error" + error, { status: 500 });
  }
}
export async function DELETE(req) {
  try {
    const adminID = req.nextUrl.searchParams.get("id");
    const id = parseInt(adminID);
    if (!id)
      return NextResponse.json({ message: "Invalid ID" }, { status: 404 });

    const admin = await prisma.admin.delete({
      where: { id },
    });
    if (admin) {
      return NextResponse.json({ message: "success" }, { status: 200 });
    } else {
      return NextResponse.json("error", { status: 404 });
    }
  } catch (error) {
    return NextResponse.json("Internal server error" + error, { status: 500 });
  }
}
