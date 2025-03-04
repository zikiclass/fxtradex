import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma/client";

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const id = searchParams.get("id");
    const s_mode = searchParams.get("mode");
    if (s_mode) {
      const withdrawals = await prisma.withdrawal.findMany({
        where: { id: parseInt(id) },
      });
      if (withdrawals)
        return NextResponse.json({ data: withdrawals }, { status: 200 });
      return NextResponse.json({ message: "Error" }, { status: 404 });
    } else {
      const withdrawals = await prisma.withdrawal.findMany({
        where: { userId: parseInt(id) },
      });
      if (withdrawals)
        return NextResponse.json({ data: withdrawals }, { status: 200 });
      return NextResponse.json({ message: "Error" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    if (!body.id || !body.action)
      return NextResponse.json({ message: "Invalid ID" }, { status: 404 });

    if (body.action === "approve") {
      const approveWithdrawal = await prisma.withdrawal.update({
        where: { id: parseInt(body.id) },
        data: {
          status: "Approved",
        },
      });
      if (approveWithdrawal) {
        return NextResponse.json({ message: "success" }, { status: 200 });
      } else {
        return NextResponse.json({ message: "error" }, { status: 404 });
      }
    } else {
      const declineWithdrawal = await prisma.withdrawal.update({
        where: { id: parseInt(body.id) },
        data: {
          status: "Declined",
        },
      });
      if (declineWithdrawal) {
        return NextResponse.json({ message: "success" }, { status: 200 });
      } else {
        return NextResponse.json({ message: "error" }, { status: 404 });
      }
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
export async function DELETE(req) {
  try {
    const body = await req.json();
    if (!body.id)
      return NextResponse.json({ message: "Invalid ID" }, { status: 404 });

    const deleteWithdrawal = await prisma.withdrawal.delete({
      where: { id: parseInt(body.id) },
    });
    if (deleteWithdrawal) {
      return NextResponse.json({ message: "success" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "error" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
