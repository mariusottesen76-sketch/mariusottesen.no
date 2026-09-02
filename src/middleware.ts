import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Pass pathname to root layout for server-side html lang without client hydration. */
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images|pdf|api).*)"],
};
