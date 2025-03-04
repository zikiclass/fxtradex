import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function POST(request) {
  try {
    const body = await request.json();
    //console.log(body);
    // const validation = userSchema.safeParse(body);

    // if (!validation.success) {
    //   return NextResponse.json(validation.error.message, {
    //     status: 400,
    //   });
    // }
    //const { email } = body;

    if (!body || !body.email) {
      return NextResponse.json(
        { message: "Email not provided" },
        { status: 400 }
      );
    }
    const user = await prisma.register.findUnique({
      where: {
        email: body.email,
      },
      include: { transactions: true },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json("Internal server error", { status: 500 });
  }
}

export async function GET(req) {
  try {
    //const body = await req.json();
    const response = await prisma.transaction.aggregate({
      _sum: { profit: true, deposit: true },
    });
    const withdrawals = await prisma.withdrawal.aggregate({
      _sum: { amount: true },
    });
    const users = await prisma.register.aggregate({
      _count: { email: true },
    });
    if (response && users) {
      return NextResponse.json(
        { response, users, withdrawals },
        { status: 200 }
      );
    } else {
      return NextResponse.json("Unable to get request", { status: 404 });
    }
  } catch (error) {
    return NextResponse.json("Internal server error" + error, { status: 500 });
  }
}
