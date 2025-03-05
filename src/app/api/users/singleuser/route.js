import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function PUT(req) {
  try {
    const body = await req.json();

    const updateTransaction = await prisma.transaction.update({
      where: { id: parseInt(body.id) },
      data: {
        deposit: parseFloat(body.deposit),
        profit: parseFloat(body.profit),
        referral: parseFloat(body.referral),
        btc: parseFloat(body.btc),
        eth: parseFloat(body.eth),
        bnb: parseFloat(body.bnb),
        doge: parseFloat(body.doge),
        atom: parseFloat(body.atom),
      },
    });

    if (updateTransaction)
      return NextResponse.json({ message: "success" }, { status: 200 });
    else return NextResponse.json({ message: "error" }, { status: 400 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error handling request: " + error.message },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    const searchParams = req.nextUrl.searchParams; // Corrected line to get query params
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json("Missing ID parameter", { status: 400 });
    }

    const userId = parseInt(id);

    // Find the user by ID
    const user = await prisma.register.findUnique({
      where: { id: userId },
      include: { transactions: true }, // Include associated transactions
    });

    // Find the transactions for the user by userId
    const transactions = await prisma.transaction.findMany({
      where: { userId: userId }, // Use findMany for a non-unique field
    });

    if (user) {
      return NextResponse.json({ user, transactions }, { status: 200 });
    } else {
      return NextResponse.json("User not found", { status: 404 });
    }
  } catch (error) {
    console.error("Internal server error:", error);
    return NextResponse.json("Internal server error", { status: 500 });
  }
}
