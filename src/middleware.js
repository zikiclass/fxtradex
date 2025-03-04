// middleware.js or middleware.ts
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Redirect users who are not authenticated
  if (!token && req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/signin_", req.url));
  } else if (!token && req.nextUrl.pathname.startsWith("/users")) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }
  // Allow authenticated users to access the protected routes
  return NextResponse.next();
}

export const config = {
  matcher: ["/users/:path*", "/admin/:path*"],
};
