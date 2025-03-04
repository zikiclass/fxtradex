import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import z from "zod";

const validationSchema = z.object({
  streetAddress: z.string().min(1, "Enter street address"),
  postalCode: z.string().min(1, "Enter postal code"),
  city: z.string().min(1, "Enter city"),
  state: z.string().min(1, "Enter state"),
  country: z.string().min(1, "Enter country"),
});

export async function PUT(req) {
  try {
    const body = await req.json();

    //validate data
    const validation = validationSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ error: "Fill all entries", status: 400 });
    }

    //get user
    const session = await getServerSession(authOptions);
    const user = await prisma.register.findUnique({
      where: { email: session.user.email },
    });
    if (!user) {
      return NextResponse.json({ error: "User not found", status: 404 });
    }

    //update the register model
    const updateRegister = await prisma.register.update({
      where: { email: session?.user?.email },
      data: {
        street_address: body.streetAddress,
        postal_code: body.postalCode,
        city: body.city,
        state: body.state,
        country: body.country,
      },
    });
    if (updateRegister) {
      return NextResponse.json("Address updated successfully", { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
