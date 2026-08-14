import { NextResponse } from "next/server";

export function proxy(request) {
  const authHeader = request.headers.get("authorization");

  if (authHeader) {
    const authValue = authHeader.split(" ")[1];

    if (authValue) {
      const decoded = Buffer.from(
        authValue,
        "base64"
      ).toString("utf-8");

      const [username, password] =
        decoded.split(":");

      if (
        username === process.env.ADMIN_USERNAME &&
        password === process.env.ADMIN_PASSWORD
      ) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse(
    "Admin access required.",
    {
      status: 401,
      headers: {
        "WWW-Authenticate":
          'Basic realm="NexKripa Admin"',
      },
    }
  );
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/demo-requests/:path*",
  ],
};