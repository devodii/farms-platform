import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const searchParams = req.nextUrl.searchParams.toString();
  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

  const host = req.headers.get("host")!;

  const withParams = (url: string) => {
    return `${url}${path === "/" ? "" : path}${
      searchParams ? "?" + searchParams : ""
    }`;
  };

  if (host !== process.env.ROOT_DOMAIN) {
    return NextResponse.rewrite(new URL(withParams(`/${host}`), req.url));
  }

  // rewrite everything else to the main application
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};
