import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(req) {
  try {
    const admin_records = await prisma.admin.findMany();
    if (admin_records)
      return NextResponse.json(
        { message: "success", admin_records },
        {
    status: 200,
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    },
  }
      );
    return NextResponse.json({ message: "failed" }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
