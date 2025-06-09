import { NextResponse } from "next/server";

const protectedRoutes = ["/dashboard/student", "/dashboard/admin"];
export function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  if (protectedRoutes.includes(pathname)) {
    if (!token) {
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/student", "/dashboard/admin"],
};
