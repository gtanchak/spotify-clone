import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const middleware = async (req: NextApiRequest) => {
  // get the token if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET! });

  // Allow the requests if
  const { pathname } = (req as any).nextUrl;

  // Token exists or its a token request or the logo of the app
  if (
    pathname.includes("/api/auth") ||
    token ||
    pathname.includes("/spotify")
  ) {
    return NextResponse.next();
  }

  // Redirect to login if no token and not on the login page
  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }
};
