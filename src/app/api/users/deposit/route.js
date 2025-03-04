import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";
import { getServerSession } from "next-auth";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body || !body.amount || !body.account_ || !body.dep_method) {
      return NextResponse.json({ message: "Invalid details" }, { status: 400 });
    }

    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const dep = await prisma.deposit.create({
      data: {
        userId: parseInt(body.userId),
        amount: parseFloat(body.amount),
        account_: body.account_,
        dep_method: body.dep_method,
        date_deposited: new Date(),
        status: "Pending",
      },
    });

    return NextResponse.json(
      { message: "Success", data: dep },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating deposit:", error); // Log error details for debugging
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const id = searchParams.get("id");
    if (!id)
      return NextResponse.json({ message: "Unathorized" }, { status: 404 });

    const deposits = await prisma.deposit.findMany({
      where: { userId: parseInt(id) },
    });
    if (deposits) return NextResponse.json({ data: deposits }, { status: 200 });
    return NextResponse.json({ message: "Error" }, { status: 404 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
