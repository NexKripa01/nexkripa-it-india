import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  /* =====================================
     PUBLIC CHATBOT ANALYTICS POST
  ===================================== */

  if (
    pathname === "/api/chatbot-analytics" &&
    request.method === "POST"
  ) {
    return NextResponse.next();
  }

  /* =====================================
     PUBLIC CONSULTATION POST
  ===================================== */

  if (
    pathname === "/api/consultations" &&
    request.method === "POST"
  ) {
    return NextResponse.next();
  }

  /* =====================================
     BASIC ADMIN AUTH
  ===================================== */

  const authHeader =
    request.headers.get(
      "authorization"
    );

  if (authHeader) {
    const [scheme, authValue] =
      authHeader.split(" ");

    if (
      scheme === "Basic" &&
      authValue
    ) {
      try {
        const decoded =
          Buffer.from(
            authValue,
            "base64"
          ).toString("utf-8");

        const separatorIndex =
          decoded.indexOf(":");

        const username =
          separatorIndex >= 0
            ? decoded.slice(
                0,
                separatorIndex
              )
            : "";

        const password =
          separatorIndex >= 0
            ? decoded.slice(
                separatorIndex + 1
              )
            : "";

        if (
          username ===
            process.env
              .ADMIN_USERNAME &&
          password ===
            process.env
              .ADMIN_PASSWORD
        ) {
          return NextResponse.next();
        }
      } catch (error) {
        console.error(
          "Admin auth decode error:",
          error
        );
      }
    }
  }

  /* =====================================
     UNAUTHORIZED
  ===================================== */

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
    "/api/chatbot-analytics",
    "/api/consultations",
  ],
};