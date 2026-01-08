import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  if (!isLoggedIn && nextUrl.pathname !== "/auth") {
    return NextResponse.redirect(new URL("/auth", nextUrl));
  } else if (isLoggedIn && nextUrl.pathname === "/auth") {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-current-path", nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
