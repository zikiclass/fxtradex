import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(1).max(255),
});

export async function POST(request) {
  try {
    const body = await request.json();

    const validation = registerSchema.safeParse(body);

    if (!validation.success)
      return NextResponse.json(validation.error.errors, { status: 400 });

    const addUser = await prisma.register.create({
      data: {
        name: body.name,
      },
    });

    return NextResponse.json(addUser, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
