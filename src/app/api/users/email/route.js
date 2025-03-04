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
    //const body = await req.json();
    const page = req.nextUrl.searchParams.get("page") || "1"; // Default to '1' if not provided
    const limit = req.nextUrl.searchParams.get("limit") || "7"; // Default to '7' if not provided
    const email = req.nextUrl.searchParams.get("email") || "";
    // console.log("Raw query parameters:", { page, limit });
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);
    //console.log("Parsed values:", { pageNumber, limitNumber });

    if (
      isNaN(pageNumber) ||
      isNaN(limitNumber) ||
      pageNumber < 1 ||
      limitNumber < 1
    ) {
      return NextResponse.json(
        { error: "Invalid page or limit value" },
        { status: 400 }
      );
    }
    const whereClause = email ? { email } : {};
    //console.log(`Fetching users for page ${pageNumber}, limit ${limitNumber}`);
    //console.log(`Fetching users for page ${page}`);

    const users = await prisma.register.findMany({
      where: whereClause,
      skip: (pageNumber - 1) * limitNumber,
      take: limitNumber,
      orderBy: [{ id: "desc" }],
      include: { transactions: true },
    });
    const totalUsers = await prisma.register.count();

    //console.log("Total users:", totalUsers);
    if (users) {
      if (email) {
        const checkEmail = await prisma.register.findUnique({
          where: { email },
        });
        if (checkEmail) {
          return NextResponse.json(
            {
              users,
              totalPages: Math.ceil(totalUsers / limitNumber),
              currentPage: parseInt(page),
            },
            { status: 200 }
          );
        } else
          return NextResponse.json("Unable to get request", { status: 404 });
      } else {
        return NextResponse.json(
          {
            users,
            totalPages: Math.ceil(totalUsers / limitNumber),
            currentPage: parseInt(page),
          },
          { status: 200 }
        );
      }
    }
  } catch (error) {
    return NextResponse.json("Internal server error" + error, { status: 500 });
  }
}
