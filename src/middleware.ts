import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define protected routes
const protectedRoutes = ["/dashboard", "/dashboard/*"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get(
    process.env.LOGIN_TOKEN || "authToken"
  )?.value;
  const { pathname } = request.nextUrl;

  if (token) {
    // Redirect to /dashboard/users when accessing /dashboard with a token
    if (pathname === "/dashboard") {
      return NextResponse.redirect(new URL("/dashboard/users", request.url));
    }

    // Redirect to /dashboard if accessing root or /login with token
    if (pathname === "/" || pathname === "/login") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  } else {
    // If no token, protect routes under /dashboard and redirect to /login
    if (protectedRoutes.some((route) => matchRoute(route, pathname))) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Redirect root `/` to `/login` if no token
    if (pathname === "/") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

// Helper to match wildcard paths
function matchRoute(route: string, pathname: string): boolean {
  const pattern = new RegExp(
    "^" + route.replace(/:\w+\*/g, "(.*)").replace(/\/\*/g, "(.*)") + "$"
  );
  return pattern.test(pathname);
}
