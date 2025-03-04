import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function PUT(req) {
  try {
    const body = await req.json();

    const updateTransaction = await prisma.register.update({
      where: { id: parseInt(body.id) },
      data: {
        otp_code: body.otpCode,
      },
    });
    if (updateTransaction)
      return NextResponse.json({ message: "success" }, { status: 200 });
    else return NextResponse.json({ message: "error" }, { status: 400 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error handling request" + error },
      { status: 500 }
    );
  }
}
