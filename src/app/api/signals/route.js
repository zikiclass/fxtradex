import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body) {
      return NextResponse.json(
        { message: "Signals details not provided" },
        { status: 400 }
      );
    }

    const admin = await prisma.tradesignal.create({
      data: {
        action: body.action,
        amount: parseFloat(body.amount),
        leverage: parseFloat(body.leverage),
        profit: parseFloat(body.profit),
        loss: parseFloat(body.loss),
        duration: body.duration,
        outcome: body.outcome,
      },
    });

    if (!admin) {
      return NextResponse.json({ message: "error" }, { status: 404 });
    }

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json("Internal server error", {
      status: 500,
    });
  }
}

export async function GET(req) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");
    const signals = await prisma.trade.findMany({
      where: { userId: Number(id) },
      orderBy: [{ id: "desc" }],
    });
    if (signals) {
      return NextResponse.json(
        { message: "success", signals },
        { status: 200 }
      );
    } else {
      return NextResponse.json("Unable to get request", { status: 404 });
    }
  } catch (error) {
    return NextResponse.json("Internal server error" + error, { status: 500 });
  }
}
export async function DELETE(req) {
  try {
    const signalsID = req.nextUrl.searchParams.get("id");
    const id = parseInt(signalsID);
    if (!id)
      return NextResponse.json({ message: "Invalid ID" }, { status: 404 });

    const signals = await prisma.tradesignal.delete({
      where: { id },
    });
    if (signals) {
      return NextResponse.json({ message: "success" }, { status: 200 });
    } else {
      return NextResponse.json("error", { status: 404 });
    }
  } catch (error) {
    return NextResponse.json("Internal server error" + error, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("uId");
    const profit = searchParams.get("profit");
    const loss = searchParams.get("loss");

    const updateTrade = await prisma.trade.update({
      where: { id: parseInt(id) },
      data: { profit: parseFloat(profit), loss: parseFloat(loss) },
    });

    if (updateTrade) return NextResponse.json("updated", { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
