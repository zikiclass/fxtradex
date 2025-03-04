import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { registerSchema } from "../../validationSchemas";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const body = await request.json();
    if (body.password !== body.confirmPassword)
      return NextResponse.json("Password mismatch", { status: 401 });

    const validation = registerSchema.safeParse(body);

    if (!validation.success)
      return NextResponse.json(validation.error.format(), { status: 400 });

    const checkEmail = await prisma.register.findUnique({
      where: {
        email: body.email,
      },
    });
    if (checkEmail) {
      return NextResponse.json("Email already registered", { status: 400 });
    } else {
      //hashed the password
      const hashedPassword = await bcrypt.hash(body.password, 10);
      const referralIdInt = parseInt(body.referralId, 10);
      const date_created = new Date();
      const addUser = await prisma.register.create({
        data: {
          first_name: body.first_name,
          last_name: body.last_name,
          mobile: body.mobile,
          accounttype: body.accounttype,
          email: body.email,
          password: hashedPassword,
          currency: body.currency,
          country: body.country,
          state: body.state,
          city: body.city,
          referral_id: referralIdInt || null,
          date_created,
        },
      });

      const getUser = await prisma.register.findUnique({
        where: {
          email: body.email,
        },
      });
      if (getUser) {
        await prisma.transaction.create({
          data: {
            userId: getUser.id,
            deposit: parseFloat(0.0),
            profit: parseFloat(0.0),
            btc: parseFloat(0.0),
            eth: parseFloat(0.0),
            bnb: parseFloat(0.0),
            doge: parseFloat(0.0),
            atom: parseFloat(0.0),
            referral: parseFloat(0.0),
          },
        });
      }
      return NextResponse.json(addUser, { status: 201 });
    }
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(request) {
  try {
    const body = await request.json();

    const UserExists = await prisma.register.findUnique({
      where: {
        id: body.id,
      },
    });
    if (!UserExists)
      return NextResponse.json("User not found", { status: 404 });

    await prisma.register.deleteMany({});
    return NextResponse.json("User deleted", { status: 200 });
  } catch (err) {
    console.error("Error deleting user", err);
    return NextResponse.json("Error deleteing user", { status: 500 });
  }
}

export async function GET(request) {
  try {
    const body = await request.json();
    if (!body) NextResponse.json("No request", { status: 400 });
    const { email } = body;
    const user = await prisma.register.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      return NextResponse.json(user, { status: 200 });
    } else {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(body.email, { status: 500 });
  }
}
