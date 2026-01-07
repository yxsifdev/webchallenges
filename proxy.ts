import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const url = new URL(request.url);
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-current-path", url.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
