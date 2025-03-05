import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";
import { userSchema } from "../../../validationSchemas";
import { getServerSession } from "next-auth";
export async function PUT(request) {
  try {
    const session = await getServerSession();
    const body = await request.json();

    const validation = userSchema.safeParse(body);
    if (!validation)
      return NextResponse.json(
        { error: "Validation failed", details: validation.error },
        { status: 400 }
      );

    const checkEmail = await prisma.register.findUnique({
      where: { email: body.email },
    });

    if (checkEmail)
      return NextResponse.json("Email already registered for another user", {
        status: 400,
      });

    const updateEmail = await prisma.register.update({
      where: { email: session?.user?.email },
      data: { email: body.email },
    });

    if (updateEmail) return NextResponse.json("updated", { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
export async function DELETE(req) {
  try {
    const userID = req.nextUrl.searchParams.get("id");
    const id = parseInt(userID);
    if (!id)
      return NextResponse.json({ message: "Invalid ID" }, { status: 404 });

    const deleteTrans = await prisma.transaction.deleteMany({
      where: { userId: id },
    });
    await prisma.referral.deleteMany({ where: { userId: id } });
    await prisma.deposit.deleteMany({ where: { userId: id } });
    await prisma.withdrawal.deleteMany({ where: { userId: id } });
    if (deleteTrans) {
      await prisma.register.delete({
        where: { id },
      });

      return NextResponse.json({ message: "success" }, { status: 200 });
    } else
      return NextResponse.json(
        { message: "Error deleting record" },
        { status: 404 }
      );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
export async function GET(req) {
  try {
    const wallets = await prisma.wallets.findMany();

    return NextResponse.json(
      {
        wallets,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error occurred during query:", error.message); // Log the actual error
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
